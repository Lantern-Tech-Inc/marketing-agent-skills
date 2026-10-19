---
name: keyword-research
description: "Map traditional search demand and AI prompt demand around a website, brand, competitor, or topic. Use for keyword research, People Also Ask analysis, prompt research, and prioritized content planning."
---

# Keyword Research Agent Skill - Lantern

Purpose: map the full search demand around any URL, the brand's own or a competitor's, into a structured keyword brief. This agent covers two demand layers together rather than just classic search volume: traditional keyword and People Also Ask data, and AI prompt demand, meaning the actual phrasings people type into ChatGPT, Perplexity, and similar tools about the same topic. Classic keyword volume alone is a commoditized view any SEO tool already provides. The AI prompt demand layer is what makes this agent's output distinct, and it should always be included, not treated as optional.

## Phase 1: URL and topic intake

Given a URL, identify what topic and subtopics it already covers, and which keywords it already appears to rank for if that data is available. If given a bare topic instead of a URL, skip straight to Phase 2 with the topic as the starting point.

State clearly whether the URL belongs to the home brand or a competitor, since the output framing differs. For the home brand, the goal is finding demand the URL is not yet capturing. For a competitor's URL, the goal is understanding what demand is feeding their traffic and citations, which should be handed to the Competitor Audit Agent alongside this agent's own output.

## Phase 2: Keyword universe expansion

Expand outward from the seed topic using both demand layers.

Classic layer: related keywords, People Also Ask questions, autocomplete suggestions, and any available search volume or ranking difficulty data.

AI prompt demand layer: construct the actual prompt phrasings a real person would ask an AI assistant about this topic, using the same prompt type categories as the GEO Agent (recommendation, comparison, validation, how to, cost, definitional). This layer captures demand that never shows up in classic keyword tools at all, since a conversational prompt often has no equivalent short keyword phrase.

Do not treat these two layers as redundant. A topic can have low classic search volume and heavy AI prompt volume, or the reverse, and the brief should show both readings side by side rather than merging them into one number.

## Phase 3: Classification

Classify every keyword and prompt by query type, using the same classification as the Content Skill (informational, comparison, cost, process, seasonal, listicle), and by funnel stage, using the same awareness logic referenced in the Improved Copywriting skill (unaware, problem aware, solution aware, product aware, most aware). This tells the downstream content agent not just what to write about but what stage of the reader's thinking the page needs to meet.

## Phase 4: Prioritization

Rank the resulting keyword and prompt clusters by a combination of demand (classic volume plus observed AI prompt frequency where measurable), competition or difficulty, and whether the URL already covers the topic or represents a clear gap. Group tightly related keywords and prompts into single clusters rather than listing near duplicates as separate line items, since a content brief built from an un-deduplicated list will produce redundant or overlapping pages.

## Output

A structured keyword brief: topic clusters, each containing its classic keywords, its AI prompt phrasings, query type, funnel stage, demand signal from both layers, current coverage status (covered, partially covered, or gap), and a priority rank. This hands directly to the Content Brief Agent, which turns the highest priority gaps into actual page briefs.

## Anti-patterns

Reporting only classic keyword volume and treating AI prompt demand as an afterthought or skipping it entirely, which misses exactly the demand layer this agent exists to capture.

Chasing high volume keywords with no real intent match to what the brand or the given URL's topic can actually satisfy.

Listing near duplicate keywords and prompts as separate items instead of clustering them, producing a brief that would lead to redundant pages if executed literally.

Treating a competitor URL exactly like a home brand URL without noting the different use of the resulting data, since a gap for a competitor is a target for the home brand's content, not a gap for the competitor's own team to fill.

## Quick checklist

URL or topic intake stated clearly, including whether it belongs to the home brand or a competitor.

Keyword universe expanded across both classic search data and AI prompt phrasings, not one layer alone.

Every keyword and prompt classified by query type and by funnel stage.

Clusters deduplicated so closely related terms are grouped rather than listed as separate items.

Each cluster marked as covered, partially covered, or a clear gap against the given URL.

Final output ranked by priority, combining demand, competition, and current coverage, ready to route to the Content Brief Agent.
