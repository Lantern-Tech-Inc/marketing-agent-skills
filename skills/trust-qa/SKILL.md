---
name: trust-qa
description: "Fact-checks every checkable claim in a draft against original sources, verifies quotes, attributions, statistics context, and links, then issues a severity-rated trust report with a publish verdict (pass, needs_review, block). Use for editorial QA, citation verification, fact-checking, hallucination prevention, and pre-publication review."
license: MIT
metadata:
  version: "1.0.0"
  status: stable
  author: Lantern
---

# Trust QA

Purpose: act as the honesty gate before publication for drafts from `content`, `pillar-article`, `faq-generator`, `industry-content-production`, or a human writer. A page that reads well but contains a fabricated statistic or a misattributed quote is a liability. This skill checks whether what the draft asserts is true and properly sourced, and reports exactly where it is not. It does not rewrite the draft's voice. Source hierarchy and confidence labels are in [references/evidence-standards.md](references/evidence-standards.md).

## When to use this skill

Use before publishing any content with factual claims, when a draft contains `[NEEDS SOURCE]` markers, or when the user asks to fact-check or verify sources.

Do not use when:

- The user wants style or voice edits only. Edit directly; no trust review is needed.
- The user wants to verify AI-engine visibility claims about a brand. Use `competitor-audit`.

## Required inputs

```yaml
draft: ""                  # text, file, or URL
source_list: []            # optional: sources the writer used
brand_facts: []            # optional: authoritative brand pages/docs for brand claims
publish_context: ""        # e.g. blog, regulated industry, press release
```

## Workflow

```text
- [ ] 1. Every checkable claim extracted individually
- [ ] 2. Each claim traced to an original/authoritative source
- [ ] 3. Each claim classified (verified/unverifiable/outdated/contradicted)
- [ ] 4. Quotes, attributions, statistic context, and links checked
- [ ] 5. Severity assigned; verdict computed by rule
- [ ] 6. Specific fix recommended per flagged claim
```

1. **Extract.**
   - List every checkable assertion individually: statistics, dates, prices, named results, named customers or sources, direct quotes, comparative claims ("faster than", "cheapest"), and legal, medical or financial statements.
   - Include every `[NEEDS SOURCE]` marker.
   - Exclude opinion, brand voice and subjective framing. They are not fact-checkable and should not be flagged as unverifiable.
2. **Trace.**
   - Check each claim against an original or authoritative source following the source hierarchy in [references/evidence-standards.md](references/evidence-standards.md).
   - A secondary page repeating a number without citing anything is not verification. Follow it back to the origin.
   - Record the URL and access date for every check.
3. **Classify** each claim:
   - `verified`: matches a credible original source.
   - `unverifiable`: plausible, but no adequate source was found. This is not proof that it is false.
   - `outdated`: was true, but the source now shows a change.
   - `contradicted`: credible sources say otherwise.

   Never default to `verified` because a claim sounds reasonable.
4. **Attribution and context.**
   - Quotes must be verbatim and attributed to the real speaker. Flag paraphrases presented as quotes.
   - Statistics need their base, date and population. A percentage without its base can mislead even when it is accurate.
   - Every cited link must resolve and support the specific claim.
5. **Severity and verdict.**
   - `critical`: a contradicted or fabricated claim, a misattributed or invented quote, an unverifiable claim that is central to the piece, or a risky regulated-topic claim.
   - `major`: an outdated claim, missing statistic context, or a link that does not support the claim.
   - `minor`: an unverifiable peripheral claim, or imprecise wording.

   Apply this verdict rule:
   - **block** if any claim is `critical`
   - **needs_review** if any claim is `major`, or if minor issues are more than 20% of claims
   - **pass** otherwise

   Never let a high verified share mask a critical issue.
6. **Fix.** For every flagged claim, recommend one specific action:
   - cite a specific source (give the URL)
   - soften the claim to what the evidence supports (give the wording)
   - remove the claim

## Output template

```markdown
# Trust report: <draft title> — <date>

**Verdict:** pass | needs_review | block
**Summary:** <n> claims · <v> verified · <u> unverifiable · <o> outdated · <c> contradicted · verified share <v/n>%

## Critical issues (listed first, always)
## Claims
| # | Claim (quoted) | Location | Status | Severity | Source checked (URL, accessed) | Fix |

## Links checked
| URL | Resolves | Supports claim |
```

## Approval gates

Do not edit the draft or the published page directly unless asked. Report only. A `block` verdict cannot be overridden by this skill. Only the user can choose to publish anyway.

## Stop conditions

- The draft cannot be accessed.
- You have no web or source access. Report every claim as `unverifiable — no access`. Do not guess.

## Anti-patterns

- Rubber-stamping a draft because it reads confidently.
- Treating "no source found" as proof that a claim is false.
- Flagging opinions as factual problems.
- Averaging a fabrication into an acceptable overall score.
- Verifying a claim against a page that just repeats it.
- Skipping link resolution checks.

## Completion checklist

- [ ] Every checkable claim and every `[NEEDS SOURCE]` marker extracted individually
- [ ] Each claim checked against an original source, with URL and access date
- [ ] Classified honestly. Nothing defaulted to verified
- [ ] Quotes verbatim and attributed. Statistic context and links checked
- [ ] Severity assigned and verdict computed by the rule. Critical issues listed first
- [ ] Every flagged claim has a specific fix
