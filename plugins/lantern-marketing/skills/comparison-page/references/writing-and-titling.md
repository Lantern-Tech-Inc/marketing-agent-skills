# Writing, structure, and titling rules

Canonical writing standard for Lantern content skills. It is designed to serve human readers first. That is also what classic search and AI answer engines reward.

## Contents

- Principles
- Structure rules
- Prose rules
- FAQ rules
- Links and CTA
- What helps AI-search visibility (evidence-based)
- What not to do
- Draft checklist

## Principles

1. **People-first.** Write for the specific reader and their task. Google's guidance for AI features states that ordinary SEO best practice still applies. Original, non-commodity content matters most: first-hand experience, unique data, and expert perspective. Restating common knowledge is not enough.
2. **Answer first.** Every page and every major section opens with the direct answer in its first one or two sentences. Context comes after.
3. **Evidence over assertion.** Specific, sourced numbers and named entities replace vague claims. Unsourced specifics are flagged, never invented (see `evidence-standards.md`).

## Structure rules

- One H1. It matches the primary query near-verbatim and agrees with the title tag in substance.
- H2s are the real sub-questions the reader asks, not generic labels such as "Overview" or "Conclusion".
- Choose each section's format from the query type (table, numbered steps, list, or sections grouped by period). See `query-types.md`.
- Add a table of contents when the page has about six or more H2s or runs past about 2,000 words.
- Each section must make sense on its own, so it can be quoted without the surrounding page. Do not artificially "chunk" content for AI. Use normal, well-organized sections.
- There is no ideal word count. Depth follows the topic's real breadth, not a length target.

## Prose rules

- Paragraphs of two to four sentences, one idea per paragraph.
- Use transitions that show logic (because, so, however, for example). Avoid filler such as "In today's fast-paced world".
- Use natural vocabulary variation and related terms where they read naturally. Do not force a set number of keyword variants and do not bold keywords for SEO. Bold only for emphasis a reader would want.
- Prefer concrete numbers, names, dates, and examples. Each one must trace to a source or be clearly marked as an estimate or assumption.
- Match the brand's voice using a provided voice sample or existing copy. If neither exists, say so and use plain, direct language.

## FAQ rules

- Use three to six questions taken from real long-tail variants the body does not already answer. Sources include People Also Ask, support logs and sales objections.
- Answer each question directly in the first sentence, in two to four sentences in total. Use a short numbered list only when the answer is a process.
- FAQ content earns its place by helping readers and giving AI engines extractable answers. Do not add it to win a rich result. Google stopped showing FAQ rich results in May 2026 (see `evidence-standards.md`).

## Links and CTA

- Place internal links in context where the entity or topic is mentioned. Do not bunch them at the end. Use descriptive anchor text.
- Link to primary sources for statistics, quotes, and claims.
- End with **one** CTA that matches the reader's funnel stage and the brand's real conversion path. Do not stack competing CTAs.

## What helps AI-search visibility (evidence-based)

- The GEO study (Aggarwal et al., KDD 2024, arXiv:2311.09735) tested content changes on generative engines. **Citing sources, adding quotations from relevant sources and adding statistics** gave the largest visibility gains, up to about 40% in their benchmark. **Keyword stuffing performed poorly.** These are lab results on specific engines. Treat them as direction, not guarantees.
- Google says AI Overviews and AI Mode use the regular Search index and ranking systems, including query fan-out. A page must be indexed and eligible for a snippet. No special markup, `llms.txt`, AI-only text, or chunking is required.
- Freshness matters for time-sensitive topics. Show "last updated" dates honestly and only change them when the content materially changes.

## What not to do

- Do not invent statistics, quotes, customers, or results.
- Do not keyword-stuff or repeat the query unnaturally.
- Do not create near-duplicate pages for every query variation or fan-out query. Google treats that as scaled content abuse.
- Do not hide text or add "AI-only" text the reader cannot see.
- Do not seek inauthentic mentions or fake reviews.
- Do not pad content to reach a word count.

## Draft checklist

- [ ] Title (about 50–60 characters) and meta (about 155 characters or fewer) follow `query-types.md`
- [ ] Single H1, aligned with the title
- [ ] Opening answers the query in the first one or two sentences
- [ ] Every H2 is a real sub-question with a format matched to the query type
- [ ] No paragraph is longer than four sentences
- [ ] Every number, quote, or named claim is sourced or flagged
- [ ] FAQ has three to six real questions with answer-first replies (if the page has an FAQ)
- [ ] Internal links are placed in context with descriptive anchors
- [ ] Exactly one CTA, matched to the funnel stage
- [ ] No keyword stuffing, hidden text, or padding
