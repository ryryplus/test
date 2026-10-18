# Prompt à coller dans ChatGPT

Colle tout ce qui est sous la ligne dans une conversation ChatGPT où GitHub et Supabase sont connectés.

---

Dans le dépôt GitHub **ryryplus/animup**, branche **claude/grands-jeux-classiques-3**, il y a 6 grands jeux classiques à mettre en ligne dans Supabase (projet `hhqkyzpizssbeoxehurt`). Fais tout dans l’ordre, sans me demander de valider, puis donne-moi un bilan.

## 1. Déposer les 3 PDF (avant le SQL)

Dans Storage, bucket `activity-resources`, dépose ces fichiers de la branche (le fichier est dans `printables/games/<slug>/pdf/`) :
- `printables/games/course-d-orientation-simple/pdf/balises-et-cartons.pdf` → `games/course-d-orientation-simple/balises-et-cartons.pdf`
- `printables/games/escape-game-sportif/pdf/lettre-et-enigmes.pdf` → `games/escape-game-sportif/lettre-et-enigmes.pdf`
- `printables/games/la-chasse-aux-oeufs/pdf/oeufs-et-etiquettes.pdf` → `games/la-chasse-aux-oeufs/oeufs-et-etiquettes.pdf`

## 2. Lancer les 6 SQL

Exécute chaque fichier tel quel, en entier, un par un, sans rien modifier. S’il s’arrête avec une erreur, ne contourne rien et copie-moi le message exact.
1. `content/grand-games/gendarmes-et-voleurs.upgrade.sql`
2. `content/grand-games/course-d-orientation-simple.upgrade.sql`
3. `content/grand-games/escape-game-sportif.upgrade.sql`
4. `content/grand-games/les-sardines.sql`
5. `content/grand-games/la-chasse-aux-oeufs.sql`
6. `content/grand-games/le-grand-jeu-d-eau.sql`

## 3. Créer les 6 illustrations

Pour chaque jeu, crée l’image décrite dans le prompt ci-dessous, en JPEG de moins de 1 Mo, et dépose-la dans le bucket `activity-illustrations` sous le nom indiqué.

**Gendarmes et Voleurs** → `gendarmes-et-voleurs-grand-jeu.jpg`

> Illustration horizontale 3:2 (1536×1024) pour le grand jeu « Gendarmes et Voleurs » de l’application Anim’Up, destinée aux animateurs de centres de loisirs. Scène : une grande cour de centre de loisirs ensoleillée, avec des arbres et un préau. Au premier plan, un garçon aux cheveux bruns en bataille, foulard bleu de gendarme au bras, tend la main pour toucher une fille rousse aux cheveux bouclés attachés qui file en riant. Sur le côté, dans un cercle de plots, trois voleurs prisonniers tendent la main vers une fille à la peau foncée au bandeau jaune qui arrive en courant pour les délivrer, sous l’œil d’un gendarme blond à lunettes rondes. D’autres enfants de 6 à 12 ans courent partout. Un animateur, sifflet au cou, sourit. Ambiance joyeuse, pleine d’élan, fair-play, sans bousculade. Style : illustration jeunesse peinte, riche et lumineuse, façon film d’animation, lumière chaude, profondeur, personnages très expressifs et variés, même univers visuel que les autres grands jeux Anim’Up. Cadrage paysage avec le sujet au centre (l’image est recadrée en carte). Pas de texte lisible, pas de logo, aucun personnage ni élément sous licence. Export JPEG de moins de 1 Mo, nommé `gendarmes-et-voleurs-grand-jeu.jpg`, à déposer dans le stockage `activity-illustrations`.

**La Course d’orientation** → `course-d-orientation-simple-grand-jeu.jpg`

> Illustration horizontale 3:2 (1536×1024) pour le grand jeu « La Course d’orientation » de l’application Anim’Up, destinée aux animateurs de centres de loisirs. Scène : le parc d’un centre de loisirs ensoleillé, avec des arbres, un banc et un petit bâtiment. Au premier plan, une équipe de quatre enfants de 8 à 12 ans penchée sur un plan dessiné à la main : un garçon blond à lunettes rondes tient le plan en le tournant, une fille rousse aux cheveux bouclés pointe un arbre au loin, et une fille à la peau foncée au bandeau jaune note une lettre sur un petit carton. Au pied de l’arbre, une balise orange et blanche avec un grand numéro. Au fond, une autre équipe court vers un banc, et une animatrice surveille en souriant. Ambiance d’aventure joyeuse et attentive. Style : illustration jeunesse peinte, riche et lumineuse, façon film d’animation, lumière chaude, profondeur, personnages très expressifs et variés, même univers visuel que les autres grands jeux Anim’Up. Cadrage paysage avec le sujet au centre (l’image est recadrée en carte). Pas de texte lisible, pas de logo, aucun personnage ni élément sous licence. Export JPEG de moins de 1 Mo, nommé `course-d-orientation-simple-grand-jeu.jpg`, à déposer dans le stockage `activity-illustrations`.

**L’Escape game du coffre** → `escape-game-sportif-grand-jeu.jpg`

> Illustration horizontale 3:2 (1536×1024) pour le grand jeu « L’Escape game du coffre » de l’application Anim’Up, destinée aux animateurs de centres de loisirs. Scène : une salle d’activités de centre de loisirs, lumineuse et un peu mystérieuse, avec un grand coffre en bois fermé par un cadenas à chiffres au centre. Autour, des enfants de 8 à 12 ans très concentrés : une fille rousse aux cheveux bouclés attachés déchiffre une feuille couverte de chiffres, un garçon blond à lunettes rondes sort une enveloppe marquée d’un carré de sous une table, une fille à la peau foncée au bandeau jaune tient une feuille devant un petit miroir, et un garçon aux cheveux bruns en bataille tourne déjà les molettes du cadenas. Sur le mur, un grand minuteur. Une animatrice sourit, bras croisés, près de la porte. Ambiance de suspense joyeux, sans rien d’effrayant. Style : illustration jeunesse peinte, riche et lumineuse, façon film d’animation, lumière chaude, profondeur, personnages très expressifs et variés, même univers visuel que les autres grands jeux Anim’Up. Cadrage paysage avec le sujet au centre (l’image est recadrée en carte). Pas de texte lisible, pas de logo, aucun personnage ni élément sous licence. Export JPEG de moins de 1 Mo, nommé `escape-game-sportif-grand-jeu.jpg`, à déposer dans le stockage `activity-illustrations`.

**Les Sardines** → `les-sardines.jpg`

> Illustration horizontale 3:2 (1536×1024) pour le grand jeu « Les Sardines » de l’application Anim’Up, destinée aux animateurs de centres de loisirs. Scène : le jardin d’un centre de loisirs en fin d’après-midi, avec une grande haie, un préau et des arbres. Au centre, derrière la haie, sept enfants de 6 à 12 ans serrés les uns contre les autres comme des sardines, un doigt sur la bouche, pouffant de rire en silence : une fille rousse aux cheveux bouclés attachés, un garçon blond à lunettes rondes, une fille à la peau foncée au bandeau jaune. Un garçon aux cheveux bruns en bataille vient juste de les découvrir et s’apprête à se glisser avec eux, les yeux pétillants. Au loin, deux enfants cherchent encore près du préau, et une animatrice observe en souriant. Ambiance complice, drôle et calme. Style : illustration jeunesse peinte, riche et lumineuse, façon film d’animation, lumière chaude, profondeur, personnages très expressifs et variés, même univers visuel que les autres grands jeux Anim’Up. Cadrage paysage avec le sujet au centre (l’image est recadrée en carte). Pas de texte lisible, pas de logo, aucun personnage ni élément sous licence. Export JPEG de moins de 1 Mo, nommé `les-sardines.jpg`, à déposer dans le stockage `activity-illustrations`.

**La Chasse aux œufs** → `la-chasse-aux-oeufs.jpg`

> Illustration horizontale 3:2 (1536×1024) pour le grand jeu « La Chasse aux œufs » de l’application Anim’Up, destinée aux animateurs de centres de loisirs. Scène : le jardin fleuri et ensoleillé d’un centre de loisirs au printemps. Des enfants de 3 à 5 ans, chacun avec un petit sac en papier décoré d’un signe, cherchent des œufs en carton de couleurs : une petite fille rousse aux cheveux bouclés attachés, t-shirt vert, brandit fièrement un œuf rouge marqué d’un rond trouvé dans l’herbe ; un petit garçon aux cheveux bruns en bataille, sweat bleu, découvre un œuf jaune à étoile au pied d’un arbre ; une petite fille à la peau foncée au bandeau jaune glisse un œuf bleu à carré dans le sac d’un copain. Au centre, sur un banc, un grand panier-nid garni de paille, avec une poule en peluche rousse toute ronde et souriante. Une animatrice accroupie à hauteur d’enfant applaudit. Ambiance tendre, joyeuse, printanière, sans aucune friandise. Style : illustration jeunesse peinte, riche et lumineuse, façon film d’animation, lumière chaude, profondeur, personnages très expressifs et variés, même univers visuel que les autres grands jeux Anim’Up. Cadrage paysage avec le sujet au centre (l’image est recadrée en carte). Pas de texte lisible, pas de logo, aucun personnage ni élément sous licence. Export JPEG de moins de 1 Mo, nommé `la-chasse-aux-oeufs.jpg`, à déposer dans le stockage `activity-illustrations`.

**Le Grand Jeu d’eau** → `le-grand-jeu-d-eau.jpg`

> Illustration horizontale 3:2 (1536×1024) pour le grand jeu « Le Grand Jeu d’eau » de l’application Anim’Up, destinée aux animateurs de centres de loisirs. Scène : une grande pelouse d’été au soleil, dans un centre de loisirs. Quatre couloirs de plots, une grande bassine d’eau au départ et, au bout, quatre bouteilles en plastique qui se remplissent. Au premier plan, un garçon aux cheveux bruns en bataille court en serrant une grosse éponge dégoulinante, en éclatant de rire ; à côté, une fille rousse aux cheveux bouclés attachés porte avec précaution un gobelet percé qui fuit en petits jets. Plus loin, une chaîne d’enfants se passe l’eau de gobelet en gobelet, et une fille à la peau foncée au bandeau jaune verse fièrement dans la bouteille. Des gouttes brillent dans la lumière. Un animateur, trempé et hilare, encourage les équipes. Ambiance joyeuse, rafraîchissante, estivale. Style : illustration jeunesse peinte, riche et lumineuse, façon film d’animation, lumière chaude, profondeur, personnages très expressifs et variés, même univers visuel que les autres grands jeux Anim’Up. Cadrage paysage avec le sujet au centre (l’image est recadrée en carte). Pas de texte lisible, pas de logo, aucun personnage ni élément sous licence. Export JPEG de moins de 1 Mo, nommé `le-grand-jeu-d-eau.jpg`, à déposer dans le stockage `activity-illustrations`.

Ensuite, lance ce SQL, qui rattache les nouvelles images aux 3 jeux transformés (il ne change rien si l’image n’est pas en ligne) :
```sql
update public.activities a set illustration_path = c.slug || '-grand-jeu.jpg'
from public.content_items c
where c.id = a.content_id
  and c.slug in ('gendarmes-et-voleurs','course-d-orientation-simple','escape-game-sportif')
  and exists (select 1 from storage.objects o where o.bucket_id = 'activity-illustrations' and o.name = c.slug || '-grand-jeu.jpg');
```

## 4. Vérifier

```sql
select c.slug, c.title, a.category_code,
  (select count(*) from public.activity_kits k where k.activity_id = c.id) as kit,
  (select count(*) from public.activity_resources r where r.activity_id = c.id) as supports,
  a.illustration_path,
  exists (select 1 from storage.objects o where o.bucket_id = 'activity-illustrations' and o.name = a.illustration_path) as image
from public.content_items c join public.activities a on a.content_id = c.id
where c.slug in ('gendarmes-et-voleurs','course-d-orientation-simple','escape-game-sportif','les-sardines','la-chasse-aux-oeufs','le-grand-jeu-d-eau')
order by c.slug;
```
Résultat attendu : les 6 en `big-games`, `kit` = 1, `image` = true, `supports` = 1 pour la Course d’orientation, l’Escape game et la Chasse aux œufs.

Ne touche à rien d’autre dans Supabase.
