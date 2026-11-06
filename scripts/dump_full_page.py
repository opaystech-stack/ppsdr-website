import urllib.request
from bs4 import BeautifulSoup
import sys
import json

def dump_page_modules(url, output_file):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req, timeout=15).read().decode('utf-8', errors='ignore')
    soup = BeautifulSoup(html, 'html.parser')
    main = soup.find('main')
    if not main:
        print('NO MAIN')
        return
    children = main.find_all(['section', 'div', 'article'], recursive=False)
    modules = []
    for idx, c in enumerate(children):
        modules.append({
            'index': idx,
            'tag': c.name,
            'classes': c.get('class', []),
            'style': c.get('style', ''),
            'html': str(c)
        })
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(modules, f, indent=2, ensure_ascii=False)
    print(f'Saved {len(modules)} modules to {output_file}')

if __name__ == '__main__':
    url = sys.argv[1]
    out = sys.argv[2]
    dump_page_modules(url, out)
