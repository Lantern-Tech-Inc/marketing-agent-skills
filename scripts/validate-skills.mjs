import { existsSync, readFileSync, readdirSync } from "node:fs"
import { join, normalize, relative } from "node:path"
import process from "node:process"

const repositoryRoot = new URL("../", import.meta.url).pathname
const skillsDirectory = join(repositoryRoot, "skills")
const failures = []
const fail = (message) => failures.push(message)

const NAME_PATTERN = /^[a-z0-9]+(-[a-z0-9]+)*$/
const SEMVER_PATTERN = /^\d+\.\d+\.\d+(-[0-9A-Za-z.-]+)?$/
const STATUSES = ["proposed", "beta", "stable", "deprecated"]
const REQUIRED_HEADINGS = [
    [/^##\s+When to use this skill/im, "When to use this skill"],
    [/^##\s+Required inputs/im, "Required inputs"],
    [/^##\s+Stop conditions/im, "Stop conditions"],
    [/^##\s+Anti-patterns/im, "Anti-patterns"],
    [/^##\s+.*checklist/im, "a checklist section"],
]

const unquote = (value) => value.replace(/^(["'])(.*)\1$/, "$2")

function parseFrontmatter(block) {
    const data = {}
    let currentMap = null
    for (const line of block.split("\n")) {
        if (!line.trim() || line.trim().startsWith("#")) continue
        const nested = line.match(/^ {2}([A-Za-z0-9_-]+):\s*(.*)$/)
        if (nested && currentMap) {
            currentMap[nested[1]] = unquote(nested[2].trim())
            continue
        }
        const top = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
        if (!top) return { error: `unparseable frontmatter line: ${line}` }
        if (top[2].trim() === "") {
            currentMap = {}
            data[top[1]] = currentMap
        } else {
            currentMap = null
            data[top[1]] = { raw: top[2].trim(), value: unquote(top[2].trim()) }
        }
    }
    return { data }
}

function stripCode(markdown) {
    return markdown.replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "")
}

const skillNames = readdirSync(skillsDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort()
const frontmatterBySkill = {}

for (const skillName of skillNames) {
    const skillDirectory = join(skillsDirectory, skillName)
    const skillPath = join(skillDirectory, "SKILL.md")

    if (!existsSync(skillPath)) {
        fail(`${skillName}: missing SKILL.md`)
        continue
    }

    const content = readFileSync(skillPath, "utf8")
    const match = content.match(/^---\n([\s\S]*?)\n---/)

    if (!match) {
        fail(`${skillName}: missing YAML frontmatter`)
        continue
    }

    const { data, error } = parseFrontmatter(match[1])
    if (error) {
        fail(`${skillName}: ${error}`)
        continue
    }
    frontmatterBySkill[skillName] = data

    const name = data.name?.value
    if (name !== skillName) fail(`${skillName}: frontmatter name must match folder`)
    if (name && (!NAME_PATTERN.test(name) || name.length > 64)) {
        fail(`${skillName}: name must be lowercase kebab-case, 64 characters or fewer`)
    }

    const description = data.description
    if (!description || !/^["'].+["']$/.test(description.raw)) {
        fail(`${skillName}: missing quoted description`)
    } else {
        if (description.value.length > 1024) fail(`${skillName}: description exceeds 1024 characters`)
        if (!/\bUse\b/.test(description.value)) fail(`${skillName}: description must say when to use the skill ("Use for/when ...")`)
    }

    if (!data.license?.value) fail(`${skillName}: missing license`)

    const metadata = data.metadata
    if (!metadata || typeof metadata.raw === "string") {
        fail(`${skillName}: missing metadata map`)
    } else {
        if (!SEMVER_PATTERN.test(metadata.version ?? "")) fail(`${skillName}: metadata.version must be semver`)
        if (!STATUSES.includes(metadata.status)) fail(`${skillName}: metadata.status must be one of ${STATUSES.join(", ")}`)
    }

    if (content.split("\n").length > 500) fail(`${skillName}: SKILL.md exceeds 500 lines`)

    for (const [pattern, label] of REQUIRED_HEADINGS) {
        if (!pattern.test(content)) fail(`${skillName}: missing "${label}" heading`)
    }

    for (const [, target] of stripCode(content).matchAll(/\]\(([^)\s]+)\)/g)) {
        if (/^(https?:|mailto:|#)/.test(target)) continue
        const filePath = target.split("#")[0]
        const resolved = normalize(join(skillDirectory, filePath))
        const relativePath = relative(skillDirectory, resolved)
        if (relativePath.startsWith("..")) {
            fail(`${skillName}: link escapes skill folder: ${target}`)
        } else if (!existsSync(resolved)) {
            fail(`${skillName}: broken link: ${target}`)
        } else if (relativePath.split("/").length > 2) {
            fail(`${skillName}: references must be one level deep: ${target}`)
        }
    }

    const evalPath = join(repositoryRoot, "evals", `${skillName}.json`)
    if (!existsSync(evalPath)) {
        fail(`${skillName}: missing evals/${skillName}.json`)
    } else {
        try {
            const cases = JSON.parse(readFileSync(evalPath, "utf8"))
            if (!Array.isArray(cases) || cases.length < 3) fail(`${skillName}: evals must contain at least 3 cases`)
            else cases.forEach((evalCase, index) => {
                const valid = Array.isArray(evalCase.skills) && evalCase.skills.includes(skillName)
                    && typeof evalCase.query === "string" && evalCase.query.length > 0
                    && Array.isArray(evalCase.files)
                    && Array.isArray(evalCase.expected_behavior) && evalCase.expected_behavior.length > 0
                if (!valid) fail(`${skillName}: eval case ${index} must have skills[], query, files[], expected_behavior[]`)
            })
        } catch (parseError) {
            fail(`${skillName}: evals JSON invalid: ${parseError.message}`)
        }
    }
}

const registry = JSON.parse(readFileSync(join(repositoryRoot, "registry.json"), "utf8"))
const registeredSkillNames = registry.skills.map((skill) => skill.name).sort()

if (JSON.stringify(registeredSkillNames) !== JSON.stringify(skillNames)) {
    fail("registry.json skill names do not match skill folders")
}

for (const registrySkill of registry.skills) {
    if (!existsSync(join(repositoryRoot, registrySkill.path))) {
        fail(`${registrySkill.name}: registry path does not exist`)
    }
    const metadata = frontmatterBySkill[registrySkill.name]?.metadata
    if (metadata && registrySkill.version !== metadata.version) {
        fail(`${registrySkill.name}: registry version does not match SKILL.md metadata.version`)
    }
    if (metadata && registrySkill.status !== metadata.status) {
        fail(`${registrySkill.name}: registry status does not match SKILL.md metadata.status`)
    }
}

const manifestPath = join(repositoryRoot, "shared/manifest.json")
if (existsSync(manifestPath)) {
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8"))
    for (const [skillName, sharedFiles] of Object.entries(manifest.skills)) {
        for (const sharedFile of sharedFiles) {
            const sourcePath = join(repositoryRoot, "shared", sharedFile)
            const targetPath = join(skillsDirectory, skillName, sharedFile)
            if (!existsSync(sourcePath)) fail(`shared/${sharedFile}: missing canonical file`)
            else if (!existsSync(targetPath) || !readFileSync(targetPath).equals(readFileSync(sourcePath))) {
                fail(`skills/${skillName}/${sharedFile}: out of sync with shared/ (run node scripts/sync-shared.mjs)`)
            }
        }
    }
}

if (failures.length > 0) {
    process.stderr.write(`${failures.join("\n")}\n`)
    process.exit(1)
}

process.stdout.write(`Validated ${skillNames.length} skills.\n`)
