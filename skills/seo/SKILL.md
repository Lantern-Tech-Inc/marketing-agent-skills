---
name: seo
description: "Turns ranking, traffic, and technical data from named sources (Search Console, analytics, CrUX, crawlers) into a short, prioritized, evidence-backed SEO action plan, including AI-crawler access and AI-feature eligibility checks. Use for organic search audits, technical SEO diagnosis, traffic-drop analysis, striking-distance and cannibalization reviews, and SEO recommendations."
license: MIT
metadata:
  version: "1.0.0"
  status: stable
  author: Lantern
---

# SEO

Purpose: turn raw ranking, traffic and technical data into a ranked list of high-impact actions, not a data dump. This is the classic-search counterpart to `competitor-audit` (how AI engines represent brands). Read the two together. A page that cannot be crawled or indexed cannot rank or be cited. Google's AI features draw on the same index, so classic eligibility comes first.

Shared rules:

- [references/evidence-standards.md](references/evidence-standards.md) covers data sources, metric hygiene and current platform facts.
- [references/query-types.md](references/query-types.md) covers assigning formats to new-page recommendations.

## When to use this skill

Use for site or section SEO audits, traffic or ranking drop diagnosis, technical health reviews, striking-distance and cannibalization analysis, and SEO roadmaps.

Do not use when:

- The user only wants keyword or prompt demand. Use `keyword-research`.
- The question is how AI engines describe a competitor. Use `competitor-audit`.
- The user wants to implement code changes. This skill recommends; it does not deploy.

## Required inputs

```yaml
site: ""
scope: ""                    # whole site, section, or URL list
market:
  country: ""
  language: ""
data_access:                 # record what is actually available
  search_console: false
  analytics: ""              # e.g. GA4 or "none"
  crux_or_pagespeed: false
  crawler: ""                # crawl tool or "none"
  server_logs: false
  rank_tracker: ""
known_changes: []            # migrations, releases, redesigns with dates
```

If there is no Search Console or analytics access, say so up front. The audit is then limited to public signals, and confidence drops.

## Workflow

```text
- [ ] 1. Data sources, windows, and known changes recorded
- [ ] 2. Baseline: clusters, trends, technical health, structure
- [ ] 3. Changes explained against updates/site changes/seasonality
- [ ] 4. Opportunities: striking distance, gaps, cannibalization, blockers
- [ ] 5. AI-feature eligibility and crawler access checked
- [ ] 6. Scored on impact, effort, urgency, confidence
- [ ] 7. Ranked action list with owners; approvals requested
```

1. **Record data sources.**
   - Name every source, its date range and its locale. Follow the metric hygiene rules in [references/evidence-standards.md](references/evidence-standards.md):
     - compare windows of at least 28 days, plus year over year for seasonal sites
     - flag sampled or thresholded analytics data
     - treat Core Web Vitals field data (CrUX) as truth and lab data as diagnostic
2. **Baseline.**
   - Rankings and traffic by topic cluster, not by single keyword. A whole cluster sliding together usually means one root cause.
   - Technical health: crawlability, robots.txt, indexation (Search Console page indexing report), canonicals, Core Web Vitals (field data), mobile usability, broken internal links, redirect chains, and duplicate or thin pages.
   - Site structure: does internal linking reflect a real topic hierarchy? Are there orphan pages?
3. **Explain changes.**
   - Check each significant movement against the Google Search Status Dashboard (ranking updates and incidents), `known_changes`, and seasonality.
   - Label each explanation `verified`, `observed` or `inferred` according to [references/evidence-standards.md](references/evidence-standards.md).
   - Never present a correlation with an update as a proven cause.
4. **Opportunities.**
   - **Striking distance**: queries in roughly positions 5–20 with meaningful impressions in Search Console.
   - **Content gaps** against competitors. Give each recommended new page a format based on its query type, from [references/query-types.md](references/query-types.md).
   - **Cannibalization**: check explicitly for multiple URLs splitting the same query, using Search Console query-to-page data.
   - **Technical blockers** that suppress otherwise strong pages.
5. **AI features and crawlers.**
   - Confirm key pages are indexed and snippet-eligible. Check for `nosnippet` or `max-snippet` directives that would limit AI feature use.
   - Check the Search Console generative AI performance data, if available.
   - Review robots.txt for AI crawler user agents and Google-Extended. Report the current policy factually; whether to allow or block them is a business decision for the user.
   - `llms.txt` is not used by Google Search. Do not recommend it as a Google ranking or visibility tactic.
6. **Score** each item on four things:
   - impact potential
   - effort
   - urgency (an active decline beats a stable underperformer)
   - confidence in the diagnosis

   Favor high-impact, low-effort fixes (striking-distance improvements, broken canonicals, blocked pages) before large new-content bets.
7. **Output** a ranked list using the template.
   - Send content items to `content-brief`, `content` or `pillar-article`.
   - Send technical items to the brand's engineering process.

## Output template

```markdown
# SEO action plan: <site/scope> — <date>

## Data sources & limits
| Source | Range | Locale | Caveats (sampled, thresholded, lab vs field) |

## Key findings
| Finding | Evidence | Explanation | Confidence |

## Ranked actions
| # | Page/cluster | Current state (metric, source) | Action | Expected impact | Effort | Urgency | Confidence | Owner (skill/team) |

## AI features & crawler access
## Not investigated / data gaps
```

## Approval gates

The following need explicit user approval and are delivered as recommendations only:

- robots.txt changes, noindex or canonical changes, redirects, URL migrations
- page deletion or consolidation
- blocking or allowing AI crawlers

## Stop conditions

- There is no data access and the user wants traffic diagnosis. Explain the limits. Do not invent metrics.
- A drop coincides with a possible manual action or security issue. Point the user to the Search Console Manual Actions and Security Issues reports first.

## Anti-patterns

- Metric walls with no prioritization.
- Recommending only new content while technical debt suppresses existing pages.
- Treating every drop as urgent, or blaming updates without checking timing.
- Ignoring cannibalization, or adding a page that worsens it.
- Comparing windows of less than 28 days, or ignoring seasonality.
- Using lab Core Web Vitals scores as the verdict.
- Recommending `llms.txt` or "AI chunking" for Google visibility.
- Chasing volume with no intent match.

## Completion checklist

- [ ] Every metric names its source, range and locale
- [ ] Baseline covers clusters, trends, technical health and structure
- [ ] Movements checked against the Status Dashboard, known changes and seasonality
- [ ] Striking distance, gaps, cannibalization and blockers each checked explicitly
- [ ] AI-feature eligibility and crawler policy reported
- [ ] Ranked list with impact, effort, urgency, confidence and owner
- [ ] Risky changes listed under approval gates
