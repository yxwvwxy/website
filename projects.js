// Project showcase: a list of projects on the left, the chosen one on the right.
const GH = "https://github.com/yxwvwxy/";
const IMG = "images/";
// Order = the agreed ranking. Each project lists its own media: type "image" | "video".
const projects = [
  { name: "Campaign Automation", group: "Work", type: "Marketing data pipeline with BigQuery",
    summary: "A daily marketing data pipeline supporting cross-channel paid advertising reporting. Campaign data from the Branch MMP flows through BigQuery into a Looker Studio dashboard covering cost, the install-to-purchase funnel, ad partners, campaigns and top ads. It sends daily Slack reports on app install campaigns, flagging underperforming ads.",
    stack: ["Cursor", "Python", "Meta Marketing API", "Branch", "Playwright", "BigQuery", "Looker Studio", "Slack", "GitHub Actions"],
    demo: "https://lookerstudio.google.com/reporting/41c3492f-5bfd-42f8-bf50-79a8c8802ca2", demoLabel: "Demo dashboard", repo: "kotc-marketing", startMedia: 3, // opens on "By ad partner"
    media: [
      { type: "image", src: IMG + "campaign-slack-report.png", caption: "Slack daily report" },
      { type: "image", src: IMG + "campaign-dashboard-overview.png", caption: "Dashboard · Overview" },
      { type: "image", src: IMG + "campaign-dashboard-funnel.png", caption: "Dashboard · Funnel" },
      { type: "image", src: IMG + "campaign-dashboard-by-ad-partner.png", caption: "Dashboard · By ad partner" },
      { type: "image", src: IMG + "campaign-dashboard-by-campaign.png", caption: "Dashboard · By campaign" },
      { type: "image", src: IMG + "campaign-dashboard-health.png", caption: "Dashboard · Health" },
      { type: "image", src: IMG + "campaign-dashboard-top-ads.png", caption: "Dashboard · Top ads" },
      { type: "image", src: IMG + "campaign-data-flow.png", caption: "How the data connects" },
    ] },
  { name: "Sorting Operation", group: "Work", type: "Data pipeline with live dashboard",
    summary: "A data pipeline and live dashboard that makes sorting data visible to operations and the onsite sort team, helping plan and forecast staffing and transportation for a network of 30+ cities and 210k parcels a day. A Playwright scraper reads sort volumes every 20 minutes, 24/7, and stores them in Supabase, together with a versioned map of which chute serves which city. A dashboard turns the data into city curves, hourly throughput and feed-station volumes.",
    stack: ["Cursor", "Python", "Playwright", "Supabase", "Postgres", "Plotly", "GitHub Pages"],
    demo: "https://yxwvwxy.github.io/sorting-database/ops-day-2026-09-05.html", demoLabel: "Live demo", repo: "sorting-database",
    media: [
      { type: "image", src: IMG + "sorting-opsday-city.png", caption: "9/5 ops day · City / hub" },
      { type: "image", src: IMG + "sorting-opsday-feed.png", caption: "9/5 ops day · Feed & hourly" },
      { type: "image", src: IMG + "sorting-chute-count.png", caption: "Chute counts" },
      { type: "image", src: IMG + "sorting-bundle-pull.png", caption: "Bundle & pull list" },
    ] },
  { name: "Shaken & Sorted", group: "Personal", type: "iOS app",
    summary: "An iPhone cocktail journal: log what you drink and make, save recipes to try, and see every ingredient you've had. Photograph a bar menu and swipe over it like a highlighter to fill in a drink; after five ratings it maps your palate and suggests what to make next.",
    stack: ["Claude", "Swift", "SwiftUI", "SwiftData", "Vision", "Translation", "MapKit", "CoreLocation", "PhotosUI"],
    repo: "shaken-and-sorted",
    media: [
      { type: "image", src: IMG + "shaken-drinks.png", caption: "Drinks" },
      { type: "image", src: IMG + "shaken-drink-page.png", caption: "A drink" },
      { type: "image", src: IMG + "shaken-search-filter.png", caption: "Search and filter" },
      { type: "image", src: IMG + "shaken-menu-scan.png", caption: "Menu scan" },
      { type: "image", src: IMG + "shaken-places.png", caption: "Places" },
      { type: "image", src: IMG + "shaken-recipes.png", caption: "Recipes" },
      { type: "image", src: IMG + "shaken-ingredients-palate.png", caption: "Ingredients and palate" },
    ] },
  { name: "Pickup Operation", group: "Work", type: "Web app with Supabase",
    summary: "A structured database behind a web interface, replacing scattered spreadsheets where no one knew which mapping data was accurate and up to date. It runs a daily pickup desk for 150+ partners and 1,500+ trips, supporting $430k in monthly operations. It splits each carrier's list into trips, matches nicknames to official stations, fills the day's log, and prices each run from a database of carriers, stations and rates.",
    stack: ["Cursor", "Next.js", "TypeScript", "Supabase", "Postgres", "Apps Script", "Google Sheets"],
    demo: "https://yxwvwxy.github.io/pickup-database/mock/demo-playback.html", demoLabel: "Live demo", repo: "pickup-database",
    media: [{ type: "video", src: IMG + "pickup-demo.mp4", caption: "Paste → Parse → Fill → Confirm" }] },
  { name: "Storage Management", group: "Work", type: "Workflow automation with web UI",
    summary: "Manages parcels from storage to redelivery. Inbound: instead of manually clicking through each order, it updates every parcel's status automatically to the desired status. Box assignment: records which physical box each parcel is kept in, by storage code. Locate: uses that record to find a parcel. Search a tracking number or storage code to see its box, and the found parcel is updated for redelivery.",
    stack: ["Cursor", "Python", "Playwright", "Google Sheets API", "Apps Script", "Tampermonkey"],
    demo: "https://yxwvwxy.github.io/unimap-auto-inbound/demo/inbound-status.html", demoLabel: "Live demo", repo: "unimap-auto-inbound",
    media: [{ type: "video", src: IMG + "storage-inbound.mp4", caption: "Each order walks to storage" }] },
  { name: "Grocery Price Tracker", group: "Personal", type: "Web app",
    summary: "Compares the same product across six stores by unit price, so different pack sizes line up. Every week Claude Code checks prices on each store's own website for the chosen location; the tracker then shows where the product is cheapest.",
    stack: ["Claude", "Python", "SQLite", "Claude Code", "Chart.js", "GitHub Pages", "launchd"],
    demo: "https://yxwvwxy.github.io/grocery/", demoLabel: "Live demo", repo: "grocery",
    media: [
      { type: "image", src: IMG + "grocery-compare.png", caption: "Unit prices across six stores" },
      { type: "image", src: IMG + "grocery-detail.png", caption: "Bananas · every item ranked + price history" },
    ] },
  { name: "Delivery Operation", group: "Work", type: "Reporting automation with Power BI",
    summary: "Each night after 10 pm, parcel status updates are pulled from the UniUni API and feed a Power BI report of delivery, return and inactivity rates, broken down by DSP. The report then goes to the Teams group chats. Inactivity caused by drivers counts against the DSP; warehouse and transit delays are tracked separately.",
    stack: ["Cursor", "UniUni API", "Power BI", "Microsoft Teams", "Apps Script", "Google Sheets"],
    repo: "delivery-pivot",
    media: [{ type: "image", src: IMG + "delivery-report.png", caption: "Daily performance report" }] },
  { name: "Dictionary + Vocabulary Notebook", group: "Personal", type: "macOS app",
    summary: "A dictionary pinned to the macOS desktop. Every word you look up joins your vocabulary notebook, so recent words keep coming back until they stick. It has pronunciation, definitions by part of speech with examples, a desktop widget, and one notebook synced across Macs through iCloud.",
    stack: ["Cursor", "Swift", "AppKit", "SwiftUI", "WidgetKit", "NaturalLanguage", "AVFoundation", "iCloud Drive", "GitHub Actions"],
    demo: "https://github.com/yxwvwxy/desktop-translator/releases/tag/v1.0.0", demoLabel: "Download app", repo: "desktop-translator",
    media: [{ type: "image", src: IMG + "dictionary-hero.png", width: 400, caption: "Lookup + recent words in one window" }] },
  { name: "Weather °C+°F", group: "Personal", type: "macOS app",
    summary: "Weather for people who think in one temperature scale and keep running into the other: °F and °C side by side for now, the next few hours and the coming days. It follows your location or any city you choose, as a card pinned to the desktop or as small, medium and large widgets.",
    stack: ["Cursor", "Swift", "SwiftUI", "AppKit", "WidgetKit", "App Intents", "CoreLocation", "Open-Meteo"],
    demo: "https://github.com/yxwvwxy/weather-c-f/releases/tag/v1.0.0", demoLabel: "Download app", repo: "weather-c-f",
    media: [{ type: "image", src: IMG + "weather-widgets.png", caption: "Large, medium and small widgets" }] },
];

const N = projects.length;
const pad = (n) => String(n).padStart(2, "0");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const list = document.getElementById("pj-list");
const center = document.getElementById("pj-center");
let current = -1;

const rows = projects.map((p, i) => {
  const li = document.createElement("li");
  li.innerHTML = `<button type="button"><span class="pj-num">${pad(i + 1)}</span><span class="pj-txt"><span class="pj-name"></span><span class="pj-ptype"></span></span><span class="pj-grp">${p.group}</span></button>`;
  li.querySelector(".pj-name").textContent = p.name;
  li.querySelector(".pj-ptype").textContent = p.type;
  li.firstChild.addEventListener("click", () => select(i));
  list.appendChild(li);
  return li.firstChild;
});

function select(i) {
  i = ((i % N) + N) % N;
  if (i === current) return;
  current = i;
  rows.forEach((b, j) => b.setAttribute("aria-current", j === i));
  rows[i].scrollIntoView({ block: "nearest", inline: "nearest", behavior: reduce ? "auto" : "smooth" });
  render();
}

// ↑ ↓ move through the list while it has focus (wrapping at the ends); elsewhere they scroll the page
list.addEventListener("keydown", (e) => {
  if (e.altKey || e.ctrlKey || e.metaKey) return;
  if (e.key === "ArrowDown") { e.preventDefault(); select(current + 1); rows[current].focus({ preventScroll: true }); }
  if (e.key === "ArrowUp") { e.preventDefault(); select(current - 1); rows[current].focus({ preventScroll: true }); }
});

/* ---------- right panel ---------- */
function render() {
  const p = projects[current];
  document.getElementById("pj-group").textContent = `${p.group} project`;
  document.getElementById("pj-title").textContent = p.name;
  document.getElementById("pj-type").textContent = p.type;
  const summary = document.getElementById("pj-summary");
  summary.textContent = p.summary || "Summary coming soon.";
  summary.classList.toggle("is-tbd", !p.summary);
  document.getElementById("pj-tags").innerHTML = p.stack.map((t) => `<li>${t}</li>`).join("");
  const links = [];
  if (p.demo) links.push(`<a href="${p.demo}" target="_blank" rel="noopener">${p.demoLabel || "Demo"} ↗</a>`);
  links.push(`<a href="${GH + p.repo}" target="_blank" rel="noopener">Repo ↗</a>`);
  document.getElementById("pj-links").innerHTML = links.join("");
  showMedia(p, p.startMedia || 0);
  center.classList.remove("is-swap");
  void center.offsetWidth;
  center.classList.add("is-swap");
}

function mediaEl(m, thumb) {
  if (m.type === "video") {
    const v = document.createElement("video");
    v.src = m.src;
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    if (!thumb) { v.autoplay = !reduce; v.controls = reduce; } else v.preload = "metadata";
    return v;
  }
  const img = new Image();
  img.src = m.src;
  img.alt = m.caption || "";
  return img;
}

function showMedia(p, k) {
  const frame = document.getElementById("pj-frame");
  const strip = document.getElementById("pj-strip");
  const caption = document.getElementById("pj-caption");
  frame.innerHTML = "";
  strip.innerHTML = "";
  frame.className = "pj-frame";
  if (!p.media.length) {
    const initials = p.name.split(/[\s&+]+/).filter(Boolean).slice(0, 2).map((s) => s[0]).join("");
    frame.classList.add("is-empty");
    frame.innerHTML = `<div class="pj-ph">${initials}</div>`;
    caption.textContent = "Preview coming soon";
    return;
  }
  const m = p.media[k];
  caption.textContent = (m.caption || "") + (p.media.length > 1 ? ` · ${k + 1}/${p.media.length}` : "");
  if (m.type === "image") {           // click a picture to open it full size
    const a = document.createElement("a");
    a.href = m.src; a.target = "_blank"; a.rel = "noopener"; a.setAttribute("aria-label", "Open full size");
    a.appendChild(mediaEl(m, false));
    if (m.width) { frame.classList.add("is-sized"); a.style.maxWidth = m.width + "px"; }
    frame.appendChild(a);
  } else {
    frame.classList.add("is-video");
    frame.appendChild(mediaEl(m, false));
    frame.insertAdjacentHTML("beforeend", `<span class="pj-kind">Video</span>`);
  }
  if (p.media.length > 1) {
    p.media.forEach((mm, j) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = j === k ? "is-on" : "";
      b.setAttribute("aria-label", mm.caption || `Media ${j + 1}`);
      b.appendChild(mediaEl(mm, true));
      b.addEventListener("click", () => showMedia(p, j));
      strip.appendChild(b);
    });
  }
  // if the reader had scrolled down a long picture, bring the new one into view from its top
  const top = center.getBoundingClientRect().top;
  if (top < 0) scrollTo({ top: scrollY + top - 28, behavior: reduce ? "auto" : "smooth" });
}

// The whole list is always shown. When it is taller than the window, it scrolls with the
// page until its last project is visible, then stays put.
const side = document.querySelector(".pj-side");
function fitSide() {
  const top = Math.min(28, innerHeight - side.offsetHeight - 28);
  side.style.setProperty("--pj-side-top", top + "px");
}
addEventListener("resize", fitSide);
fitSide();

select(0);
