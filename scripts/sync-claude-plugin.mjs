import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import process from "node:process"

const root = fileURLToPath(new URL("../", import.meta.url))
const pluginRoot = join(root, "plugins/lantern-marketing")
const checkOnly = process.argv.includes("--check")
const registry = JSON.parse(readFileSync(join(root, "registry.json"), "utf8"))
const expected = new Map()
const problems = []

const manualChecks = `## Manual draft checks

This distribution includes no executable checker. Inspect the draft directly and record each check as pass, fail, or warn, with evidence. Do not claim automated validation ran.

- Warn if title frontmatter is missing or longer than 60 characters; length is a display heuristic, not a ranking rule.
- Warn if meta_description is missing. Fail if it exceeds 155 characters or duplicates the title (case-insensitive).
- Ignore fenced code when checking headings and paragraphs. Require exactly one H1; warn if there are no H2 headings.
- Fail prose paragraphs longer than four sentences. Do not count headings, lists, tables, quotes, or code as prose paragraphs.
- Require an H2 or H3 FAQ heading unless the workflow intentionally omits FAQs; record an intentional omission as a warning.
- Inspect any JSON-LD blocks for valid JSON. If uncertain, flag for technical review rather than claiming validation. FAQPage and HowTo no longer produce Google rich results; retain only for a justified non-Google use.
- Flag unresolved [NEEDS SOURCE], [VERIFY], and [TODO] markers and route them to trust-qa.
- Fix every failure and review every warning. These structural checks do not establish factual accuracy; also complete the skill's evidence and approval checks.
`

function distributionText(source) {
    return source
        .replace(/- \[scripts\/check-draft\.mjs\]\(scripts\/check-draft\.mjs\)[^\n]*/g, "- [references/manual-draft-checks.md](references/manual-draft-checks.md) provides manual structural checks for this script-free distribution.")
        .replace(/Save the draft with `title` and `meta_description` frontmatter and run:\n\n     ```bash\n     node scripts\/check-draft\.mjs draft\.md\n     ```/g, "Save the draft with `title` and `meta_description` frontmatter and complete [the manual draft checks](references/manual-draft-checks.md).")
        .replace(/Run `node scripts\/check-draft\.mjs draft\.md`/g, "Complete [the manual draft checks](references/manual-draft-checks.md)")
        .replace(/`check-draft\.mjs` passes(?: with no `fail`)?/g, "[manual draft checks](references/manual-draft-checks.md) pass with no failures")
        .replace(/(?:scripts\/)?check-draft\.mjs passes(?: with no `fail`)?/g, "[manual draft checks](references/manual-draft-checks.md) pass with no failures")
        .replace(/<check-draft\.mjs JSON summary>/g, "<manual check results: pass/fail/warn, with evidence; no automated validation claimed>")
        .replace(/Then confirm the manual items the script cannot judge:/g, "Then confirm the remaining editorial items:")
}

function collect(directory, prefix = "") {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
        const relative = join(prefix, entry.name)
        if (entry.isSymbolicLink()) throw new Error(`Symlink not allowed: ${relative}`)
        if (entry.isDirectory()) {
            collect(join(directory, entry.name), relative)
        } else if (entry.name.endsWith(".md")) {
            const source = readFileSync(join(directory, entry.name), "utf8")
            const content = distributionText(source)
            if (/check-draft\.mjs|^#!/m.test(content)) throw new Error(`Unconverted script instruction: ${relative}`)
            expected.set(join("skills", relative), Buffer.from(content))
            if (source.includes("check-draft.mjs") && entry.name === "SKILL.md") {
                expected.set(join("skills", prefix, "references/manual-draft-checks.md"), Buffer.from(manualChecks))
            }
        } else if (!entry.name.endsWith(".mjs")) {
            throw new Error(`Review new skill asset before packaging: ${relative}`)
        }
    }
}

collect(join(root, "skills"))
expected.set("LICENSE", readFileSync(join(root, "LICENSE")))
expected.set(".claude-plugin/plugin.json", Buffer.from(`${JSON.stringify({
    name: "lantern-marketing",
    version: registry.version,
    description: "Research-backed marketing workflows for content, SEO, AI visibility, planning, and distribution. Script-free Claude plugin with 19 skills.",
    author: { name: "Lantern Tech Inc" },
    homepage: "https://www.asklantern.com/skills",
    repository: "https://github.com/Lantern-Tech-Inc/marketing-agent-skills",
    license: "MIT",
    keywords: ["marketing", "seo", "content", "ai-visibility"],
}, null, 2)}\n`))
expected.set("README.md", Buffer.from(`# Lantern Marketing\n\nScript-free Claude plugin, version ${registry.version}, containing all ${registry.skills.length} marketing skills. Skills are discovered from the standard skills/ directory.\n\nSubmit this repository folder to the Claude directory: plugins/lantern-marketing. Connect GitHub in the submitting Claude organization before validation.\n\nThe canonical skills live in the repository's root skills/ directory. This snapshot includes their Markdown references, but no scripts, hooks, MCP servers, or package-manager configuration. Four writing skills use explicit manual structural checks instead of the executable draft checker. Manual checks are not automated validation.\n\nThe plugin icon uses Lantern's logo from https://cdn.asklantern.com/logo.png, proportionally resized and square-padded to 1024 pixels for directory requirements. Directory icons may be locked on first submission.\n`))

for (const [relative, content] of expected) {
    const target = join(pluginRoot, relative)
    const matches = existsSync(target) && readFileSync(target).equals(content)
    if (matches) continue
    if (checkOnly) problems.push(`Plugin snapshot out of sync: ${relative}`)
    else {
        mkdirSync(dirname(target), { recursive: true })
        writeFileSync(target, content)
    }
}

function inspect(directory, prefix = "") {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
        const relative = join(prefix, entry.name)
        if (entry.isDirectory()) inspect(join(directory, entry.name), relative)
        else if (entry.isSymbolicLink() || (!expected.has(relative) && relative !== ".claude-plugin/icon.png")) {
            problems.push(`Unexpected plugin file (remove or review): ${relative}`)
        }
    }
}
inspect(pluginRoot)
const iconPath = join(pluginRoot, ".claude-plugin/icon.png")
if (!existsSync(iconPath)) problems.push("Missing plugin PNG icon")
else {
    const icon = readFileSync(iconPath)
    const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
    if (icon.length < 24 || !icon.subarray(0, 8).equals(pngSignature)) problems.push("Icon must be a PNG")
    else {
        const width = icon.readUInt32BE(16)
        const height = icon.readUInt32BE(20)
        if (width !== height || width < 512 || width > 2048 || icon.length >= 2 * 1024 * 1024) problems.push("Icon must be square, 512–2048px, under 2 MB")
    }
}
for (const [relative, content] of expected) {
    const text = content.toString("utf8")
    if (!Buffer.from(text).equals(content) || text.includes("\0") || text.startsWith("#!")) problems.push(`Invalid UTF-8 text: ${relative}`)
    if (!relative.endsWith(".md")) continue
    for (const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
        const link = match[1].split("#")[0]
        if (!link || /^[a-z]+:/i.test(link)) continue
        const target = join(dirname(relative), link)
        if (!expected.has(target)) problems.push(`Broken plugin link: ${relative} -> ${link}`)
    }
}
if (problems.length) {
    process.stderr.write(`${problems.join("\n")}\n`)
    process.exit(1)
}
process.stdout.write(`${checkOnly ? "Validated" : "Synced"} script-free Claude plugin (${registry.skills.length} skills).\n`)
