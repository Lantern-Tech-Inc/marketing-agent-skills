---
name: ai-visibility-report
description: "Produces a recurring, evidence-graded report on how a brand appears in AI answer engines by combining a sampled prompt panel with first-party data: Search Console Generative AI performance, Bing Webmaster Tools AI Performance, AI referral traffic, and crawler access. Use for monthly or quarterly AI search visibility reporting, baselines, or before-and-after measurement."
license: MIT
metadata:
  version: "1.0.0"
  status: beta
  author: Lantern
---

# AI Visibility Report

Purpose: give marketing leaders a repeatable measurement of AI search visibility that separates what is measured from what is sampled and what is guessed. One prompt run is an anecdote. This skill reports a fixed panel, run the same way every period, alongside the first-party data that engines now publish.

Shared rules:

- [references/ai-visibility-method.md](references/ai-visibility-method.md) covers the five-layer model, sampling minimums, run logs, stability rules and citation scoring. Follow it exactly.
- [references/evidence-standards.md](references/evidence-standards.md) covers sources, confidence and metric hygiene.
- [references/query-types.md](references/query-types.md) covers AI prompt types.

## When to use this skill

Use when the user wants a baseline, a monthly or quarterly AI visibility report, or a before-and-after measurement for a content or PR change.

Do not use when:

- The user wants a one-off competitive teardown. Use `competitor-audit`.
- The user wants to discover new prompts and keyword demand. Use `keyword-research`, then bring the prompt set back here.
- The user wants fixes to pages. Hand findings to `content-refresh`, `seo`, `structured-data` or `digital-pr`.

## Required inputs

```yaml
brand:
  name: ""
  website: ""
  canonical_claims: []      # category, audience, offerings, pricing as the brand states them
competitors: []             # 2–5 named competitors
market:
  country: ""
  language: ""
prompt_set: []              # fixed panel; reuse last period's set unchanged
engines: []                 # at least 3 the audience uses
period: ""                  # e.g. 2026-09-01..2026-09-30
previous_report: ""         # optional: last period's report for comparison
first_party_access:         # mark what is available
  search_console: false
  bing_webmaster_tools: false
  ga4_or_analytics: false
  server_logs: false
changes_this_period: []     # optional: pages published or refreshed, PR placements, site changes
```

## First-party data sources (verified October 2026)

Re-check each source's documentation before reporting. Names and limits change.

| Source | What it gives | Limits to state in the report |
| --- | --- | --- |
| Google Search Console, Generative AI performance report (available to all sites from 31 August 2026) | Impressions in Google generative AI features by page (canonical URL), country, device and date; search type Web text-based or Web multimodal (multimodal includes Lens and Circle to Search, added 24 September 2026) | Impressions only, no clicks in this report; dates in Pacific Time; table export limited to 1,000 rows. AI Mode traffic is also counted in the standard Performance report totals |
| Bing Webmaster Tools, AI Performance (public preview since February 2026) | Total citations, average cited pages, sampled grounding queries, page-level citations and trends across Microsoft Copilot, Bing AI summaries and partners | Preview feature; grounding queries are a sample |
| Bing Webmaster Tools, Topics Portfolio (beta, October 2026) | Topic clusters with topic size, sites cited and query counts; top opportunity queries | AI-classified, ranges only, directional; branded queries can appear as opportunities |
| Analytics (GA4 or equivalent) | Sessions and conversions referred by AI assistants (for example chatgpt.com, perplexity.ai, copilot.microsoft.com, gemini.google.com, claude.ai) | Referrer data is incomplete. Many AI visits arrive with no referrer and are counted as direct. Report as a floor, not a total |
| Server logs | Fetches by AI crawlers and user agents | Verify crawler identity against published IP ranges where vendors publish them |

## Crawler access check

Confirm the site is reachable before reporting low visibility. Check robots.txt, CDN or WAF bot rules, and recent server log hits for these user agents. Confirm names in vendor documentation each period.

| Vendor | Search or answer retrieval | Model training | User-initiated fetch |
| --- | --- | --- | --- |
| Google | Googlebot (AI Overviews and AI Mode use normal Search crawling and snippet controls) | Google-Extended (a robots.txt token for Gemini training and grounding outside Search; not a separate crawler) | — |
| OpenAI | OAI-SearchBot | GPTBot | ChatGPT-User (robots.txt may not apply) |
| Anthropic | Claude-SearchBot | ClaudeBot | Claude-User |
| Perplexity | PerplexityBot | — (Perplexity states PerplexityBot is not used for training) | Perplexity-User (generally ignores robots.txt) |
| Microsoft | Bingbot | — | — |

Blocking a search-oriented crawler can remove the site from that engine's answers. Google AI features also respect `nosnippet`, `data-nosnippet`, `max-snippet` and `noindex`. Robots.txt changes can take about 24 hours to be picked up by OpenAI and Perplexity.

## Workflow

```text
- [ ] 1. Prompt panel frozen; engines, locale and window fixed
- [ ] 2. Crawler access confirmed
- [ ] 3. Panel run per the sampling protocol; run log kept
- [ ] 4. First-party data pulled for the same period
- [ ] 5. Metrics computed; findings labeled stable / cross-engine / volatile
- [ ] 6. Period-over-period changes explained with evidence, not assumed
- [ ] 7. Actions assigned to the right skill; report assembled
```

1. **Freeze the panel.** Reuse the previous period's prompts, engines and locale unchanged so results are comparable. Add new prompts in a separate, labeled "new this period" group. Never swap prompts silently.
2. **Check access.** Run the crawler access check. If a relevant crawler is blocked, report that first. It may explain the whole result.
3. **Run the panel.** Follow the sampling protocol: at least 3 engines, 3 fresh-session runs per prompt per engine, one locale, one 7-day window. Keep the run log with verbatim excerpts and cited URLs. If minimums cannot be met, say so and downgrade confidence.
4. **Pull first-party data** for the same period and the previous period: Search Console Generative AI report (top pages, trend), Bing AI Performance (citations, cited pages, grounding query sample), AI referral sessions and conversions.
5. **Compute metrics.**
   - **Mention rate**: share of runs in which the brand is named, per engine and overall.
   - **Citation rate**: share of runs in which a brand-owned URL is cited.
   - **Share of voice**: brand mentions divided by all tracked-brand mentions in the panel.
   - **Accuracy**: share of brand descriptions that are accurate against canonical claims, with every inaccuracy quoted.
   - **Top cited third-party sources** for the topic, scored with the citation strength rubric.
   - Show the denominator for every rate (for example "7 of 27 runs").
6. **Explain changes.**
   - Compare with the previous report only when the panel, engines and locale were identical.
   - Before attributing a change to the team's work, check engine model changes, Google Search Status Dashboard incidents, panel changes and site changes. Use "coincided with", not "caused", unless there is a controlled comparison.
7. **Act and assemble.** Every finding ends with one action and the skill to hand it to.

## Output template

```markdown
# AI visibility report: <brand> — <period>

## Summary (5 bullets max)

## Method
| Engines | Runs per prompt | Prompts | Locale | Window | Deviations from protocol |

## Crawler access (checked <date>)
| User agent | Allowed? | Evidence (robots.txt line / log hits) |

## Panel results
| Metric | This period | Previous | Denominator | Stability |
| Mention rate | | | x of y runs | |
| Citation rate | | | | |
| Share of voice | | | | |
| Accuracy | | | | |

## By engine
| Engine | Mention rate | Citation rate | Notable descriptions (quoted) |

## First-party data
| Source | Metric | This period | Previous | Caveats |

## Most-cited third-party sources
| URL | Cited in (runs/engines) | Strength score | Brand present? | Opportunity |

## Inaccuracies found
| Engine | Verbatim excerpt | Correct claim | Likely source | Action |

## Changes and likely explanations
## Actions
| Finding | Action | Owner skill | Priority |
## Sources and run log location
```

## Approval gates

- Get approval before recommending robots.txt or WAF changes that block or unblock AI crawlers. This is a business decision about training and traffic, not only a technical one.
- Get approval before sharing inaccuracy findings with engine vendors or publishers.

## Stop conditions

- Fewer than 2 engines can be accessed. Report the limitation instead of producing a full report.
- The prompt panel changed so much that comparison is meaningless. Produce a new baseline and say so.
- The site blocks the engines being measured. Report the access issue and the decision required.

## Anti-patterns

- Reporting a single run, a screenshot or a logged-in session with memory as a finding.
- Changing prompts between periods and still reporting a trend.
- Presenting Search Console Generative AI impressions as clicks, or AI referral sessions as total AI traffic.
- Treating Bing Topics Portfolio ranges or opportunity queries as exact demand.
- Claiming a content change "caused" a citation from before-and-after observation alone.
- Recommending `llms.txt`, special markup or chunking for Google AI features. Google says none is needed.
- Reporting share of voice without denominators or competitor names.

## Completion checklist

- [ ] Panel, engines, locale and window identical to last period, or a new baseline declared
- [ ] Crawler access checked and dated
- [ ] Sampling minimums met, or deviations stated with downgraded confidence
- [ ] Every rate has a denominator; findings labeled stable / cross-engine / volatile
- [ ] First-party data included with each source's caveats
- [ ] Inaccuracies quoted verbatim with the correct claim
- [ ] Changes explained without unsupported causal claims
- [ ] Every finding has an action and an owner skill
