---
name: brand-voice
description: "Builds an evidence-based brand voice and style guide from the brand's best real content and audience language: voice traits with do and don't examples, tone shifts by context, vocabulary rules, approved claims, and a reusable checklist that writers and AI agents can apply. Use when defining, documenting, or enforcing how a brand sounds, or before handing writing work to AI agents."
license: MIT
metadata:
  version: "1.0.0"
  status: stable
  author: Lantern
---

# Brand Voice

Purpose: give every writer and AI agent a precise, testable description of how the brand sounds, so content is recognizable and consistent without becoming generic. A useful voice guide is built from real examples and shows what to do and what not to do. Labels such as "friendly, innovative, bold" on their own are not a voice guide.

Shared rules:

- [references/writing-and-titling.md](references/writing-and-titling.md) covers baseline clarity rules and banned filler that apply under any voice.
- [references/evidence-standards.md](references/evidence-standards.md) covers how approved claims must be sourced.

## When to use this skill

Use when the brand has no written voice guide, when content from different writers or AI tools sounds inconsistent, before configuring AI agents to write for the brand, or when reviewing a draft for voice.

Do not use when:

- The user needs visual identity (logo, color, typography). That is design, not voice.
- The user needs one piece of content written. Use `content` or `landing-page-copy` and pass in the existing voice guide.
- The user needs fact-checking. Use `trust-qa`.

## Required inputs

```yaml
brand: ""
audience: []                   # who the brand speaks to
positioning: ""                # what the brand stands for and against
best_samples: []               # 5–15 pieces the team considers on-brand (URLs or files)
off_brand_samples: []          # optional: pieces the team thinks missed the voice
audience_language: []          # optional: reviews, sales call notes, support tickets, community posts
channels: []                   # web, email, social, support, docs, ads
regulatory_constraints: ""     # optional: claims rules, required disclaimers
existing_guidelines: ""        # optional: current style guide or messaging docs
```

## Tone dimensions

Nielsen Norman Group describes four dimensions of tone. Use them to place the brand on a scale, then show it with examples.

| Dimension | One end | Other end |
| --- | --- | --- |
| Humor | Funny | Serious |
| Formality | Formal | Casual |
| Respect | Respectful | Irreverent |
| Enthusiasm | Enthusiastic | Matter-of-fact |

Voice stays constant. Tone shifts by context: a support reply to an outage is more serious and matter-of-fact than a launch post.

## Workflow

```text
- [ ] 1. Real samples collected (on-brand, off-brand, audience language)
- [ ] 2. Patterns analyzed with evidence from the samples
- [ ] 3. 3–5 voice traits defined with "this, not that"
- [ ] 4. Tone positions and context shifts set
- [ ] 5. Vocabulary, grammar and formatting rules written
- [ ] 6. Approved claims and banned claims listed with sources
- [ ] 7. Before and after examples written; guide tested on a sample
```

1. **Collect samples.** Use content the team agrees is on-brand, plus off-brand examples and the audience's own words. Without real samples, mark the guide `draft — assumption-based`.
2. **Analyze patterns.** Note sentence length, reading level, person (we/you), use of contractions, jargon, humor, how the brand handles confidence and uncertainty, and words the audience uses for their problems. Quote the sample lines that show each pattern.
3. **Define 3–5 traits.** Each trait gets a one-line definition and a "this, not that" pair, for example "Direct, not blunt", "Expert, not academic". Each trait must be observable in a sentence; drop traits no one could test.
4. **Set tone.** Place the brand on each NN/g dimension. Write how tone shifts for key contexts: launch, educational article, error message, support apology, sales email, social reply, crisis statement.
5. **Write the rules.**
   - Vocabulary: preferred terms, banned terms, product names and capitalization, how to refer to customers and competitors.
   - Grammar and mechanics: person, contractions, Oxford comma, numbers, dates, title or sentence case, emoji policy.
   - Inclusive and accessible language: plain language, no idioms that do not translate, people-first or identity-first wording as the community prefers.
   - Format habits: paragraph length, headings, lists, CTA style.
6. **List claims.** Approved claims with their evidence and owner, phrasing that legal has signed off, and claims never to make (for example unsubstantiated superlatives, guarantees, regulated health or financial claims).
7. **Show and test.** For each trait and context, write a before and after rewrite. Then rewrite one off-brand sample with the guide and have a team member blind-check whether it sounds like the brand. Revise where it fails.

## Output template

```markdown
# <Brand> voice and style guide — v<version> — <date>

## Who we speak to

## Voice traits
| Trait | Means | This | Not that | Evidence (sample) |

## Tone
| Dimension | Position (1–5) | Note |
| Context | Tone shift | Example line |

## Vocabulary
| Use | Avoid | Why |

## Grammar and mechanics

## Inclusive and accessible language

## Claims
| Approved claim | Evidence | Owner | Expires / review date |
| Never say | Why |

## Before and after examples

## Voice checklist for writers and AI agents
- [ ] ...
```

## Approval gates

- Approval of traits and tone positions by the brand owner before rules are written.
- Legal or compliance approval of the claims section.

## Stop conditions

- There are no samples and no positioning, and the user will not provide them. Offer a short draft clearly labeled as assumption-based.
- The user asks for claims or a persona that would mislead the audience (fake founders, invented customer stories, unsubstantiated claims).

## Anti-patterns

- Trait lists with no examples ("friendly, bold, innovative").
- Copying another brand's voice guide.
- A voice so rigid it ignores context (jokes in an outage notice).
- Rules that conflict with clarity or accessibility.
- Approved claims with no evidence or review date.
- Writing the guide without reading the audience's own language.

## Completion checklist

- [ ] Built from real on-brand, off-brand and audience samples (or labeled assumption-based)
- [ ] 3–5 testable traits with "this, not that" and sample evidence
- [ ] Tone positions and context shifts with example lines
- [ ] Vocabulary, mechanics and inclusive language rules
- [ ] Approved and banned claims with evidence and owners
- [ ] Before and after examples for each trait
- [ ] Guide tested on a real rewrite
- [ ] Short checklist ready for writers and AI agents
