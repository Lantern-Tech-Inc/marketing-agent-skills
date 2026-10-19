# Industry Content Production Research Guidance

## Phase 3: Collect DataForSEO evidence

Run keyword research for the exact target country and language.

For every seed and expansion term, capture:

```yaml
keyword:
location:
language:
monthly_search_volume:
cpc:
advertiser_competition:
trend:
source_endpoint:
collection_date:
```

Normalize and cluster variants by shared intent. Preserve meaningful local differences; do not merge terms merely because their English translations look similar.

When DataForSEO returns null volume:

- Record it as `not reported`, never zero.
- Check Google autocomplete, People Also Ask, related searches, forum repetition, and visible SERP supply.
- Keep the topic if it has strong product fit, recurring customer demand, or clear emerging-category value.

## Phase 4: Validate intent in live Google results

For every candidate cluster, inspect the localized Google SERP with personalization minimized.

Capture the top ten organic results and all meaningful result features:

- Page title and domain.
- Page type: product, service, guide, comparison, listicle, glossary, tool, research report, video, forum, or news.
- Dominant angle and audience.
- Publication and update dates where visible.
- Featured snippets, People Also Ask, discussions, videos, shopping, local results, and AI-generated result modules.
- Whether the query is mixed-intent or dominated by an unintended meaning.
- Whether local-language or global English pages dominate.

For markets where Google is not representative, inspect the dominant local search engine as an additional source. Do not label local-engine findings as Google data.

### Search-intent decision rule

Assign one primary intent based on the pages Google rewards, not the wording of the keyword alone:

| Observed result pattern | Required content format |
|---|---|
| Definitions, glossaries, introductory guides | Answer-first explainer or pillar |
| Numbered tutorials and videos | Step-by-step how-to |
| “Best,” reviews, and product roundups | Tested listicle or buyer guide |
| Versus pages and comparison tables | Comparison page |
| Product and solution pages | Commercial landing page, not a blog |
| Calculators, templates, and generators | Interactive tool or downloadable template |
| Studies, statistics, and news coverage | Original research report |
| Forums and community discussions | Experience-led article with real examples |
| Mixed result types | Hybrid format matching the dominant decision journey |

If the SERP contradicts the proposed format, change the format before drafting.

## Phase 5: Analyze competitors without copying them

Select three to five representative ranking pages per cluster. Include the strongest local specialist, the strongest authoritative publisher, and the strongest commercial competitor where available.

For each page, record:

```yaml
url:
domain:
page_type:
target_audience:
core_promise:
section_sequence:
unique_evidence:
visual_assets:
entities_covered:
internal_links:
cta:
strengths:
weaknesses:
freshness:
```

Then identify the content gap Lantern can own. Valid gaps include:

- No first-party data.
- No transparent methodology.
- No local examples.
- No implementation detail.
- No decision framework.
- No connection between measurement and action.
- Outdated product or market information.
- Weak source attribution.
- A confusing definition that can be stated more precisely.

“Write more words” is not a competitive gap.

## Phase 6: Check existing-site coverage

Before recommending a new URL:

1. Search the site for the primary and secondary topic.
2. Check whether an existing page already satisfies the same intent.
3. Review current rankings, impressions, clicks, and internal links when Search Console data is available.
4. Identify cannibalization between existing URLs.
5. Decide whether to create, update, consolidate, redirect, or leave unchanged.

Never create a new article when improving an existing relevant URL is the stronger option.

## Phase 7: Score and prioritize opportunities

Score each cluster from 0 to 100:

| Factor | Weight | Question |
|---|---:|---|
| Business fit | 25 | Can the product credibly solve the reader's problem? |
| Intent fit | 20 | Does the proposed format match the current SERP? |
| Demand | 15 | Is there measurable or strongly observed demand? |
| Winnability | 15 | Can Lantern produce a materially better result? |
| Evidence advantage | 15 | Does Lantern have original data, expertise, or product proof? |
| Internal-link value | 10 | Does the page strengthen an important commercial cluster? |

Apply a penalty of up to 30 points for:

- Cannibalization.
- Regulatory or legal risk.
- Weak factual support.
- Audience mismatch.
- A topic that cannot naturally lead to the product.
- A stale or purely seasonal opportunity with no timely publishing path.

Prioritize the highest score, not the highest volume.
