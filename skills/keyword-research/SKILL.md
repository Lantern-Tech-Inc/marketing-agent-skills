---
name: keyword-research
description: "Maps classic search demand and AI prompt demand around a URL or topic into deduplicated, prioritized clusters with query type, funnel stage, named data sources, coverage status, and confidence. Use for keyword research, topic clustering, prompt research, content gap analysis, and SEO or GEO planning."
license: MIT
metadata:
  version: "1.0.0"
  status: stable
  author: Lantern
---

# Keyword Research

Purpose: map the demand around a URL (the home brand's or a competitor's) or a topic, across two layers kept side by side:

- **Classic search demand**: keywords, People Also Ask (PAA), autocomplete and Search Console queries.
- **AI prompt demand**: conversational phrasings people use in ChatGPT, Perplexity, Gemini, Google AI Mode and similar tools.

Classic volume alone is a commodity view. The prompt layer is what makes this output distinct, so always include it, and be honest about how much of it is measured and how much is inferred.

Shared rules:

- [references/query-types.md](references/query-types.md) covers query types, prompt types and funnel stages.
- [references/evidence-standards.md](references/evidence-standards.md) covers data sources, metric hygiene and confidence.
- [references/ai-visibility-method.md](references/ai-visibility-method.md) covers measuring prompts.

## When to use this skill

Use for keyword or prompt research, topic clustering, gap analysis against a URL, or demand mapping before a content plan.

Do not use when:

- The user wants to know how engines describe a competitor. Use `competitor-audit`.
- The user wants a technical or performance audit. Use `seo`.
- The user wants a page brief for a single known query. Use `content-brief`.

## Required inputs

```yaml
seed: ""                    # URL or topic
ownership: home | competitor | topic
brand:
  name: ""
  website: ""
market:
  country: ""
  language: ""
data_access:                # list what is actually available; do not assume
  search_console: false
  keyword_tool: ""          # e.g. name of tool, or "none"
  live_serp: false
  ai_engines: []            # engines you can query directly
```

If `market.country` is missing, ask. Volume and intent vary by locale.

## Workflow

```text
- [ ] 1. Seed scoped; ownership and data access recorded
- [ ] 2. Classic layer expanded with named, dated sources
- [ ] 3. Prompt layer built; measured vs inferred labeled
- [ ] 4. Every item classified by query type + funnel stage
- [ ] 5. Near-duplicates clustered; coverage status set
- [ ] 6. Clusters prioritized with transparent scoring
- [ ] 7. Output assembled with sources and confidence
```

1. **Scope.**
   - For a URL, list the topics and subtopics it covers. Include the queries it ranks for only if Search Console or a named tool shows them.
   - Record ownership:
     - **home**: find demand the URL does not capture yet.
     - **competitor**: understand what demand feeds their traffic, and hand the findings to `competitor-audit`.
   - Record which data sources are available.
2. **Classic layer.**
   - Collect related keywords, PAA questions and autocomplete suggestions.
   - Add volume and difficulty **only from a named tool, with the retrieval date and locale**.
   - If you have no tool, write `not reported`. **Never estimate or invent search volume.**
   - Google Ads "competition" measures advertiser competition, not organic difficulty. Do not label it as difficulty (see [references/evidence-standards.md](references/evidence-standards.md)).
   - Tool volumes are modeled estimates. Present them as ranges or relative bands, not precise truths.
3. **Prompt layer.**
   - Construct realistic prompt phrasings for each prompt type in [references/query-types.md](references/query-types.md): recommendation, comparison, validation/reputation, how-to, cost and definitional.
   - Prompt frequency is not publicly measurable. Label prompt demand as `inferred` unless it comes from one of:
     - observed autocomplete or PAA phrasing
     - the brand's own search, chat or support logs
     - measured runs following [references/ai-visibility-method.md](references/ai-visibility-method.md), which give whether engines answer and whom they cite, not volume
   - Keep the classic and prompt readings in separate columns. Never merge them into one number.
4. **Classify.** Give every keyword and prompt a query type and a funnel stage from [references/query-types.md](references/query-types.md).
5. **Cluster.**
   - Group near-duplicates and same-intent variants into one cluster. One cluster maps to one page.
   - Mark each cluster `covered`, `partial` or `gap` against the seed URL, with evidence such as the URL section or the ranking query.
   - Do not plan separate pages for minor phrasing variants. That risks scaled, low-value content.
6. **Prioritize.**
   - Score each cluster on demand (classic band plus prompt signal), fit with what the brand can credibly satisfy, coverage gap, and competition.
   - Show the score components, not just a rank, so the user can disagree with the weighting.
7. **Assemble** using the template. Hand the top gaps to `content-brief`.

## Output template

```markdown
# Keyword & prompt map: <seed> — <locale>, <date>

## Data sources
| Source | Locale | Retrieved | Notes (sampled? modeled?) |

## Clusters
| # | Cluster | Classic keywords | Prompt phrasings | Query type | Funnel | Classic demand (band, source) | Prompt signal (measured/inferred) | Coverage + evidence | Fit | Score | Confidence |

## Recommended next pages (→ content-brief)
## Notes for competitor-audit (if ownership = competitor)
## Gaps in data
```

## Approval gates

Get approval before spending money on paid tool or API queries beyond an agreed budget.

## Stop conditions

- You have no data access of any kind and the user wants numeric volumes. Explain that you cannot provide them. Do not fabricate.
- The seed URL cannot be fetched and no topic is given.

## Anti-patterns

- Inventing or "estimating" volume with no named tool.
- Presenting Ads competition as SEO difficulty.
- Treating the prompt layer as an afterthought, or presenting inferred prompt demand as measured.
- Chasing high-volume terms the brand cannot satisfy.
- Listing near-duplicates as separate items.
- Treating competitor gaps as if they were the competitor's to-do list instead of targets for the home brand.

## Completion checklist

- [ ] Ownership, locale and available data recorded
- [ ] Every number has a named source and date, or reads `not reported`
- [ ] Prompt layer present, with measured or inferred labeled
- [ ] Query type and funnel stage on every item
- [ ] Clusters deduplicated, with coverage evidence
- [ ] Score components shown, and confidence per cluster
