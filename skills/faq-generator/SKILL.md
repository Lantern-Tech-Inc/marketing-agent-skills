---
name: faq-generator
description: "Create brand-aligned FAQs that support customers and improve visibility in classic and AI search. Use for FAQ sections, answer-engine content, support deflection, and question research."
---

# FAQ Generator Agent Skill - Lantern

Purpose: create a comprehensive, brand aligned FAQ section that does two jobs at once. It lets real customers self serve and reduces support load, and it captures the validation and definitional style questions that both classic search and AI engines pull FAQ style answers from directly. An FAQ built only for one of these two goals underperforms on the other, so both should be considered together rather than treating this as a pure support task or a pure SEO task.

## Phase 1: Question sourcing

Pull real questions from every available source rather than inventing a plausible sounding list from general assumptions.

Actual support tickets, chat logs, or sales call objections if available, since these are the questions genuinely costing the business time and the ones an FAQ can measurably deflect.

People Also Ask and autocomplete data for the relevant topics, and any validation or definitional style prompts already surfaced by the GEO Agent's prompt results (questions like is this legitimate, what does this actually do, how does this compare).

Common objections a sales or customer facing team would recognize by name, since these are often the questions a customer is actually thinking but does not type into a search bar or a support ticket, and an FAQ can get ahead of them proactively.

## Phase 2: Prioritization

Rank sourced questions by a combination of how often they actually come up (support ticket frequency or search demand) and how much friction or support load answering them well would remove. A rarely asked question with a complicated answer is lower priority than a frequently asked question with a simple, clear answer, even if the second one seems less interesting to write.

Group related questions into themes rather than presenting a flat, unordered list, since a themed FAQ is easier for both a human reader and an AI engine to parse into a coherent picture of the topic.

## Phase 3: Answer writing

Answer each question directly in the first sentence, then add supporting detail after, following the same answer first discipline as the Content Skill. A reader or an AI engine extracting this answer should get the actual answer from the first sentence alone, not have to read three sentences of setup first.

Keep each answer to two to four sentences unless the question genuinely requires a longer process explanation, in which case use a short numbered list within the answer rather than a long paragraph.

Match the brand's actual voice rather than a generic neutral support tone, using the same voice reference the Content Brief Agent points to, so the FAQ reads as the same brand as the rest of the site rather than a bolted on generic help page.

Use specific, checkable claims rather than vague reassurance. A pricing question answered with actual figures or a clear range is more useful and more citable than one answered with we offer competitive pricing.

## Phase 4: Structuring and placement

Mark which questions are strong candidates for FAQ schema markup, generally ones with a clean, self contained question and answer pair with no context dependency on surrounding page content.

Recommend placement for each question: a dedicated FAQ page for broad, cross cutting questions, or embedded directly within the relevant product, pricing, or content page for questions specific to that page's topic. Do not default every question to the same dedicated FAQ page if some clearly belong closer to the specific page a reader would already be on when the question arises.

Flag any question whose accurate answer depends on a policy, price, or product detail that changes over time, so it can be reviewed on a set cadence rather than left to go stale silently.

## Output

A structured FAQ set: each question grouped by theme, its sourced origin (support data, search demand, sales objection), its written answer, its schema eligibility, its recommended placement, and a flag for anything that will need periodic review due to time sensitive content.

## Anti-patterns

Inventing a plausible sounding FAQ list from general assumptions instead of sourcing real questions from support, search, or sales data.

Burying the actual answer under a paragraph of context before getting to the point, which defeats both the self serve goal and the citation eligibility goal.

Producing a single flat list with no thematic grouping, making the section harder to scan and harder for an AI engine to parse coherently.

Answering a time sensitive question (current pricing, current policy) without flagging it for review, letting the FAQ silently go stale and start giving customers wrong information.

Writing every answer in a generic neutral tone disconnected from the brand's actual voice elsewhere on the site.

## Quick checklist

Questions sourced from real support, search demand, and sales objection data, not invented from assumption.

Questions prioritized by frequency and by how much friction or support load resolving them removes.

Related questions grouped into themes rather than left as a flat list.

Every answer leads with the direct answer in the first sentence, kept to two to four sentences unless a numbered process genuinely needs more.

Brand voice matched using the same reference the Content Brief Agent uses, not a generic support tone.

Schema eligibility marked per question, and placement recommended per question rather than defaulted to one page for everything.

Time sensitive answers flagged for periodic review.
