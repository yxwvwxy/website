import sys, types

# The report builder never touches .env or the network; stub what its imports pull in.
sys.modules.setdefault("dotenv", types.SimpleNamespace(load_dotenv=lambda *a, **k: None))
sys.modules.setdefault("requests", types.ModuleType("requests"))
from datetime import date
sys.path.insert(0, str(__import__("pathlib").Path.home() / "Projects/kotc-marketing/meta-monitor/src"))
from monitor import AdRow, CampaignRow, build_daily_report_message

# Made-up campaigns, ad IDs and numbers; layout comes from the real report builder.
rows = [
    CampaignRow("Campaign A - iOS", 1842.37, 412, 186204, 121387),
    CampaignRow("Campaign B - Android", 1265.80, 331, 142951, 98420),
    CampaignRow("Campaign C - Lookalike", 734.15, 118, 77310, 54862),
    CampaignRow("Campaign D - Retargeting", 312.62, 29, 25418, 13906),
]
alerts = [
    AdRow("120200000000004", "Campaign D - Retargeting", 214.30, 0),
    AdRow("120200000000031", "Campaign D - Retargeting", 286.45, 27),
    AdRow("120200000000017", "Campaign C - Lookalike", 402.10, 46),
]
msg = build_daily_report_message(date(2026, 10, 30), rows, "USD", high_cpi_rows=alerts)
print(msg.replace("KOTC ", ""))
