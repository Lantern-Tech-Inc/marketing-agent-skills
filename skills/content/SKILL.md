---
name: content
description: "Researches, structures, and writes a publish-ready SEO and AI-search article from a keyword or topic, including title tag, meta description, internal links, FAQ, and a list of claims needing verification. Use for blog production, article drafting, search content, and rewriting or optimizing an existing article."
license: MIT
metadata:
  version: "1.0.0"
  status: beta
  author: Lantern
---

# Content

Purpose: take a keyword or topic through research, structure, and writing to a publish-ready draft, not just an outline. The rules live in [references/query-types.md](references/query-types.md) and [references/writing-and-titling.md](references/writing-and-titling.md). This skill is the process that applies them to a real topic. Evidence rules are in [references/evidence-standards.md](references/evidence-standards.md).

## When to use this skill

Use when the user wants a finished article, or an existing article rewritten or optimized, for a single query or topic.

Do not use when:

- The user only wants a plan. Use `content-brief`.
- The topic is broad enough to need a hub with spokes. Use `pillar-article`.
- The user wants a multi-asset, industry-specific package (pillar, supporting articles, social, email). Use `industry-content-production`.
- The user only wants a standalone FAQ set. Use `faq-generator`.

## Required inputs

```yaml
target_query: ""          # keyword, prompt, or topic
brand:
  name: ""
  website: ""
  offer: ""               # what the CTA should lead to
market:
  country: ""
  language: ""
brief: ""                  # optional: content-brief output; if present, follow it
voice_sample: ""           # optional: URL or text of existing brand copy
existing_pages: []         # optional: URLs available for internal links
prior_findings: ""         # optional: competitor-audit / keyword-research output
sources: []                # optional: user-supplied facts, data, quotes
```

If `target_query` or `brand` is missing, ask. If `brief` exists, skip steps 1–2 except to check that the brief is still current.

## Workflow

```text
- [ ] 1. Query type, funnel stage, and scope classified
- [ ] 2. Live results and prior findings reviewed; angle chosen
- [ ] 3. Outline built (H1, sub-question H2s, formats, FAQ, link map)
- [ ] 4. Title tag and meta written
- [ ] 5. Draft written; every factual claim sourced or flagged
- [ ] 6. scripts/check-draft.mjs passes; manual checklist passes
- [ ] 7. Output assembled with source list and flagged claims
```

1. **Classify.**
   - Assign the query type and funnel stage using [references/query-types.md](references/query-types.md). This drives every structural choice. Do not guess. If the query is genuinely mixed, pick the dominant intent and say why.
   - Write one sentence stating what the page covers and one stating what it does not.
2. **Research.**
   - Review the current live results for the exact target query: which formats win, what the strongest pages do well, and what is missing.
   - Reuse existing `competitor-audit` or `keyword-research` findings instead of re-researching. Record retrieval dates.
   - Choose an angle based on first-hand or non-commodity value the brand can actually provide, such as data, experience, or specifics. If no live search access is available, say so and label the research as `assumption`.
3. **Outline.**
   - H1 that matches the query near verbatim.
   - H2s written as real sub-questions, each assigned a format that fits the query type (table, steps, list, grouped by period).
   - A table of contents if the piece is long.
   - A FAQ block of 3–6 adjacent long-tail questions the body does not answer.
   - An internal link map: pages to link out to, and pages that should link back here.
4. **Title and meta.**
   - Apply the title pattern for the query type from [references/query-types.md](references/query-types.md).
   - The title tag should be about 50–60 characters and aligned with the H1 in substance.
   - The meta description should be about 155 characters or fewer, preview the specific answer, and not repeat the title.
5. **Draft.** Follow [references/writing-and-titling.md](references/writing-and-titling.md):
   - Open with the answer. Keep paragraphs to 2–4 sentences.
   - Use specific numbers and named entities instead of vague claims. Use semantic variants naturally, with no keyword quota.
   - Place internal links where the entity is mentioned, not grouped at the end.
   - End with one CTA that matches the brand's real funnel.
   - **Every statistic, price, date, or named fact must trace to a source in the source list** (see [references/evidence-standards.md](references/evidence-standards.md)). If you cannot source a claim, mark it inline as `[NEEDS SOURCE]`. Never invent a number to fill a gap.
6. **Check.**
   - Save the draft with `title` and `meta_description` frontmatter and run:

     ```bash
     node scripts/check-draft.mjs draft.md
     ```

   - Fix every `fail`. Review each `warn`.
   - Then confirm the manual items the script cannot judge:
     - each H2 answers a real sub-question
     - the format matches the query type
     - no keyword stuffing
     - the CTA matches the funnel
   - Repeat until both pass.
7. **Output** using the template below.
   - If any `[NEEDS SOURCE]` markers remain, the status is `needs_trust_qa`, not `publish_ready`.
   - Hand off to `trust-qa`.

## Output template

```markdown
---
title: "<title tag>"
meta_description: "<meta>"
status: publish_ready | needs_trust_qa
query_type: <type>
funnel_stage: <stage>
---

# <H1>
<body … FAQ … CTA>

---
## Internal link map
| Anchor | Target URL | Direction (out/in) |

## Sources
| # | Claim | Source URL | Accessed | Confidence |

## Flagged claims for trust-qa
| Claim | Reason (unsourced / outdated / conflicting) |

## Check results
<check-draft.mjs JSON summary>
```

## Approval gates

- Do not publish or push to a CMS. Deliver the draft only, unless the user explicitly asks and grants access.
- Get approval before naming competitors negatively, quoting real people, or making legal, medical, or financial claims.

## Stop conditions

- The query's intent cannot be determined and the user is unavailable to clarify.
- The topic requires regulated advice (medical, legal, financial) and there is no qualified source or reviewer.
- The core claim of the article cannot be sourced. Report this instead of drafting around it.

## Anti-patterns

- Writing from general knowledge without checking current results.
- Answering a cost query in loose prose instead of a cost table, or making any other format mismatch.
- Forcing a fixed count of bolded keywords, or stuffing variants.
- Inventing statistics, quotes, or sources to make prose feel concrete.
- Adding FAQPage or HowTo schema for rich results. Neither shows as a rich result any more (see [references/evidence-standards.md](references/evidence-standards.md)).
- Rewriting content "for AI" with artificial chunking or `llms.txt`-style tricks. Google says these are unnecessary.
- Skipping the internal link map and leaving the page orphaned.

## Completion checklist

- [ ] Query type, funnel stage and scope stated
- [ ] Live results reviewed (or labeled `assumption`). Angle based on real value the brand provides
- [ ] Outline has sub-question H2s, assigned formats, FAQ and link map
- [ ] Title and meta follow the rules. H1 aligned
- [ ] Every factual claim is sourced or marked `[NEEDS SOURCE]`
- [ ] `check-draft.mjs` passes with no `fail`. Manual checks done
- [ ] Status set honestly. Flagged claims handed to `trust-qa`
