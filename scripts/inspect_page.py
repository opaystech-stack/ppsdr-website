import sys
import urllib.request
from bs4 import BeautifulSoup

def inspect(url):
    print(f"==================================================")
    print(f"INSPECTING: {url}")
    print(f"==================================================")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
    soup = BeautifulSoup(html, 'html.parser')
    
    # Header check
    header = soup.find('header')
    if header:
        print("HEADER CLASSES:", header.get('class'))
        
    main = soup.find('main')
    if not main:
        print("NO MAIN TAG FOUND!")
        return
        
    print("MAIN CLASSES:", main.get('class'))
    children = main.find_all(['section', 'div'], recursive=False)
    print(f"Found {len(children)} direct section/div modules:")
    
    for idx, c in enumerate(children):
        classes = " ".join(c.get('class', []))
        style = c.get('style', '')
        print(f"\n--- [MODULE {idx}] class='{classes}' style='{style}' ---")
        
        # Check hero specific structure
        h1 = c.find('h1')
        if h1:
            print(f"  H1: {h1.get_text(strip=True)}")
        
        for h in c.find_all(['h2', 'h3', 'h4']):
            h_cl = " ".join(h.get('class', []))
            print(f"  {h.name} ({h_cl}): {h.get_text(strip=True)[:100]}")
            
        for img in c.find_all('img'):
            src = img.get('src', '')
            alt = img.get('alt', '')
            img_cl = " ".join(img.get('class', []))
            print(f"  IMG ({img_cl}): src='{src}' alt='{alt[:60]}'")
            
        for a in c.find_all('a'):
            txt = a.get_text(strip=True)
            href = a.get('href', '')
            a_cl = " ".join(a.get('class', []))
            if txt and ('btn' in a_cl or 'button' in a_cl or 'cta' in a_cl or len(txt) < 40):
                print(f"  LINK/BTN ({a_cl}): '{txt}' -> {href}")

if __name__ == '__main__':
    url = sys.argv[1] if len(sys.argv) > 1 else 'https://www.sightsavers.org/'
    inspect(url)
