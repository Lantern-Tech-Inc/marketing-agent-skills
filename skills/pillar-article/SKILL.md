---
name: pillar-article
description: "Plans and writes a comprehensive hub (pillar) article that covers a broad topic's full subtopic breadth, links to spoke pages in both directions, and gives precise, sourced, citable answers section by section. Use for pillar pages, topic hubs, cornerstone content, entity authority, and topic clusters."
license: MIT
metadata:
  version: "1.0.0"
  status: beta
  author: Lantern
---

# Pillar Article

Purpose: create the hub of a content silo, the single page that could plausibly be cited for almost any reasonable question within its topic. Spoke pages (written with `content`) go deep on individual sub-questions. The pillar differs from a standard article in scope and role, not just length. A long post without the hub-and-spoke link architecture has not done its job.

Shared rules:

- [references/query-types.md](references/query-types.md) covers classification and titles.
- [references/writing-and-titling.md](references/writing-and-titling.md) covers writing rules.
- [references/evidence-standards.md](references/evidence-standards.md) covers sourcing and current platform facts.

## When to use this skill

Use for pillar pages, hubs, cornerstone guides, or when a cluster map shows a topic broad enough for multiple spokes.

Do not use when:

- The topic is a single focused query. Use `content`.
- The user wants an industry-specific multi-asset package with social and email. Use `industry-content-production`.

## Required inputs

```yaml
topic: ""
brand:
  name: ""
  website: ""
  offer: ""
market:
  country: ""
  language: ""
existing_spokes: []         # URLs of existing related pages
prior_findings:             # optional, reuse instead of re-researching
  keyword_clusters: ""      # keyword-research output
  competitor_audit: ""      # competitor-audit output
voice_sample: ""
sources: []
```

## Workflow

```text
- [ ] 1. Full subtopic breadth scoped from clusters, gaps, competitors
- [ ] 2. Each subtopic assigned: pillar section or spoke (existing/new)
- [ ] 3. TOC + sub-question H2 outline built
- [ ] 4. Title tag and meta written
- [ ] 5. Draft written; each section answer-first and self-contained
- [ ] 6. Definitions and claims sourced or flagged
- [ ] 7. Two-way link map + spoke update list produced
- [ ] 8. scripts/check-draft.mjs passes; manual checklist passes
```

1. **Scope breadth.**
   - Build the full subtopic list, not just the query that inspired the page.
   - Use the clusters from `keyword-research`, the whitespace and gaps from `competitor-audit`, and what competitor hub pages cover. Note retrieval dates.
2. **Assign.**
   - A core subtopic becomes a pillar section.
   - A subtopic that deserves standalone depth becomes a spoke. Link the existing page, or list a new spoke for `content-brief`.
3. **Outline.**
   - Put a table of contents at the top.
   - Write each H2 as a real sub-question.
   - Pick the format per section using [references/query-types.md](references/query-types.md).
4. **Title and meta.**
   - Follow the title rules in [references/query-types.md](references/query-types.md): a broad, definitive pattern, about 50–60 characters.
   - Meta description of about 155 characters or fewer, not duplicating the title.
5. **Draft.**
   - Each section answers its sub-question completely enough on its own, then links to the spoke for depth. Readers should never have to leave to get the core answer.
   - Apply [references/writing-and-titling.md](references/writing-and-titling.md) within every section: answer first, short paragraphs, one idea per paragraph.
   - This structure is for readers and clarity. Do not chop content into artificial "AI chunks".
6. **Definitions and evidence.**
   - State precise, checkable definitions of central entities early.
   - Source every statistic or factual claim, or mark it `[NEEDS SOURCE]` for `trust-qa`.
   - Coverage is about breadth across real subtopics, not word count. Cut restatement.
7. **Link architecture.**
   - The pillar links out to every relevant spoke, using a labeled per-subtopic structure so new spokes can be added without a rewrite.
   - List every existing spoke that needs a link back to the pillar, with suggested anchor text.
   - Set a review date for the link section.
8. **Check.**
   - Run `node scripts/check-draft.mjs draft.md` and fix every `fail`.
   - Then check manually: breadth, links in both directions, and section self-sufficiency.

**Structured data:** `Article` and `BreadcrumbList` are appropriate. Do not recommend FAQPage or HowTo markup for rich results; Google no longer shows either (see [references/evidence-standards.md](references/evidence-standards.md)). Markup must match visible content.

## Output template

```markdown
---
title: "<title tag>"
meta_description: "<meta>"
status: publish_ready | needs_trust_qa
next_link_review: <date>
---

# <H1>
## Contents
…sections…

---
## Subtopic map
| Subtopic | Pillar section / spoke | Spoke URL or "new → content-brief" |

## Link map
| Direction | From | To | Anchor |
## Spokes needing inbound link updates
## Sources
| # | Claim | URL | Accessed | Confidence |
## Flagged claims for trust-qa
## Structured data: Article, BreadcrumbList
## Check results
```

## Approval gates

- Do not publish, and do not edit existing spoke pages to add backlinks, without explicit permission. Deliver the update list instead.
- Get approval before making competitor comparisons or regulated claims.

## Stop conditions

- The topic is too narrow for a hub (fewer than about 4 distinct subtopics). Recommend `content` instead.
- The central definition or claim cannot be sourced.

## Anti-patterns

- Using length as a substitute for breadth.
- No spoke links, or one-way links only.
- Looser structure "because it's long".
- A stale link section after new spokes are published.
- Scoping only from the triggering query.
- Promising FAQ or HowTo rich results.
- Restructuring purely "for AI" instead of for readers.

## Completion checklist

- [ ] Breadth scoped from clusters, gaps and competitors, with dates
- [ ] Every subtopic assigned to a section or spoke
- [ ] Table of contents, sub-question H2s, and each section self-sufficient
- [ ] Definitions early. Claims sourced or flagged
- [ ] Two-way link map and spoke update list. Review date set
- [ ] Only Article and Breadcrumb schema recommended
- [ ] `check-draft.mjs` passes. Status set honestly
