---
name: competitor-audit
description: "Analyze how AI engines represent a competitor and identify exploitable visibility, positioning, prompt, and citation gaps. Use for competitor audits, AI search research, citation vulnerability analysis, and GEO strategy."
---

# Competitor Audit Agent Skill - Lantern

Purpose: analyze how AI engines perceive, categorize, and represent a named competitor, and surface strategic gaps that can be exploited. This agent reuses the GEO Agent's five layer method (brand, topics, prompts, prompt results, citations) but points it at a competitor instead of the home brand, and the output orientation flips from diagnosis to offense. Every finding should end in an action someone can take, not just a description of the competitor's current state.

This agent is not for copying a competitor's strategy. It is for finding where their AI presence is thin, wrong, or resting on a weak source, so the home brand's content can take that ground.

## Phase 1: Competitor entity mapping

Establish the competitor's own claimed positioning first. What do they say about themselves on their own site (their canonical claims), and what category do they operate in. This is the baseline for spotting mismatches later, since a common finding is that AI engines describe a competitor differently than the competitor describes itself, and that gap is often exploitable on its own.

Note the competitor's apparent strengths honestly. If they are genuinely well cited and accurately represented on a topic, say so plainly. A gap list that pretends a strong competitor is weak everywhere is not useful and will send content effort at the wrong target.

## Phase 2: Prompt construction

Use the same prompt types as the GEO Agent (recommendation, comparison, validation, how-to, cost, definitional), but weight the set toward two additions specific to competitive analysis.

Reputation and trust prompts: "is [competitor] reliable," "[competitor] complaints," "[competitor] vs alternatives."

Direct comparison prompts naming both the competitor and the home brand, plus prompts naming the competitor against other rivals, to see the full competitive field an AI engine currently presents.

## Phase 3: Running and reading results

Run across multiple engines and multiple times per engine, same discipline as the GEO Agent. Extract for each result:

Where the competitor is placed relative to others named in the same answer.

Whether the competitor is described accurately against their own claimed positioning, or whether AI engines are propagating outdated, incomplete, or simply wrong information about them.

Whether any negative sentiment, complaints, or caveats appear in the AI's framing of the competitor, and whether that sentiment is being pulled from a specific identifiable source.

Whether the competitor is miscategorized entirely, for example described as serving a narrower or different audience than they actually claim to serve.

## Phase 4: Citation vulnerability analysis

For every source an AI engine cites when describing the competitor, assess how strong that source actually is. A competitor propped up by one thin, outdated, or low authority page is more vulnerable than one backed by several strong, current, well structured pages.

Flag specifically:

Citation sources that are stale (old pricing, discontinued offerings, outdated claims) since these represent an accuracy gap a fresher page can win outright.

Citation sources that are third party and lightly informative (a one line directory listing, a thin aggregator page) since these are the easiest to outrank with a genuinely comprehensive page on the same topic.

Topics where the competitor has no strong citation source at all, meaning their visibility there is fragile even if currently present.

## Phase 5: Strategic gap prioritization

Rank findings by exploitability, not just by where the competitor is strong.

1. Topics where the competitor is inaccurately or unfavorably described, and the underlying citation source is weak. Fastest win: a stronger, accurate page can displace that source directly.
2. Topics where the competitor is present but resting on a single thin source. A comprehensive, well structured page has a real shot at winning the citation.
3. Topics where the competitor is genuinely strong and well cited from solid sources. Lowest priority for direct attack. Consider these a benchmark to match on general quality rather than a near term target.
4. Whitespace topics where neither the competitor nor the home brand currently appears. Shared opportunity, not strictly competitive, but worth flagging since first mover advantage compounds.

## Output structure

1. Competitor snapshot: how AI engines currently describe the competitor in aggregate, and whether that matches the competitor's own claimed positioning.
2. Strength and weakness inventory: honestly split, topics where the competitor is strong versus thin versus absent.
3. Citation vulnerability list: which of the competitor's citation sources are weak, stale, or thin, ranked by how winnable they are.
4. Prioritized exploit list: ready to route to Content Brief Agent, Pillar Article Agent, or SEO Agent, same handoff pattern as the GEO Agent.

## Anti-patterns

Only reporting where the competitor is weak and omitting where they are genuinely strong. An audit that flatters the home brand by ignoring real competitor strength will misallocate content effort.

Treating a single AI run naming a complaint or negative point as a stable finding without checking consistency across repeated runs.

Recommending an attack on a topic where the competitor's citation source is actually strong and current, just because the topic itself looks attractive.

Misrepresenting the competitor's actual offering when building comparison content. The goal is accurate positioning that wins on merit, not distortion.

Stopping at description without a specific next action attached to each finding.

## Quick checklist

Competitor's own claimed positioning established before checking AI results.

Prompt set includes reputation, trust, and direct comparison prompts, not only descriptive ones.

Each prompt run across multiple engines, multiple times per engine.

Every finding checked against the competitor's own claims for accuracy, not just checked for presence.

Citation sources rated for strength (fresh and comprehensive versus stale and thin), not just logged.

Gap list prioritized by exploitability, with genuine competitor strengths flagged rather than hidden.

Whitespace topics separated out from direct competitive attack topics.

Output routes to a specific next agent with a specific next action, not left as a standalone report.
