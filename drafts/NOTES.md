# Project showcase notes (handoff, 2026-11-03)

Content collected for the project cards. The site itself (index.html / styles.css) has not been changed yet: collect first, then build.

## Rules

- Everything on the site is in English.
- Summaries are TBD; polish them all in one pass later.
- Tech Stack = one-line tags joined with " · ".
- First tag = the AI tool it was built with: **Claude** for Grocery Price Tracker and Shaken & Sorted, **Cursor** for everything else.
- Product type follows an "X with Y" pattern where it fits.
- Demo images are approved by Vivienne before they go into `images/`. Unapproved drafts live in `drafts/`.

Card format:

```
<Name>
Product type:
Summary: TBD
Tech Stack: a · b · c
Demo: <link>
Repo: https://github.com/yxwvwxy/<repo>
```

## Status

| # | Project | Group | Repo | Status |
|---|---------|-------|------|--------|
| 1 | Dictionary + Vocabulary Notebook | Personal | desktop-translator | Confirmed |
| 2 | Weather °C+°F | Personal | weather-c-f | Confirmed |
| 3 | Grocery Price Tracker | Personal | grocery | Confirmed, images approved |
| 4 | Sync & Backup | Personal | backup-tools | Confirmed |
| 5 | Storage Management | Work | unimap-auto-inbound | Confirmed |
| 6 | Delivery Operation | Work | delivery-pivot | Confirmed |
| 7 | Pickup Operation | Work | pickup-database | Confirmed |
| 8 | Sorting Operation | Work | sorting-database | Confirmed, images approved |
| 9 | Campaign Automation | Work | kotc-marketing | Confirmed, images ready |
| 10 | Shaken & Sorted | Personal | shaken-and-sorted | **Not started** (first tag: Claude) |
| 11 | Personal Website | Personal | website | **Not started** (first tag: Cursor) |

## Cards

### Dictionary + Vocabulary Notebook

```
Dictionary + Vocabulary Notebook
Product type: macOS app
Summary: TBD
Tech Stack: Cursor · Swift · AppKit · SwiftUI · WidgetKit · NaturalLanguage · AVFoundation · iCloud Drive · GitHub Actions
Demo: https://github.com/yxwvwxy/desktop-translator/releases/tag/v1.0.0
Repo: https://github.com/yxwvwxy/desktop-translator
```

- Summary notes: lookup and word history in one pinned desktop window; seeing recent words again helps them stick. Auto language detection, IPA and pronunciation, definitions by part of speech with examples, a Recent list that works as the notebook, spell-check suggestions, a menu bar pin, a desktop widget, and launch at login. History is one JSON file in iCloud Drive, shared by the app and the widget and synced across Macs.
- Image: Vivienne's screenshot (cream UI, burgundy accent) needs to be re-supplied into `images/`. The repo also has `docs/hero.png`.

### Weather °C+°F

```
Weather °C+°F
Product type: macOS app
Summary: TBD
Tech Stack: Cursor · Swift · SwiftUI · AppKit · WidgetKit · App Intents · CoreLocation · Open-Meteo
Demo: https://github.com/yxwvwxy/weather-c-f/releases/tag/v1.0.0
Repo: https://github.com/yxwvwxy/weather-c-f
```

- Say "macOS app" only; no iOS mention.
- Summary notes: for people who think in one scale and keep meeting the other. °F and °C side by side for now, the next hours, and the coming days. Current location or a searched city, a desktop pin or a normal window, and small/medium/large widgets that can each pick a city.
- Image: repo `Design/widget-styles.png` (all three sizes) is the best hero.

### Grocery Price Tracker

```
Grocery Price Tracker
Product type: Web app
Summary: TBD
Tech Stack: Claude · Python · SQLite · Claude Code · Chart.js · GitHub Pages · launchd
Demo: https://yxwvwxy.github.io/grocery/
Repo: https://github.com/yxwvwxy/grocery
```

- Summary notes: compares the same product across ShopRite, H Mart, Costco, 99 Ranch, Target, and Walmart by unit price, so different pack sizes compare directly. Claude Code looks up prices on each store's official site. Weekly refresh, price-drop notifications, and a public read-only snapshot.
- Images (approved): `images/grocery-compare.png`, `images/grocery-detail.png`. These are also in the grocery README.

### Sync & Backup

```
Sync & Backup
Product type: macOS automation
Summary: TBD
Tech Stack: Cursor · Bash · Git · GitHub CLI · launchd
Demo: none yet
Repo: https://github.com/yxwvwxy/backup-tools
```

- Summary notes: every day at 14:00 on both Macs, it backs up every repo in ~/Projects. For each one it fetches, commits local changes, rebases if behind, and pushes if ahead. Missed runs catch up on the next wake. It works offline and writes a log.
- Demo idea: a sanitized terminal screenshot of the log.

### Storage Management

```
Storage Management
Product type: Workflow automation with web UI
Summary: TBD
Tech Stack: Cursor · Python · Playwright · Google Sheets API · Apps Script · Tampermonkey
Demo: https://yxwvwxy.github.io/unimap-auto-inbound/demo/inbound-status.html
Repo: https://github.com/yxwvwxy/unimap-auto-inbound
```

- Describe the user interface as the browser. Staff work in the browser. Playwright only records storage status in the dispatch system behind the scenes, because there is no inbound API.
- Triggers: a Sheet menu queues orders for a local watcher, or a userscript sends order numbers to a local listener. Each order walks a fixed status path into storage, and the whole batch stops on any unexpected status.
- Media in repo: `demo/inbound-demo.mp4` and `.gif`.

### Delivery Operation

```
Delivery Operation
Product type: Reporting automation with Power BI
Summary: TBD
Tech Stack: Cursor · UniUni API · Power BI · Microsoft Teams · Apps Script · Google Sheets
Demo: https://yxwvwxy.github.io/delivery-pivot/
Repo: https://github.com/yxwvwxy/delivery-pivot
```

- Summary notes: the flow is fetch after 10pm → Power BI daily report → Teams group chats. It reports delivery, return, and inactivity rates. Driver inactivity is attributed to the DSP, while warehouse and transit inactivity are counted separately.
- Media in repo: `docs/daily-performance-report.mp4`.

### Pickup Operation

```
Pickup Operation
Product type: Web app with Supabase
Summary: TBD
Tech Stack: Cursor · Next.js · TypeScript · Supabase · Postgres · Apps Script · Google Sheets
Demo: https://yxwvwxy.github.io/pickup-database/mock/demo-playback.html
Repo: https://github.com/yxwvwxy/pickup-database
```

- Present it as database-backed with a web UI, and also describe the current Apps Script flow:
  1. **Paste**: dispatchers paste each carrier's daily list.
  2. **Parse**: split the lists into trips and match nicknames to official stations.
  3. **Fill**: write today's log, one partner per row.
  4. **Confirm**: check address, state, pallet count, and price (shared truck gets the shared rate, solo gets the solo rate), then cost per unit.
- Database: carriers, stations, partners, pricing groups and rates, rules, schedules, and a daily cost summary.
- Scale: 150+ partners, 1,500+ trips, about $450k monthly cost.

### Sorting Operation

```
Sorting Operation
Product type: Data pipeline with live dashboard
Summary: TBD
Tech Stack: Cursor · Python · Playwright · Supabase · Postgres · Plotly · GitHub Pages
Demo: https://yxwvwxy.github.io/sorting-database/ops-day-2026-09-05.html
Repo: https://github.com/yxwvwxy/sorting-database
```

- Live dashboard: https://yxwvwxy.github.io/sorting-database/ (use "Login as Guest").
- Summary notes: scrapes sorting volumes at :10, :30, and :50 through the operating night and captures opening volumes at 21:30. Snapshots go into Supabase. The chute→city map is versioned over time, and there is a daily under-200 pull list. The dashboard shows city curves, hourly throughput, feed stations, and chute counts.
- Images (approved): `images/sorting-opsday-city.png`, `images/sorting-opsday-feed.png`, `images/sorting-chute-count.png`, `images/sorting-bundle-pull.png`.

### Campaign Automation

```
Campaign Automation
Product type: Marketing data pipeline with BigQuery
Summary: TBD
Tech Stack: Cursor · Python · Meta Marketing API · Branch · Playwright · BigQuery · Looker Studio · Slack · GitHub Actions
Demo: https://lookerstudio.google.com/reporting/41c3492f-5bfd-42f8-bf50-79a8c8802ca2
Repo: https://github.com/yxwvwxy/kotc-marketing
```

- Demo is the sample-data Looker Studio dashboard, "MCAT App Campaign Performance Dashboard Demo". Every number is simulated: about $350k of spend in one month across Facebook, TikTok, Google Search Ads and Apple Search Ads. It has six pages: Overview, Funnel, By Ad Partner, By Campaign, Health and Top Ads.
- Summary notes: a daily and weekly Slack report on Meta app-install campaigns that flags ads with a high 7-day CPI; MMP (Branch) campaign data feeds the Looker Studio dashboard.
- Images (finished in kotc-marketing/assets and copied into `images/`):
  - `images/campaign-slack-report.png`: Slack daily report with sample data
  - `images/campaign-dashboard-overview.png`
  - `images/campaign-dashboard-funnel.png`
  - `images/campaign-dashboard-by-ad-partner.png`
  - `images/campaign-dashboard-by-campaign.png`
  - `images/campaign-dashboard-health.png`
  - `images/campaign-dashboard-top-ads.png`
- `drafts/campaign-*.png` and `drafts/scripts/` are the earlier mocks. They are replaced by the images above and are no longer used.

## Next steps

1. Organize Shaken & Sorted and Personal Website.
2. Polish every Summary in English in one pass.
3. Build the site. Compress large images first, since some PNGs are over 1 MB.
