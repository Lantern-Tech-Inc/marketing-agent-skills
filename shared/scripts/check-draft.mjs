#!/usr/bin/env node
// Deterministic structural checks for a Markdown draft.
// Usage: node check-draft.mjs <draft.md> [--no-faq]
// Optional frontmatter keys: title, meta_description.
// Exit code 1 when any check fails; warnings do not fail.

import { readFileSync } from "node:fs"
import process from "node:process"

const args = process.argv.slice(2)
const draftPath = args.find((argument) => !argument.startsWith("--"))
const requireFaq = !args.includes("--no-faq")

if (!draftPath) {
    process.stderr.write("Usage: node check-draft.mjs <draft.md> [--no-faq]\n")
    process.exit(2)
}

const source = readFileSync(draftPath, "utf8").replace(/\r\n/g, "\n")
const results = []
const record = (status, check, detail) => results.push({ status, check, detail })

let body = source
const frontmatter = {}
const frontmatterMatch = source.match(/^---\n([\s\S]*?)\n---\n?/)

if (frontmatterMatch) {
    body = source.slice(frontmatterMatch[0].length)
    for (const line of frontmatterMatch[1].split("\n")) {
        const pair = line.match(/^([A-Za-z_]+):\s*(.*)$/)
        if (pair) frontmatter[pair[1]] = pair[2].replace(/^["']|["']$/g, "").trim()
    }
}

const withoutCode = body.replace(/```[\s\S]*?```/g, "")
const lines = withoutCode.split("\n")

const title = frontmatter.title
if (!title) {
    record("warn", "title", "No `title` in frontmatter; title length not checked")
} else if (title.length > 60) {
    record("warn", "title", `Title is ${title.length} chars; aim for about 50–60 to reduce truncation`)
} else {
    record("pass", "title", `Title is ${title.length} chars`)
}

const meta = frontmatter.meta_description
if (!meta) {
    record("warn", "meta_description", "No `meta_description` in frontmatter")
} else if (meta.length > 155) {
    record("fail", "meta_description", `Meta description is ${meta.length} chars; keep it at or under 155`)
} else if (title && meta.toLowerCase() === title.toLowerCase()) {
    record("fail", "meta_description", "Meta description duplicates the title")
} else {
    record("pass", "meta_description", `Meta description is ${meta.length} chars`)
}

const h1s = lines.filter((line) => /^#\s+\S/.test(line))
if (h1s.length === 1) {
    record("pass", "single_h1", h1s[0].replace(/^#\s+/, ""))
} else {
    record("fail", "single_h1", `Found ${h1s.length} H1 headings; expected exactly 1`)
}

const h2s = lines.filter((line) => /^##\s+\S/.test(line))
if (h2s.length === 0) record("warn", "h2_sections", "No H2 sections found")
else record("pass", "h2_sections", `${h2s.length} H2 sections`)

const paragraphs = withoutCode
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .filter((block) => block && !/^(#|[-*+]\s|\d+\.\s|\||>|<|!\[)/.test(block))

const sentenceCount = (text) =>
    (text.replace(/\b(e\.g|i\.e|etc|vs|Mr|Mrs|Dr|St|No)\./gi, "$1").match(/[^.!?]+[.!?]+(\s|$)/g) || []).length

const longParagraphs = paragraphs.filter((paragraph) => sentenceCount(paragraph) > 4)
if (longParagraphs.length === 0) {
    record("pass", "paragraph_length", `${paragraphs.length} paragraphs, none over 4 sentences`)
} else {
    const preview = longParagraphs.map((paragraph) => `"${paragraph.slice(0, 60)}…"`).join("; ")
    record("fail", "paragraph_length", `${longParagraphs.length} paragraph(s) over 4 sentences: ${preview}`)
}

const hasFaq = lines.some((line) => /^#{2,3}\s+.*(faq|frequently asked)/i.test(line))
if (hasFaq) record("pass", "faq_section", "FAQ section present")
else record(requireFaq ? "fail" : "warn", "faq_section", "No FAQ heading found (use --no-faq if intentionally omitted)")

const jsonBlocks = [...body.matchAll(/```(?:json|jsonld|json-ld)\n([\s\S]*?)```/gi)].map((match) => match[1])
const scriptBlocks = [...body.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)].map((match) => match[1])
const jsonLd = [...jsonBlocks, ...scriptBlocks].filter((block) => block.includes("@context") || block.includes("@type"))
for (const [index, block] of jsonLd.entries()) {
    try {
        const parsed = JSON.parse(block)
        const types = [parsed].flat().flatMap((node) => node["@graph"] ?? node).map((node) => node["@type"]).flat()
        if (types.some((type) => type === "FAQPage" || type === "HowTo")) {
            record("warn", `json_ld_${index + 1}`, "FAQPage/HowTo markup no longer produces Google rich results; keep only if needed elsewhere")
        } else {
            record("pass", `json_ld_${index + 1}`, `Parsed (${types.filter(Boolean).join(", ") || "no @type"})`)
        }
    } catch (error) {
        record("fail", `json_ld_${index + 1}`, `Invalid JSON-LD: ${error.message}`)
    }
}

const flags = (body.match(/\[(NEEDS SOURCE|VERIFY|TODO)[^\]]*\]/gi) || []).length
if (flags > 0) record("warn", "open_flags", `${flags} unresolved [NEEDS SOURCE]/[VERIFY]/[TODO] marker(s); route to trust-qa`)

const failed = results.some((result) => result.status === "fail")
process.stdout.write(`${JSON.stringify({ file: draftPath, passed: !failed, results }, null, 2)}\n`)
process.exit(failed ? 1 : 0)
