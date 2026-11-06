import os
import re
import json
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

PAGES = [
    {
        "id": "home",
        "url": "https://www.sightsavers.org/",
        "route": "/"
    },
    {
        "id": "about-us",
        "url": "https://www.sightsavers.org/about-us/",
        "route": "/about-us"
    },
    {
        "id": "programmes",
        "url": "https://www.sightsavers.org/programmes/",
        "route": "/programmes"
    },
    {
        "id": "accelerate",
        "url": "https://www.sightsavers.org/programmes/accelerate/",
        "route": "/programmes/accelerate"
    },
    {
        "id": "stories-news-blogs",
        "url": "https://www.sightsavers.org/stories-news-blogs/",
        "route": "/stories-news-blogs"
    },
    {
        "id": "single-article",
        "url": "https://www.sightsavers.org/news/2026/11/sightsavers-pledges-five-eye-health-commitments-ahead-of-global-summit/",
        "route": "/news/2026/11/sightsavers-pledges-five-eye-health-commitments-ahead-of-global-summit"
    },
    {
        "id": "how-to-help",
        "url": "https://www.sightsavers.org/how-to-help/",
        "route": "/how-to-help"
    },
    {
        "id": "why-donate",
        "url": "https://www.sightsavers.org/how-to-help/why-donate-to-sightsavers/",
        "route": "/how-to-help/why-donate-to-sightsavers"
    },
    {
        "id": "contact-us",
        "url": "https://www.sightsavers.org/contact-us/",
        "route": "/contact-us"
    },
    {
        "id": "media-centre",
        "url": "https://www.sightsavers.org/media-centre/",
        "route": "/media-centre"
    },
    {
        "id": "where-we-work",
        "url": "https://www.sightsavers.org/where-we-work/",
        "route": "/where-we-work"
    },
    {
        "id": "our-history",
        "url": "https://www.sightsavers.org/about-us/our-history/",
        "route": "/about-us/our-history"
    },
    {
        "id": "appeals",
        "url": "https://www.sightsavers.org/appeals/make-extraordinary-change/",
        "route": "/appeals/make-extraordinary-change"
    },
    {
        "id": "faq",
        "url": "https://www.sightsavers.org/contact-us/frequently-asked-questions/",
        "route": "/contact-us/frequently-asked-questions"
    },
    {
        "id": "404",
        "url": "https://www.sightsavers.org/404/",
        "route": "/not-found"
    }
]

DATA_DIR = os.path.join(os.path.dirname(__file__), "..", "data")
IMAGES_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images")
os.makedirs(DATA_DIR, exist_ok=True)
os.makedirs(IMAGES_DIR, exist_ok=True)

def fetch_html(url):
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=20) as resp:
        return resp.read().decode('utf-8', errors='ignore')

def download_image(img_url, filename):
    filepath = os.path.join(IMAGES_DIR, filename)
    if os.path.exists(filepath) and os.path.getsize(filepath) > 0:
        return f"/images/{filename}"
    try:
        req = urllib.request.Request(img_url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=15) as resp, open(filepath, 'wb') as f:
            f.write(resp.read())
        return f"/images/{filename}"
    except Exception as e:
        print(f"Error downloading {img_url}: {e}")
        return img_url

def clean_text(text):
    if not text:
        return ""
    return re.sub(r'\s+', ' ', text).strip()

def process_page(page_info):
    page_id = page_info["id"]
    url = page_info["url"]
    route = page_info["route"]
    print(f"Processing {page_id} ({url})...")
    
    html = fetch_html(url)
    soup = BeautifulSoup(html, 'html.parser')
    
    title = soup.title.string if soup.title else ""
    meta_desc = ""
    og_image = ""
    
    desc_tag = soup.find('meta', attrs={'name': 'description'}) or soup.find('meta', attrs={'property': 'og:description'})
    if desc_tag:
        meta_desc = desc_tag.get('content', '')
        
    og_img_tag = soup.find('meta', attrs={'property': 'og:image'})
    if og_img_tag:
        og_image = og_img_tag.get('content', '')

    # Download og:image if present
    local_og_image = ""
    if og_image:
        ext = os.path.splitext(urllib.parse.urlparse(og_image).path)[1] or ".jpg"
        local_og_image = download_image(og_image, f"{page_id}-og{ext}")

    # Extract Breadcrumbs
    breadcrumbs = []
    bc_elem = soup.find('div', class_=re.compile(r'breadcrumb', re.I)) or soup.find('nav', attrs={'aria-label': re.compile(r'breadcrumb', re.I)})
    if bc_elem:
        for a in bc_elem.find_all('a'):
            breadcrumbs.append({
                "label": clean_text(a.get_text()),
                "href": a.get('href', '#')
            })

    # Extract Main/Article
    main = soup.find('main') or soup.find('article') or soup.body
    
    # Extract Hero block
    hero_data = {}
    h1 = main.find('h1')
    hero_data["title"] = clean_text(h1.get_text()) if h1 else ""
    
    # Check for hero banner container
    hero_elem = soup.find('div', class_=re.compile(r'hero|banner', re.I)) or (h1.parent if h1 else None)
    if hero_elem:
        intro_p = hero_elem.find('p')
        if intro_p:
            hero_data["intro"] = clean_text(intro_p.get_text())
        hero_img = hero_elem.find('img')
        if hero_img and hero_img.get('src'):
            src = urllib.parse.urljoin(url, hero_img.get('src'))
            ext = os.path.splitext(urllib.parse.urlparse(src).path)[1] or ".jpg"
            hero_data["image"] = download_image(src, f"{page_id}-hero{ext}")
            hero_data["imageAlt"] = hero_img.get('alt', '')

    # Extract Sections
    sections = []
    # Identify key content containers
    content_blocks = main.find_all(['section', 'div'], class_=re.compile(r'section|block|content-block|card-grid|stats|row|container', re.I))
    if not content_blocks:
        content_blocks = [main]

    # Collect images on page
    page_images = []
    for idx, img in enumerate(main.find_all('img')):
        src = img.get('src')
        if not src or 'data:image' in src or 'gravatar' in src:
            continue
        src = urllib.parse.urljoin(url, src)
        alt = img.get('alt', '')
        ext = os.path.splitext(urllib.parse.urlparse(src).path)[1] or ".jpg"
        if len(ext) > 5:
            ext = ".jpg"
        local_path = download_image(src, f"{page_id}-img-{idx}{ext}")
        page_images.append({
            "src": local_path,
            "original_src": src,
            "alt": alt
        })

    # Collect all headings & paragraphs in structure
    structural_items = []
    for elem in main.find_all(['h1', 'h2', 'h3', 'h4', 'p', 'blockquote', 'ul', 'ol', 'figure']):
        tag = elem.name
        text = clean_text(elem.get_text())
        if not text and tag != 'figure':
            continue
        if tag == 'figure':
            img = elem.find('img')
            caption = elem.find('figcaption')
            if img:
                src = img.get('src')
                alt = img.get('alt', '')
                if src:
                    src = urllib.parse.urljoin(url, src)
                    ext = os.path.splitext(urllib.parse.urlparse(src).path)[1] or ".jpg"
                    local_img = download_image(src, f"{page_id}-fig-{len(structural_items)}{ext}")
                    structural_items.append({
                        "type": "figure",
                        "image": local_img,
                        "alt": alt,
                        "caption": clean_text(caption.get_text()) if caption else ""
                    })
        elif tag in ['h1', 'h2', 'h3', 'h4']:
            structural_items.append({
                "type": "heading",
                "level": tag,
                "text": text
            })
        elif tag == 'blockquote':
            structural_items.append({
                "type": "quote",
                "text": text
            })
        elif tag in ['ul', 'ol']:
            items = [clean_text(li.get_text()) for li in elem.find_all('li') if clean_text(li.get_text())]
            if items:
                structural_items.append({
                    "type": "list",
                    "ordered": tag == 'ol',
                    "items": items
                })
        elif tag == 'p':
            links = []
            for a in elem.find_all('a', href=True):
                links.append({"text": clean_text(a.get_text()), "href": a['href']})
            structural_items.append({
                "type": "paragraph",
                "text": text,
                "links": links
            })

    # Extract FAQs/accordions if present
    faq_items = []
    for acc in soup.find_all(['details', 'div'], class_=re.compile(r'accordion|faq|toggle', re.I)):
        question = acc.find(['summary', 'h2', 'h3', 'h4', 'button', 'a'])
        content = acc.find('div', class_=re.compile(r'content|body|answer', re.I)) or acc
        if question and content:
            q_text = clean_text(question.get_text())
            ans_text = clean_text(content.get_text())
            if q_text and ans_text and len(ans_text) > len(q_text):
                faq_items.append({
                    "question": q_text,
                    "answer": ans_text
                })

    result = {
        "id": page_id,
        "url": url,
        "route": route,
        "title": title,
        "meta_description": meta_desc,
        "og_image": local_og_image or og_image,
        "breadcrumbs": breadcrumbs,
        "hero": hero_data,
        "page_images": page_images,
        "items": structural_items,
        "faq_items": faq_items
    }
    
    with open(os.path.join(DATA_DIR, f"{page_id}.json"), 'w', encoding='utf-8') as f:
        json.dump(result, f, indent=2, ensure_ascii=False)
        
    return result

def extract_navigation():
    print("Extracting global navigation & footer...")
    html = fetch_html("https://www.sightsavers.org/")
    soup = BeautifulSoup(html, 'html.parser')
    
    # Logo
    logo_img = soup.find('header').find('img') if soup.find('header') else None
    logo_url = ""
    if logo_img and logo_img.get('src'):
        src = urllib.parse.urljoin("https://www.sightsavers.org/", logo_img.get('src'))
        logo_url = download_image(src, "sightsavers-logo.svg" if ".svg" in src else "sightsavers-logo.png")
    
    # Download brand logo directly if not found
    if not logo_url or logo_url.startswith("http"):
        download_image("https://www.sightsavers.org/wp-content/themes/theme/assets/build/images/logo-sightsavers.svg", "sightsavers-logo.svg")
        logo_url = "/images/sightsavers-logo.svg"

    # Main menu items
    header = soup.find('header')
    nav_menu = []
    if header:
        # Look for nav list
        for li in header.find_all('li', recursive=True):
            a = li.find('a', href=True)
            if not a:
                continue
            text = clean_text(a.get_text())
            href = a['href']
            # Only top-level or primary
            if text and not any(m['text'] == text for m in nav_menu):
                # find sub links
                sub_links = []
                sub_ul = li.find('ul')
                if sub_ul:
                    for sub_a in sub_ul.find_all('a', href=True):
                        sub_text = clean_text(sub_a.get_text())
                        if sub_text:
                            sub_links.append({"text": sub_text, "href": sub_a['href']})
                nav_menu.append({
                    "text": text,
                    "href": href,
                    "children": sub_links
                })

    # Footer
    footer = soup.find('footer')
    footer_data = {
        "text": clean_text(footer.get_text(separator=' ', strip=True)) if footer else "",
        "links": []
    }
    if footer:
        for a in footer.find_all('a', href=True):
            t = clean_text(a.get_text())
            if t:
                footer_data["links"].append({"text": t, "href": a['href']})

    nav_result = {
        "logo": logo_url,
        "nav": nav_menu,
        "footer": footer_data
    }
    with open(os.path.join(DATA_DIR, "global-nav.json"), 'w', encoding='utf-8') as f:
        json.dump(nav_result, f, indent=2, ensure_ascii=False)

def main():
    extract_navigation()
    for page in PAGES:
        try:
            process_page(page)
        except Exception as e:
            print(f"Error processing {page['id']}: {e}")

if __name__ == '__main__':
    main()
