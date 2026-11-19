---
name: content-refresh
description: "Diagnoses decaying or underperforming pages with Search Console and analytics data, decides whether to update, consolidate, redirect, or leave each page, and produces a substantive refresh plan with honest date handling. Use when traffic, rankings, or AI citations have dropped, content is outdated, or a content library needs pruning."
license: MIT
metadata:
  version: "1.0.0"
  status: stable
  author: Lantern
---

# Content Refresh

Purpose: recover and extend the value of existing pages by fixing the real cause of decline, not by cosmetic edits. A refresh is only worth doing when it makes the page more accurate, more complete or more useful than it was and than the pages now outranking it.

Shared rules:

- [references/query-types.md](references/query-types.md) covers intent and format mapping, which often explains decay.
- [references/writing-and-titling.md](references/writing-and-titling.md) covers the writing rules for rewritten sections.
- [references/evidence-standards.md](references/evidence-standards.md) covers metric hygiene and sourcing.
- [scripts/check-draft.mjs](scripts/check-draft.mjs) checks the refreshed draft.

## When to use this skill

Use when a page or group of pages has lost clicks, rankings or AI citations, contains outdated facts, or when the user wants to audit and prune a content library.

Do not use when:

- The whole site dropped at once. Use `seo` first; the cause is more likely technical, an algorithm update or a manual action.
- The page does not exist yet. Use `content-brief` and `content`.
- The user wants measurement only. Use `ai-visibility-report`.

## Required inputs

```yaml
pages: []                       # URLs, or "auto" to select from data
search_console:                 # exports or access
  date_ranges: ""               # e.g. last 3 months vs previous 3 months and same period last year
analytics: ""                   # optional: GA4 or equivalent (engagement, conversions)
ai_visibility: ""               # optional: ai-visibility-report output
brand_changes: ""               # optional: new pricing, products, positioning since publication
site_changes: ""                # optional: migrations, template or URL changes with dates
first_hand_assets: []           # optional: new data, cases, expert input available for the update
```

## Decision rules

| Situation | Action |
| --- | --- |
| Still relevant, losing to better or fresher pages | **Update**: substantive rewrite of weak sections |
| Two or more pages compete for the same intent and split clicks | **Consolidate** into the stronger URL; 301 the others to it |
| Topic no longer relevant to the business and has no traffic, links or conversions | **Remove**: 410 or 404, or 301 only if a genuinely equivalent page exists |
| Performing well, facts still correct | **Leave**: do not touch it for the sake of activity |
| Decline matches a seasonal pattern or a demand drop for the whole query | **Leave**: note seasonality; no rewrite will fix demand |
| Intent of the query changed (results now show a different format) | **Re-angle**: rebuild to the format now winning, per query-types |

Redirect only to a page that satisfies the same need. Redirecting unrelated pages to the home page is treated as a soft 404.

## Workflow

```text
- [ ] 1. Decline confirmed with like-for-like date ranges
- [ ] 2. External causes ruled out (seasonality, updates, site changes)
- [ ] 3. Per-page cause diagnosed from query-level data and live results
- [ ] 4. Action chosen per page with the decision rules
- [ ] 5. Refresh plan written per page (what changes and why)
- [ ] 6. Draft updated; check-draft.mjs passes; dates handled honestly
- [ ] 7. Measurement window and success criteria set
```

1. **Confirm the decline.**
   - Compare at least 28 days against the previous period and the same period last year. Use clicks and impressions by query and page, not just page totals.
   - Separate impression loss (visibility) from CTR loss (snippet or SERP feature change) from position loss (ranking).
2. **Rule out external causes.** Check the Google Search Status Dashboard for ranking updates in the window, seasonality, tracking changes and site changes (migrations, template edits, internal link removals). If many unrelated pages dropped on the same date, stop and hand to `seo`.
3. **Diagnose each page.**
   - Pull the queries that lost the most clicks. Search them and record what now ranks and what AI answers cite, with dates.
   - Common causes: outdated facts or prices; a competitor page with first-hand evidence or better structure; the query's intent shifted; cannibalization by another page on the site; thin sections; slow or broken page; lost internal links.
   - Label each cause `observed`, `inferred` or `assumption`.
4. **Choose the action** using the decision rules. One action per URL.
5. **Write the refresh plan.** For each page to update: sections to rewrite, facts to re-verify, new evidence to add (first-hand data, examples, expert input), sections to remove, title and meta changes, internal links to add (hand to `internal-linking` for site-wide changes).
6. **Update the draft.**
   - Re-verify every statistic and claim; update the source access dates.
   - Run `node scripts/check-draft.mjs draft.md`.
   - **Dates:** change the visible "updated" date and `dateModified` only for a substantive update. Google lists "changing the date of pages to make them seem fresh when the content has not substantially changed" as a sign of search-engine-first content. Keep the original published date. Visible and structured dates must match.
   - Keep the URL unless consolidation requires otherwise.
7. **Measure.** Request indexing through URL Inspection. Compare 28 days after recrawl against the matched pre-refresh period. Record expected effect as a hypothesis, not a promise.

## Output template

```markdown
# Content refresh plan: <scope> — <date>

## Data and windows
| Source | Range compared | Caveats |

## External causes checked
| Check | Result |

## Page decisions
| URL | Clicks Δ | Impr Δ | Pos Δ | CTR Δ | Cause (label) | Action | Priority |

## Per-page refresh plan: <URL>
- Lost queries and what now ranks (checked <date>)
- Sections to rewrite / add / remove
- Facts to re-verify
- New evidence to add
- Title / meta changes
- Internal links
- Date handling: substantive update? yes/no

## Consolidation and redirect map
| From | To | Reason |

## Measurement plan
```

## Approval gates

- Approval before any redirect, removal or consolidation.
- Approval before changing a page's primary angle, title or URL.

## Stop conditions

- Search Console or equivalent data is unavailable and the user cannot export it. Offer a qualitative review only, clearly labeled.
- The decline is site-wide or coincides with a migration or manual action. Hand to `seo`.
- The only proposed change is cosmetic (date bump, synonym swaps). Recommend leaving the page instead.

## Anti-patterns

- Bumping the published or modified date without substantive changes.
- Adding words for length instead of fixing the cause.
- Diagnosing from page totals without query-level data.
- Blaming an algorithm update without checking dates.
- Redirecting everything to the home page.
- Deleting pages that still earn links, conversions or AI citations.
- Mass "refreshing" dozens of pages with the same AI-generated additions.

## Completion checklist

- [ ] Decline confirmed with like-for-like ranges at query level
- [ ] Seasonality, updates and site changes checked
- [ ] Cause per page labeled with confidence
- [ ] One action per URL from the decision rules
- [ ] Refresh plan lists concrete content changes and new evidence
- [ ] Facts re-verified; check-draft.mjs passes
- [ ] Dates changed only for substantive updates; visible and structured dates match
- [ ] Redirect map and measurement plan included
