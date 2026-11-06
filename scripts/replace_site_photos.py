"""Create optimized PPSDR source derivatives and replace photo references in source."""
from pathlib import Path
from PIL import Image
import hashlib, re, csv

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(r"C:\Users\lamsa\Downloads\pprds")
DEST = ROOT / "public" / "images" / "ppsdr"
DEST.mkdir(parents=True, exist_ok=True)

assets = [
    ("ashoka-changemakers-group", "Ashoka Changemakers Group Portrait.png", "Des membres Ashoka réunis avec des partenaires en plein air"),
    ("cabbage-harvest", "Cabbage Harvest in the Field.png", "Des agriculteurs récoltent des choux dans un champ communautaire"),
    ("clinic-training-portrait", "Clinic Training Session with Doctors, Women, and Children.png", "Des soignants échangent avec des femmes et des enfants dans une clinique"),
    ("community-gathering-blue-skies", "Community Gathering Under Blue Skies.png", "Des membres de la communauté réunis en plein air"),
    ("community-gathering-pavilion", "Community Gathering Under the Open-Air Pavilion.png", "Réunion communautaire sous un pavillon ouvert"),
    ("community-harvest-sorting", "Community Harvest Sorting in the Garden.png", "Des familles trient ensemble une récolte dans un jardin"),
    ("maternal-health-gathering", "Community Maternal Health Gathering.png", "Des femmes participent à une séance de santé maternelle"),
    ("community-meeting-thatched-hut", "Community Meeting by the Thatched Hut.png", "L’équipe PPSDR échange avec des habitants dans un village"),
    ("community-portrait-rural-school", "Community Portrait at a Rural School.png", "Habitants et personnel scolaire devant une école rurale"),
    ("community-school-gathering", "Community School Gathering Portrait.png", "Une communauté réunie dans une école rurale"),
    ("community-workshop", "Community Workshop in Session.png", "Des membres de la communauté participent à un atelier de santé"),
    ("farmer-ripe-tomato", "Farmer Biting Into a Ripe Tomato.png", "Un agriculteur goûte une tomate mûre dans son champ"),
    ("multigenerational-village-portrait", "Multi-Generational Village Group Portrait.png", "Plusieurs générations d’un village réunies"),
    ("ppsdr-riders-trail", "PPSDR Riders on a Tropical Trail.png", "L’équipe PPSDR se déplace sur une piste rurale"),
    ("rural-meeting-masisi", "Rural Community Meeting in Masisi.png", "L’équipe PPSDR consulte des membres de la communauté à Masisi"),
    ("schoolchildren-brick-school", "Schoolchildren Gather Outside Brick School.png", "Des élèves réunis devant une école en briques"),
    ("schoolyard-sunlight", "Schoolyard Gathering in Bright Sunlight.png", "Élèves et enseignants réunis dans une cour d’école ensoleillée"),
    ("tomato-harvest-maize-field", "Tomato Harvest in the Maize Field.png", "Des agriculteurs récoltent des tomates près d’un champ de maïs"),
    ("seedling-nursery", "Tropical Seedling Nursery Watering Scene.png", "Un agriculteur arrose des plants dans une pépinière rurale"),
    ("vibrant-village-portrait", "Vibrant Village Community Portrait.png", "Des familles du village réunies en plein air"),
    ("village-courtyard-meeting", "Village Courtyard Community Meeting.png", "Réunion communautaire dans une cour de village"),
]

for slug, filename, _ in assets:
    src = SOURCE / filename
    with Image.open(src) as im:
        im = im.convert("RGB")
        im.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
        im.save(DEST / f"{slug}.webp", "WEBP", quality=84, method=6)

wide_pools = {
    "health": ["community-workshop"],
    "agri": ["cabbage-harvest", "community-harvest-sorting", "farmer-ripe-tomato", "tomato-harvest-maize-field"],
    "education": ["community-portrait-rural-school", "community-school-gathering", "schoolchildren-brick-school", "schoolyard-sunlight"],
    "environment": ["rural-meeting-masisi", "ppsdr-riders-trail", "seedling-nursery"],
    "organization": ["ashoka-changemakers-group", "community-meeting-thatched-hut"],
    "community": ["community-gathering-blue-skies", "community-gathering-pavilion", "community-meeting-thatched-hut", "multigenerational-village-portrait", "vibrant-village-portrait", "village-courtyard-meeting", "rural-meeting-masisi"],
}
semantic = {
    "health": re.compile(r"health|medical|clinic|patient|doctor|nurse|surg|trachoma|eye|mater|sant[eé]|soin|m[eé]dical|malnutri|ebola|d[eé]pist", re.I),
    "agri": re.compile(r"agri|farm|harvest|tomato|crop|food|garden|seed|mara[iî]ch|alimenta|r[eé]colt", re.I),
    "education": re.compile(r"school|class|read|student|teacher|educa|edua|edub|[eé]cole|scol|enfant|bourse|apprent", re.I),
    "environment": re.compile(r"environ|forest|wildlife|gorill|conserv|biodivers|corridor|nature|ecolog|seedling|for[eê]t", re.I),
    "organization": re.compile(r"ashoka|fellow|founder|founding|fonder|h[eé]noc|history|histoire|organisation|organization|partenaire|partner", re.I),
    "community": re.compile(r"community|communaut|village|family|famille|people|group|volunteer|team|inclusion|justice|social|rights?|droit|sensibil|plaidoyer|terrain", re.I),
}
by_slug = {slug: alt for slug, _, alt in assets}
all_slugs = list(by_slug)
photo_ext = re.compile(r"\.(?:jpe?g|png|webp|gif|bmp|tiff?)$", re.I)
path_re = re.compile(r"/images/([^\s\"'`)}<>]+\.(?:jpe?g|png|webp|gif|bmp|tiff?))", re.I)
src_file_names = {p.name.lower() for p in (ROOT / "public" / "images" / "ppsdr").iterdir() if p.is_file()}
source_asset_name = {filename.lower(): f"{slug}.webp" for slug, filename, _ in assets}
slug_asset_name = {f"{slug}.webp": slug for slug, _, _ in assets}

def choose(reference: str, context: str, file: Path) -> str:
    category = next((key for key, pattern in semantic.items() if pattern.search(reference)), None)
    if category is None:
        # Use a tight, content-local window; broad file excerpts can accidentally
        # match the topic of an adjacent card and mislabel this image.
        category = next((key for key, pattern in semantic.items() if pattern.search(context)), "community")
    # Use landscape sources in the site's existing wide image slots. The portrait originals
    # are retained untouched; their useful context is represented by workshop/garden scenes.
    pool = [s for s in wide_pools[category] if s not in {"clinic-training-portrait", "seedling-nursery", "maternal-health-gathering"}]
    if not pool:
        pool = ["community-workshop"] if category == "health" else ["community-gathering-blue-skies"]
    idx = int(hashlib.sha256(f"{file.as_posix()}|{reference}".encode()).hexdigest()[:8], 16) % len(pool)
    return pool[idx]

def source_path(slug: str) -> str:
    return f"/images/ppsdr/{slug}.webp"

files_changed = []
manifest = []
roots = [ROOT / "app", ROOT / "components", ROOT / "data"]
for base in roots:
    for file in base.rglob("*"):
        if file.suffix not in {".ts", ".tsx"}:
            continue
        text = file.read_text(encoding="utf-8", errors="ignore")
        original = text
        def replace_path(match):
            ref = match.group(1)
            low = Path(ref).name.lower()
            # Identity marks, partner marks, and functional/interface graphics stay intact.
            if low.startswith(("logo", "sightsavers-logo")) or "icon" in low or low.endswith(".svg"):
                return match.group(0)
            if low in slug_asset_name:
                slug = slug_asset_name[low]
            elif low in source_asset_name:
                slug = source_asset_name[low][:-5]
            else:
                start = max(0, match.start() - 110)
                end = min(len(text), match.end() + 110)
                slug = choose(ref, text[start:end], file.relative_to(ROOT))
            replacement = source_path(slug)
            manifest.append([str(file.relative_to(ROOT)), ref, replacement, by_slug[slug]])
            return replacement
        text = path_re.sub(replace_path, text)

        # Data files for the PPSDR modules hold image names without a full URL.
        def replace_bare(match):
            val = match.group(1)
            low = Path(val).name.lower()
            if low not in src_file_names or low.startswith("logo") or "icon" in low or low.endswith(".svg"):
                return match.group(0)
            if low in slug_asset_name:
                slug = slug_asset_name[low]
            elif low in source_asset_name:
                slug = source_asset_name[low][:-5]
            else:
                start = max(0, match.start() - 110)
                end = min(len(text), match.end() + 110)
                slug = choose(val, text[start:end], file.relative_to(ROOT))
            manifest.append([str(file.relative_to(ROOT)), val, f"/images/ppsdr/{slug}.webp", by_slug[slug]])
            return f'"{slug}.webp"'
        text = re.sub(r'"([A-Za-z0-9_. -]+\.(?:jpe?g|png|webp))"', replace_bare, text, flags=re.I)
        # Refresh meaningful alt text so it describes the newly selected PPSDR photograph.
        tag_re = re.compile(r"<(?:Image|img)\b[^>]*>", re.S)
        def replace_alt(tag):
            found = re.search(r"/images/ppsdr/source/([a-z0-9-]+)\.webp", tag.group(0), re.I)
            alt = re.search(r'alt="([^"]*)"', tag.group(0))
            if not found or not alt or not alt.group(1).strip():
                return tag.group(0)
            slug = found.group(1).lower()
            description = by_slug.get(slug)
            if not description:
                return tag.group(0)
            return tag.group(0)[:alt.start(1)] + description + tag.group(0)[alt.end(1):]
        text = tag_re.sub(replace_alt, text)
        if text != original:
            file.write_text(text, encoding="utf-8")
            files_changed.append(str(file.relative_to(ROOT)))

report = ROOT / "artifacts" / "ppsdr-image-replacement-manifest.csv"
report.parent.mkdir(exist_ok=True)
with report.open("w", newline="", encoding="utf-8-sig") as f:
    writer = csv.writer(f)
    writer.writerow(["source file", "old image reference", "new image reference", "image description"])
    writer.writerows(manifest)
print(f"optimized_assets={len(assets)} changed_source_files={len(files_changed)} rewritten_references={len(manifest)}")
print("\n".join(files_changed))
print(report.relative_to(ROOT))
