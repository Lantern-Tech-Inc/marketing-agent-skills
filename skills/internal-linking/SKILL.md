---
name: internal-linking
description: "Audits a site's internal links and produces a prioritized link plan: orphan pages, crawlability issues, hub-and-spoke connections, descriptive anchor text, and in-context placements, following Google's link best practices. Use when connecting new content to existing pages, fixing orphan or deep pages, or restructuring topic clusters."
license: MIT
metadata:
  version: "1.0.0"
  status: stable
  author: Lantern
---

# Internal Linking

Purpose: help readers and crawlers find and understand the pages that matter. Google uses links to discover pages and understand relevance, and anchor text helps both people and Google understand the destination. This skill produces specific, in-context link placements, not a generic "add more links" note.

Shared rules:

- [references/query-types.md](references/query-types.md) covers intent and funnel stage, which decide which pages should link to which.
- [references/evidence-standards.md](references/evidence-standards.md) covers data sources and confidence.

## When to use this skill

Use when new content needs links in and out, when pages are orphaned or buried deep, when a topic cluster needs connecting, or after a refresh or consolidation.

Do not use when:

- The user wants backlinks from other sites. Use `digital-pr`.
- The issue is a broader technical crawl or indexing problem. Use `seo`.
- The user is planning a new pillar and its spokes. Use `pillar-article`, then return here to link it into the site.

## Required inputs

```yaml
site: ""
crawl_export: ""            # Screaming Frog, Sitebulb or similar: URL, inlinks, outlinks, anchors, depth, status, indexability
priority_pages: []          # pages the business most needs found (money pages, pillars, new content)
search_console: ""          # optional: Links report, Performance by page
sitemap_url: ""             # optional: to find pages missing from the crawl (orphans)
target_pages: []            # optional: specific pages to link to or from
cms_constraints: ""         # optional: what can be edited (body, nav, footer, related-posts module)
```

## Google link rules (verified October 2026)

- Google can reliably crawl only `<a>` elements with an `href` attribute. Links created only by JavaScript click handlers, `<span>`s or buttons without `href` may not be followed.
- Every page you care about should be linked from at least one other page on the site.
- There is no ideal number of links per page, but too many can make the page harder to use.
- Anchor text should be descriptive, reasonably concise and relevant to the destination. Avoid generic anchors ("click here", "read more") and avoid keyword-stuffed anchors.
- The text around a link gives context. Do not chain links next to each other.
- Link to the canonical URL, not to a redirect, parameter variant or duplicate.
- Internal links do not need `nofollow`. Use `rel` qualifiers only for sponsored, user-generated or untrusted outbound links.

## Workflow

```text
- [ ] 1. Crawl and sitemap compared; orphans and deep pages found
- [ ] 2. Technical link defects listed (non-crawlable, broken, redirected, non-canonical)
- [ ] 3. Topic clusters and page roles mapped
- [ ] 4. Link opportunities found from relevant source pages
- [ ] 5. Placements written: source, sentence, anchor, target
- [ ] 6. Plan prioritized and capped per source page
- [ ] 7. Verification steps defined
```

1. **Find orphans and deep pages.**
   - Pages in the sitemap or Search Console but with zero internal inlinks in the crawl are orphans.
   - Note click depth from the home page. Priority pages deeper than 3–4 clicks are candidates for stronger linking. This is a heuristic, not a Google rule.
2. **List link defects.** Non-crawlable links (no `href`), links to 3xx, 4xx or non-canonical URLs, nofollowed internal links and generic anchors pointing to priority pages.
3. **Map clusters and roles.**
   - Group pages by topic. Mark each as pillar, spoke, commercial page or supporting page.
   - Expected flows: spokes link to their pillar and to closely related spokes; the pillar links to every spoke; informational pages link to the relevant commercial page where it genuinely helps the reader's next step.
4. **Find opportunities.**
   - For each target page, find source pages that already discuss the topic (site search, crawl text search, Search Console queries shared by both pages).
   - Prefer sources with traffic and their own inlinks. Prefer the body copy over navigation or footers.
   - Check for cannibalization. If two pages target the same intent, flag for `content-refresh` instead of linking them as equals.
5. **Write placements.**
   - Give the exact existing sentence, or a minimal new sentence when no natural spot exists, the anchor text, and the target canonical URL.
   - Vary anchors naturally across sources. Each anchor must describe the destination accurately.
6. **Prioritize.** Rank by target priority × source relevance × source strength. Default to no more than 3–5 new body links per source page per pass so pages stay readable.
7. **Verify.** After changes: recrawl to confirm links are present, crawlable and point to 200 canonical URLs; check orphans again; inspect a few targets in Search Console.

## Output template

```markdown
# Internal link plan: <site or cluster> — <date>

## Data sources
| Source | Date | Caveats |

## Orphan and deep priority pages
| URL | Inlinks | Depth | In sitemap? | Fix |

## Link defects
| Source URL | Link / anchor | Problem | Fix |

## Cluster map
| Cluster | Pillar | Spokes | Commercial page | Missing links |

## Placements
| Priority | Source URL | Existing or new sentence | Anchor | Target URL | Reason |

## Verification plan
```

## Approval gates

- Approval before changing site-wide navigation, footers or templates.
- Approval before adding new sentences to published pages in regulated or legally reviewed content.

## Stop conditions

- No crawl data or site access is available and the user cannot provide an export. Offer guidance for a single page only.
- The target pages are noindexed, blocked or redirected. Fix indexability first or hand to `seo`.
- Proposed links would only exist for ranking with no reader value (for example forcing commercial anchors into unrelated posts).

## Anti-patterns

- Generic or identical exact-match anchors on every source.
- Mass footer or sidebar links as the main fix.
- Linking to redirected, parameter or non-canonical URLs.
- JavaScript-only links without `href`.
- Adding `nofollow` to internal links to "sculpt PageRank".
- Chaining several links in one phrase.
- Linking two cannibalizing pages to each other instead of consolidating.

## Completion checklist

- [ ] Orphans and deep priority pages identified from crawl plus sitemap or Search Console
- [ ] Technical link defects listed with fixes
- [ ] Clusters and page roles mapped
- [ ] Every placement has source, sentence, anchor and canonical target
- [ ] Anchors are descriptive, varied and accurate
- [ ] New links capped per source page and prioritized
- [ ] Verification plan included
