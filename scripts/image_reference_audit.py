from pathlib import Path
import re

roots = [Path("app"), Path("components"), Path("data")]
refs = {}
for root in roots:
    for file in root.rglob("*"):
        if file.suffix not in {".ts", ".tsx", ".json"}:
            continue
        text = file.read_text(encoding="utf-8", errors="ignore")
        for match in re.finditer(r"/images/([A-Za-z0-9_%@.,+() -]+\.(?:png|jpe?g|webp|gif|svg))", text, re.I):
            name = match.group(1)
            refs.setdefault(name, set()).add(str(file))
print(f"unique_static_image_refs={len(refs)}")
for name, sources in sorted(refs.items()):
    print(f"{name}\t{'; '.join(sorted(sources))}")
