import os
import json
import urllib.request
import urllib.parse

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

IMAGES_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(IMAGES_DIR, exist_ok=True)

with open('data/inspection_all_pages.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

downloaded = 0
for key, p in data.items():
    mods = p.get('modules', [])
    for m in mods:
        # Check bg_image
        bg = m.get('bg_image')
        if bg and bg.startswith('/wp-content'):
            url = urllib.parse.urljoin('https://www.sightsavers.org', bg)
            filename = os.path.basename(urllib.parse.urlparse(bg).path)
            filepath = os.path.join(IMAGES_DIR, filename)
            if not os.path.exists(filepath):
                try:
                    print(f"Downloading bg {url} -> {filename}")
                    req = urllib.request.Request(url, headers=HEADERS)
                    with urllib.request.urlopen(req, timeout=15) as res, open(filepath, 'wb') as out:
                        out.write(res.read())
                    downloaded += 1
                except Exception as e:
                    print(f"Error {url}: {e}")

        # Check images
        for img in m.get('images', []):
            src = img.get('src', '')
            if src and src.startswith('/wp-content'):
                url = urllib.parse.urljoin('https://www.sightsavers.org', src)
                filename = os.path.basename(urllib.parse.urlparse(src).path)
                filepath = os.path.join(IMAGES_DIR, filename)
                if not os.path.exists(filepath):
                    try:
                        print(f"Downloading img {url} -> {filename}")
                        req = urllib.request.Request(url, headers=HEADERS)
                        with urllib.request.urlopen(req, timeout=15) as res, open(filepath, 'wb') as out:
                            out.write(res.read())
                        downloaded += 1
                    except Exception as e:
                        print(f"Error {url}: {e}")

print(f"Downloaded {downloaded} new original images.")
