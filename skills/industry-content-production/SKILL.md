---
name: industry-content-production
description: "Builds a research-backed industry content program and publish-ready draft from market framing through trust review. Use for industry pages, vertical campaigns, market content, and end-to-end production."
license: MIT
metadata:
  version: "1.0.0"
  status: beta
  author: Lantern
---

# Industry Content Production

Purpose: turn any industry, market, product, or customer problem into a research-backed content program and publish-ready draft. This skill owns the complete process from market framing and search-intent research through competitive analysis, content-format selection, briefing, drafting, trust review, internal linking, and publication handoff. It uses DataForSEO and live Google results as evidence, but it does not mistake search volume for strategy or copy whatever currently ranks.

## When to use this skill

Use this skill when the request includes any of the following:

- Create content for an industry, vertical, market, or audience.
- Research what a company should publish next.
- Produce SEO, AEO, GEO, or AI-search content at scale.
- Turn keyword data into briefs or complete drafts.
- Build a topic cluster around a product or solution page.
- Localize a content program for a country or language.
- Analyze competitors before drafting an article.

Do not use this workflow to produce a draft from an unverified topic in a single step. Research and intent validation are required gates.

## Operating principles

1. Start with the business problem, not a keyword export.
2. Treat keyword volume, SERP behavior, customer language, product relevance, and evidence availability as separate signals.
3. Search intent determines content format. Word count does not.
4. Build around topic clusters, not isolated keywords.
5. Create something competitors do not have: first-party data, a tested workflow, original examples, a useful template, or a clearer decision framework.
6. Make each section independently understandable and citable.
7. Never invent product capabilities, customer outcomes, statistics, quotes, rankings, or search volume.
8. Do not copy competitor wording, structure section-for-section, proprietary graphics, or branded frameworks.
9. Localize research, examples, terminology, and conversion paths. Translation alone is not localization.
10. Keep humans responsible for strategic approval, factual claims, legal risk, and publication.

## Required inputs

Collect or infer the following before research begins:

```yaml
brand:
domain:
industry:
product_or_service:
target_market:
target_language:
target_audience:
primary_conversion:
commercial_hub_url:
existing_content_urls:
known_competitors:
first_party_data_available:
publishing_constraints:
```

If the user supplies only an industry, infer a provisional audience and problem set, label those assumptions, and continue through research. Ask a question only when the missing information would materially change the market, product, or conversion goal.

## Secure research configuration

Use DataForSEO credentials only from the configured environment. Never print, store, or place credentials in a draft, command output, research artifact, or source file.

Expected secret:

```text
DATA_FOR_SEO
```

Resolve current country and language codes through DataForSEO before querying a new market. Do not assume that a language represents only one country or that a country has only one search language.

Recommended DataForSEO sources:

- Google Ads Search Volume for directional demand, CPC, and advertiser competition.
- DataForSEO Labs Keyword Ideas for vocabulary expansion.
- DataForSEO Labs Related Keywords for semantic neighbors.
- Google Organic SERP Live Advanced for ranking URLs, titles, snippets, and result features.
- Ranked Keywords for existing-domain coverage when available.
- Domain Intersection for competitor gaps when a reliable competitor set exists.

Google Ads competition is paid-search competition, not organic keyword difficulty. State this distinction in every research report.

## Phase 1: Establish the commercial truth

Before collecting keywords, understand what the business can actually sell and prove.

Document:

- The product or service and the problem it solves.
- The audience with budget or authority to act.
- The conversion the content should assist.
- Product capabilities that can be demonstrated today.
- Claims supported by product data, customer evidence, or authoritative sources.
- Claims that must not be made.
- The commercial hub the content should support.

Reject topics that attract an audience the product cannot serve. A large keyword with weak product fit is not an opportunity.

## Phase 2: Build the demand universe

Generate seed terms from six sources instead of brainstorming synonyms only.

### Product language

- Category names.
- Product type and alternatives.
- Features and workflows.
- Problems solved.
- Desired outcomes.

### Customer language

- Questions from sales calls, support conversations, onboarding, reviews, communities, and product search.
- Terms customers use before they know the product category.
- Objections and validation questions asked before purchase.

### Job-to-be-done language

- “How do I…” tasks.
- “Best tool for…” evaluations.
- “X versus Y” decisions.
- Cost, implementation, risk, compliance, and migration questions.
- Diagnostic queries describing symptoms rather than solutions.

### Entity language

- Products, standards, regulations, platforms, technologies, methods, and people that define the industry.
- Adjacent entities that search engines expect authoritative coverage to mention.

### Competitor language

- Competitor category labels.
- Competitor comparison queries.
- Competitor alternatives, pricing, reviews, and implementation topics.
- Topics competitors rank for but the brand does not cover.

### AI-prompt language

Create realistic prompts in these groups:

- Recommendation: “What is the best platform for [job]?”
- Comparison: “Compare [approach A] and [approach B] for [audience].”
- Validation: “Is [product or method] suitable for [constraint]?”
- Process: “How do I achieve [outcome]?”
- Cost: “What does [solution] cost for [company type]?”
- Definition: “What is [entity] and why does it matter?”

Keep classic keyword demand and AI-prompt demand separate. Do not assign invented search volumes to conversational prompts.

## Phases 3–7: Research and prioritization

Load [research guidance](./references/research.md) before collecting DataForSEO evidence, validating live search intent, analyzing competitors, auditing existing coverage, and scoring opportunities.

## Phase 8: Choose the content architecture

Use the smallest set of pages that covers distinct intent without overlap.

### Pillar guide

Use when the query is broad, definitional, and supported by many distinct subquestions. The pillar summarizes the full topic and links to narrower spokes.

### How-to guide

Use when the reader needs to complete a process. Include prerequisites, ordered steps, examples, validation, and common failure modes.

### Comparison

Use when the reader is choosing between methods, products, or approaches. Put the decision table near the top and state who should choose each option.

### Buyer guide or tool roundup

Use when the SERP rewards product evaluation. Publish the test method, selection criteria, limitations, pricing date, and best-fit recommendation for each option.

### Original research

Use when Lantern can publish unique market, prompt, citation, or competitor data. Include methodology, sample size, collection period, limitations, downloadable charts, and reusable findings.

### Template or calculator

Use when the reader's real goal is to produce an artifact or answer a numeric question. The useful tool is the primary experience; explanatory copy supports it.

### Commercial page

Use when product and service pages dominate. Route the request away from blog production and brief a dedicated landing page.

## Phases 9–13: Production and publication

Load [production guidance](./references/production.md) before creating the research packet, content brief, draft, QA review, and publication package.

Apply [evidence standards](./references/evidence-standards.md) to every claim, metric, and platform fact: name the source and access date, use confidence labels, and never cite FAQ or HowTo rich results as a benefit (Google no longer shows them).

## Scale workflow

When producing multiple articles, use a controlled queue:

```text
idea
→ researched
→ intent validated
→ prioritized
→ brief approved
→ drafted
→ fact checked
→ localized
→ editorial review
→ published
→ indexed
→ measured
→ refreshed or consolidated
```

Only one status may apply at a time. A draft cannot skip from `idea` to `published`.

Batch work by stage rather than generating many complete articles simultaneously:

1. Research all candidate clusters.
2. Approve the opportunity map.
3. Brief the highest-priority cluster.
4. Draft a small batch.
5. Run trust and editorial QA.
6. Publish gradually and measure.

This preserves consistency while allowing weak assumptions to be corrected before they spread across dozens of drafts.

## Stop conditions

Stop and return `blocked` when:

- The product cannot support the searcher's need.
- Search intent is dominated by an unrelated meaning.
- The proposed article would cannibalize an existing page.
- No credible source supports a central claim.
- A comparison cannot be made fairly with available evidence.
- Localization cannot be reviewed by a fluent market expert.
- Original research lacks a defensible method or sample.

State the blocker and the smallest action required to continue.

## Anti-patterns

- Starting with a title and writing from memory.
- Treating keyword volume as the only priority signal.
- Calling paid-search competition organic difficulty.
- Producing near-duplicate pages for every keyword variation.
- Translating an article without rerunning local research.
- Copying competitor headings or prose.
- Inflating length with repeated definitions.
- Publishing comparison content without a disclosed method.
- Hiding weak evidence behind confident language.
- Adding unsupported statistics for persuasion.
- Generating dozens of drafts before validating one complete workflow.
- Publishing without a commercial hub, internal links, ownership, and refresh date.

## Completion checklist

- Business truth and conversion goal established.
- Country, language, and search engine selected correctly.
- DataForSEO research collected and dated.
- Live localized Google results inspected.
- Competitors analyzed by format, evidence, strengths, and gaps.
- Existing-site coverage and cannibalization checked.
- Opportunity scored across business fit, intent, demand, winnability, evidence, and internal-link value.
- Content type selected from observed intent.
- Research packet completed before drafting.
- Brief contains a real outline, evidence plan, and conversion path.
- Draft is answer-first, original, sourced, and locally fluent.
- All five QA gates passed.
- Publication package includes metadata, schema, internal links, and update cadence.
- Human approval obtained for factual, legal, localization, and publication decisions.