# AI visibility method

Canonical method for measuring how AI answer engines represent a brand, a competitor, or a topic. AI answers change with the engine, model version, session, location, and wording. A single run is an anecdote, not a finding.

## Contents

- Five-layer model
- Prompt set construction
- Sampling protocol
- Run log format
- Stability rules
- Citation strength rubric
- Reporting rules

## Five-layer model

1. **Entity**: what the subject claims about itself, taken from its own site (canonical claims, category, audience, offerings, pricing).
2. **Topics**: the subtopics where the subject should be visible.
3. **Prompts**: realistic conversational questions for each topic (see the prompt types in `query-types.md`).
4. **Prompt results**: whether the subject is mentioned, how it is placed and described, and the sentiment and accuracy of that description.
5. **Citations**: the sources the engine links to or attributes, and how strong each source is.

## Prompt set construction

- Cover every prompt type: recommendation, comparison, validation, how-to, cost, definitional. Competitive work adds reputation prompts.
- Write prompts the way real users phrase them. Include unbranded prompts, which are the main visibility test, as well as branded ones.
- Use 3–5 prompts per priority topic as a starting point. Record the full prompt text exactly.
- Do not write leading prompts, such as "Why is X the best…", unless you are deliberately testing validation framing.

## Sampling protocol

| Parameter | Minimum | Notes |
| --- | --- | --- |
| Engines | 3 | For example ChatGPT, Perplexity, Google AI Mode or AI Overviews, Gemini, Copilot, Claude. Pick the ones the audience uses |
| Runs per prompt per engine | 3 | Use a fresh session for each run: logged out or incognito, with no memory or custom instructions |
| Locale | Fixed per study | Record country, language and, if relevant, city |
| Time window | Same 7-day window | Re-run the whole set when comparing over time |

If the minimums cannot be met because of access, cost, or time limits, say so in the report. Downgrade the affected findings' confidence to `observed (limited sample)`.

## Run log format

```yaml
- prompt: "<exact text>"
  prompt_type: recommendation | comparison | validation | how-to | cost | definitional | reputation
  engine: "<product name>"
  model: "<model or mode if shown, else unknown>"
  date: "<YYYY-MM-DD>"
  locale: "<country/language>"
  session: fresh-logged-out | fresh-logged-in | other
  run: 1
  subject_mentioned: true | false
  position: "<rank among named entities or not-ranked>"
  description_summary: "<how the subject was described>"
  accuracy_vs_entity: accurate | outdated | incomplete | wrong
  sentiment: positive | neutral | negative | mixed
  citations: ["<url>", "..."]
  answer_excerpt: "<verbatim excerpt supporting the above>"
```

Keep the verbatim excerpt for every claim about how an engine described the subject. Paraphrase alone is not evidence.

## Stability rules

- **Stable finding**: observed in a majority of runs, for example at least 2 of 3, on a given engine. It is **cross-engine** if it is stable on at least 2 engines.
- **Unstable finding**: observed in a minority of runs. Report it as volatile. Do not build strategy on it alone.
- Negative claims, such as complaints or inaccuracies, need a stable finding **and** an identifiable source before they are reported as a pattern.

## Citation strength rubric

Score each cited source from 1 to 5. A low score means the citation is vulnerable and easier to displace with a better page.

| Signal | Weak (1–2) | Strong (4–5) |
| --- | --- | --- |
| Freshness | Stale pricing or offers, no date | Recently updated, dated |
| Depth | One-line listing, thin aggregator | Comprehensive, structured, specific |
| Authority | Unknown site, user-generated with no corroboration | Recognized publisher, official documentation, primary data |
| Accuracy | Contradicts the subject's own canonical claims | Matches verifiable facts |
| Ownership | Third party with no editorial stake | First party, or a respected independent reviewer |

## Reporting rules

- Report the sample actually taken: engines, runs, dates and locale.
- Label each finding `stable`, `cross-engine`, or `volatile`, and give it a confidence label from `evidence-standards.md`.
- Present the subject's genuine strengths alongside its gaps.
- Every finding ends in a specific next action and the skill to hand it to.
- Do not claim causation, such as "this page caused the citation", from observation alone.
