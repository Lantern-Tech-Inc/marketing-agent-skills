---
name: digital-pr
description: "Plans data-led digital PR campaigns that earn coverage, citations, and links from relevant publications: story angles from original data or expertise, target outlet and journalist lists, pitches, and press releases that comply with Google's link spam policies. Use when building authority, earning third-party mentions that AI engines cite, or pitching journalists."
license: MIT
metadata:
  version: "1.0.0"
  status: beta
  author: Lantern
---

# Digital PR

Purpose: earn genuine editorial coverage on sites that the audience and AI engines already trust. Coverage is earned with a story a journalist wants to publish, not by buying links. Every tactic in this skill must survive Google's spam policies and the publication's own editorial standards.

Shared rules:

- [references/evidence-standards.md](references/evidence-standards.md) covers how original data must be collected, described and caveated.
- [references/ai-visibility-method.md](references/ai-visibility-method.md) covers how to find the third-party sources AI engines cite for target prompts.

## When to use this skill

Use when the user wants press coverage, expert commentary placements, a data study or report to pitch, a press release, or more third-party mentions on sources that AI answers cite.

Do not use when:

- The goal is internal links. Use `internal-linking`.
- The user wants paid ads or sponsored content at scale. That is advertising; label it as such and do not treat it as earned coverage.
- The user wants to measure AI visibility. Use `ai-visibility-report` first, then return with its cited-source list.

## Required inputs

```yaml
brand: ""
goal: ""                     # e.g. authority in a topic, coverage in trade press, citations for target prompts
target_topics: []
assets: []                   # original data, surveys, product usage data, experts available, customer stories
cited_sources: []            # optional: domains AI engines cite for target prompts (from ai-visibility-report)
target_regions: []
spokespeople: []             # name, role, verifiable expertise
legal_constraints: ""        # what data and customer names may be published
budget_and_capacity: ""
```

## Link and disclosure rules (verified October 2026)

- Google's link spam policy covers buying or selling links that pass ranking credit, excessive link exchanges, and "keyword-rich, hidden, or low-quality links" in guest posts, press releases, advertorials, widgets and footers.
- Any placement that involves payment, free product or another exchange must have its links qualified with `rel="sponsored"` (preferred) or `rel="nofollow"`, and be labeled as sponsored for readers.
- Press releases distributed on wire services: no optimized anchor text; use branded or URL anchors, and expect links to be nofollowed.
- Do not place content on third-party sites mainly to exploit their ranking signals (site reputation abuse).
- Wikipedia: its conflict-of-interest guideline strongly discourages editing articles about your own organization, and the Wikimedia Terms of Use require paid editors to disclose. Suggest edits on the talk page instead; never commission undisclosed edits.
- Endorsements and influencer posts must disclose material connections (FTC Endorsement Guides, 16 CFR Part 255, and local equivalents).

## Workflow

```text
- [ ] 1. Goal, audience and success metric agreed
- [ ] 2. Target outlets chosen from audience fit and cited-source data
- [ ] 3. Story angle built on a newsworthy, verifiable asset
- [ ] 4. Data method documented and caveated
- [ ] 5. Pitch, press release and assets drafted
- [ ] 6. Journalist list built with relevance notes
- [ ] 7. Outreach plan, follow-up and tracking set
```

1. **Agree the goal.** Coverage in specific outlets, expert quotes, citations on sources AI engines use, or referral traffic. Links are a by-product, never the only KPI.
2. **Choose outlets.**
   - Start with outlets the audience reads and, if available, domains from `cited_sources`.
   - Tier them: national or top trade, niche trade, newsletters and podcasts, community or association sites.
   - Drop outlets that sell "guaranteed" do-follow placements.
3. **Build the angle.** A story is newsworthy when it is new, specific, relevant to the outlet's readers and backed by evidence. Typical angles: original data or survey results, a counter-intuitive finding, a timely reaction to news with expert input, a useful free tool or index, a credible prediction with a named expert.
4. **Document the data.**
   - State the sample size, who was sampled, how, when, and margin of error where relevant. Name the survey provider.
   - Do not overstate: a convenience sample is not "Americans think".
   - Publish a methodology page on the brand site that journalists can cite.
5. **Draft the materials.**
   - **Pitch:** subject line under 10 words naming the finding; 3–5 short sentences; why it matters to that outlet's readers; one key stat; offer of data, charts or an expert. No attachments in a first email.
   - **Press release:** headline with the finding; who, what, when, where, why in the first paragraph; a quote that adds opinion, not repetition; methodology; boilerplate; contact. Branded or URL anchors only.
   - **Assets:** a landing page with the full findings, charts with sources, and downloadable data where possible.
6. **Build the journalist list.** Only people who have covered the topic recently. Record a recent article for each and why this story fits. Respect opt-outs and the applicable email and privacy law (for example GDPR in the EU and UK, CAN-SPAM in the US).
7. **Outreach and tracking.** Personalize each pitch. Send at most one follow-up after a few business days. Track replies, coverage, link type (followed, sponsored, nofollow, no link) and whether AI engines later cite the coverage. Ask for a link only where it helps readers (for example, to the methodology).

## Output template

```markdown
# Digital PR plan: <campaign> — <date>

## Goal and success metrics

## Target outlets
| Tier | Outlet | Audience fit | AI-cited? (date checked) | Notes |

## Story angle
- Headline finding
- Why it is newsworthy now
- Evidence and limits

## Methodology summary

## Pitch draft

## Press release draft

## Journalist list
| Name | Outlet | Recent relevant article | Fit | Status |

## Outreach and follow-up schedule

## Compliance notes
- Paid or exchanged placements and their rel/labels
- Endorsement disclosures
- Data permissions
```

## Approval gates

- Approval before publishing any data, customer name or spokesperson quote.
- Approval before any paid or exchanged placement.
- Approval before sending outreach.

## Stop conditions

- There is no newsworthy asset or expert. Recommend creating one (survey, data analysis, expert commentary) before pitching.
- The user asks to buy followed links, use link networks, hide sponsorship or publish undisclosed paid Wikipedia edits.
- The data cannot support the headline claim.

## Anti-patterns

- Mass, untargeted pitch blasts.
- Buying "guest posts" with keyword-rich followed links.
- Keyword-optimized anchors in press releases.
- Overstated survey headlines from small or biased samples.
- Measuring success only by link count.
- Fake "expert" personas or quotes.
- Editing your own Wikipedia article.

## Completion checklist

- [ ] Goal and metrics go beyond links
- [ ] Outlets chosen for audience fit and, where available, AI citation data
- [ ] Angle is newsworthy and backed by documented evidence
- [ ] Methodology published or ready to publish
- [ ] Pitch, press release and assets drafted with branded or URL anchors
- [ ] Journalist list has recent relevant articles per contact
- [ ] Paid placements qualified with rel="sponsored" and labeled
- [ ] Endorsement and privacy obligations noted
