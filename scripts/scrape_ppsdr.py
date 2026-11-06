import urllib.request
import re
import os
import json

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

urls = {
    'home': 'https://www.ppsdr.org/',
    'apropos': 'https://www.ppsdr.org/apropos',
    'sante': 'https://www.ppsdr.org/Sante',
    'agriculture': 'https://www.ppsdr.org/Agriculture',
    'education': 'https://www.ppsdr.org/Education',
    'publications': 'https://www.ppsdr.org/Publications',
    'rapport': 'https://www.ppsdr.org/Rapport',
}

os.makedirs('data/ppsdr', exist_ok=True)
os.makedirs('public/images/ppsdr', exist_ok=True)

scraped_data = {}
all_images = set()

for key, url in urls.items():
    print(f"Fetching {key} from {url}...")
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            scraped_data[key] = html
            with open(f"data/ppsdr/{key}.html", 'w', encoding='utf-8') as f:
                f.write(html)
            
            # find all images
            imgs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html)
            for img in imgs:
                all_images.add(img)
    except Exception as e:
        print(f"Error fetching {url}: {e}")

print(f"Total unique images found across PPSDR: {len(all_images)}")
with open('data/ppsdr/images_list.json', 'w', encoding='utf-8') as f:
    json.dump(list(all_images), f, indent=2)

# Download images
downloaded = []
for idx, img_url in enumerate(all_images):
    full_url = img_url
    if not full_url.startswith('http'):
        if full_url.startswith('/'):
            full_url = 'https://www.ppsdr.org' + full_url
        else:
            full_url = 'https://www.ppsdr.org/' + full_url
    
    # clean filename
    filename = os.path.basename(img_url.split('?')[0])
    if not filename or '.' not in filename:
        filename = f"image_{idx}.jpg"
    
    target_path = os.path.join('public/images/ppsdr', filename)
    try:
        req = urllib.request.Request(full_url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = resp.read()
            with open(target_path, 'wb') as f:
                f.write(data)
            downloaded.append((filename, len(data), full_url))
            print(f"Downloaded: {filename} ({len(data)} bytes)")
    except Exception as e:
        print(f"Failed to download {full_url}: {e}")

print(f"Successfully downloaded {len(downloaded)} images to public/images/ppsdr/")
