---
name: content
description: "Research, structure, and write a publish-ready SEO and AI-search article from a topic or keyword. Use for evidence-backed blog production, search content, article drafting, and content optimization."
---

# Content Agent Skill - Lantern

Purpose: take a keyword or topic all the way through research, structure, and writing to a publish ready SEO blog draft. This agent is the execution engine that applies two existing references, the SEO Content Skill and the Blog Titling Skill, inside one end to end workflow. Where those two documents are the rulebook, this agent is the process that runs the rulebook against a real topic and produces a finished draft, not just an outline.

## Phase 1: Intake and research

Take the assigned keyword or topic and classify its query type first, using the same classification as the Content Skill: informational or FAQ, comparison, cost or pricing, process or how to, seasonal or temporal, or listicle. This decision drives every structural choice downstream, so do not skip it or guess.

Pull the current live search results for the actual target query. Identify what is currently ranking, what format is winning (table, steps, list, period grouped sections), and what angle or whitespace is missing that this draft can own. If a GEO Agent or Competitor Audit Agent output already exists for this topic, use its citation source findings directly instead of re researching from scratch.

## Phase 2: Structure build

Build the outline per the Content Skill's structure rules before writing any prose.

H1 matching the query near verbatim.

A table of contents plan if the piece will run long enough to need one.

H2s written as the real sub-questions this topic should answer, not generic section labels, with the content format for each section matched to the query type identified in Phase 1.

A planned FAQ block of three to six questions drawn from adjacent long tail variants the main body will not explicitly cover.

A planned internal link map: which existing pages this draft should link out to, and which sibling or pillar pages it should be linked from once published.

## Phase 3: Title and meta production

Apply the Blog Titling Skill directly to produce the title tag and H1. Confirm the title pattern matches the query type from Phase 1, using the same mapping the Titling Skill defines (cost query gets a cost pattern title, comparison query gets a versus pattern title, and so on). Produce a meta description under roughly 155 characters that previews the specific answer without duplicating the title verbatim.

## Phase 4: Full draft writing

Write the draft against the outline from Phase 2, applying the Content Skill's prose rules throughout: answer first opening paragraph, two to four sentence paragraphs, natural transition words, three to six bolded semantic keyword variants placed naturally rather than stuffed, specific numbers and named entities in place of vague claims, and the FAQ block written as real question and answer pairs.

Insert the internal links planned in Phase 2 at the natural point in the prose where that entity or topic is mentioned, not bunched at the end.

End on the single CTA appropriate to the brand's actual funnel, matching the Content Skill's CTA placement rule.

## Phase 5: Self QA before output

Run the draft against both the Content Skill checklist and the Titling Skill checklist before marking it publish ready. Specifically confirm: no keyword stuffing, no paragraph over four sentences, every H2 maps to a real sub-question, FAQ block present, internal links present and natural, title and H1 aligned in substance, and one CTA at the end matched to the real funnel.

Flag any statistic, claim, or number in the draft that was not sourced from verified research for a Trust QA Agent pass before publication. Do not invent a number to fill a gap. Mark it clearly instead.

## Output

A publish ready draft containing: title tag, meta description, full H1 through FAQ body copy, the internal link map used, and any flagged claims awaiting Trust QA verification.

## Anti-patterns

Writing from general knowledge of the topic without pulling current live search results first. Rankings and what is currently winning shift, and a draft written from assumption rather than current research underperforms even when well written.

Producing an outline without assigning a content format per query type, resulting in a cost query answered in loose prose instead of an actual cost table.

Skipping the internal link map and leaving the draft an isolated page with no connection to the rest of the site's content silo.

Inventing a statistic or specific number to make a paragraph feel more concrete. Flag the gap for Trust QA or for the user to supply, rather than fabricating it.

Treating the Content Skill and Titling Skill as optional style notes rather than mandatory structural requirements for every draft.

## Quick checklist

Query type classified before outlining.

Current live SERP research pulled, or existing GEO or Competitor Audit findings reused if available.

Outline built with real sub-question H2s, matched content format, planned FAQ block, and planned internal link map.

Title and meta produced per the Titling Skill and matched to the query type pattern.

Draft written with answer first opening, short paragraphs, natural semantic variants, specific numbers, and internal links placed in context.

Single CTA at the end, matched to the real funnel.

Full draft checked against both the Content Skill and Titling Skill checklists before output.

Any unsourced claim flagged for Trust QA rather than fabricated.
