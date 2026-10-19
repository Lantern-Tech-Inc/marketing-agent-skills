---
name: seo
description: "Turn ranking, traffic, and technical SEO data into a prioritized action plan. Use for organic search audits, technical SEO diagnosis, performance analysis, crawlability, and SEO recommendations."
---

# SEO Agent Skill - Lantern

Purpose: turn raw ranking, traffic, and technical data into a short, prioritized list of high impact actions. This agent is the traditional search counterpart to the GEO Agent. GEO Agent covers how AI engines represent a brand. SEO Agent covers how the site actually performs in classic organic search, including the technical health that both classic search and AI crawlers depend on. The two should be read together, not treated as separate worlds, since a technically broken page cannot be cited by anything.

The output of this agent is a ranked action list, not a data dump. Anyone reading it should know exactly what to do first and why it matters more than the next item.

## Phase 1: Current state audit

Pull the baseline before recommending anything.

Rankings by keyword cluster, not just individual keywords. Group by topic so patterns are visible, for example an entire cluster sliding at once usually points to one root cause rather than many small ones.

Traffic trends over a meaningful window, checked against any known algorithm updates or site changes in that window, so a drop or spike has a candidate explanation rather than being reported as a mystery.

Technical health: crawlability, indexation status, core web vitals, mobile usability, broken internal links, and duplicate or thin content. These are foundational. A content gap fix cannot help a page Google is not indexing in the first place.

Site structure: whether the existing internal linking actually reflects a real topic hierarchy, or whether pages are orphaned with no path in from the rest of the site.

## Phase 2: Opportunity surfacing

Striking distance keywords: terms currently ranking roughly position 5 through 20, where a moderate content or technical improvement has a realistic chance of reaching the top 3. These are almost always the highest return per unit of effort, since the page already has some relevance signal and just needs reinforcement.

Content gaps versus competitors: topics competitors rank for that the site has no page addressing at all. Cross reference against the Content Skill's query type classification so any new page recommendation already has a format assigned (cost table, comparison, process steps, and so on) rather than starting from a blank brief.

Cannibalization: multiple internal pages competing for the same query and splitting authority. This is a common, often invisible cause of stagnant rankings and should be checked explicitly, not assumed absent.

Technical blockers found in Phase 1 that are actively suppressing otherwise good content, for example a slow loading page with strong content but poor core web vitals.

## Phase 3: Prioritization framework

Score each opportunity on two axes: traffic or visibility potential, and effort required to capture it. Favor high potential, low effort items first, specifically striking distance keyword fixes and quick technical repairs, before recommending large net new content projects. A new pillar article is a bigger bet than fixing a broken canonical tag, and the action list should reflect that difference in effort honestly.

Account for time sensitivity separately from potential and effort. A page losing rank steadily due to a recent algorithm shift needs faster attention than a stable but underperforming page, even if the second one has higher raw potential.

## Phase 4: Output

Produce a ranked list, each item stating: the specific page or cluster affected, the current state (rank, traffic, or technical issue), the recommended action, the expected impact, and the estimated effort. Route content specific items to Content Agent or Pillar Article Agent, and route pure technical items to whichever engineering or platform process the brand uses, since this agent does not implement code fixes itself.

## Anti-patterns

Chasing high volume keywords with no real intent match to what the brand actually offers. Ranking for a term nobody who visits will convert on wastes effort that a striking distance fix would have better used.

Recommending only new content while ignoring technical debt that is suppressing the content already published.

Treating every ranking drop as equally urgent without checking whether it correlates with a known algorithm update, a site change, or normal SERP volatility.

Reporting a wall of metrics with no prioritization, leaving the reader to guess what matters most.

Ignoring cannibalization and recommending a new page on a topic the site already has two competing pages for, which would make the cannibalization worse rather than better.

## Quick checklist

Baseline pulled across rankings by cluster, traffic trends, technical health, and internal link structure before any recommendation is made.

Striking distance keywords identified specifically, not folded into a generic keyword list.

Content gaps checked against competitors and assigned a format per the Content Skill's query type classification.

Cannibalization checked explicitly, not assumed absent.

Every opportunity scored on potential and effort, with time sensitivity noted separately.

Final output is a ranked list with page, current state, action, expected impact, and effort for each item, not a raw data export.

Content specific recommendations routed to Content Agent or Pillar Article Agent by name.
