# Lantern Marketing Agent Skills

Open, reusable marketing workflows for AI agents, maintained by [Lantern](https://www.asklantern.com).

Each skill is a self-contained `SKILL.md` package that gives an agent procedural knowledge for a repeatable marketing task. The collection focuses on AI search, SEO, research, content production, and editorial trust.

## Available skills

| Skill | Category | Use it for |
| --- | --- | --- |
| [Competitor audit](./skills/competitor-audit/SKILL.md) | Research | AI-search competitor positioning and citation gaps |
| [Content](./skills/content/SKILL.md) | Content | Research-backed, publish-ready article production |
| [Content brief](./skills/content-brief/SKILL.md) | Content | Audience, intent, evidence, structure, and source planning |
| [FAQ generator](./skills/faq-generator/SKILL.md) | Content | Customer and answer-engine FAQ creation |
| [Industry content production](./skills/industry-content-production/SKILL.md) | Content | End-to-end industry research and content programs |
| [Keyword research](./skills/keyword-research/SKILL.md) | Research | Traditional keyword and AI prompt demand mapping |
| [Pillar article](./skills/pillar-article/SKILL.md) | Content | Topical authority and citation-oriented pillar content |
| [SEO](./skills/seo/SKILL.md) | Optimization | Prioritized organic search and technical SEO actions |
| [Trust QA](./skills/trust-qa/SKILL.md) | Governance | Claim, statistic, source, and attribution verification |

Browse human-readable skill pages at [asklantern.com/skills](https://www.asklantern.com/skills).

## Install a skill

Copy the complete skill folder into a supported project location. Keep the folder name unchanged.

```text
.github/skills/<skill-name>/
.agents/skills/<skill-name>/
.claude/skills/<skill-name>/
```

Example:

```bash
cp -R skills/competitor-audit /path/to/project/.github/skills/
```

Agents discover skills from the YAML `name` and `description` in each `SKILL.md`. Review a skill before use and grant only the tools and data access required for its workflow.

## Agent-readable registry

[`registry.json`](./registry.json) provides stable package paths and metadata. Lantern also publishes a web registry at [asklantern.com/skills/index.json](https://www.asklantern.com/skills/index.json).

## Contributing

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before proposing a skill or changing a workflow. New skills must be evidence-driven, self-contained, and safe to execute with least-privilege tools.

## License

Available under the [MIT License](./LICENSE).
