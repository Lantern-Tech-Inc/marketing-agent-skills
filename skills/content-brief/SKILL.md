---
name: content-brief
description: "Turns a topic or keyword into a research-backed execution brief that decides audience, intent, scope, angle, outline with per-section formats and evidence requirements, FAQ, and internal links. Use before drafting SEO, GEO, AEO, or editorial content, or when a writer needs a brief."
license: MIT
metadata:
  version: "1.0.0"
  status: stable
  author: Lantern
---

# Content Brief

Purpose: produce a decision document that the `content` or `pillar-article` skill can execute with no further guessing. A brief is not a summary of the topic. It answers every open question about what the page should be: who it is for, what it must cover, what it must prove, what it should look like, and what it links to.

Shared rules:

- [references/query-types.md](references/query-types.md) covers classification, title patterns and funnel stage.
- [references/writing-and-titling.md](references/writing-and-titling.md) covers the writing rules the draft will follow.
- [references/evidence-standards.md](references/evidence-standards.md) covers sources and confidence.

## When to use this skill

Use when the user wants a brief, outline, or plan for a page before writing, or when a writer or another skill needs one.

Do not use when:

- The user wants the finished article now. Use `content`, which can build its own outline.
- The topic needs a hub-and-spoke plan. Use `pillar-article`, which includes spoke planning.
- The user wants a full multi-asset industry package. Use `industry-content-production`.

## Required inputs

```yaml
target_query: ""
brand:
  name: ""
  website: ""
  offer: ""
market:
  country: ""
  language: ""
voice_sample: ""           # optional: URL or text of existing brand copy
existing_pages: []         # optional
prior_findings: ""         # optional: competitor-audit / keyword-research output
first_hand_assets: []      # optional: data, case studies, experts the brand can contribute
```

## Workflow

```text
- [ ] 1. Query type, funnel stage, scope (is / is not) stated
- [ ] 2. Live results + prior findings reviewed; whitespace angle chosen
- [ ] 3. Audience, prior knowledge, and reader outcome stated
- [ ] 4. Voice reference identified
- [ ] 5. Outline with formats, depth, and evidence required per section
- [ ] 6. FAQ, internal links, title options, and CTA planned
- [ ] 7. Brief assembled; open questions listed
```

1. **Classify.**
   - Assign the query type and funnel stage using [references/query-types.md](references/query-types.md).
   - State in one sentence what the page is, and in one sentence what it is not. Scope creep in a brief produces an unfocused draft.
2. **Research.**
   - Review live results for the exact query, or reuse `competitor-audit` / `keyword-research` findings, with retrieval dates.
   - Record which format is winning, what the strongest pages do structurally, and which sources AI engines cite for this topic, if known.
   - Choose a whitespace angle the brand can credibly own, preferably based on first-hand or non-commodity material. If you have no live access, label the research as `assumption`.
3. **Audience and intent.**
   - Describe the actual searcher in concrete terms: what they already know and what they are missing.
   - State in one sentence what the reader should be able to do or decide after reading. If that takes more than one sentence, split the topic.
4. **Voice.** Point to a specific brand voice sample provided by the user, or to existing on-site copy by URL. If neither exists, list that as an open question. Do not invent a generic tone label.
5. **Outline.**
   - Planned H1, matching the query near verbatim.
   - Planned H2s written as real sub-questions, each with:
     - a format (table, steps, list, grouped by period, prose)
     - a depth guide (approximate words)
     - the evidence required, such as "current price range from 2+ provider pages" or "first-hand quote from brand expert"
   - Evidence requirements prevent writers from filling gaps with invention.
6. **Supporting plan.**
   - 3–6 FAQ questions drawn from adjacent long-tail variants the body will not answer.
   - Internal links out, and links back from a pillar page if one exists.
   - 2–3 title tag options following the pattern for the query type.
   - One CTA that matches the funnel stage.
7. **Assemble** using the template. List open questions the user must answer before drafting.

## Output template

```markdown
# Brief: <target query>

| Field | Value |
|---|---|
| Query type / funnel stage | |
| Scope — is | |
| Scope — is not | |
| Audience & prior knowledge | |
| Reader outcome (one sentence) | |
| Angle / whitespace | |
| Voice reference | |
| CTA | |

## Competitive context (accessed <date>)
| URL | Format | Strength | Gap |

## Outline
| # | H2 (sub-question) | Format | ~Words | Evidence required | Source hints |

## FAQ
## Internal links (out / in)
## Title options
## Sources
| Claim/area | URL | Accessed | Confidence |
## Open questions for the user
```

## Approval gates

Get user confirmation of scope, angle and CTA before handing the brief to a writing skill when the topic is commercially sensitive. That includes pricing, competitor comparisons, and regulated topics.

## Stop conditions

- The target query has mixed or unclear intent that research cannot resolve. Present the options instead.
- The brand cannot credibly support the only viable angle, for example because it has no product or expertise in the topic.

## Anti-patterns

- Summarizing the topic instead of making the decisions.
- Briefing from assumption without reviewing live results, or without labeling the gap.
- Leaving formats or evidence requirements unassigned per section.
- Generic personas that could apply to any query.
- Covering two topics in one brief.
- Planning FAQPage or HowTo schema for rich-result gains. Those rich results are gone.

## Completion checklist

- [ ] Query type, funnel stage and is/is-not scope stated
- [ ] Research dated, or labeled `assumption`. Angle justified
- [ ] Concrete audience and a one-sentence reader outcome
- [ ] Specific voice reference, or an open question
- [ ] Every H2 has a format, depth and evidence requirement
- [ ] FAQ, internal links, title options and CTA planned
- [ ] Open questions listed
