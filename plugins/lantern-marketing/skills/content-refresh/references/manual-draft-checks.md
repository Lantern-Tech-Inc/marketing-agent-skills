## Manual draft checks

This distribution includes no executable checker. Inspect the draft directly and record each check as pass, fail, or warn, with evidence. Do not claim automated validation ran.

- Warn if title frontmatter is missing or longer than 60 characters; length is a display heuristic, not a ranking rule.
- Warn if meta_description is missing. Fail if it exceeds 155 characters or duplicates the title (case-insensitive).
- Ignore fenced code when checking headings and paragraphs. Require exactly one H1; warn if there are no H2 headings.
- Fail prose paragraphs longer than four sentences. Do not count headings, lists, tables, quotes, or code as prose paragraphs.
- Require an H2 or H3 FAQ heading unless the workflow intentionally omits FAQs; record an intentional omission as a warning.
- Inspect any JSON-LD blocks for valid JSON. If uncertain, flag for technical review rather than claiming validation. FAQPage and HowTo no longer produce Google rich results; retain only for a justified non-Google use.
- Flag unresolved [NEEDS SOURCE], [VERIFY], and [TODO] markers and route them to trust-qa.
- Fix every failure and review every warning. These structural checks do not establish factual accuracy; also complete the skill's evidence and approval checks.
