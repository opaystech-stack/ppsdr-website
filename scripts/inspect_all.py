import urllib.request
import json
import re
from bs4 import BeautifulSoup

PAGES = [
    ("home", "https://www.sightsavers.org/"),
    ("about_us", "https://www.sightsavers.org/about-us/"),
    ("programmes", "https://www.sightsavers.org/programmes/"),
    ("accelerate", "https://www.sightsavers.org/programmes/accelerate/"),
    ("stories_news_blogs", "https://www.sightsavers.org/stories-news-blogs/"),
    ("single_article", "https://www.sightsavers.org/news/2026/11/sightsavers-pledges-five-eye-health-commitments-ahead-of-global-summit/"),
    ("how_to_help", "https://www.sightsavers.org/how-to-help/"),
    ("why_donate", "https://www.sightsavers.org/how-to-help/why-donate-to-sightsavers/"),
    ("contact_us", "https://www.sightsavers.org/contact-us/"),
    ("media_centre", "https://www.sightsavers.org/media-centre/"),
    ("where_we_work", "https://www.sightsavers.org/where-we-work/"),
    ("our_history", "https://www.sightsavers.org/about-us/our-history/"),
    ("appeals", "https://www.sightsavers.org/appeals/make-extraordinary-change/"),
    ("faq", "https://www.sightsavers.org/contact-us/frequently-asked-questions/"),
    ("404", "https://www.sightsavers.org/404/")
]

results = {}

for key, url in PAGES:
    print(f"Inspecting {key}: {url}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8', errors='ignore')
        soup = BeautifulSoup(html, 'html.parser')
        
        main = soup.find('main')
        if not main:
            results[key] = {"error": "no main tag"}
            continue
            
        modules = []
        children = main.find_all(['section', 'div', 'article'], recursive=False)
        for idx, c in enumerate(children):
            cl = c.get('class', [])
            style = c.get('style', '')
            
            # Find hero type if first module
            h1 = c.find('h1')
            h1_text = h1.get_text(strip=True) if h1 else ""
            
            headings = []
            for h in c.find_all(['h2', 'h3', 'h4']):
                headings.append({
                    "tag": h.name,
                    "class": h.get('class', []),
                    "text": h.get_text(strip=True)
                })
                
            images = []
            for img in c.find_all('img'):
                images.append({
                    "src": img.get('src', ''),
                    "alt": img.get('alt', ''),
                    "class": img.get('class', [])
                })
                
            # Check for background image in style
            bg_match = re.search(r'url\((.*?)\)', style)
            bg_image = bg_match.group(1).strip("'\"") if bg_match else ""
            
            links = []
            for a in c.find_all('a'):
                t = a.get_text(strip=True)
                href = a.get('href', '')
                a_cl = a.get('class', [])
                if t and (len(t) < 50 or 'btn' in ' '.join(a_cl)):
                    links.append({"text": t, "href": href, "class": a_cl})
                    
            paragraphs = [p.get_text(separator=' ', strip=True) for p in c.find_all('p') if p.get_text(strip=True)]
            
            modules.append({
                "index": idx,
                "tag": c.name,
                "classes": cl,
                "style": style,
                "bg_image": bg_image,
                "h1": h1_text,
                "headings": headings[:8],
                "images": images[:10],
                "paragraphs": paragraphs[:6],
                "links": links[:10]
            })
            
        results[key] = {
            "url": url,
            "main_classes": main.get('class', []),
            "module_count": len(modules),
            "modules": modules
        }
    except Exception as e:
        print(f"Error on {key}: {e}")
        results[key] = {"error": str(e)}

with open('data/inspection_all_pages.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print("Done! Saved to data/inspection_all_pages.json")
