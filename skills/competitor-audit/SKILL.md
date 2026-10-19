---
name: competitor-audit
description: "Audits how AI answer engines (ChatGPT, Perplexity, Google AI Mode, Gemini, Copilot) describe, rank, and cite a named competitor, then ranks the visibility, positioning, and citation gaps the home brand can win on merit. Use for competitor audits, AI-search or GEO competitive research, citation vulnerability analysis, and 'how does AI talk about [competitor]' questions."
license: MIT
metadata:
  version: "1.0.0"
  status: beta
  author: Lantern
---

# Competitor Audit

Purpose: measure how AI engines perceive, categorize, and cite a named competitor, and turn that evidence into prioritized, winnable actions for the home brand. The method is the five-layer model in [references/ai-visibility-method.md](references/ai-visibility-method.md) pointed at a competitor, with the output oriented toward action rather than diagnosis.

This skill finds where a competitor's AI presence is thin, wrong, or resting on weak sources. It is not for copying their strategy or disparaging them.

## When to use this skill

Use when the user asks to:

- Audit a competitor's visibility or reputation in AI answers.
- Find citation sources propping up a competitor that a better page could displace.
- Compare how AI engines position the home brand versus a competitor.

Do not use when:

- The subject is the home brand only. Run the same method in [references/ai-visibility-method.md](references/ai-visibility-method.md) with the home brand as the entity, without competitive framing.
- The user wants classic organic rankings only. Use `seo`.
- The user wants keyword or prompt demand without competitor analysis. Use `keyword-research`.

## Required inputs

```yaml
competitor:
  name: ""
  website: ""
home_brand:
  name: ""
  website: ""
market:
  country: ""
  language: ""
  category: ""            # how the market names this category
priority_topics: []        # optional; derived in step 2 if empty
engines: []                # optional; default: 3 engines the audience uses
prior_findings: ""         # optional: earlier AI-visibility or keyword-research output
```

If `competitor`, `home_brand`, or `market.country` is missing, ask before starting.

## Workflow

Copy this checklist into the working notes and tick items off:

```text
- [ ] 1. Entity baseline captured from competitor's own site
- [ ] 2. Topics and prompt set built (incl. reputation + head-to-head)
- [ ] 3. Prompts run per sampling protocol and logged
- [ ] 4. Results read for placement, accuracy, sentiment, category
- [ ] 5. Citations scored with the strength rubric
- [ ] 6. Gaps prioritized by exploitability
- [ ] 7. Report assembled with evidence, confidence, next actions
```

1. **Entity baseline.**
   - Record the competitor's canonical claims from their own pages: category, audience, core offerings, pricing model, and differentiators.
   - Give the URL and access date for each claim.
   - Note genuine strengths honestly.
2. **Topics and prompts.**
   - Build the prompt set with [references/ai-visibility-method.md](references/ai-visibility-method.md) and the prompt types in [references/query-types.md](references/query-types.md).
   - Include reputation prompts ("is [competitor] reliable", "[competitor] complaints", "[competitor] alternatives").
   - Include head-to-head prompts naming the competitor against the home brand and against other rivals.
   - Include unbranded category prompts.
3. **Run and log.**
   - Follow the sampling protocol: at least 3 engines, at least 3 fresh-session runs per prompt per engine, and a fixed locale.
   - Log every run in the run log format, with verbatim excerpts.
   - If the minimums are impossible, record the actual sample and downgrade confidence.
4. **Read results.** For each prompt, record:
   - where the competitor is placed relative to other named entities
   - accuracy against the entity baseline (accurate, outdated, incomplete or wrong)
   - sentiment, and the source it comes from
   - any miscategorization, such as the wrong audience or category
   
   Apply the stability rules. Volatile findings are reported as volatile.
5. **Score citations.**
   - Score every cited source with the citation strength rubric.
   - Flag stale sources such as old pricing or discontinued offers.
   - Flag thin third-party sources such as directory listings or thin aggregators.
   - Flag topics where the competitor has no strong source at all.
6. **Prioritize.** Rank the gaps in this order:
   1. Competitor described inaccurately or unfavorably **and** the citation is weak (rubric 1–2). A stronger, accurate page can displace that source.
   2. Competitor present but resting on a single thin source.
   3. Whitespace: neither brand appears. This is a shared opportunity; label it separately.
   4. Competitor strong and well cited. Treat it as a quality benchmark, not a near-term target.
7. **Assemble the report** using the template below.
   - Every gap must carry evidence references and a confidence label from [references/evidence-standards.md](references/evidence-standards.md).
   - Every gap must name a next action and an owner skill: `content-brief`, `content`, `pillar-article`, `faq-generator`, or `seo`.

## Output template

```markdown
# Competitor audit: <competitor> vs <home brand> — <market>, <date range>

## Sample
Engines: … | Runs/prompt/engine: … | Locale: … | Dates: … | Limits: …

## Competitor snapshot
How engines describe them (stable findings only) vs their own canonical claims.

## Strengths / thin / absent
| Topic | Status | Evidence (run IDs) | Stability | Confidence |

## Citation vulnerabilities
| Cited URL | Topic | Rubric score | Weakness | Winnable by |

## Prioritized actions
| # | Gap | Priority tier | Evidence | Confidence | Next action | Owner skill |

## Volatile / unverified observations
## Run log (appendix)
```

## Approval gates

- Get approval before publishing any comparison content or claims about the competitor.
- Get approval before contacting third-party sites about their citations or listings.
- Get approval before running paid API queries beyond an agreed budget.
- Comparison content must be accurate, sourced to the competitor's own current materials, and fair. Do not make defamatory or unverifiable negative claims.

## Stop conditions

Stop and report instead of continuing when:

- The competitor cannot be identified unambiguously, for example because several companies share the name.
- No AI engine access is available. Do not simulate or imagine engine answers.
- A negative finding about the competitor rests on a single run or an unidentifiable source and the user wants to publish it.

## Anti-patterns

- Reporting only weaknesses and hiding genuine competitor strengths.
- Treating one run as a stable finding, or paraphrasing an engine answer without keeping the excerpt.
- Recommending an attack where the competitor's source is strong and current just because the topic looks attractive.
- Misrepresenting the competitor's offering in comparison content.
- Building near-duplicate pages for every prompt variant. This counts as scaled content abuse.
- Seeking inauthentic mentions or reviews to influence AI answers.
- Ending findings without a specific next action.

## Completion checklist

- [ ] Entity baseline sourced from the competitor's own site, with access dates
- [ ] Prompt set covers all prompt types, plus reputation and head-to-head prompts
- [ ] Sample meets the protocol, or its limits are stated and confidence downgraded
- [ ] Every finding has a stability label, a confidence label and run references
- [ ] Citations scored with the rubric, not just listed
- [ ] Strengths reported honestly. Whitespace separated from direct attacks
- [ ] Each action names an owner skill. Approval gates respected
