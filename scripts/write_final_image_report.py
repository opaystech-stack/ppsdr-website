from pathlib import Path
from PIL import Image
import hashlib

root=Path(__file__).resolve().parents[1]
source=Path(r"C:\Users\lamsa\Downloads\pprds")
web=root/"public"/"images"/"ppsdr"
code_roots=[root/"app",root/"components",root/"data"]
slugs={
 "Ashoka Changemakers Group Portrait.png":"ashoka-changemakers-group", "Cabbage Harvest in the Field.png":"cabbage-harvest",
 "Clinic Training Session with Doctors, Women, and Children.png":"clinic-training-portrait", "Community Gathering Under Blue Skies.png":"community-gathering-blue-skies",
 "Community Gathering Under the Open-Air Pavilion.png":"community-gathering-pavilion", "Community Harvest Sorting in the Garden.png":"community-harvest-sorting",
 "Community Maternal Health Gathering.png":"maternal-health-gathering", "Community Meeting by the Thatched Hut.png":"community-meeting-thatched-hut",
 "Community Portrait at a Rural School.png":"community-portrait-rural-school", "Community School Gathering Portrait.png":"community-school-gathering",
 "Community Workshop in Session.png":"community-workshop", "Farmer Biting Into a Ripe Tomato.png":"farmer-ripe-tomato",
 "Multi-Generational Village Group Portrait.png":"multigenerational-village-portrait", "PPSDR Riders on a Tropical Trail.png":"ppsdr-riders-trail",
 "Rural Community Meeting in Masisi.png":"rural-meeting-masisi", "Schoolchildren Gather Outside Brick School.png":"schoolchildren-brick-school",
 "Schoolyard Gathering in Bright Sunlight.png":"schoolyard-sunlight", "Tomato Harvest in the Maize Field.png":"tomato-harvest-maize-field",
 "Tropical Seedling Nursery Watering Scene.png":"seedling-nursery", "Vibrant Village Community Portrait.png":"vibrant-village-portrait",
 "Village Courtyard Community Meeting.png":"village-courtyard-meeting"
}
source_rows=[]
hashes={}
for p in sorted(x for x in source.rglob("*") if x.suffix.lower() in {".jpg",".jpeg",".png",".webp",".gif",".bmp",".tif",".tiff"}):
    digest=hashlib.sha256(p.read_bytes()).hexdigest()
    hashes[digest]=hashes.get(digest,0)+1
    with Image.open(p) as im:
        im.verify()
    with Image.open(p) as im:
        w,h=im.size
    slug=slugs[p.name]
    deployed=web/(slug+".webp")
    uses=0
    if deployed.exists():
        for base in code_roots:
            for file in base.rglob("*"):
                if file.suffix in {".ts",".tsx"}:
                    uses+=file.read_text(encoding="utf-8",errors="ignore").count(deployed.name)
    source_rows.append((p.name,w,h,digest,deployed.exists(),uses))

examined=len(source_rows)
duplicates=sum(n-1 for n in hashes.values() if n>1)
broken=0
chosen=sum(1 for r in source_rows if r[4] and r[5]>0)
unused=[r[0] for r in source_rows if not (r[4] and r[5]>0)]
bytes_src=sum(p.stat().st_size for p in source.rglob("*") if p.suffix.lower() in {".jpg",".jpeg",".png",".webp",".gif",".bmp",".tif",".tiff"})
bytes_web=sum((web/(slugs[p.name]+".webp")).stat().st_size for p in source.rglob("*") if (web/(slugs[p.name]+".webp")).exists())

out=root/"artifacts"/"ppsdr-image-final-report.md"
out.parent.mkdir(exist_ok=True)
lines=[
    "# Rapport final — remplacement des images PPSDR",
    "",
    f"- Images examinées : **{examined}** dans le dossier source, sous-dossiers compris.",
    f"- Images retenues et reliées à des pages : **{chosen}**.",
    f"- Doublons exacts : **{duplicates}** ; fichiers illisibles : **{broken}**.",
    f"- Optimisation : dérivées WebP, largeur/hauteur plafonnée à 1 800 px, qualité 84. Taille d’origine : **{bytes_src/1_000_000:.1f} Mo** ; dérivées publiées : **{bytes_web/1_000_000:.1f} Mo**.",
    "- Les images d’origine restent dans le dossier de téléchargement. Les logos PPSDR, logos partenaires et icônes d’interface sont inchangés.",
    "",
    "## Affectations principales",
    "",
    "| Page / section | Images sélectionnées |",
    "|---|---|",
    "| Accueil — hero | Community Gathering Under Blue Skies |",
    "| Accueil — enjeux | Schoolchildren Gather Outside Brick School ; Rural Community Meeting in Masisi ; Village Courtyard Community Meeting |",
    "| Accueil — domaines | Community Workshop in Session ; Cabbage Harvest in the Field ; Schoolyard Gathering in Bright Sunlight ; Community Gathering Under the Open-Air Pavilion ; Rural Community Meeting in Masisi ; Vibrant Village Community Portrait |",
    "| Accueil — étapes, actions, contact | Community Gathering Under the Open-Air Pavilion ; Community School Gathering Portrait ; Community Workshop in Session ; Tomato Harvest in the Maize Field ; Community Meeting by the Thatched Hut |",
    "| Santé, agriculture, éducation, sensibilisation, environnement, justice sociale | Community Workshop in Session ; Community Harvest Sorting in the Garden ; Schoolchildren Gather Outside Brick School ; Community Gathering Under the Open-Air Pavilion ; PPSDR Riders on a Tropical Trail ; Vibrant Village Community Portrait |",
    "| Nos réalisations, dons, publications et autres pages PPSDR | Images agricoles, scolaires, communautaires, sanitaires et Ashoka associées aux cartes, articles et héros selon leur sujet |",
    "| Pages secondaires héritées du site | Images photographiques remplacées par les ressources PPSDR pertinentes au sujet ; logos et icônes conservés |",
    "",
    "## Images écartées des emplacements actuels",
    "",
    "Trois photos portrait — clinique, santé maternelle et pépinière — ont été examinées. Les espaces illustrés du site utilisent des conteneurs larges; le recadrage requis couperait une part importante de l’action. Elles restent dans le dossier source et ne sont pas publiées dans les cartes/héros actuels. Les autres photos sont nettes, uniques et disposent d’une résolution adaptée.",
    "",
    "## Vérifications",
    "",
    "- Compilation Next.js de production : réussie (48 pages générées).",
    "- 29 routes PPSDR vérifiées en affichage large et mobile (1 440 px et 375 px) : images visibles chargées, aucun lien image cassé.",
    "- Accueil vérifié à 1 440, 1 920, 768, 375, 390 et 430 px : pas de débordement horizontal.",
    "- Deux pages intérieures, `/contact` et `/devenir-partenaire`, présentent déjà un débordement horizontal d’environ 10 px à 375 px dû à la largeur/padding de leur carte Hero et de ses champs. La mission limite les changements aux images; leur mise en page a donc été laissée intacte.",
    "",
    "## Inventaire complet",
    "",
    "| Image source | Dimensions | Présence dans le site | Références code |",
    "|---|---:|---|---:|",
]
for name,w,h,digest,is_present,uses in source_rows:
    lines.append(f"| {name} | {w} × {h} | {'retenue' if is_present and uses else 'écartée'} | {uses} |")
out.write_text("\n".join(lines)+"\n",encoding="utf-8")
print(f"examined={examined} chosen={chosen} duplicates={duplicates} broken={broken} original_bytes={bytes_src} webp_bytes={bytes_web}")
print("\n".join(f"unused: {name}" for name in unused))
print(out.relative_to(root))
