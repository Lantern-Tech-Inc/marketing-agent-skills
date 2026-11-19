---
name: content-calendar
description: "Builds a realistic, capacity-based content calendar that balances new content, refreshes, and distribution across funnel stages and query types, with owners, deadlines, briefs, and measurement checkpoints. Use when planning monthly or quarterly content, prioritizing a backlog, or aligning content with launches and campaigns."
license: MIT
metadata:
  version: "1.0.0"
  status: beta
  author: Lantern
---

# Content Calendar

Purpose: decide what gets made, by whom and when, based on evidence of demand and the team's real capacity. A calendar is a prioritized commitment, not a wish list. Quality and usefulness come before volume.

Shared rules:

- [references/query-types.md](references/query-types.md) covers query types and funnel stages used to balance the mix.
- [references/evidence-standards.md](references/evidence-standards.md) covers how demand and performance data must be cited.

## When to use this skill

Use when planning content for a month or quarter, turning keyword or prompt research into a schedule, fitting content around launches and events, or prioritizing a backlog.

Do not use when:

- The user needs topic or keyword discovery first. Use `keyword-research`.
- The user needs one brief. Use `content-brief`.
- The user wants derivatives from one asset. Use `content-repurposing`.

## Required inputs

```yaml
period: ""                     # e.g. Q1 2027
goals: []                      # business goals with metrics
audience: ""
topic_backlog: []              # from keyword-research, ai-visibility-report, sales and support questions
existing_content: ""           # optional: inventory with performance (for refresh slots)
capacity:                      # real hours or pieces per week per role
  writers: ""
  editors_reviewers: ""
  design_video: ""
  subject_matter_experts: ""
key_dates: []                  # launches, events, seasonal peaks, holidays, freeze periods
channels: []                   # blog, newsletter, social, video, partner
approval_process: ""           # who signs off and how long it takes
```

## Workflow

```text
- [ ] 1. Goals and metrics confirmed
- [ ] 2. Capacity measured in hours, including review time
- [ ] 3. Backlog scored and prioritized
- [ ] 4. Mix balanced across funnel, query types and refreshes
- [ ] 5. Items scheduled backwards from publish dates and key dates
- [ ] 6. Owners, briefs and distribution attached to each item
- [ ] 7. Review checkpoints and measurement set
```

1. **Confirm goals.** Each goal has a metric (for example qualified signups from organic, citations for target prompts, newsletter growth). Every calendar item must map to at least one goal.
2. **Measure capacity.**
   - Estimate hours per format, including research, SME interviews, editing, legal review, design and publishing. Use the team's history, not optimistic guesses.
   - Plan to about 80% of available capacity to leave room for reactive work and slippage.
3. **Score the backlog.** For each topic: demand evidence (search volume range, prompt testing, sales or support frequency), business fit, ability to add first-hand value, competition and effort. Record the source and date for each demand signal. Drop topics where the team cannot add anything beyond what already ranks.
4. **Balance the mix.**
   - Across funnel stages and query types (informational, commercial, comparison, transactional), weighted by goals.
   - Reserve regular slots for refreshing existing content that is decaying (use `content-refresh`). Mature sites often get more from refreshes than from new pages.
   - Include distribution work for each major piece (use `content-repurposing`).
5. **Schedule backwards.** From each publish date, set brief, draft, review and final approval dates using real turnaround times. Align with launches and seasonal peaks early enough for the content to be indexed and distributed. Avoid publishing during freeze periods.
6. **Attach owners and briefs.** Each item gets one owner, a reviewer, a brief (use `content-brief`), a target query or prompt set, a primary CTA and its distribution channels.
7. **Set checkpoints.** A weekly status review and a monthly performance review. Measure pieces after enough time to be meaningful (for organic search, usually several weeks after indexing). Re-prioritize the backlog with results.

## Publishing and email guardrails

- Do not plan high volumes of templated or AI-generated pages to fill the calendar. Google's scaled content abuse policy applies regardless of how content is created, and helpful content guidance asks whether content is made mainly to attract search visits.
- Do not schedule cosmetic "updates" to change dates. Plan substantive refreshes only.
- Newsletter cadence must stay within sender requirements. Gmail's sender guidelines (in force since 2024) require SPF or DKIM for all senders, and SPF, DKIM and DMARC plus one-click unsubscribe for senders of more than 5,000 messages a day to Gmail. Google asks senders to keep the spam rate in Postmaster Tools below 0.1% and never reach 0.3%. Increase frequency only while complaint and unsubscribe rates stay healthy, and check other mailbox providers' rules too.

## Output template

```markdown
# Content calendar: <period>

## Goals and metrics
| Goal | Metric | Baseline | Target |

## Capacity
| Role | Hours available | Planned (≈80%) |

## Prioritized backlog
| Topic | Query type / stage | Demand evidence (source, date) | Fit | Effort | Score |

## Calendar
| Publish date | Item | Type (new / refresh / distribution) | Query type / stage | Goal | Owner | Reviewer | Brief due | Draft due | Review due | Channels | Status |

## Key dates and freezes

## Review cadence and measurement
```

## Approval gates

- Approval of the prioritized backlog and mix before scheduling.
- Approval of the final calendar by the content owner and any stakeholders with review duties.

## Stop conditions

- No goals or capacity information is available. Ask for them; a calendar without capacity is a wish list.
- The backlog has no demand evidence and the user cannot provide any. Recommend `keyword-research` or `ai-visibility-report` first.
- The user wants publishing volume that exceeds capacity or relies on mass-generated pages.

## Anti-patterns

- Planning by volume ("3 posts a week") without capacity or goals.
- No review or SME time in the schedule.
- Ignoring refreshes of existing content.
- Topics with no evidence of demand or business fit.
- Scheduling seasonal content too late to index.
- Calendar items with no owner or no distribution plan.
- Increasing email frequency without watching complaint rates.

## Completion checklist

- [ ] Every item maps to a goal with a metric
- [ ] Capacity measured in hours and planned to about 80%
- [ ] Backlog scored with sourced, dated demand evidence
- [ ] Mix balanced across funnel, query types, refreshes and distribution
- [ ] Dates scheduled backwards with real review times
- [ ] Each item has owner, reviewer, brief and channels
- [ ] Email cadence respects sender requirements
- [ ] Review and measurement cadence defined
