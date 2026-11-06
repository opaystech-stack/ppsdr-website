import urllib.request
import re

url = 'https://www.sightsavers.org/appeals/make-extraordinary-change/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
with urllib.request.urlopen(req) as resp:
    html = resp.read().decode('utf-8')
    m = re.search(r'<div[^>]*class="[^"]*c-donation-form-hero[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/header>|<section[^>]*class="[^"]*c-donation-form-hero[^"]*"[^>]*>([\s\S]*?)<\/section>', html, re.I)
    if m:
        print(m.group(0)[:3000])
    else:
        # print around c-donation-form-hero
        pos = html.find('c-donation-form-hero')
        print(html[pos-100:pos+2000])
