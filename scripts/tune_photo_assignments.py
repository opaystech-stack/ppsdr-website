from pathlib import Path
import re, shutil

root = Path(__file__).resolve().parents[1]

def edit(rel, fn):
    p = root / rel
    old = p.read_text(encoding="utf-8")
    new = fn(old)
    if old != new:
        p.write_text(new, encoding="utf-8")

def home(text):
    replacements = {
        '"Agriculture", "Des activités agricoles utiles pour renforcer l’autonomie alimentaire des ménages.", "community-workshop.webp"': '"Agriculture", "Des activités agricoles utiles pour renforcer l’autonomie alimentaire des ménages.", "cabbage-harvest.webp"',
        '"Éducation", "Un accompagnement éducatif et pédagogique pour les enfants et les enseignants.", "farmer-ripe-tomato.webp"': '"Éducation", "Un accompagnement éducatif et pédagogique pour les enfants et les enseignants.", "schoolyard-sunlight.webp"',
        '"Sensibilisation", "Informer, mobiliser et faire participer les communautés autour des messages utiles.", "schoolyard-sunlight.webp"': '"Sensibilisation", "Informer, mobiliser et faire participer les communautés autour des messages utiles.", "community-gathering-pavilion.webp"',
        '"Environnement", "Protection durable de la forêt et gestion responsable des ressources naturelles.", "ppsdr-riders-trail.webp"': '"Environnement", "Protection durable de la forêt et gestion responsable des ressources naturelles.", "rural-meeting-masisi.webp"',
        '"Justice sociale", "Accompagnement des personnes vulnérables, inclusion sociale et défense des droits humains.", "ppsdr-riders-trail.webp"': '"Justice sociale", "Accompagnement des personnes vulnérables, inclusion sociale et défense des droits humains.", "vibrant-village-portrait.webp"',
        "url(/images/ppsdr/community-portrait-rural-school.webp)": "url(/images/ppsdr/community-gathering-blue-skies.webp)",
        'src="/images/ppsdr/community-portrait-rural-school.webp" alt="Habitants et personnel scolaire devant une école rurale"': 'src="/images/ppsdr/community-gathering-blue-skies.webp" alt="Des membres de la communauté réunis en plein air"',
        '"Marginalisés et privés d’éducation de base", "PPSDR œuvre pour faciliter l’accès à l’éducation et offrir aux communautés des possibilités d’apprentissage.", "schoolyard-sunlight.webp"': '"Marginalisés et privés d’éducation de base", "PPSDR œuvre pour faciliter l’accès à l’éducation et offrir aux communautés des possibilités d’apprentissage.", "schoolchildren-brick-school.webp"',
        '"Expulsés de force de leurs terres, devenus nomades", "PPSDR accompagne les communautés dans la défense de leurs droits fonciers et la protection de leurs terres.", "schoolchildren-brick-school.webp"': '"Expulsés de force de leurs terres, devenus nomades", "PPSDR accompagne les communautés dans la défense de leurs droits fonciers et la protection de leurs terres.", "rural-meeting-masisi.webp"',
        '"Privés de droits fondamentaux", "PPSDR agit pour défendre les droits fondamentaux, lutter contre les discriminations et favoriser l’inclusion.", "schoolyard-sunlight.webp"': '"Privés de droits fondamentaux", "PPSDR agit pour défendre les droits fondamentaux, lutter contre les discriminations et favoriser l’inclusion.", "village-courtyard-meeting.webp"',
        "url(/images/ppsdr/community-workshop.webp)": "url(/images/ppsdr/community-gathering-pavilion.webp)",
        '"community-workshop.webp", "lead"': '"community-school-gathering.webp", "lead"',
        '"community-workshop.webp", ""]].map(([title, heading': '"tomato-harvest-maize-field.webp", ""]].map(([title, heading',
        'src="/images/ppsdr/community-school-gathering.webp" alt="Une communauté réunie dans une école rurale"': 'src="/images/ppsdr/community-meeting-thatched-hut.webp" alt="L’équipe PPSDR échange avec des habitants dans un village"',
    }
    for a,b in replacements.items():
        text = text.replace(a,b,1)
    return text
edit("app/page.tsx", home)

def tune_other_pages(text):
    text=text.replace('src={`/images/${a.image}`}', 'src={`/images/ppsdr/${a.image}`}')
    text=text.replace('"Santé", "Prévention, accompagnement des mères et accès aux soins de proximité.", "community-workshop.webp"', '"Santé", "Prévention, accompagnement des mères et accès aux soins de proximité.", "community-workshop.webp"')
    text=text.replace('"Éducation", "Soutien à la scolarisation, aux élèves et aux enseignants des communautés.", "community-workshop.webp"', '"Éducation", "Soutien à la scolarisation, aux élèves et aux enseignants des communautés.", "schoolchildren-brick-school.webp"')
    text=text.replace('"Sécurité alimentaire", "Formations et pratiques agricoles adaptées aux familles rurales.", "community-workshop.webp"', '"Sécurité alimentaire", "Formations et pratiques agricoles adaptées aux familles rurales.", "cabbage-harvest.webp"')
    text=text.replace('["Éducation", "Bourses, écoles, 10 220 certificats", "community-workshop.webp"]', '["Éducation", "Bourses, écoles, 10 220 certificats", "schoolyard-sunlight.webp"]')
    text=text.replace('["Agriculture", "800 000 formés, 30 concessions, jardins de Goma", "community-workshop.webp"]', '["Agriculture", "800 000 formés, 30 concessions, jardins de Goma", "community-harvest-sorting.webp"]')
    text=text.replace('["Santé", "Sensibilisations, dépistages à Walikale, partenariats", "community-workshop.webp"]', '["Santé", "Sensibilisations, dépistages à Walikale, partenariats", "community-workshop.webp"]')
    text=text.replace('["Environnement", "Conservation à Lubero avec les communautés", "community-workshop.webp"]', '["Environnement", "Conservation à Lubero avec les communautés", "rural-meeting-masisi.webp"]')
    text=text.replace('src="/images/ppsdr/community-school-gathering.webp" alt="MUHINDO MUTHETHE Hénoc, fondateur de PPSDR"', 'src="/images/ppsdr/ashoka-changemakers-group.webp" alt="Des membres Ashoka réunis avec des partenaires en plein air"')
    return text
for rel in ["app/faire-un-don/page.tsx", "app/nos-realisations/page.tsx", "app/a-propos/page.tsx", "components/PpsdrListing.tsx"]:
    edit(rel, tune_other_pages)

def remap_domains(text):
    mappings = {
        'slug: "sante"': "community-workshop.webp",
        'slug: "agriculture"': "community-harvest-sorting.webp",
        'slug: "education"': "schoolchildren-brick-school.webp",
        'slug: "sensibilisation"': "community-gathering-pavilion.webp",
        'slug: "environnement"': "rural-meeting-masisi.webp",
        'slug: "justice-sociale"': "vibrant-village-portrait.webp",
    }
    lines=text.splitlines()
    for i,line in enumerate(lines):
        if any(key in line for key in mappings):
            lines[i]=re.sub(r'image: "[^"]+"', f'image: "{next(v for k,v in mappings.items() if k in line)}"', line, count=1)
        if 'slug: "pourquoi-ppsdr-agit"' in line:
            lines[i]=re.sub(r'image: "[^"]+"', 'image: "community-meeting-thatched-hut.webp"', line, count=1)
        elif 'slug: "sommet-ashoka-nairobi-2025"' in line:
            lines[i]=re.sub(r'image: "[^"]+"', 'image: "ashoka-changemakers-group.webp"', line, count=1)
        elif 'slug: "communautes-biodiversite"' in line:
            lines[i]=re.sub(r'image: "[^"]+"', 'image: "rural-meeting-masisi.webp"', line, count=1)
        elif 'slug: "malnutrition-securite-alimentaire-goma"' in line:
            lines[i]=re.sub(r'image: "[^"]+"', 'image: "cabbage-harvest.webp"', line, count=1)
        elif 'slug: "protection-grands-singes-lubero"' in line:
            lines[i]=re.sub(r'image: "[^"]+"', 'image: "ppsdr-riders-trail.webp"', line, count=1)
    return "\n".join(lines)+("\n" if text.endswith("\n") else "")
edit("data/ppsdr-site.ts", remap_domains)

def remap_detail(text):
    topic_map = [
        ("title: \"Des soins plus proches", "community-workshop.webp"),
        ("50 mères sensibilisées", "maternal-health-gathering.webp"),
        ("Dépister pour soigner", "clinic-training-portrait.webp"),
        ("title: \"Nourrir les familles", "cabbage-harvest.webp"),
        ("Des jardins hors sol", "community-harvest-sorting.webp"),
        ("title: \"L'école pour chaque enfant", "schoolyard-sunlight.webp"),
        ("Une bourse qui ouvre l'université", "ashoka-changemakers-group.webp"),
        ("Le football à l'école", "schoolchildren-brick-school.webp"),
        ("title: \"Informer pour mobiliser", "community-gathering-blue-skies.webp"),
        ("Sensibiliser village par village", "village-courtyard-meeting.webp"),
        ("title: \"Protéger la forêt", "ppsdr-riders-trail.webp"),
        ("Les communautés, premières gardiennes", "rural-meeting-masisi.webp"),
        ("Connaître le terrain", "seedling-nursery.webp"),
        ("title: \"Des droits pour chacun", "vibrant-village-portrait.webp"),
    ]
    lines=text.splitlines()
    for i,line in enumerate(lines):
        for marker, photo in topic_map:
            if marker in line and "image:" in line:
                lines[i]=re.sub(r'image: "[^"]+"', f'image: "{photo}"', line, count=1)
                break
    return "\n".join(lines)+("\n" if text.endswith("\n") else "")
edit("data/ppsdr-detail-pages.ts", remap_detail)

def remap_publications(text):
    text = text.replace('image: ["community-workshop.webp", "community-workshop.webp", "community-school-gathering.webp", "schoolchildren-brick-school.webp", "schoolyard-sunlight.webp"][index]', 'image: ["community-meeting-thatched-hut.webp", "ashoka-changemakers-group.webp", "rural-meeting-masisi.webp", "cabbage-harvest.webp", "ppsdr-riders-trail.webp"][index]')
    text = re.sub(r'(slug: "bourse-cornerstone-academie"[\s\S]*?image: ")[^"]+', r'\1schoolchildren-brick-school.webp', text, count=1)
    text = re.sub(r'(slug: "deplaces-pygmees-boikene-beni"[\s\S]*?image: ")[^"]+', r'\1community-gathering-blue-skies.webp', text, count=1)
    text = re.sub(r'(slug: "attaque-ngadi-beni"[\s\S]*?image: ")[^"]+', r'\1village-courtyard-meeting.webp', text, count=1)
    text = re.sub(r'(slug: "alerte-ebola-rdc"[\s\S]*?image: ")[^"]+', r'\1community-workshop.webp', text, count=1)
    text = re.sub(r'(slug: "inondations-ruwenzori"[\s\S]*?image: ")[^"]+', r'\1community-gathering-pavilion.webp', text, count=1)
    return text
edit("data/ppsdr-publications-v2.ts", remap_publications)

# Remove the temporary, duplicate derivative set after the optimized assets have been
# placed at their final public paths. Original source images in Downloads are untouched.
duplicate = root / "public" / "images" / "ppsdr" / "source"
if duplicate.exists() and duplicate.resolve() == (root / "public" / "images" / "ppsdr" / "source").resolve():
    shutil.rmtree(duplicate)
print("PPSDR photo assignments tuned; duplicate derivatives removed.")
