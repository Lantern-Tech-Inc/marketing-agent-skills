# Contributing

Contributions should improve a repeatable marketing workflow, its evidence requirements, or its safety.

## Propose a change

1. Open an issue describing the user problem and expected output.
2. Fork the repository and create a focused branch.
3. Add or update one skill package.
4. Run `node scripts/validate-skills.mjs`.
5. Open a pull request explaining the workflow change and how it was validated.

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
description: "What the skill does and when an agent should use it."
---
```

The `name` must match the folder. Keep `SKILL.md` below 500 lines and move detailed material into one-level-deep references.

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
