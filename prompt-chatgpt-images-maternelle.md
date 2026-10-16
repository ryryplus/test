# Prompt à coller dans ChatGPT

Copie tout ce qui est sous la ligne, puis colle-le dans une nouvelle conversation ChatGPT où Supabase est connecté.

---

Tu vas créer les images à imprimer (les « supports ») des grands jeux maternelle de l'application Anim'Up, puis les mettre en ligne dans Supabase pour qu'elles apparaissent dans l'appli, dans la partie « À imprimer » de chaque jeu.

## Qui utilise ces images

Des animateurs de centres de loisirs, avec des enfants de 3 à 6 ans. Ils impriment la feuille en A4, la découpent et parfois la plastifient. Les enfants ne savent pas lire, donc l'image doit se comprendre sans texte.

## Comment on travaille : tu enchaînes tout seul

Tu fais toute la liste d'un coup, image après image, **sans attendre ma réponse**. Ne me demande pas de valider : je regarderai tout à la fin et je te dirai ce qu'il faut refaire.

Pour chaque jeu :
1. Lis ses règles dans Supabase (projet `hhqkyzpizssbeoxehurt`) pour vérifier les noms, les couleurs et les détails :
   `select k.kit from public.activity_kits k join public.content_items c on c.id = k.activity_id where c.slug = '<slug>';`
   Si les règles disent autre chose que ma liste, ce sont les règles qui ont raison. Note-le pour le bilan.
2. Crée les images du jeu une par une. Après chaque image, relis-la toi-même avant de passer à la suivante : bon personnage, bon nombre de cartes, pas de faute dans le texte, marges blanches, lisible en noir et blanc. Si quelque chose ne va pas, refais-la tout de suite, sans me demander.
3. Mise en ligne : Supabase, Storage, bucket `activity-resources`, dossier `games/<slug>/`, avec le nom de fichier exact de la liste (PNG, moins de 4 Mo).
4. Rattachement au jeu : lance ce SQL dans Supabase (remplace les valeurs). Il ne fait rien si le fichier n'est pas en ligne, et on peut le relancer sans risque :
   ```sql
   insert into public.activity_resources (activity_id, storage_path, title, page_count, description)
   select c.id, 'games/<slug>/<fichier>', '<Titre>', <nombre de pages>, '<Description>'
   from public.content_items c
   where c.slug = '<slug>'
     and exists (select 1 from storage.objects o where o.bucket_id = 'activity-resources' and o.name = 'games/<slug>/<fichier>')
   on conflict (activity_id, storage_path) do update
     set title = excluded.title, page_count = excluded.page_count, description = excluded.description;
   ```
   Pense à doubler les apostrophes dans le SQL (`l''ourson`).
5. Vérifie avec cette requête :
   `select r.storage_path, r.title from public.activity_resources r join public.content_items c on c.id = r.activity_id where c.slug = '<slug>';`
6. Écris une seule ligne de bilan (« Doudous : 2/2 en ligne ») et passe directement au jeu suivant.

**Si tu ne peux pas déposer les fichiers toi-même dans Storage :** ne t'arrête pas. Continue toute la liste, puis donne-moi à la fin un seul fichier ZIP avec un dossier par jeu (`games/<slug>/…`), prêt à glisser dans le bucket, et le SQL complet de tous les rattachements à relancer une fois que j'ai déposé les fichiers.

**Si tu es coupé** (limite de messages ou d'images) : reprends exactement là où tu t'es arrêté quand j'écris « continue », sans refaire ce qui est déjà en ligne.

**À la toute fin**, donne-moi le bilan complet : la liste des images en ligne, celles qui manquent, et les endroits où les règles ne correspondaient pas à ma liste.

**Si une planche ne tient pas sur une page** (par exemple 8 grandes cartes), fais une image par page. Quand toutes les pages sont validées, assemble-les dans un seul PDF A4, avec le même nom mais en `.pdf`, et mets le vrai nombre de pages dans le SQL.

**Ne touche à rien d'autre dans Supabase** : ni aux règles des jeux, ni aux autres tables. Tu peux seulement lire les règles, déposer des fichiers dans `games/<slug>/`, et ajouter ou supprimer des lignes dans `activity_resources` pour les jeux de cette liste.

## Le style des images (il est le même pour toutes)

- **Format :** feuille A4 en portrait (1024 × 1536). Pour une grande affiche ou un panneau couché, mets-la en paysage (1536 × 1024).
- **Fond :** blanc, avec une marge blanche d'environ 1 cm tout autour. Les imprimantes ne vont pas jusqu'au bord.
- **Dessin :** illustration jeunesse douce et chaleureuse, avec des traits nets, des couleurs vives mais pas fluo, et des personnages ronds, mignons et expressifs. C'est le même univers que les illustrations des jeux Anim'Up. Rien d'effrayant.
- **Impression :** l'image doit rester lisible si elle est imprimée en noir et blanc. Ne distingue jamais deux choses seulement par la couleur : ajoute aussi une forme ou un motif. Évite les grands aplats sombres, qui consomment trop d'encre.
- **Cartes à découper :** un trait en pointillés autour de chaque carte, avec les coins arrondis.
- **Texte :** le moins possible. En haut, un petit bandeau avec le nom du jeu, en lettres bleu marine (#102F56) soulignées d'un trait jaune (#FFCB28). En bas à droite, en tout petit et en gris, « Anim'Up ». Le texte doit être en français, sans faute, avec les accents. S'il y a un mot sur une carte, il doit être gros, court et en majuscules simples.
- **Personnages :** un personnage qui revient sur plusieurs planches doit être exactement le même partout. Garde sa première image validée comme modèle.
- **Interdit :** les logos, les marques, les personnages connus (Disney, Pokémon…), les vraies personnes, et les vraies photos d'enfants.

## Les formes exactes : à faire avec du code, pas en dessin

Certaines planches doivent avoir des tailles précises (des pièces qui recouvrent une ombre, des ronds à cocher). Dans ce cas, dessine seulement le personnage ou l'objet, puis fabrique la page avec ton outil Python (PIL ou reportlab) à partir de cette image. Les tailles sont alors justes au millimètre. C'est indiqué « (code) » dans la liste.

## Le ménage à faire d'abord (une seule fois)

Deux anciennes fiches suivent les anciennes règles. Retire-les de l'appli :

```sql
delete from public.activity_resources r using public.content_items c
where c.id = r.activity_id and (
  (c.slug = 'le-grand-depart-du-train-des-doudous' and r.storage_path = 'games/le-grand-depart-du-train-des-doudous/fiche-animation.pdf')
  or (c.slug = 'le-secret-de-la-photo-envolee' and r.storage_path = 'games/le-secret-de-la-photo-envolee/le-secret-de-la-photo-envolee-fiche.pdf')
);
```

Garde `supports-gare.pdf` du Train des doudous : il est toujours bon.

## La liste

Fais les planches dans cet ordre. Les ★ sont indispensables : fais-les toutes avant les autres. Les titres sont ceux qui s'affichent dans l'appli. La description, c'est toi qui l'écris : une phrase courte au « tu », qui dit ce qu'il y a sur la feuille et quoi en faire (exemple : « Les 4 doudous en grand, à découper et à plastifier. »).

### 1. Le Trésor des doudous perdus — slug `le-tresor-des-doudous-perdus`
- ★ `pelote-la-brebis.png` — « Pelote la brebis » : Pelote en grand, en pleine page, douce et souriante.
- ★ `cartes-doudous.png` — « Les cartes-doudous » : 4 grandes cartes : Bouclette le lapin, Caramel l'ours, Lilou le chat, Moustache la souris (vérifie leurs signes dans les règles).

### 2. Le Parcours des petites pattes — `le-parcours-des-petites-pattes`
- ★ `tilou-et-maman-renard.png` — « Tilou et Maman Renard » : deux grandes images à découper : Tilou le petit renard et Maman Renard.

### 3. Le Village des jouets cassés — `le-village-des-jouets-casses`
- ★ `boulon-le-nounours.png` — « Boulon le nounours » : Boulon en grand, un peu triste mais doux.
- ★ Dessine d'abord les 5 jouets géants, un par image, bien de face et faciles à découper : un camion, un lapin, une maison, un bateau, une boîte à musique. Fais-les valider un par un, puis fabrique avec du code :
  - `ombres-des-jouets.pdf` — « Les ombres des jouets » (code) : une page par jouet avec sa silhouette grise pleine, à la taille exacte du jouet ;
  - `pieces-des-jouets.pdf` — « Les pièces des jouets » (code) : une page par jouet en couleur, coupée en 3 grosses pièces avec des pointillés. Les pièces doivent recouvrir l'ombre exactement. Ajoute une dernière page avec 3 étoiles à découper.

### 4. La Kermesse des tout-petits — `la-kermesse-des-tout-petits`
- ★ `passeports.png` — « Les passeports de fête » (code) : 2 passeports par page. Chacun a 4 ronds à tamponner (un rond rouge, un carré bleu, un triangle vert, une étoile jaune, qui reprennent les 4 stands) et une case cœur.
- `grelot-l-ane.png` — « Grelot l'âne » : Grelot en grand.
- `panneaux-des-stands.pdf` — « Les panneaux des stands » : 4 pages, une par stand : rond rouge, carré bleu, triangle vert, étoile jaune, chacun avec un petit dessin de son jeu (vérifie les stands dans les règles).
- `canards.png` — « Les canards de la pêche » : 8 canards à découper, pour ceux qui n'ont pas de canards en plastique.

### 5. Le Réveil des lutins — `le-reveil-des-lutins`
- ★ `cartes-notes.pdf` — « L'affiche et les cartes-notes » : une affiche avec les 4 notes, plus les 4 cartes : clochette, mains (on tape), pied (on tape du pied), souffle.
- ★ `lutins-en-chevalet.pdf` — « Les 3 lutins » : Pépin, Myrtille et Galet. Pour chacun, une face endormie et une face réveillée, à plier en chevalet.
- ★ `soleil-du-village.png` — « Le soleil du village » : une face nuit (lune, endormie) et une face jour (soleil réveillé), à coller dos à dos.

### 6. Le Gâteau d'anniversaire de Rosine — `le-gateau-d-anniversaire-de-rosine`
- ★ `rosine-et-petit-pois.png` — « Rosine et Petit Pois » : les deux hippopotames.
- ★ `cartes-recette.png` — « Les cartes recette » : les 3 étages : nuages, étoiles, fleurs.
- `etiquettes-garde-manger.png` — « Les étiquettes du garde-manger » : les étiquettes des 3 bacs.

### 7. Le Grand Courrier de Zélie — `le-grand-courrier-de-zelie`
- ★ `maisons-du-village.pdf` — « Les maisons et la poste » : les 6 maisons et le bureau de poste. Chaque maison a la photo du voisin à sa fenêtre et son adresse en 2 images (une forme, et une étoile ou une lune).
- ★ `lettres-avec-photo.png` — « Les lettres avec photo » : des enveloppes avec la photo du voisin.
- ★ `lettres-adresse.png` — « Les lettres avec adresse » : des enveloppes avec l'adresse en 2 images.
- ★ `lettre-de-zelie.png` — « La lettre de Zélie » : une lettre en dessins, plusieurs par page (une par enfant).
- `zelie-et-colis.png` — « Zélie et le colis » : Zélie la kangourou et l'étiquette du colis mystère (« maison avec un soleil »).

### 8. Les Empreintes mystérieuses — `les-empreintes-mysterieuses`
- ★ `madame-herisson-et-bebe-ecureuil.png` — « Madame Hérisson et Bébé Écureuil ».
- ★ `suspects-et-caches.png` — « Les 3 suspects » : Oiseau, Lapin, Écureuil, et 3 caches avec un cœur vert.
- ★ `empreintes.pdf` — « Les empreintes » : les modèles, les empreintes à coller au sol (grandes) et 6 toutes petites.
- `noisettes-et-glands.png` — « Les noisettes et les glands » : à découper, avec la noisette croquée.

### 9. Cami et le nuage gris — `cami-et-le-nuage-gris`
- ★ `cami-le-cameleon.png` — « Cami le caméléon » : Cami tout gris, en grand, avec ses 3 formes à colorier ou à décorer (vérifie dans les règles).
- `nuage-gris.png` — « Le Nuage Gris » : un nuage triste, mais pas effrayant.
- `a-decouper.png` — « À découper » : des soleils, des gouttes et des coccinelles.

### 10. La Ferme en folie — `la-ferme-en-folie`
- ★ `cartes-animaux.pdf` — « Les cartes animaux » : 8 animaux. Chacun a une médaille de couleur avec une forme, et des bâtons pour compter ses pattes.
- ★ `panneaux-enclos.pdf` — « Les panneaux des enclos » : par couleur pour les petits, par nombre de pattes pour les moyens.
- `affiche-des-animaux.png` — « L'affiche des animaux » : les 8 animaux sur une affiche.

### 11. La Cabane des trois hérissons — `la-cabane-des-trois-herissons`
- ★ `grand-mere-herisson-et-ses-petits.png` — « Grand-Mère Hérisson et ses petits » : elle et ses 3 petits, à découper.

### 12. Le Grand Orchestre des animaux — `le-grand-orchestre-des-animaux`
- ★ `cartes-animaux.png` — « Les cartes animaux » : 4 grandes cartes : éléphant, souris, grenouille, abeille.

### 13. La Mission du parachute magique — `la-mission-du-parachute-magique`
- ★ `bobine-la-souris.png` — « Bobine la souris » : 4 petites Bobine rondes à découper et à scotcher sur une balle.

### 14. La Mission des petits super-héros — `la-mission-des-petits-super-heros`
- ★ `cartes-pouvoirs.png` — « Les cartes-pouvoirs » : Force-Ensemble, Super-Souffle, Super-Douceur, Petits Pas, Super-Copains.
- ★ `habitants.png` — « Les habitants » : ours, canard, poule, chouette, loup (un loup gentil).
- `lettre-de-dame-comete.png` — « La lettre de Dame Comète » : une lettre en dessins.
- `a-decouper.png` — « À découper » : des bateaux, des étoiles et des cartes de petit héros.

### 15. Le Voyage d'Alban — `le-voyage-d-alban`
- ★ `cartes-postales.pdf` — « Les cartes postales » : Montagne, Savane, Banquise, Océan, le retour et la dernière carte.
- ★ `panneaux-des-gares.pdf` — « Les panneaux des gares » : les 4 gares et la Gare centrale.
- ★ `carte-du-voyage.png` — « La carte du voyage » : le cadre de la carte avec les repères à coller.
- `billets.png` — « Les billets » : des billets de train avec 4 cases.
- `alban-et-sa-lettre.png` — « Alban et sa lettre » : Alban l'éléphant, avec son écharpe rouge, et sa lettre en dessins.

### 16. La Mission des petites abeilles — `la-mission-des-petites-abeilles`
- ★ `fleurs.png` — « Les 3 fleurs » : Tournesol, Bleuet, Lavande.
- `boutons-de-fleur.png` — « Les boutons de fleur » : 6 boutons de fleur pour les chaises.
- `affiche-de-la-danse.png` — « L'affiche de la danse » : les bras montrent la direction, et les claps disent si c'est près ou loin.

### 17. Le Grand Livre des contes mélangés — `le-grand-livre-des-contes-melanges`
- ★ `images-des-contes.pdf` — « Les images des contes » : la maison des ours, la maison de briques, le chemin de Mère-Grand.
- ★ `personnages.png` — « Les personnages » : Boucle d'or, le Petit Cochon, le Chaperon rouge, les 3 ours, Mère-Grand (style Anim'Up, pas Disney).
- `panneaux-des-maisons.png` — « Les panneaux des maisons » : bol, brique, fleur.

### 18. Le Petit Cirque des oursons — `le-petit-cirque-des-oursons`
- ★ `pompon-l-ourson.png` — « Pompon l'ourson ».
- `chapiteau-et-fanions.png` — « Le chapiteau et les fanions » : le chapiteau et 4 fanions.
- `animaux-spectateurs.png` — « Les animaux spectateurs ».

### 19. Le Grand Voyage de Plume la tortue — `le-grand-voyage-de-plume-la-tortue`
- ★ `plume-et-ses-amies.png` — « Plume et ses amies tortues ».
- `amis-de-la-mer.png` — « Les amis de la mer » : le poulpe, le crabe, le poisson, la méduse, plus une carte rocher et une carte soleil.

### 20. Le Grand Départ du train des doudous — `le-grand-depart-du-train-des-doudous`
- ★ `trois-doudous.png` — « Les 3 doudous » : Lapin, Ours, Renard.

### 21. Le Secret de la photo envolée — `le-secret-de-la-photo-envolee`
- `quatre-animaux.png` — « Les 4 animaux » : une coccinelle, un escargot, un oiseau, une grenouille. La photo du lieu, c'est l'animateur qui la prend au centre.

### 22. La Serre de Mamie Sauge — `la-serre-de-mamie-sauge`
- `pastilles-des-jumeaux.png` — « Les pastilles des jumeaux » : 4 paires d'images identiques, en ronds à découper.

### 23. Les Grands Déménageurs — `les-grands-demenageurs`
- `lettre-de-mirabelle.png` — « La lettre de Mirabelle » : une lettre en dessins. Mirabelle est une petite loutre **jouet** (une peluche), pas une personne.
- `panneaux-des-pieces.pdf` — « Les panneaux des pièces » : les 3 pièces de la maison et la fenêtre.
- `badges-demenageurs.png` — « Les badges de déménageur » : des badges ronds à découper.

**Rien à faire** pour la Traversée de la banquise et le Réveil du jardin des rêves.

## Pour commencer

Lance le SQL du ménage, puis commence par le Trésor des doudous perdus (Pelote la brebis) et enchaîne toute la liste jusqu'au bout sans t'arrêter.
