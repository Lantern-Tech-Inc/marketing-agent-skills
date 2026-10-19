# Lantern Marketing Agent Skills

Open, reusable marketing workflows for AI agents, maintained by [Lantern](https://www.asklantern.com).

Each skill is a self-contained `SKILL.md` package that gives an agent procedural knowledge for a repeatable marketing task. The collection focuses on AI search, SEO, research, content production, and editorial trust.

## Available skills

| Skill | Category | Use it for |
| --- | --- | --- |
| [AI visibility report](./skills/ai-visibility-report/SKILL.md) | Research | Mentions, citations, share of voice and answer accuracy in AI search |
| [Brand voice](./skills/brand-voice/SKILL.md) | Governance | Evidence-based voice and style guides for writers and AI agents |
| [Comparison page](./skills/comparison-page/SKILL.md) | Content | Fair, substantiated vs, alternatives and best-for pages |
| [Competitor audit](./skills/competitor-audit/SKILL.md) | Research | AI-search competitor positioning and citation gaps |
| [Content](./skills/content/SKILL.md) | Content | Research-backed, publish-ready article production |
| [Content brief](./skills/content-brief/SKILL.md) | Content | Audience, intent, evidence, structure, and source planning |
| [Content calendar](./skills/content-calendar/SKILL.md) | Planning | Capacity-based plans balancing new content, refreshes and distribution |
| [Content refresh](./skills/content-refresh/SKILL.md) | Optimization | Diagnosing decay and updating, consolidating or pruning pages |
| [Content repurposing](./skills/content-repurposing/SKILL.md) | Distribution | Platform-native derivatives from one approved asset |
| [Digital PR](./skills/digital-pr/SKILL.md) | Distribution | Data-led coverage and citations within link spam policies |
| [FAQ generator](./skills/faq-generator/SKILL.md) | Content | Customer and answer-engine FAQ creation |
| [Industry content production](./skills/industry-content-production/SKILL.md) | Content | End-to-end industry research and content programs |
| [Internal linking](./skills/internal-linking/SKILL.md) | Optimization | Orphan fixes and in-context internal link plans |
| [Keyword research](./skills/keyword-research/SKILL.md) | Research | Traditional keyword and AI prompt demand mapping |
| [Landing page copy](./skills/landing-page-copy/SKILL.md) | Content | Conversion copy with substantiated claims and test plans |
| [Pillar article](./skills/pillar-article/SKILL.md) | Content | Topical authority and citation-oriented pillar content |
| [SEO](./skills/seo/SKILL.md) | Optimization | Prioritized organic search and technical SEO actions |
| [Structured data](./skills/structured-data/SKILL.md) | Optimization | Valid JSON-LD for supported Google rich results |
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

Each skill folder is fully self-contained: shared references (query types, writing rules, evidence standards, AI-visibility method) and the `scripts/check-draft.mjs` draft checker are copied into every skill that uses them, so a single copied folder works on its own.

Agents discover skills from the YAML `name` and `description` in each `SKILL.md`. Review a skill before use and grant only the tools and data access required for its workflow.

## Agent-readable registry

[`registry.json`](./registry.json) provides stable package paths and metadata. Lantern also publishes a web registry at [asklantern.com/skills/index.json](https://www.asklantern.com/skills/index.json).

## Lifecycle status

Each skill declares `metadata.version` (semver) and `metadata.status` in its frontmatter, mirrored in `registry.json`:

| Status | Meaning |
| --- | --- |
| `proposed` | Draft; not yet evaluated |
| `beta` | Usable; evals exist, still being refined against real runs |
| `stable` | Evals pass consistently across supported agents |
| `deprecated` | Superseded; kept for compatibility |

## Evaluations

[`evals/`](./evals) holds behavioural test cases for every skill in the format `{ skills, query, files, expected_behavior }`, including cases where the skill should stop or route elsewhere. Run each query with the skill installed and check the response against `expected_behavior`.

## Contributing

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before proposing a skill or changing a workflow. New skills must be evidence-driven, self-contained, and safe to execute with least-privilege tools.

## License

Available under the [MIT License](./LICENSE).
