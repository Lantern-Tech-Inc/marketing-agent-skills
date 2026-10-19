# Evidence standards

Canonical rules for sourcing, confidence, and platform facts. Every Lantern skill that reports findings or makes claims follows this file.

## Contents

- Non-negotiables
- Source hierarchy
- Source record format
- Confidence labels
- Metric hygiene
- Platform facts (verified, with dates)
- Re-verification

## Non-negotiables

1. Never invent statistics, search volumes, quotes, customers, prices, citations, or results.
2. If a value is unavailable, write `not reported` or `unknown`. Do not use zero, an estimate presented as fact, or a plausible-looking number.
3. Keep evidence and assumptions in separate, labeled fields.
4. Record where and when every external fact was obtained.
5. If the evidence for a central claim cannot be found, stop and report the gap rather than proceeding as if it existed.

## Source hierarchy

Prefer the highest available tier. Trace repeated numbers back to the origin.

1. **Primary**: original research, official documentation, regulator or government data, company filings, the speaker's own published words, first-party analytics (GSC, GA4, CRM, support logs).
2. **Reputable secondary**: established publications that cite the primary source.
3. **Tertiary or aggregator**: directories, listicles, and tool estimates. Use these for discovery only, or label them clearly as estimates.

A secondary source that repeats a number without attribution does not verify that number.

## Source record format

```yaml
- claim: "<the exact claim supported>"
  url: "<url>"
  publisher: "<organization>"
  published: "<YYYY-MM-DD or unknown>"
  accessed: "<YYYY-MM-DD>"
  tier: primary | secondary | tertiary
  confidence: verified | observed | inferred | assumption
```

## Confidence labels

| Label | Meaning |
| --- | --- |
| verified | Confirmed against a primary or reputable secondary source that was recorded |
| observed | Seen directly in a tool, a SERP, or AI answers during this run (log the date, engine and locale) |
| inferred | A reasoned conclusion from verified or observed evidence. State the reasoning |
| assumption | Not evidenced. Must be confirmed by the user or flagged before use |

## Metric hygiene

- Always name the data source and the date range for any metric.
- Google Ads "competition" measures advertiser competition. It is **not** organic ranking difficulty.
- Third-party search volumes and difficulty scores are modeled estimates. Label them with the tool name and the date.
- Search Console data can be sampled, anonymized, or thresholded for rare queries, and GA4 can apply thresholds. Flag this when it affects a conclusion.
- Core Web Vitals: prefer **field** data (CrUX, or Search Console's Core Web Vitals report). **Lab** data (Lighthouse) is diagnostic only.
- Compare like with like. Use at least 28 days, compare against the previous period and the same period last year, and check for algorithm updates (Google Search Status Dashboard) and site changes before attributing a cause.
- AI-answer observations are probabilistic. Follow the sampling protocol in `ai-visibility-method.md` when a skill includes it, or record that only a single run was taken.

## Platform facts (verified, with dates)

These facts change over time. Re-check them if this file is more than six months old.

- **FAQ rich results:** Since August 2023 they were limited to well-known, authoritative government and health sites. Google stopped showing FAQ rich results entirely from **7 May 2026** and removed the documentation in June 2026. Do not promise or recommend FAQPage markup for rich results. FAQ content can still help readers.
- **HowTo rich results:** Deprecated in September 2023 and no longer shown on desktop or mobile.
- **Structured data in general:** Markup must match visible page content. Still useful for eligible rich results such as Article, Breadcrumb, Product, Review snippet, Organization, LocalBusiness and Video. It is **not required** for AI Overviews or AI Mode.
- **Google generative AI features (AI Overviews, AI Mode):**
  - They rely on core Search ranking, retrieval-augmented generation and query fan-out.
  - To appear, a page must be indexed and eligible to show with a snippet.
  - The site must also be included in Search generative AI features in Search Console.
  - No `llms.txt`, special markup or "chunking" is needed.
  - Measure them with Search Console's Generative AI performance report.
  - Google's spam policies apply to AI responses.
  - Creating pages for every fan-out variation can violate the scaled content abuse policy.
- **`llms.txt`:** Not used by Google Search and neutral for rankings. It may be maintained for other services.
- **AI crawler controls:** `Google-Extended` controls the use of content for Gemini model training, not Search inclusion. `GPTBot`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot` and others are separate user agents. Blocking a search-oriented AI crawler can remove the site from that assistant's answers. Confirm current user-agent names in each vendor's documentation before changing robots.txt.

Sources (accessed 2026):

- Google Search Central, "Optimizing your website for generative AI features on Google Search" (developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- Google Search Central, "AI features and your website" (developers.google.com/search/docs/appearance/ai-features)
- Google Search Central documentation updates log, entries for 8 May 2026, 15 June 2026 and September 2023 (developers.google.com/search/updates)
- Google Search Central Blog, "Changes to HowTo and FAQ rich results", August 2023

## Re-verification

When a platform fact is central to a recommendation:

1. Re-open the official source.
2. Record the access date.
3. If the source disagrees with this file, follow the source and flag the discrepancy in the output.
