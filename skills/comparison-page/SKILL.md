---
name: comparison-page
description: "Plans and writes fair, substantiated comparison pages (brand vs competitor, alternatives to X, best X for Y) that follow Google's reviews guidance and comparative advertising and consumer review rules, with evidence logs, disclosures, and dated claims. Use when creating or refreshing vs, alternatives, or best-of pages that mention competitors."
license: MIT
metadata:
  version: "1.0.0"
  status: stable
  author: Lantern
---

# Comparison Page

Purpose: write comparison content a buyer can trust and a legal reviewer can sign off. Comparison pages are high intent and frequently cited by AI engines, and they are also where brands most often make unsubstantiated claims about competitors. Every claim here must be true, current, provable and fairly framed.

Shared rules:

- [references/query-types.md](references/query-types.md) covers comparison and listicle formats and title patterns.
- [references/writing-and-titling.md](references/writing-and-titling.md) covers structure and prose rules.
- [references/evidence-standards.md](references/evidence-standards.md) covers sourcing and confidence.
- [scripts/check-draft.mjs](scripts/check-draft.mjs) runs deterministic structural checks on the draft.

## When to use this skill

Use for "<brand> vs <competitor>", "<competitor> alternatives", "best <category> for <use case>" and similar pages where the brand compares itself or ranks products.

Do not use when:

- The user wants competitive research only. Use `competitor-audit` and feed its findings here.
- The page does not compare named products. Use `content`.
- The user wants paid ad copy. Ad platforms have their own comparative claim policies; this skill covers owned pages.

## Required inputs

```yaml
page_type: ""                 # vs | alternatives | best-for
brand:
  name: ""
  website: ""
  product: ""
competitors: []               # named products being compared
audience_and_use_case: ""     # who is choosing, for what job
markets: []                   # countries where the page is targeted (affects legal rules)
evidence_available:           # what the brand can actually prove
  first_hand_testing: ""      # who tested what, when, on which plan or version
  pricing_pages: []
  documentation: []
  third_party_reviews: []
  customer_data: ""           # e.g. migration stats, with source
affiliate_or_partner_relationships: []   # any commercial ties to listed products
legal_reviewer: ""            # optional: who signs off
```

## Rules that cannot be broken

1. **Substantiate before publishing.** Every objective claim about the brand or a competitor (price, feature, limit, speed, rating, integration count) needs evidence on file before publication. US: the FTC requires comparative claims to be truthful, non-deceptive and substantiated. UK: the CAP Code (rules 3.33–3.44) requires comparisons to be verifiable, compare like with like, and not denigrate. EU: Directive 2006/114/EC Article 4 sets similar conditions. Not legal advice; route to the legal reviewer when markets or claims are sensitive.
2. **Compare like with like.** Same plan tier, billing period, currency, region and date. State them on the page.
3. **Date every competitor fact** and link the source where practical. Competitor pricing and features change; undated claims become false.
4. **Disclose the relationship.** If the brand publishes the page, say so plainly near the top ("We make <product>. Here is how we compared."). Do not present a company-controlled page or site as an independent review source. The FTC's Consumer Reviews and Testimonials rule (16 CFR Part 465, §465.6) prohibits misrepresenting company-controlled review sites as independent.
5. **Disclose affiliate or partner ties** clearly and close to the claim or link. Mark paid or affiliate links with `rel="sponsored"` (or `nofollow`).
6. **No fake or filtered reviews.** Do not write, buy, or selectively display testimonials to imply a better rating. 16 CFR 465.2, 465.4 and 465.7 apply in the US; the UK DMCC Act 2024 bans fake reviews.
7. **Say where competitors win.** A comparison that never concedes anything reads as an ad and fails Google's reviews guidance.

## Google reviews guidance (verified October 2026)

Google's reviews system evaluates pages that recommend, compare or rank products. It favors pages that:

- Show first-hand use: original photos, screenshots, test data, or specific observations.
- Provide quantitative measurements where relevant.
- Explain what sets each product apart, and the benefits and drawbacks of each.
- For ranked or "best" lists, explain why each pick is best for a stated use.
- Cover comparable products and what changed if a product has been updated.
- Link to more than one seller when linking out to buy, where it helps the reader.

## Workflow

```text
- [ ] 1. Page type, buyer and decision criteria defined
- [ ] 2. Evidence log built; every claim sourced and dated
- [ ] 3. Fairness review: like-with-like, concessions, no denigration
- [ ] 4. Draft written to template with disclosures
- [ ] 5. check-draft.mjs passes; claims re-verified on the day
- [ ] 6. Legal or owner sign-off where required
- [ ] 7. Refresh schedule set
```

1. **Define the decision.**
   - Name the buyer and the job. List 5–8 decision criteria that buyer actually uses (for example price at 10 seats, onboarding time, specific integrations, support hours, data residency).
   - Choose criteria before gathering evidence, so criteria are not picked to favor the brand.
2. **Build the evidence log.**
   - For each product × criterion, record the value, source URL, access date and confidence. Use competitor pricing and documentation pages, not third-party listicles.
   - Record first-hand testing details: who tested, version or plan, date, method.
   - If a value cannot be verified, write `not verified` on the page or drop the criterion. Never estimate a competitor's capability.
3. **Fairness review.**
   - Confirm like-with-like (tier, currency, period, region).
   - Write at least one genuine strength for each competitor and one honest limitation for the brand.
   - Remove denigrating language ("clunky", "outdated") unless it is supported by cited evidence and phrased as a finding.
4. **Draft.**
   - **vs page**: disclosure, a short verdict by use case ("Choose X if… choose Y if…"), comparison table, criterion-by-criterion sections, migration notes, FAQ.
   - **alternatives page**: disclosure, selection criteria and method, one section per alternative with "best for", strengths, limitations and pricing (dated), comparison table, how to choose.
   - **best-for page**: method section first (how products were chosen and tested), ranked picks each with a "best for" reason, a comparison table, products considered but not included and why.
   - Put the verdict and table early; AI engines and buyers both extract them.
5. **Check.** Run `node scripts/check-draft.mjs draft.md`. Re-open every competitor source on the publication day and update the access date.
6. **Sign-off.** Route to the legal reviewer when the page targets the UK or EU, makes performance or "#1"/"best" claims, or names a competitor in a regulated category.
7. **Refresh.** Set a review date (default 90 days, sooner for fast-moving pricing). Hand to `content-refresh` when due.

## Output template

```markdown
---
title: "<title per query-types pattern>"
meta_description: "<≤155 chars>"
---
# <H1>

> Disclosure: We make <product>. <Affiliate or partner disclosure if any.> Last verified: <date>.

## Quick verdict
- Choose <brand> if …
- Choose <competitor> if …

## Comparison at a glance (verified <date>)
| Criterion | <brand> | <competitor> | Source |

## <Criterion sections>
## How we compared (method, versions, dates, tester)
## FAQ
## Sources
| Claim | URL | Accessed |
```

Also return, separately from the page:

```markdown
## Evidence log
| Product | Criterion | Value | Source | Accessed | Confidence |
## Claims needing legal review
## Refresh date
```

## Approval gates

- Owner approval of criteria and verdict before drafting the full page.
- Legal sign-off for superlatives ("best", "#1", "fastest"), performance claims, UK or EU targeting, and regulated categories.
- Approval before publishing anything that names a competitor's weakness.

## Stop conditions

- A central claim cannot be substantiated. Remove it or stop.
- The user asks to hide the brand's ownership, present the page as independent, or fabricate or filter reviews.
- Competitor data cannot be accessed and no reliable primary source exists.
- The user wants comparisons on mismatched tiers or outdated pricing to look better.

## Anti-patterns

- Undated competitor prices or features.
- Comparing the brand's top tier with a competitor's entry tier.
- "Best X" lists where the publisher's product is always #1 with no stated method.
- Scraping competitor claims from third-party listicles instead of primary pages.
- Pages for every competitor pair produced from one template with swapped names (scaled content abuse risk).
- Hidden, vague or footer-only disclosures.
- Sentiment-filtered testimonials or invented ratings.

## Completion checklist

- [ ] Ownership and any affiliate ties disclosed near the top
- [ ] Every objective claim in the evidence log with source, date and confidence
- [ ] Like-with-like comparison stated (tier, currency, period, region)
- [ ] Each competitor has a genuine strength; the brand has an honest limitation
- [ ] Verdict by use case and comparison table near the top
- [ ] Method section explains how products were evaluated
- [ ] check-draft.mjs passes; sources re-verified on publication day
- [ ] Legal sign-off obtained where required; refresh date set
