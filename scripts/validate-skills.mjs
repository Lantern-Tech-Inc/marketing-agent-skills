import { existsSync, readFileSync, readdirSync } from "node:fs"
import { join } from "node:path"
import process from "node:process"

const repositoryRoot = new URL("../", import.meta.url)
const skillsDirectory = new URL("skills/", repositoryRoot)
const registryPath = new URL("registry.json", repositoryRoot)
const failures = []
const skillNames = readdirSync(skillsDirectory, { withFileTypes: true })
    .filter((directoryEntry) => directoryEntry.isDirectory())
    .map((directoryEntry) => directoryEntry.name)
    .sort()

for (const skillName of skillNames) {
    const skillPath = join(skillsDirectory.pathname, skillName, "SKILL.md")

    if (!existsSync(skillPath)) {
        failures.push(`${skillName}: missing SKILL.md`)
        continue
    }

    const skillContent = readFileSync(skillPath, "utf8")
    const frontmatterMatch = skillContent.match(/^---\n([\s\S]*?)\n---/)
    const lineCount = skillContent.split("\n").length

    if (!frontmatterMatch) {
        failures.push(`${skillName}: missing YAML frontmatter`)
        continue
    }

    const skillFrontmatter = frontmatterMatch[1]
    const nameMatch = skillFrontmatter.match(/^name:\s*([a-z0-9-]+)$/m)
    const descriptionMatch = skillFrontmatter.match(/^description:\s*["'](.+)["']$/m)

    if (nameMatch?.[1] !== skillName) {
        failures.push(`${skillName}: frontmatter name must match folder`)
    }

    if (!descriptionMatch?.[1]) {
        failures.push(`${skillName}: missing quoted description`)
    }

    if (lineCount > 500) {
        failures.push(`${skillName}: SKILL.md exceeds 500 lines`)
    }
}

const registry = JSON.parse(readFileSync(registryPath, "utf8"))
const registeredSkillNames = registry.skills.map((skill) => skill.name).sort()

if (JSON.stringify(registeredSkillNames) !== JSON.stringify(skillNames)) {
    failures.push("registry.json skill names do not match skill folders")
}

for (const registrySkill of registry.skills) {
    if (!existsSync(join(repositoryRoot.pathname, registrySkill.path))) {
        failures.push(`${registrySkill.name}: registry path does not exist`)
    }
}

if (failures.length > 0) {
    process.stderr.write(`${failures.join("\n")}\n`)
    process.exit(1)
}

process.stdout.write(`Validated ${skillNames.length} skills.\n`)
