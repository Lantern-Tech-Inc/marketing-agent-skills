import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs"
import { dirname, join } from "node:path"
import process from "node:process"

const repositoryRoot = new URL("../", import.meta.url).pathname
const manifest = JSON.parse(readFileSync(join(repositoryRoot, "shared/manifest.json"), "utf8"))
const checkOnly = process.argv.includes("--check")
const problems = []
let copied = 0

for (const [skillName, sharedFiles] of Object.entries(manifest.skills)) {
    const skillDirectory = join(repositoryRoot, "skills", skillName)

    if (!existsSync(skillDirectory)) {
        problems.push(`${skillName}: skill folder does not exist`)
        continue
    }

    for (const sharedFile of sharedFiles) {
        const sourcePath = join(repositoryRoot, "shared", sharedFile)
        const targetPath = join(skillDirectory, sharedFile)

        if (!existsSync(sourcePath)) {
            problems.push(`shared/${sharedFile}: missing canonical file`)
            continue
        }

        const inSync = existsSync(targetPath) && readFileSync(targetPath).equals(readFileSync(sourcePath))

        if (inSync) continue

        if (checkOnly) {
            problems.push(`skills/${skillName}/${sharedFile}: out of sync with shared/${sharedFile}`)
            continue
        }

        mkdirSync(dirname(targetPath), { recursive: true })
        copyFileSync(sourcePath, targetPath)
        copied += 1
    }
}

if (problems.length > 0) {
    process.stderr.write(`${problems.join("\n")}\nRun: node scripts/sync-shared.mjs\n`)
    process.exit(1)
}

process.stdout.write(checkOnly ? "Shared files are in sync.\n" : `Synced shared files (${copied} updated).\n`)
