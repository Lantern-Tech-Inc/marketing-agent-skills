---
name: trust-qa
description: "Fact-check content claims, verify statistics and sources, and produce a scored trust report before publication. Use for editorial QA, citation verification, factual review, and hallucination prevention."
---

# Trust QA Agent Skill - Lantern

Purpose: fact check content claims, verify statistics and attributions, and produce a scored trust report before a piece is published. This agent is the honesty gate for everything the Content Agent and Pillar Article Agent produce. A page that reads well but contains a fabricated statistic or a misattributed quote is a liability, not an asset, especially since AI engines increasingly cross check claims before citing a source, and a caught fabrication damages the whole domain's trust, not just one page.

This agent does not soften or rewrite the draft's voice. It checks whether what the draft asserts is actually true and properly sourced, and reports exactly where it is not.

## Phase 1: Claim extraction

Read the draft and pull out every checkable factual assertion: statistics, dates, prices, named results, named customers or sources, direct quotes, and specific comparative claims (faster than, cheaper than, more than). Separate these from opinion, brand voice, and subjective framing, which are not fact checkable and should not be flagged as unverifiable simply for being subjective.

List each claim individually rather than checking the piece as a whole, since a single paragraph can contain one verified fact and one fabricated one sitting side by side.

## Phase 2: Verification

For each claim, check it against an authoritative or original source, not a secondary source repeating the same number without attribution. Note the source used for verification directly in the report so a human reviewer can double check the check itself.

Classify each claim as one of: verified against a credible source, plausible but unverifiable with available sources, outdated (was once true, source shows it has since changed), or contradicted by available sources. Do not default to verified simply because a claim sounds reasonable or matches general expectations.

## Phase 3: Attribution and quotation check

For any quote or named attribution in the draft, confirm the quote is accurately worded and correctly attributed to the actual speaker or source, not paraphrased and presented as a direct quote. Flag any quote that cannot be traced to a real, findable source.

Confirm any cited statistic includes enough context to not be misleading on its own, for example a percentage without the base number it is calculated from, which can misrepresent the underlying reality even when the number itself is technically accurate.

## Phase 4: Scoring

Score the piece at two levels. Per claim, using the four category classification from Phase 2. And overall, as a simple proportion of claims verified versus flagged, so a reviewer can see at a glance whether a piece is mostly solid with one or two issues, or broadly unreliable and needing a substantial rewrite before publication.

Do not average away a single serious issue, such as a fabricated statistic or a misattributed quote, into a generally positive overall score. Flag serious issues prominently regardless of how the rest of the piece scores.

## Phase 5: Output and recommendations

For every flagged claim, recommend a specific fix: add a citation to a specific source, soften the claim to what can actually be supported, or remove it entirely if no support exists. Do not simply mark a claim as a problem without stating what should happen to it next.

## Output structure

A scored trust report listing every extracted claim, its verification status, the source used to check it (or the reason it could not be verified), and a specific recommended fix for anything not fully verified, plus an overall proportion score for the piece.

## Anti-patterns

Rubber stamping a draft as verified without actually checking claims against original sources, just because the draft reads confidently.

Treating an inability to find a source as proof the claim is false, rather than correctly classifying it as unverifiable and recommending it be sourced or softened.

Flagging subjective or opinion based statements as factual problems when they are not fact checkable claims in the first place.

Averaging a serious fabrication into a generally acceptable overall score instead of surfacing it prominently regardless of the rest of the piece.

Checking a claim against a source that itself just repeats the number without an original citation, rather than tracing back to the actual origin of the figure.

## Quick checklist

Every checkable factual claim extracted individually, separated from opinion and brand voice.

Each claim checked against an original or authoritative source, with that source noted in the report.

Each claim classified as verified, plausible but unverifiable, outdated, or contradicted, not defaulted to verified without a real check.

Quotes and attributions checked for accurate wording and correct sourcing, not paraphrase presented as direct quote.

Statistics checked for missing context that could make them misleading even if technically accurate.

Overall score calculated as a proportion, with serious individual issues flagged prominently rather than averaged away.

Every flagged claim given a specific recommended fix: cite, soften, or remove.
