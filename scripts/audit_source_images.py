from pathlib import Path
from PIL import Image, ImageOps, ImageDraw, ImageFont
import hashlib, csv

source = Path(r"C:\Users\lamsa\Downloads\pprds")
out = Path("artifacts")
out.mkdir(exist_ok=True)
files = sorted(p for p in source.rglob("*") if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp", ".gif", ".bmp", ".tif", ".tiff"})
font = ImageFont.truetype("arial.ttf", 15)
small = ImageFont.truetype("arial.ttf", 12)
cell_w, cell_h, cols = 330, 250, 4
rows = (len(files) + cols - 1) // cols
sheet = Image.new("RGB", (cols * cell_w, rows * cell_h), "#f2f0f5")
draw = ImageDraw.Draw(sheet)
seen = {}
records = []
for i, path in enumerate(files):
    x, y = (i % cols) * cell_w, (i // cols) * cell_h
    digest = hashlib.sha256(path.read_bytes()).hexdigest()
    try:
        with Image.open(path) as im:
            im.load()
            w, h = im.size
            fmt = im.format
            thumb = ImageOps.contain(im.convert("RGB"), (cell_w - 20, 178))
            sheet.paste(thumb, (x + (cell_w-thumb.width)//2, y + 5 + (178-thumb.height)//2))
            orientation = "paysage" if w > h else "portrait" if h > w else "carré"
            quality = "OK" if w >= 900 and h >= 600 else "résolution modeste"
            status = "doublon" if digest in seen else "unique"
            seen.setdefault(digest, path.name)
            label = f"{i+1:02d}. {path.name}"
            draw.text((x+8, y+188), label[:43], fill="#25133d", font=font)
            draw.text((x+8, y+211), f"{w}×{h} | {orientation} | {fmt} | {status}", fill="#5b2a86", font=small)
            records.append([str(path), w, h, orientation, fmt, path.stat().st_size, digest, status, quality])
    except Exception as e:
        draw.text((x+8, y+10), f"{i+1:02d}. {path.name}\nERREUR: {e}", fill="#d00000", font=small)
        records.append([str(path), "", "", "", "", path.stat().st_size, digest, "illisible", str(e)])
sheet.save(out / "ppsdr-source-contact-sheet.jpg", quality=90)
with (out / "ppsdr-source-image-inventory.csv").open("w", newline="", encoding="utf-8-sig") as f:
    writer = csv.writer(f)
    writer.writerow(["chemin", "largeur", "hauteur", "orientation", "format", "octets", "sha256", "statut", "qualité"])
    writer.writerows(records)
print(f"count={len(files)} unique={sum(r[7]=='unique' for r in records)} duplicates={sum(r[7]=='doublon' for r in records)} broken={sum(r[7]=='illisible' for r in records)}")
print(out / "ppsdr-source-contact-sheet.jpg")
print(out / "ppsdr-source-image-inventory.csv")
