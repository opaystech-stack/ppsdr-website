import json
import re

files = ['home', 'apropos', 'sante', 'agriculture', 'education', 'publications', 'rapport']
all_clean = {}

for f in files:
    with open(f"data/ppsdr/{f}.html", "r", encoding="utf-8") as fp:
        html = fp.read()
    
    # Extract clean text
    # remove scripts, styles
    cleaned = re.sub(r'<script[\s\S]*?</script>', '', html)
    cleaned = re.sub(r'<style[\s\S]*?</style>', '', cleaned)
    
    # get headings
    headings = [re.sub(r'<[^>]+>', '', h).strip() for h in re.findall(r'<h[1-6][^>]*>([\s\S]*?)</h[1-6]>', cleaned)]
    # get paragraphs
    paragraphs = [re.sub(r'<[^>]+>', '', p).strip() for p in re.findall(r'<p[^>]*>([\s\S]*?)</p>', cleaned)]
    
    all_clean[f] = {
        'headings': [h for h in headings if h],
        'paragraphs': [p for p in paragraphs if p]
    }

with open("data/ppsdr_texts_clean.json", "w", encoding="utf-8") as out:
    json.dump(all_clean, out, indent=2, ensure_ascii=False)

print("Saved data/ppsdr_texts_clean.json successfully")
