# Prompt à coller dans ChatGPT

Colle tout ce qui est sous la ligne dans une conversation ChatGPT où GitHub et Supabase sont connectés.

---

Dans le dépôt GitHub **ryryplus/animup**, branche **claude/grands-jeux-classiques-2**, il y a 6 grands jeux classiques à mettre en ligne dans Supabase (projet `hhqkyzpizssbeoxehurt`). Fais tout dans l’ordre, sans me demander de valider, puis donne-moi un bilan.

## 1. Déposer les 3 PDF (avant le SQL)

Dans Storage, bucket `activity-resources`, dépose ces fichiers de la branche, au même chemin sans le dossier `pdf/` :
- `printables/games/le-stratege-geant/pdf/cartes-de-grade.pdf` → `games/le-stratege-geant/cartes-de-grade.pdf`
- `printables/games/la-chasse-au-tresor/pdf/devinettes-et-lettres.pdf` → `games/la-chasse-au-tresor/devinettes-et-lettres.pdf`
- `printables/games/le-rallye-photo/pdf/balises-et-feuille-de-route.pdf` → `games/le-rallye-photo/balises-et-feuille-de-route.pdf`

## 2. Lancer les 6 SQL

Exécute chaque fichier tel quel, en entier, un par un, sans rien modifier. Chacun est protégé : s’il s’arrête avec une erreur, ne contourne rien et copie-moi le message exact.
1. `content/grand-games/poule-renard-vipere.upgrade.sql`
2. `content/grand-games/douaniers-contrebandiers.upgrade.sql`
3. `content/grand-games/la-gamelle.upgrade.sql`
4. `content/grand-games/le-stratege-geant.sql`
5. `content/grand-games/la-chasse-au-tresor.sql`
6. `content/grand-games/le-rallye-photo.sql`

## 3. Créer les 3 illustrations

Crée une image par prompt ci-dessous, en JPEG de moins de 1 Mo, et dépose-la dans le bucket `activity-illustrations` sous le nom indiqué.

**Le Stratège géant** → `le-stratege-geant.jpg`

> Illustration horizontale 3:2 (1536×1024) pour le grand jeu « Le Stratège géant » de l’application Anim’Up, destinée aux animateurs de centres de loisirs. Scène : un grand pré d’été coupé en deux par une ligne de plots, avec un foulard rouge et un foulard bleu posés au fond de chaque camp. Au centre, deux enfants de 10 ans se font face après s’être touchés et retournent en même temps leur carte de grade, très concentrés : une fille rousse aux cheveux bouclés attachés, chasuble rouge, montre une carte « Espion », et un garçon blond à lunettes rondes, chasuble bleue, montre une carte de Maréchal, bouche bée de surprise. Autour, d’autres enfants courent ou se cachent pour approcher du drapeau adverse ; une fille à la peau foncée au bandeau jaune file avec le foulard bleu dans la main. Un animateur, sifflet au cou, sourit près d’une boîte de cartes. Ambiance de stratégie joyeuse, fair-play, sans bousculade. Style : illustration jeunesse peinte, riche et lumineuse, façon film d’animation, lumière chaude, profondeur, personnages très expressifs et variés, même univers visuel que les autres grands jeux Anim’Up. Cadrage paysage avec le sujet au centre (l’image est recadrée en carte). Pas de texte lisible, pas de logo, aucun personnage ni élément sous licence. Export JPEG de moins de 1 Mo, nommé `le-stratege-geant.jpg`, à déposer dans le stockage `activity-illustrations`.

**La Chasse au trésor** → `la-chasse-au-tresor.jpg`

> Illustration horizontale 3:2 (1536×1024) pour le grand jeu « La Chasse au trésor » de l’application Anim’Up, destinée aux animateurs de centres de loisirs. Scène : la cour ensoleillée d’un centre de loisirs avec un grand arbre, un banc et un préau. Au premier plan, une équipe de quatre enfants de 6 à 12 ans vient de trouver une enveloppe au pied de l’arbre : une fille rousse aux cheveux bouclés attachés lit la devinette à voix haute, un garçon blond à lunettes rondes tient fièrement une grande carte avec une lettre, une fille à la peau foncée au bandeau jaune réfléchit, le doigt sur le menton. Au fond, une autre équipe court vers le portail, et près du préau, une animatrice garde un coffre en bois décoré, fermé. Ambiance d’aventure joyeuse et complice. Style : illustration jeunesse peinte, riche et lumineuse, façon film d’animation, lumière chaude, profondeur, personnages très expressifs et variés, même univers visuel que les autres grands jeux Anim’Up. Cadrage paysage avec le sujet au centre (l’image est recadrée en carte). Pas de texte lisible, pas de logo, aucun personnage ni élément sous licence. Export JPEG de moins de 1 Mo, nommé `la-chasse-au-tresor.jpg`, à déposer dans le stockage `activity-illustrations`.

**Le Rallye photo** → `le-rallye-photo.jpg`

> Illustration horizontale 3:2 (1536×1024) pour le grand jeu « Le Rallye photo » de l’application Anim’Up, destinée aux animateurs de centres de loisirs. Scène : la cour d’un centre de loisirs ensoleillée, avec un préau, des arbres et une porte peinte en bleu. Au premier plan, une équipe de quatre enfants de 6 à 12 ans compare une feuille de petites photos avec la poignée de la porte bleue : un garçon aux cheveux bruns en bataille pointe la photo du doigt, tout excité, une fille rousse aux cheveux bouclés note un symbole en forme d’étoile sur la feuille de route, et une fille à la peau foncée au bandeau jaune repère la petite étiquette étoile collée à côté de la poignée. Au fond, d’autres équipes cherchent près d’un arbre et d’un banc, et une animatrice surveille la cour en souriant. Ambiance d’enquête joyeuse et attentive. Style : illustration jeunesse peinte, riche et lumineuse, façon film d’animation, lumière chaude, profondeur, personnages très expressifs et variés, même univers visuel que les autres grands jeux Anim’Up. Cadrage paysage avec le sujet au centre (l’image est recadrée en carte). Pas de texte lisible, pas de logo, aucun personnage ni élément sous licence. Export JPEG de moins de 1 Mo, nommé `le-rallye-photo.jpg`, à déposer dans le stockage `activity-illustrations`.

## 4. Vérifier

Lance cette requête et donne-moi le résultat :
```sql
select c.slug, c.title, a.category_code,
  (select count(*) from public.activity_kits k where k.activity_id = c.id) as kit,
  (select count(*) from public.activity_resources r where r.activity_id = c.id) as supports,
  exists (select 1 from storage.objects o where o.bucket_id = 'activity-illustrations' and o.name = a.illustration_path) as image
from public.content_items c join public.activities a on a.content_id = c.id
where c.slug in ('poule-renard-vipere','douaniers-contrebandiers','la-gamelle','le-stratege-geant','la-chasse-au-tresor','le-rallye-photo')
order by c.slug;
```
Résultat attendu : les 6 en `big-games`, `kit` = 1, `image` = true, et `supports` = 1 pour les 3 nouveaux jeux.

Ne touche à rien d’autre dans Supabase.
