---
name: faq-generator
description: "Creates brand-aligned FAQ sets sourced from real customer, search, and sales questions, with answer-first copy, placement recommendations, source and review dates per answer. Use for FAQ sections or pages, help-center content, support deflection, answer-engine content, and question research."
license: MIT
metadata:
  version: "1.0.0"
  status: beta
  author: Lantern
---

# FAQ Generator

Purpose: build an FAQ set that does two jobs. It lets real customers serve themselves and reduces support load. It also gives search and AI engines clear, self-contained, accurate answers to definitional and validation questions. Writing rules are in [references/writing-and-titling.md](references/writing-and-titling.md). Sourcing rules are in [references/evidence-standards.md](references/evidence-standards.md).

Important platform fact (see [references/evidence-standards.md](references/evidence-standards.md)): Google no longer shows FAQ rich results. Do not promise rich results from FAQPage markup. FAQs earn their value through on-page usefulness, support deflection, and being a clear answer source.

## When to use this skill

Use for FAQ pages, FAQ blocks on product or pricing pages, help-center question sets, or researching which questions customers ask.

Do not use when:

- The user wants a full article where a FAQ is only one section. Use `content`, which writes the FAQ itself.
- The user wants legal or policy text such as terms or refunds written from scratch. That needs a qualified owner. This skill can only phrase questions about existing approved policy.

## Required inputs

```yaml
brand:
  name: ""
  website: ""
scope: ""                   # product, page, or topic area the FAQ covers
market:
  country: ""
  language: ""
question_sources:           # provide whatever exists
  support_tickets: ""       # export, summary, or "none"
  sales_objections: ""
  search_data: ""           # PAA/autocomplete/GSC queries
  prior_findings: ""        # competitor-audit / keyword-research prompt results
fact_sources: []            # pricing pages, policy docs, product docs (authoritative answers)
voice_sample: ""
```

If you have no question sources and no fact sources, stop and ask. Do not invent questions or answers.

## Workflow

```text
- [ ] 1. Questions collected from real sources, each tagged with origin
- [ ] 2. Questions deduplicated, prioritized, grouped into themes
- [ ] 3. Answers written answer-first from authoritative fact sources
- [ ] 4. Placement recommended per question
- [ ] 5. Volatile answers given an owner and review date
- [ ] 6. Output assembled; unanswerable questions listed
```

1. **Collect.** Gather questions from:
   - support tickets, chat logs and sales objections (the questions that cost the business time)
   - People Also Ask, autocomplete and Search Console queries
   - validation prompts already found by `competitor-audit` or `keyword-research` ("is X legit", "how does X compare")
   - objections customer-facing teams recognize by name

   Tag each question with its origin. Mark a question as `assumption` only if the user explicitly asks for proactive questions.
2. **Prioritize.**
   - Score each question by frequency (ticket count or search demand, where known) multiplied by the friction a good answer removes.
   - A frequent question with a simple answer beats a rare, complicated one.
   - Deduplicate near-identical phrasings.
   - Group the questions into themes.
3. **Answer.**
   - Put the direct answer in the first sentence, then 1–3 supporting sentences. Use a short numbered list only for genuine processes.
   - Every factual answer (price, limit, policy, timeline) must come from a listed fact source and carry its URL and access date.
   - If no source exists, mark the answer `[NEEDS SOURCE]` and leave it out of the publish set.
   - Prefer specific, checkable statements to vague reassurance.
   - Match the voice sample.
4. **Place.**
   - Put broad, cross-cutting questions on the FAQ page.
   - Embed page-specific questions on the relevant product, pricing or content page.
   - Do not default every question to one page.
   - Keep each Q&A self-contained so it still makes sense when quoted alone.
5. **Freshness.** For any answer that depends on something that changes (price, policy, feature, legal), record an owner and a review date. The default review cycle is 90 days unless the user specifies another.
6. **Assemble** using the template.

## Output template

```markdown
# FAQ set: <scope> — <date>

## Theme: <name>
| # | Question | Answer | Origin | Priority | Placement | Source (URL, accessed) | Volatile? | Owner | Review by |

## Not publishable yet
| Question | Why (no source / needs policy owner / conflicting sources) |

## Notes
- Markup: optional FAQPage JSON-LD is harmless but yields no Google rich result; do not report it as a ranking or visibility tactic.
```

## Approval gates

- Answers about pricing, refunds, legal, security, compliance or health need sign-off from the policy owner before publishing.
- Do not publish to a CMS or help center without explicit permission.

## Stop conditions

- There are no real question sources and the user will not supply any.
- The authoritative sources contradict each other, for example the pricing page and the docs disagree. Report the conflict instead of choosing one.

## Anti-patterns

- Inventing a plausible-sounding question list.
- Burying the answer under setup.
- Flat, ungrouped lists.
- Time-sensitive answers with no owner or review date.
- Promising rich results or rankings from FAQ schema.
- A generic support tone disconnected from the brand voice.

## Completion checklist

- [ ] Every question has a real, tagged origin
- [ ] Prioritized, deduplicated and grouped into themes
- [ ] Every answer leads with the answer, and every factual answer has a source and access date
- [ ] Placement recommended per question
- [ ] Volatile answers have an owner and a review date
- [ ] Unsourced or conflicting items listed separately, not published
