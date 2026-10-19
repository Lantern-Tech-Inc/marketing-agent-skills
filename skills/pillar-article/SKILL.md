---
name: pillar-article
description: "Create a comprehensive long-form pillar article designed for topical authority and citation across many AI prompts. Use for content hubs, topic clusters, definitive guides, and entity authority."
---

# Pillar Article Agent Skill - Lantern

Purpose: create long form, comprehensive articles that establish entity authority on a broad topic and are built to be cited across many different AI prompts, not just one. A pillar article is the hub of a content silo. It should be the single page that, if someone asked an AI engine almost any reasonable question within its topic, could plausibly be the source cited back. Spoke pages produced by the Content Agent then go deep on the individual sub-questions the pillar can only summarize.

The difference from a standard Content Agent draft is scope and role, not just length. A pillar page that is simply a longer blog post without the hub and spoke linking architecture has not done its job.

## Phase 1: Topic and entity scoping

Define the full breadth the pillar needs to cover to be genuinely comprehensive on its subject, not just the one query that inspired it. Pull this from three sources where available: keyword cluster research showing the full set of related queries, GEO Agent output showing which sub-topics currently have no strong citation source for anyone, and Competitor Audit output showing which sub-topics a competitor's own pillar-equivalent page covers.

List every subtopic the pillar must at least address. Each one becomes either a section within the pillar itself, if it is core enough to the topic to need visible coverage, or a linked-out spoke page if it deserves full standalone depth of its own.

## Phase 2: Structure

Build a table of contents at the very top, since pillar length makes this a navigability requirement rather than an optional nicety.

Each major subtopic gets its own H2, written the same way as the Content Skill specifies, as a real sub-question rather than a generic label. Under each H2, give enough standalone depth to actually answer that sub-question completely, then link out to the dedicated spoke page for anyone who wants the fuller treatment. The pillar should never make a reader feel like they have to leave to get a real answer to the section's core question, it should make them feel like they can go deeper if they want more.

Do not let the pillar collapse into an unstructured wall of text just because it is long. The paragraph chunking, transition word, and one idea per paragraph rules from the Content Skill still apply within every section.

## Phase 3: Entity and authority signals

Use precise, checkable definitions early for any entity or concept central to the topic. A pillar page benefits disproportionately from being the place that states the plainest, most accurate definition of the core entity, since that is exactly the kind of sentence AI engines extract for definitional prompts.

Ensure comprehensive coverage is real, not simulated by length. A pillar that spends three paragraphs restating the same point to hit a word count is weaker than one that covers ten distinct subtopics concisely. Depth of coverage across the topic's real breadth is the actual authority signal, not raw word count.

Flag where structured data (FAQ schema, how to schema, or article schema depending on the subtopics covered) applies, since a pillar page is often the strongest candidate on the site for structured data markup given how many distinct question types it answers in one place.

## Phase 4: AI optimization pass

Apply the same answer first and extractability rules from the Content Skill to every section individually, not just the page's opening. Because a pillar is meant to be citable for many different prompts, each section needs to stand on its own as an extractable, quotable answer to its specific sub-question, the same discipline as a standalone blog post applied section by section throughout a much longer page.

## Phase 5: Internal link architecture

The pillar is the hub. It must link out to every relevant existing spoke page, and be structured so that new spoke pages can be added to its linking without a full rewrite, for example a clearly labeled list or section per subtopic that a new link can be dropped into.

Every relevant spoke page should also link back up to the pillar. If those spoke pages already exist, note explicitly where their internal links need to be added or updated as part of this agent's output, since this is often missed when a pillar is added after its spokes already exist.

Treat the pillar as a living document. As new spoke pages are created later, the pillar's internal link section needs a scheduled update rather than being left to go stale.

## Output

A full pillar draft including: title and meta per the Titling Skill, a table of contents, section by section coverage of every core subtopic with links out to relevant spoke pages, precise definitions of central entities, a note of which structured data types apply, and an internal link map showing both outbound links to spokes and where spoke pages need inbound links added back to the pillar.

## Anti-patterns

Treating length as a substitute for actual comprehensive coverage of the topic's real breadth.

Producing a pillar with no links out to spoke pages, leaving it an isolated long page rather than the hub of a silo.

Writing the whole pillar as one continuous voice without the same paragraph and extractability discipline used in standalone posts, on the assumption that length excuses looser structure.

Letting the pillar's internal link section go stale as new spoke pages are published later without being added back in.

Skipping the subtopic scoping step and starting from only the single query that prompted the pillar, resulting in a page that is long but not actually comprehensive across the topic's full breadth.

## Quick checklist

Full subtopic breadth scoped before writing, using keyword clusters, GEO Agent gaps, and Competitor Audit findings where available.

Table of contents present given the page's length.

Each subtopic has its own real sub-question H2, standalone depth, and a link out to its dedicated spoke page.

Paragraph chunking and answer first extractability rules applied within every section, not just the opening.

Precise, checkable definitions given for central entities early in the page.

Structured data opportunities flagged by type.

Internal link map complete in both directions: pillar to spokes, and spokes back to pillar, with a note on which spoke pages need updating.

Title and meta produced per the Titling Skill.
