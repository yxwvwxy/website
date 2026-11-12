# Project showcase notes (handoff, 2026-11-03)

Content collected for the project cards. The showcase is now built into the site (2026-11-11): `index.html` markup, styles at the end of `styles.css` (`pj-` classes), and the project data in `projects.js`.

## Rules

- Everything on the site is in English.
- Summaries were written 2026-11-12 and are shown on the site; edit them in `projects.js` (and here).
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
| 4 | Sync & Backup | Personal | backup-tools | **Removed from the showcase** (2026-11-11) |
| 5 | Storage Management | Work | unimap-auto-inbound | Confirmed |
| 6 | Delivery Operation | Work | delivery-pivot | Confirmed |
| 7 | Pickup Operation | Work | pickup-database | Confirmed |
| 8 | Sorting Operation | Work | sorting-database | Confirmed, images approved |
| 9 | Campaign Automation | Work | kotc-marketing | Confirmed, images ready |
| 10 | Shaken & Sorted | Personal | shaken-and-sorted | Confirmed, images added (2026-11-12) |
| 11 | Personal Website | Personal | website | **Removed from the showcase** (2026-11-11) |

## Display order (agreed 2026-11-11)

Ranked by the size of the project itself, mixed Work and Personal:

1. Campaign Automation
2. Sorting Operation
3. Shaken & Sorted
4. Pickup Operation
5. Storage Management
6. Dictionary + Vocabulary Notebook
7. Grocery Price Tracker
8. Weather °C+°F
9. Delivery Operation

Sync & Backup and Personal Website are not shown on the site.

Layout: a project list on the left that stays in place while the page scrolls. On the right, the card text is on top and the project's media is below; when a project has several pictures, a thumbnail strip appears. Long pictures run at full width and the page scrolls. Phones get a row of project chips instead of the list. All media is in `images/`. To change a project's text, links or media, edit `projects.js`.

## Cards

### Dictionary + Vocabulary Notebook

```
Dictionary + Vocabulary Notebook
Product type: macOS app
Summary: A dictionary pinned to the macOS desktop. Every word you look up joins your vocabulary notebook, so recent words keep coming back until they stick. It has pronunciation, definitions by part of speech with examples, a desktop widget, and one notebook synced across Macs through iCloud.
Tech Stack: Cursor · Swift · AppKit · SwiftUI · WidgetKit · NaturalLanguage · AVFoundation · iCloud Drive · GitHub Actions
Demo: https://github.com/yxwvwxy/desktop-translator/releases/tag/v1.0.0
Repo: https://github.com/yxwvwxy/desktop-translator
```

- Summary notes: lookup and word history in one pinned desktop window; seeing recent words again helps them stick. Auto language detection, IPA and pronunciation, definitions by part of speech with examples, a Recent list that works as the notebook, spell-check suggestions, a menu bar pin, a desktop widget, and launch at login. History is one JSON file in iCloud Drive, shared by the app and the widget and synced across Macs.
- Image: `images/dictionary-hero.png`, shown at 400 px wide (the app window's real size on a Mac), centered.

### Weather °C+°F

```
Weather °C+°F
Product type: macOS app
Summary: Weather for people who think in one temperature scale and keep running into the other: °F and °C side by side for now, the next few hours and the coming days. It follows your location or any city you choose, as a card pinned to the desktop or as small, medium and large widgets.
Tech Stack: Cursor · Swift · SwiftUI · AppKit · WidgetKit · App Intents · CoreLocation · Open-Meteo
Demo: https://github.com/yxwvwxy/weather-c-f/releases/tag/v1.0.0
Repo: https://github.com/yxwvwxy/weather-c-f
```

- Say "macOS app" only; no iOS mention.
- Summary notes: for people who think in one scale and keep meeting the other. °F and °C side by side for now, the next hours, and the coming days. Current location or a searched city, a desktop pin or a normal window, and small/medium/large widgets that can each pick a city.
- Image: `images/weather-widgets.png` (large, medium, small, left to right; medium widget color-corrected). Same picture as repo `Design/widget-styles.png`.

### Grocery Price Tracker

```
Grocery Price Tracker
Product type: Web app
Summary: Compares the same product across six stores by unit price, so different pack sizes line up. Every week Claude Code checks prices on each store's own website; the tracker then flags price drops and publishes a read-only snapshot.
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

### Shaken & Sorted

```
Shaken & Sorted
Product type: iOS app
Summary: An iPhone cocktail journal: log what you drink and make, save recipes to try, and see every ingredient you've had, sorted by spirit. Photograph a bar menu and swipe over it like a highlighter to fill in a drink; after five ratings it maps your palate and suggests what to make next. Everything stays on the phone, with no account and no server.
Tech Stack: Claude · Swift · SwiftUI · SwiftData · Vision · Translation · MapKit · CoreLocation · PhotosUI
Demo: none (no App Store or TestFlight build; the README explains how to build it with Xcode)
Repo: https://github.com/yxwvwxy/shaken-and-sorted
```

- Summary notes: log the cocktails you drink and make, save recipes to try, and see every ingredient you've had, sorted by kind. Everything stays on the phone: no account, no server, no API key. Free on-device menu scan (swipe over words like a highlighter for name, ingredients and price), nearby bars, a Recipes tab with Mark as Made, and Your Palate (flavor radar, favorite spirits, recipes to try next) after 5 rated drinks.
- Images: the 7 section pictures from the repo's `docs/images/`, copied to `images/shaken-*.png` (Drinks, A drink, Search and filter, Menu scan, Places, Recipes, Ingredients and palate). Menu scan and Ingredients show small Chinese ingredient names, which is an app feature.

### Storage Management

```
Storage Management
Product type: Workflow automation with web UI
Summary: There is no API for moving parcels into storage, so a local worker clicks through the dispatch site the way a person would and walks each order to "in storage". Staff queue orders from a Google Sheets menu or a browser userscript, and a batch stops at the first unexpected status.
Tech Stack: Cursor · Python · Playwright · Google Sheets API · Apps Script · Tampermonkey
Demo: https://yxwvwxy.github.io/unimap-auto-inbound/demo/inbound-status.html
Repo: https://github.com/yxwvwxy/unimap-auto-inbound
```

- Describe the user interface as the browser. Staff work in the browser. Playwright only records storage status in the dispatch system behind the scenes, because there is no inbound API.
- Triggers: a Sheet menu queues orders for a local watcher, or a userscript sends order numbers to a local listener. Each order walks a fixed status path into storage, and the whole batch stops on any unexpected status.
- Media: `images/storage-inbound.mp4` (copy of repo `demo/inbound-demo.mp4`).

### Delivery Operation

```
Delivery Operation
Product type: Reporting automation with Power BI
Summary: Each night after 10 pm, parcel status updates are pulled from the UniUni API and feed a Power BI report of delivery, return and inactivity rates, broken down by DSP. The report then goes to the Teams group chats. Inactivity caused by drivers counts against the DSP; warehouse and transit delays are tracked separately.
Tech Stack: Cursor · UniUni API · Power BI · Microsoft Teams · Apps Script · Google Sheets
Demo: https://yxwvwxy.github.io/delivery-pivot/
Repo: https://github.com/yxwvwxy/delivery-pivot
```

- Summary notes: the flow is fetch after 10pm → Power BI daily report → Teams group chats. It reports delivery, return, and inactivity rates. Driver inactivity is attributed to the DSP, while warehouse and transit inactivity are counted separately.
- Media: `images/delivery-report.png`, a still of the daily report (also repo `docs/daily-performance-report.png`). No demo button; repo only.

### Pickup Operation

```
Pickup Operation
Product type: Web app with Supabase
Summary: Turns a shared spreadsheet into a daily pickup desk for 150+ partners and 1,500+ trips. Dispatchers paste each carrier's list; the tool splits it into trips, matches nicknames to official stations, fills the day's log, and prices each run from a database of carriers, stations and rates.
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
- Media: `images/pickup-demo.mp4` (copy of repo `docs/demo.mp4`, re-recorded 2026-11-11 with centered row numbers).

### Sorting Operation

```
Sorting Operation
Product type: Data pipeline with live dashboard
Summary: A Playwright scraper reads the night's sort volumes every 20 minutes and stores them in Supabase, together with a versioned map of which chute serves which city. A dashboard turns the data into city curves, hourly throughput, feed-station volumes and a daily pull list for chutes under 200 parcels.
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
Summary: A daily and weekly Slack report on Meta app-install campaigns that flags ads whose 7-day cost per install runs above target. Campaign data from the Branch MMP flows through BigQuery into a Looker Studio dashboard covering cost, the install-to-purchase funnel, ad partners, campaigns and top ads.
Tech Stack: Cursor · Python · Meta Marketing API · Branch · Playwright · BigQuery · Looker Studio · Slack · GitHub Actions
Demo: https://lookerstudio.google.com/reporting/41c3492f-5bfd-42f8-bf50-79a8c8802ca2
Repo: https://github.com/yxwvwxy/kotc-marketing
```

- Demo is the sample-data Looker Studio dashboard, "MCAT App Campaign Performance Dashboard Demo". Every number is simulated: about $350k of spend in one month across Facebook, TikTok, Google Search Ads and Apple Search Ads. It has six pages: Overview, Funnel, By Ad Partner, By Campaign, Health and Top Ads.
- Summary notes: a daily and weekly Slack report on Meta app-install campaigns that flags ads with a high 7-day CPI; MMP (Branch) campaign data feeds the Looker Studio dashboard.
- Images (finished in kotc-marketing/assets and copied into `images/`), 8 in all, in display order. The site opens on By ad partner (4th) until someone picks another thumbnail.
  - `images/campaign-slack-report.png`: Slack daily report with sample data
  - `images/campaign-dashboard-overview.png`
  - `images/campaign-dashboard-funnel.png`
  - `images/campaign-dashboard-by-ad-partner.png`
  - `images/campaign-dashboard-by-campaign.png`
  - `images/campaign-dashboard-health.png`
  - `images/campaign-dashboard-top-ads.png`
  - `images/campaign-data-flow.png`: connection diagram (Meta → Branch → BigQuery → Looker Studio, and Meta → Slack)
- `drafts/campaign-*.png` and `drafts/scripts/` are the earlier mocks. They are replaced by the images above and are no longer used.

## Next steps

1. Compress large images, since some PNGs are over 1 MB.
2. Fill in the intro (name, tagline, city) and the personal links at the top of `index.html`; they are still placeholders.
