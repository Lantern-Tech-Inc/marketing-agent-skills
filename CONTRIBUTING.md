# Contributing

Contributions should improve a repeatable marketing workflow, its evidence requirements, or its safety.

## Propose a change

1. Open an issue describing the user problem and expected output.
2. Fork the repository and create a focused branch.
3. Add or update one skill package and its `evals/<skill-name>.json`.
4. If you changed anything in `shared/`, run `node scripts/sync-shared.mjs`.
5. Run `node scripts/validate-skills.mjs`.
6. Open a pull request explaining the workflow change and how it was validated.

## Skill requirements

Each package must use this structure:

```text
skills/<skill-name>/
├── SKILL.md
├── references/
├── scripts/
└── assets/
```

Only `SKILL.md` is required. Its YAML frontmatter must include:

```yaml
---
name: skill-name
description: "Does X for Y. Use for A, B, and C."
license: MIT
metadata:
  version: "1.0.0"
  status: beta
  author: Lantern
---
```

- `name` must match the folder, be lowercase kebab-case, and be 64 characters or fewer.
- `description` must be quoted, written in the third person, 1024 characters or fewer, and say when to use the skill ("Use for…").
- `metadata.status` is one of `proposed`, `beta`, `stable`, `deprecated`. `version` and `status` must match the skill's entry in `registry.json`.
- `SKILL.md` must include `When to use this skill`, `Required inputs`, `Stop conditions`, `Anti-patterns`, and a checklist section.
- Keep `SKILL.md` below 500 lines and move detailed material into one-level-deep references. All relative links must resolve.

## Shared files

Material used by several skills lives once in [`shared/`](./shared) and is mapped to skills in [`shared/manifest.json`](./shared/manifest.json). `node scripts/sync-shared.mjs` copies it into each skill so every folder stays self-contained. Edit only the canonical file in `shared/`; never edit the copies under `skills/`. The validator fails if a copy drifts.

## Evals

Every skill needs `evals/<skill-name>.json` with at least 3 cases:

```json
[{ "skills": ["skill-name"], "query": "...", "files": [], "expected_behavior": ["..."] }]
```

Include at least one case where the skill should stop, refuse, or route to another skill. Add a case whenever you fix a failure observed in a real run.

## Quality bar

A skill must:

- Define when it should and should not run.
- State required inputs and expected outputs.
- Provide an ordered, executable procedure.
- Distinguish evidence from assumptions.
- Avoid fabricated metrics, sources, and guarantees.
- Require approval before external, destructive, paid, or hard-to-reverse actions.
- Use least-privilege tools and avoid requesting secrets in prompts.

By contributing, you agree that your contribution is licensed under the repository license.
