---
name: landing-page-copy
description: "Writes conversion-focused landing page copy matched to the visitor's awareness stage and traffic source: headline, value proposition, proof, objection handling, and calls to action, with substantiated claims, compliant testimonials, accessible structure, and an A/B test plan. Use when creating or rewriting a product, campaign, signup, or paid-ad landing page."
license: MIT
metadata:
  version: "1.0.0"
  status: beta
  author: Lantern
---

# Landing Page Copy

Purpose: turn a specific visitor into a specific action by answering, in order, the questions that visitor has. Good landing copy is clear before it is clever, matches the promise that brought the visitor there, and proves every claim it makes.

Shared rules:

- [references/writing-and-titling.md](references/writing-and-titling.md) covers clarity, banned filler and headline rules.
- [references/evidence-standards.md](references/evidence-standards.md) covers how claims, numbers and customer evidence must be sourced.

## When to use this skill

Use when writing or rewriting a landing page for a product, feature, campaign, paid ad group, webinar, trial or demo signup.

Do not use when:

- The page is a long-form article meant to rank for an informational query. Use `content`.
- The page compares the brand with named competitors. Use `comparison-page`.
- The user needs the brand's voice defined first. Use `brand-voice`.

## Required inputs

```yaml
product: ""
offer: ""                     # what the visitor gets (trial, demo, download, purchase)
primary_action: ""            # one conversion goal
audience: ""                  # role, situation, job to be done
traffic_source: ""            # paid search, paid social, email, organic, partner
source_message: ""            # ad copy, email or keyword that sends traffic (for message match)
awareness_stage: ""           # unaware | problem-aware | solution-aware | product-aware | most-aware
proof_assets: []              # customer quotes with permission, case studies, data, logos, ratings, certifications
objections: []                # from sales calls, support tickets, reviews
brand_voice: ""               # optional: brand-voice output
constraints: ""               # legal review, regulated claims, character limits, design system
```

## Awareness stages

Adapted from Eugene Schwartz's model. The stage decides how much the page must explain before it asks.

| Stage | Visitor knows | Page should lead with | Typical length |
| --- | --- | --- | --- |
| Unaware | Not the problem | A relatable situation or cost | Long |
| Problem-aware | The problem, not solutions | The problem and its consequences, then the approach | Long |
| Solution-aware | Solutions exist, not yours | Why your approach is different, with proof | Medium |
| Product-aware | Your product, undecided | Proof, objections, risk reversal, specifics | Medium |
| Most-aware | Ready to act | The offer and the action | Short |

## Workflow

```text
- [ ] 1. One goal, one audience, one stage confirmed
- [ ] 2. Message match with the traffic source checked
- [ ] 3. Visitor questions and objections listed from real sources
- [ ] 4. Proof inventory built; every claim substantiated
- [ ] 5. Page drafted section by section
- [ ] 6. Compliance, accessibility and clarity checks done
- [ ] 7. A/B test plan written
```

1. **Confirm focus.** One primary action per page. Secondary links (nav, footer) stay minimal on paid traffic pages.
2. **Match the message.** The headline must repeat the core promise and wording of the ad, email or keyword that sent the visitor. A mismatch also hurts paid search: Google Ads landing page experience considers relevance to the ad and keyword.
3. **List the visitor's questions** in the order they arise: What is this? Is it for me? Why should I believe it? What does it cost or require? What happens next? Pull objections from sales calls, support tickets and reviews, not guesses.
4. **Build the proof inventory.**
   - Every factual or comparative claim needs evidence you hold now: data, a test, a third-party source. "Best", "#1", "fastest" need objective support or must go.
   - Testimonials: real customers, used with permission, reflecting their honest experience. If a testimonial shows results most users will not get, clearly disclose the results generally expected (FTC Endorsement Guides, 16 CFR 255.2). Disclose material connections (free product, payment, employment).
   - Reviews and ratings: no fake, purchased or cherry-picked-by-suppression reviews (16 CFR Part 465).
   - Logos and certifications: only with permission and only if current.
5. **Draft the page.**
   - **Hero:** headline stating the outcome for this audience (aim for under about 10 words); subheadline explaining how; one primary call to action; supporting visual of the product or outcome.
   - **Problem or context** (for early stages).
   - **How it works:** 3 steps or key capabilities, each tied to a benefit.
   - **Proof:** specific results with sources, testimonials with names and roles, case study links.
   - **Objections:** answer each real objection plainly (pricing, setup effort, switching, security, contract).
   - **Offer and risk reversal:** exactly what they get, cost, trial terms, cancellation terms.
   - **Final call to action** repeating the primary action.
   - CTA labels describe the action and outcome ("Start free trial", "Get the pricing guide"), not "Submit".
6. **Check.**
   - Claims vs proof inventory: every claim mapped.
   - Pricing and terms match the live checkout and legal terms.
   - Accessibility (WCAG 2.2 AA): logical heading order, descriptive link and button text, alt text for meaningful images, text contrast at least 4.5:1 for normal text, form fields with visible labels and clear error messages.
   - Readability: short sentences, scannable sections, no jargon the audience would not use.
7. **Plan the test.** One hypothesis per test, tied to a visitor question ("Visitors doubt setup time; adding a 3-step setup section will increase trial starts"). Set the primary metric, minimum detectable effect and required sample size before launch. Run for at least one full business cycle. Do not stop early when a result first looks significant.

## Output template

```markdown
# Landing page: <offer> — <audience> — <date>

## Brief
- Goal / primary action
- Audience and awareness stage
- Traffic source and message to match

## Visitor questions and objections (with sources)

## Page copy
### Hero
- Headline
- Subheadline
- CTA
- Visual note

### <Section>
...

## Claim and proof map
| Claim | Evidence | Source / date | Approved by |

## Compliance and accessibility notes

## A/B test plan
| Hypothesis | Variant | Primary metric | MDE | Sample size | Duration |
```

## Approval gates

- Approval of the claim and proof map before publishing.
- Legal review for regulated industries (health, finance, legal) and for any comparative or "guaranteed" claim.

## Stop conditions

- There is no clear primary action or audience.
- Key claims have no evidence and the user cannot provide it.
- The user asks for fake urgency (false countdowns, invented scarcity), fake reviews or testimonials, or hidden fees or terms.

## Anti-patterns

- Clever headlines that hide what the product does.
- Several competing calls to action on one page.
- Headline that does not match the ad or email promise.
- Unsubstantiated superlatives.
- Testimonials showing atypical results without disclosure.
- Fake countdown timers or stock-level claims.
- "Submit" or "Learn more" as the only CTA label.
- Declaring a test winner before the planned sample size.

## Completion checklist

- [ ] One goal, audience and awareness stage
- [ ] Headline matches the traffic source message
- [ ] Visitor questions and objections from real sources answered
- [ ] Every claim mapped to current evidence
- [ ] Testimonials and reviews comply with 16 CFR 255 and 465 or local equivalents
- [ ] Pricing and terms match checkout and legal terms
- [ ] WCAG 2.2 AA basics checked
- [ ] A/B test plan with hypothesis, metric and sample size
