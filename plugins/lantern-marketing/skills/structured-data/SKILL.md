---
name: structured-data
description: "Audits and writes schema.org JSON-LD for a page or template against Google's currently supported rich result types and structured data policies, flags retired or unsupported types, and produces validated markup that matches visible content. Use when adding, fixing, or reviewing structured data or rich result eligibility."
license: MIT
metadata:
  version: "1.0.0"
  status: beta
  author: Lantern
---

# Structured Data

Purpose: produce markup that is accurate, matches what the page visibly shows, and targets only rich result features that Google currently supports. Structured data helps search engines understand a page and can make it eligible for rich results. It does not guarantee a rich result, it is not a ranking boost by itself, and it is **not required** for AI Overviews or AI Mode.

Shared rules:

- [references/evidence-standards.md](references/evidence-standards.md) covers sources, confidence and the dated platform facts. Re-check those facts if the file is older than six months.

## When to use this skill

Use when the user wants to add, fix, audit or explain schema markup for a page, a template or a site section, or asks why a rich result is not showing.

Do not use when:

- The user needs a full technical SEO review. Use `seo` and hand the schema items back here.
- The user wants FAQ copy. Use `faq-generator`. FAQ rich results are no longer shown, so markup is not a reason to write FAQs.
- The content to be marked up does not exist on the page yet. Write the content first.

## Required inputs

```yaml
pages:                       # URL or rendered HTML for each page or template
  - url: ""
    page_type: ""            # article, product, local business, event, software, video, profile, etc.
brand:
  name: ""
  website: ""
  logo_url: ""               # optional
  same_as: []                # optional: official social and knowledge profiles
existing_markup: ""          # optional: current JSON-LD, microdata or RDFa
cms_or_stack: ""             # optional: WordPress/Yoast, Shopify, Next.js, headless CMS, etc.
search_console_access: false # optional: enhancement reports, URL Inspection
markets: []                  # optional: countries (some features are market-limited)
```

## Supported and retired features (verified October 2026)

Re-open the [Search Gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) before relying on this table. Google changes it often.

| Status | Features |
| --- | --- |
| Supported | Article, Breadcrumb, Carousel (with certain types), Course list, Dataset, Discussion forum, Education Q&A, Employer aggregate rating, Event, Image metadata, Job posting, Local business, Math solver, Movie, Organization, Product (snippets, merchant listings, return policy, loyalty program), Profile page, Q&A, Recipe, Review snippet, Software app, Speakable (limited), Subscription and paywalled content, Vacation rental, Video |
| Retired, do not target | FAQ (stopped showing 7 May 2026), HowTo (September 2023), Sitelinks search box (2024), and from June 2025: Book actions, Course info, ClaimReview (fact check), Estimated salary, Learning video, Special announcement, Vehicle listing |
| Changed | Event: online-only event properties were removed in June 2025. Check the Event documentation for current eligibility before marking up virtual events |

Accurate markup for a retired feature is harmless, but do not add it for search benefit and do not promise a rich result from it. Organization, Article and Breadcrumb remain useful for entity understanding on most sites.

## Policies that override everything else

1. **Visible-content match.** Every marked-up value must appear on the page for users. Do not mark up hidden, irrelevant or misleading content.
2. **No fake or self-serving reviews.** Review snippets for `LocalBusiness` or `Organization` are only eligible when the site reviews *other* businesses. A business marking up reviews of itself on its own site is ineligible. Never mark up reviews the brand wrote, paid for without disclosure, or filtered for sentiment.
3. **Most specific type.** Use the most specific applicable type and nest correctly (for example `Product` > `offers` > `Offer`).
4. **Required before recommended.** All required properties must be present for the feature. Add recommended properties only when the value is real.
5. **Format.** Google recommends JSON-LD. Microdata and RDFa are supported. Do not describe the same entity twice in different formats with conflicting values.
6. **Crawlable.** Pages with markup must not be blocked by robots.txt, `noindex` or login walls (except correctly marked paywalled content).
7. **Consequences.** Violations can lead to a structured data manual action, which removes rich result eligibility. Google states it does not affect web search ranking, but treat it as a serious defect.

## Workflow

```text
- [ ] 1. Page purpose and visible content inventoried
- [ ] 2. Existing markup extracted and tested
- [ ] 3. Eligible features chosen against the current gallery
- [ ] 4. JSON-LD drafted with only real, visible values
- [ ] 5. Validated (Rich Results Test + Schema Markup Validator) and hand-checked
- [ ] 6. Deployment and monitoring plan written
```

1. **Inventory.**
   - For each page, list what a user actually sees: title, author, dates, price, availability, rating, address, hours, images, video.
   - Note values that exist only in the CMS or database. They cannot be marked up until they are displayed.
2. **Extract and test existing markup.**
   - Pull current JSON-LD, microdata and RDFa from the rendered HTML, not only the source template. JavaScript-injected markup is supported but must render.
   - Run it through the [Rich Results Test](https://search.google.com/test/rich-results) and the [Schema Markup Validator](https://validator.schema.org/). Record errors and warnings separately.
   - With Search Console access, check the enhancement reports and URL Inspection for the live page.
3. **Choose features.**
   - Map the page type to supported features using the table above and the feature's own documentation page.
   - Reject retired features. If the user asks for FAQ or HowTo markup, explain that the rich results are gone and offer Article or the real page type instead.
   - Check market limits. Some features are limited by country or language. Write "verify in docs" if unsure.
4. **Draft JSON-LD.**
   - One `<script type="application/ld+json">` block, preferably a `@graph` with stable `@id` values (for example `https://example.com/#organization`) so entities reference each other instead of repeating.
   - Use absolute URLs, ISO 8601 dates with a time zone, ISO 4217 currency codes and schema.org enumeration URLs (for example `https://schema.org/InStock`).
   - Make `datePublished` and `dateModified` match the visible byline dates. Change `dateModified` only after a substantive update.
   - Leave out any property whose real value is unknown. Never insert placeholder values.
   - For templates, show which CMS field fills each property and the fallback when the field is empty (omit the property; never fake it).
5. **Validate.**
   - Re-run both validators on the drafted markup or a staging URL. The bar is zero errors for the chosen features. Fix warnings when the real value exists.
   - Confirm each value by hand against the visible page. Validators check syntax, not truthfulness.
6. **Deploy and monitor.**
   - Deploy to one template first. Request indexing for a few URLs through URL Inspection.
   - Monitor that feature's enhancement report for 2–4 weeks. Report valid, valid-with-warnings and invalid counts.
   - Describe the result as eligibility, not as a guaranteed rich result.

## Output template

````markdown
# Structured data plan: <page or template> — <date>

## Page inventory
| Visible element | Value on page | Marked up? | Property |

## Existing markup findings (tested <date>)
| Issue | Severity (error / warning / policy) | Fix |

## Features targeted
| Feature | Gallery status (checked <date>) | Required properties present? | Notes |

## Features rejected
| Feature | Reason (retired / not visible / not eligible / policy) |

## JSON-LD
```json
{ "@context": "https://schema.org", "@graph": [ ... ] }
```

## Template field mapping (if templated)
| Property | CMS field | Fallback when empty |

## Validation
| Tool | Result | Date |

## Deployment and monitoring
## Sources
| Claim/area | URL | Accessed | Confidence |
````

## Approval gates

- Get approval before changing site-wide templates (Organization, Article, Product) or deleting existing markup.
- Get approval before marking up ratings, reviews or prices, and confirm they are genuine and visible.

## Stop conditions

- The values needed for required properties are not visible on the page. Report what must be displayed first.
- The only requested feature is retired (for example FAQ or HowTo for rich results). Explain and offer alternatives instead of writing it.
- The user asks to mark up self-serving, fabricated, sentiment-filtered or hidden reviews.
- The page is blocked from crawling or indexing and the user does not want that changed.

## Anti-patterns

- Promising rich results, rankings or AI citations from markup.
- Adding FAQPage or HowTo markup "for SEO" after their rich results were retired.
- Marking up content that is not visible, or values that differ from the page (prices, ratings, dates).
- Self-serving review stars in a business's own LocalBusiness or Organization markup.
- Updating `dateModified` without a substantive content change.
- Pasting generator output without removing empty or placeholder properties.
- Treating a Schema Markup Validator pass as proof of Google eligibility. Only the Rich Results Test checks Google features.
- Adding `llms.txt` or special markup for Google AI features. Google says neither is needed.

## Completion checklist

- [ ] Every marked-up value is visible on the page and accurate
- [ ] Only currently supported features targeted; gallery checked and dated
- [ ] Retired or ineligible features listed with the reason
- [ ] Required properties present; no placeholder values
- [ ] Rich Results Test and Schema Markup Validator run and recorded
- [ ] Review markup is eligible (not self-serving, not sentiment-filtered)
- [ ] Deployment, monitoring and approval items stated
- [ ] Output describes eligibility, not guaranteed rich results
