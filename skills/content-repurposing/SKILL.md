---
name: content-repurposing
description: "Turns one strong source asset (article, report, webinar, podcast, or customer story) into platform-native derivatives for social, email, video, and partner sites, adapting format and angle per channel while avoiding duplicate-content, syndication, and disclosure problems. Use when distributing published content across channels or planning derivatives from a single asset."
license: MIT
metadata:
  version: "1.0.0"
  status: beta
  author: Lantern
---

# Content Repurposing

Purpose: get more reach from work already done by re-expressing its best ideas in the native format of each channel. Repurposing adapts the idea; it does not paste the same text everywhere or spin it into near-duplicate pages.

Shared rules:

- [references/writing-and-titling.md](references/writing-and-titling.md) covers clarity and banned filler for every derivative.
- [references/evidence-standards.md](references/evidence-standards.md) covers keeping numbers, quotes and sources intact when they are shortened.

## When to use this skill

Use when the user has a published or approved source asset and wants derivatives for social posts, email, short video, slides, community posts or partner syndication.

Do not use when:

- There is no source asset yet. Use `content-brief` and `content`.
- The user wants a multi-week schedule across many assets. Use `content-calendar`, then this skill per asset.
- The user wants many near-identical SEO pages (city or keyword variants). That is scaled content; decline.

## Required inputs

```yaml
source_asset: ""             # URL or file; must be approved
source_type: ""              # article | report | webinar | podcast | case study | talk
audience: ""
channels: []                 # e.g. linkedin, x, threads, instagram, youtube, newsletter, partner site
goal_per_channel: {}         # awareness, clicks, replies, signups
brand_voice: ""              # optional: brand-voice output
assets_available: []         # charts, clips, quotes with permission, transcripts
partners: []                 # optional: sites that will republish
disclosures: ""              # paid partnerships, affiliate links, employee advocacy
```

## Channel adaptation guide

Limits change. Verify current limits in each platform before publishing; the numbers below were observed in 2026 and are guidance only.

| Channel | Native shape | Notes |
| --- | --- | --- |
| LinkedIn post | Hook line, short paragraphs, one idea, question or takeaway | About 3,000 characters max; first lines show before "see more" |
| X | One sharp claim or stat; thread for a sequence | 280 characters for standard accounts; longer for premium |
| Threads | Conversational, short | About 500 characters per post |
| Short video (Reels, Shorts, TikTok) | One point, hook in the first seconds, captions on | Vertical; burn in captions for sound-off viewing |
| Newsletter | Why it matters to this list, 1–3 takeaways, link | Must follow email sender rules and include unsubscribe |
| Slides or carousel | One idea per slide, large text | Add alt text where the platform supports it |
| Partner site | Excerpt or adapted version with a link to the original | See syndication rules |

## Syndication and duplication rules (verified October 2026)

- Publish the original on your own site first so it can be crawled and indexed.
- When a partner republishes the full piece, Google's guidance is that the most effective way to keep your original as the version shown is for the partner to block indexing of their copy (`noindex`). Google does not recommend relying on a cross-domain canonical for syndicated content. A link back to the original is still good practice.
- Publishing full copies on platforms such as LinkedIn articles or Medium can outrank your own page. Prefer an adapted summary with a link.
- Do not create multiple pages on your own site with the same content reworded. Google's scaled content abuse policy applies to content produced at scale to manipulate rankings "no matter how it's created".
- Disclose material connections in derivatives: paid partnerships, affiliate links and employee posts about the employer (FTC Endorsement Guides, 16 CFR Part 255, and local equivalents). Use platform branded-content tools where available.
- Links in paid or exchanged placements use `rel="sponsored"`.

## Workflow

```text
- [ ] 1. Source asset approved and its key ideas extracted
- [ ] 2. Channels chosen by audience and goal
- [ ] 3. Angle chosen per channel
- [ ] 4. Derivatives drafted in native format
- [ ] 5. Facts, quotes and numbers checked against the source
- [ ] 6. Syndication, disclosure and accessibility checks done
- [ ] 7. Posting sequence and tracking set
```

1. **Extract.** List the asset's distinct ideas: key claims, stats with sources, quotable lines (with permission), stories, frameworks, charts. Rank by strength and novelty.
2. **Choose channels** where the audience already is and where the goal can be measured. Fewer channels done well beat every channel done thinly.
3. **Pick an angle per channel.** Same idea, different entry point: a stat for X, a story for LinkedIn, a how-to clip for video, a "why this matters to you" for the newsletter.
4. **Draft natively.** Write each derivative from scratch for the format. Lead with the point. One idea per post. Add a link only where the channel and goal support it.
5. **Check accuracy.** Shortening must not change meaning. Keep the number, the timeframe, the population and the source. Do not turn "in our sample" into "everyone".
6. **Run compliance and accessibility checks.** Syndication rules above; disclosures; captions for video; alt text for images; readable contrast in graphics.
7. **Sequence and track.** Stagger posts so each channel can be measured. Use UTM parameters on links. Record what performed, by channel and angle, to feed the next `content-calendar`.

## Output template

```markdown
# Repurposing pack: <source asset> — <date>

## Source asset and key ideas
| # | Idea | Evidence / source | Strength |

## Channel plan
| Channel | Goal | Angle | Format | Link? | UTM |

## Derivatives
### <Channel> — <angle>
<copy>
- Visual / clip note
- Disclosure (if any)
- Alt text / captions

## Syndication plan
| Partner | Version (excerpt / adapted / full) | noindex or link back | Status |

## Posting sequence
| Date | Channel | Derivative | Owner |
```

## Approval gates

- The source asset is approved before derivatives are drafted.
- Approval for any customer quote, logo or clip.
- Approval for partner syndication terms.

## Stop conditions

- The source asset is unapproved, inaccurate or out of date. Hand to `content-refresh` first.
- The user wants reworded duplicate pages for SEO or undisclosed paid posts.
- Quotes, clips or data lack permission to reuse.

## Anti-patterns

- Pasting the same text across every channel.
- Spinning the article into near-duplicate pages on your own site.
- Full syndication without noindex or a plan to protect the original.
- Dropping the source or context from a statistic.
- Missing disclosures on paid, affiliate or employee posts.
- Video without captions.
- Treating platform character limits as permanent facts.

## Completion checklist

- [ ] Source asset approved; ideas extracted and ranked
- [ ] Channels chosen by audience and measurable goal
- [ ] Each derivative written natively with one idea
- [ ] Numbers, quotes and sources match the original
- [ ] Syndication uses noindex on partner copies or excerpts with links
- [ ] Disclosures, captions and alt text included
- [ ] Posting sequence with UTMs and owners
