"""Sanitized Looker Studio-style campaign report: every name and number below is made up."""
import json, random
from datetime import date, timedelta

random.seed(7)

PLATFORMS = {  # ad platform -> (colour, campaigns with base weekly cost, CPI, purchase rate, CPC)
    "Meta":             ("#4285f4", [("Prospecting - iOS", 2100, 4.6, .085, .92), ("Retargeting - iOS", 820, 6.9, .14, 1.35), ("Lookalike - Android", 640, 3.8, .06, .71)]),
    "Apple Search Ads": ("#34a853", [("Brand", 960, 2.4, .16, 1.08), ("Category - Generic", 1180, 5.2, .09, 2.10)]),
    "TikTok":           ("#fbbc04", [("Spark Ads - Creators", 1240, 5.9, .05, .48), ("In-Feed - Broad", 690, 7.8, .04, .39)]),
    "Google Ads":       ("#ea4335", [("App Campaign - Installs", 760, 4.1, .07, .64)]),
}
WEEKS = [date(2026, 7, 6) + timedelta(weeks=i) for i in range(13)]
season = [0.82, 0.86, 0.9, 0.95, 1.0, 1.08, 1.15, 1.22, 1.18, 1.12, 1.05, 1.0, 0.96]

rows = []  # (platform, campaign, week_index, cost, installs, purchases, clicks)
for plat, (_, camps) in PLATFORMS.items():
    for name, cost, cpi, prate, cpc in camps:
        for w in range(len(WEEKS)):
            c = cost * season[w] * random.uniform(.9, 1.1)
            inst = round(c / (cpi * random.uniform(.9, 1.12)))
            rows.append((plat, name, w, c, inst, round(inst * prate * random.uniform(.85, 1.15)), round(c / (cpc * random.uniform(.9, 1.1)))))

def agg(sel):
    cost = sum(r[3] for r in sel); inst = sum(r[4] for r in sel); pur = sum(r[5] for r in sel); clk = sum(r[6] for r in sel)
    return dict(cost=cost, installs=inst, purchases=pur, clicks=clk,
                cpi=cost / inst if inst else None, cpp=cost / pur if pur else None, cpc=cost / clk if clk else None)

cur = agg([r for r in rows if r[2] >= 6]); prev = agg([r for r in rows if r[2] < 6 and r[2] >= 0])
total = agg(rows)
weekly = [agg([r for r in rows if r[2] == w]) for w in range(len(WEEKS))]
by_plat = {p: agg([r for r in rows if r[0] == p]) for p in PLATFORMS}
campaigns = [(p, name, agg([r for r in rows if r[0] == p and r[1] == name])) for p, (_, camps) in PLATFORMS.items() for name, *_ in camps]

def money(v, d=0): return "—" if v is None else f"${v:,.{d}f}"
def num(v): return f"{v:,.0f}"
def delta(a, b, lower_is_better=False):
    ch = (a - b) / b
    good = (ch < 0) if lower_is_better else (ch > 0)
    arrow = "▲" if ch > 0 else "▼"
    return f'<span class="delta {"good" if good else "bad"}">{arrow} {abs(ch):.1%}</span>'

# Scorecards compare the last 7 weeks with the 6 weeks before, per week, so the periods are comparable.
cw, pw = 7, 6
cards = [
    ("Cost", money(total["cost"]), delta(cur["cost"] / cw, prev["cost"] / pw)),
    ("Installs", num(total["installs"]), delta(cur["installs"] / cw, prev["installs"] / pw)),
    ("CPI", money(total["cpi"], 2), delta(cur["cpi"], prev["cpi"], True)),
    ("Purchases", num(total["purchases"]), delta(cur["purchases"] / cw, prev["purchases"] / pw)),
    ("CPP", money(total["cpp"], 2), delta(cur["cpp"], prev["cpp"], True)),
    ("Clicks", num(total["clicks"]), delta(cur["clicks"] / cw, prev["clicks"] / pw)),
    ("CPC", money(total["cpc"], 2), delta(cur["cpc"], prev["cpc"], True)),
]
cards_html = "".join(f'<div class="card"><div class="lbl">{l}</div><div class="val">{v}</div><div>{d} <span class="vs">vs prior period</span></div></div>' for l, v, d in cards)

max_cost = max(a["cost"] for a in by_plat.values())
plat_rows = "".join(
    f'<tr><td><span class="dot" style="background:{PLATFORMS[p][0]}"></span>{p}</td>'
    f'<td class="bar"><span style="width:{a["cost"] / max_cost * 62:.0f}%;background:{PLATFORMS[p][0]}33"></span><b>{money(a["cost"])}</b></td>'
    f'<td>{num(a["installs"])}</td><td>{money(a["cpi"], 2)}</td><td>{num(a["purchases"])}</td><td>{money(a["cpp"], 2)}</td><td>{num(a["clicks"])}</td><td>{money(a["cpc"], 2)}</td></tr>'
    for p, a in by_plat.items())

cpis = [a["cpi"] for _, _, a in campaigns]
lo, hi = min(cpis), max(cpis)
def heat(v):  # green (cheap) to red (expensive), light enough to read text on
    t = (v - lo) / (hi - lo)
    return f"hsl({120 - 120 * t:.0f} 60% 90%)"
camp_rows = "".join(
    f'<tr><td><span class="dot" style="background:{PLATFORMS[p][0]}"></span>{p}</td><td>{n}</td><td>{money(a["cost"])}</td>'
    f'<td>{num(a["installs"])}</td><td style="background:{heat(a["cpi"])}">{money(a["cpi"], 2)}</td><td>{num(a["purchases"])}</td>'
    f'<td>{money(a["cpp"], 2)}</td><td>{money(a["cpc"], 2)}</td></tr>'
    for p, n, a in campaigns)

data = dict(
    weeks=[w.strftime("%b %-d") for w in WEEKS],
    cost=[round(a["cost"]) for a in weekly], installs=[a["installs"] for a in weekly],
    cpi=[round(a["cpi"], 2) for a in weekly],
    plats=list(PLATFORMS), colors=[v[0] for v in PLATFORMS.values()],
    platCost=[round(by_plat[p]["cost"]) for p in PLATFORMS],
    platWeeklyCpi={p: [round(agg([r for r in rows if r[0] == p and r[2] == w])["cpi"], 2) for w in range(len(WEEKS))] for p in PLATFORMS},
)

page = open("template.html").read()
for k, v in {"CARDS": cards_html, "PLAT_ROWS": plat_rows, "CAMP_ROWS": camp_rows, "DATA": json.dumps(data)}.items():
    page = page.replace("{{" + k + "}}", v)
open("report.html", "w").write(page)
print("total cost", money(total["cost"]), "installs", total["installs"], "cpi", money(total["cpi"], 2))
