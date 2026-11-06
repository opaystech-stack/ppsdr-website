import urllib.request
from bs4 import BeautifulSoup
import sys

def inspect_url(url):
    print(f"==============================\nINSPECTING: {url}\n==============================")
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req, timeout=12).read().decode('utf-8', errors='ignore')
    soup = BeautifulSoup(html, 'html.parser')
    main = soup.find('main')
    if not main:
        print("NO MAIN FOUND")
        return
    children = main.find_all(['section', 'div', 'article'], recursive=False)
    for idx, c in enumerate(children):
        cls_str = ".".join(c.get('class', []))
        print(f"\n--- Module {idx}: <{c.name} class='{cls_str}'> ---")
        style = c.get('style', '')
        if style:
            print(f"    Style: {style[:120]}")
        for child in c.find_all(recursive=False):
            c_cls = ".".join(child.get('class', []))
            print(f"    -> <{child.name} class='{c_cls}'>")
            for gchild in child.find_all(recursive=False):
                gc_cls = ".".join(gchild.get('class', []))
                print(f"       -> <{gchild.name} class='{gc_cls}'>")
                h = gchild.find(['h1', 'h2', 'h3', 'h4'])
                if h:
                    print(f"          [{h.name}]: {h.get_text(strip=True)[:60]}")
                p = gchild.find('p')
                if p:
                    print(f"          [p]: {p.get_text(strip=True)[:60]}")
                btn = gchild.find('a', class_=lambda x: x and 'btn' in x)
                if btn:
                    print(f"          [btn]: {btn.get_text(strip=True)} -> {btn.get('href')}")

if __name__ == '__main__':
    url = sys.argv[1] if len(sys.argv) > 1 else 'https://www.sightsavers.org/'
    inspect_url(url)
