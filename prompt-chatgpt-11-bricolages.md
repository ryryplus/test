# Prompt à coller dans ChatGPT

Colle tout ce qui est sous la ligne. Il n'y a pas de fichier à joindre.

---

Tu vas créer, pour 11 activités manuelles de l'appli Anim'Up, **une illustration** et **un support à imprimer**, puis les mettre en ligne dans Supabase (projet `hhqkyzpizssbeoxehurt`). Ces activités ont été ajoutées récemment : elles n'ont encore ni image ni support.

Tu enchaînes les 11 activités **sans me demander de valider**. Relis toi-même chaque image et chaque PDF avant de passer au suivant.

## 1. L'illustration de l'activité

- **Ce qu'elle montre :** le bricolage **terminé**, fait par un enfant, posé sur une table d'atelier avec un peu du matériel autour (ciseaux à bouts ronds, colle, papiers). On doit reconnaître tout de suite le bricolage décrit plus bas.
- **Style :** le même que les autres activités manuelles d'Anim'Up : illustration jeunesse peinte, colorée, chaleureuse et lumineuse. Pas de texte, pas de logo, pas de visage d'enfant en gros plan. Des mains d'enfant, c'est bien.
- **Format :** 1536 × 1024 px, en JPEG de moins de 400 Ko.
- **Dépôt :** Storage, bucket `activity-illustrations`, chemin `crafts-20261019/<slug>.jpg`.
- **Rattachement :**
  ```sql
  update public.activities set illustration_path = 'crafts-20261019/<slug>.jpg'
  where content_id = (select id from public.content_items where slug = '<slug>');
  ```

## 2. Le support à imprimer (PDF)

Un **vrai beau document dessiné**, pas un document qui fait robotique : de vraies formes dessinées, pas des polygones.

- **Page 1 :** le titre, une grande image en couleur du bricolage fini (le modèle à montrer aux enfants) et les étapes en quelques lignes, au tutoiement.
- **Pages suivantes :** les **gabarits à découper**, à la bonne taille (impression à 100 %). Ce sont des dessins au trait faciles à découper, avec un peu de place blanche pour que l'enfant colorie. Mets le nom de chaque pièce en petit.
- Si une pièce est plus grande qu'une feuille A4, coupe-la en morceaux à scotcher, avec des repères d'assemblage, ou indique clairement « à reproduire sur une feuille A3 ».
- **Texte :** police ronde et lisible, en bleu marine #102F56. « Anim'Up » en tout petit et en gris, en bas à droite. A4 portrait, marge blanche d'environ 1 cm. Le document doit rester lisible imprimé en noir et blanc.
- **Méthode :** tu dessines les images et les formes avec ton générateur d'images. Les textes, tu les poses avec du code (Python : reportlab ou PIL), pour éviter les fautes.
- **Dépôt :** Storage, bucket `activity-resources`, chemin `crafts/<slug>.pdf`, moins de 4 Mo.
- **Rattachement**, une fois le fichier en ligne :
  ```sql
  insert into public.activity_resources (activity_id, storage_path, title, page_count)
  select c.id, 'crafts/<slug>.pdf', 'Gabarits à imprimer', <nombre de pages>
  from public.content_items c
  where c.slug = '<slug>'
    and not exists (select 1 from public.activity_resources r where r.storage_path = 'crafts/<slug>.pdf');
  ```

Après chaque activité, écris une ligne de bilan, par exemple « couronne-de-noel-mains : image et PDF en ligne, 3 pages ». Ensuite, passe à la suivante.

**Ne touche à rien d'autre dans Supabase** : ni aux textes des fiches, ni aux autres tables.

**Si tu es coupé** (limite de messages ou d'images) : quand j'écris « continue », reprends exactement là où tu t'es arrêté.

## Les 11 activités (le contenu des fiches, à respecter)

**1. Couronne de Noël en mains** (`couronne-de-noel-mains`) : 3 à 5 ans
C'est une **couronne de l'Avent à suspendre à la porte**, pas une couronne de roi. Des mains d'enfant en papier vert (deux verts, clair et foncé) sont collées tout autour d'un anneau en carton (une assiette évidée), doigts vers l'extérieur, comme des feuilles de sapin. On ajoute des baies rouges (gommettes rondes) et un nœud de ruban rouge en haut.
Gabarits : une main (taille enfant, pour ceux qui ne veulent pas tracer), l'anneau (si on n'a pas d'assiette), les baies et le nœud.

**2. Bonhomme de neige en assiette** (`bonhomme-de-neige-en-assiette`) : 3 à 5 ans
Une assiette en carton recouverte de coton, avec deux yeux noirs, un nez-carotte orange, une bouche en petits points, un chapeau noir qui dépasse en haut et une écharpe facultative.
Gabarits : chapeau, nez-carotte, yeux, écharpe.

**3. Citrouille en assiette** (`citrouille-en-assiette`) : 3 à 5 ans
Une assiette recouverte de papier orange déchiré, avec une tige marron, une feuille verte et une drôle de tête en papier noir (yeux, nez, bouche au choix). Elle doit être gentille, pas effrayante.
Gabarits : tige, feuille, plusieurs yeux, nez et bouches au choix.

**4. Poule de Pâques en assiette** (`poule-de-paques-en-assiette`) : 3 à 5 ans
Une assiette pliée en deux, peinte, qui tient debout, le pli en haut. Elle a une crête rouge sur le pli, un bec jaune ou orange, un œil, et 3 à 5 plumes de couleur de l'autre côté pour la queue.
Gabarits : crête, bec, œil, plumes.

**5. Masque de carnaval en assiette** (`masque-de-carnaval-en-assiette`) : 4 à 7 ans
Une demi-assiette décorée (couleurs, gommettes autour des yeux), avec des plumes en bandes de papier frangées sur le haut, fixée sur un bâton.
Gabarits : le demi-masque avec les trous des yeux (à poser sur l'assiette), et des plumes.

**6. Jumelles en rouleaux** (`jumelles-en-rouleaux`) : 3 à 7 ans
Deux rouleaux en carton décorés, collés côte à côte, avec un cordon de laine.
Gabarits : des bandes de décoration à enrouler autour d'un rouleau de papier toilette (aventure, jungle, safari), et le repère des trous du cordon.

**7. Fusée en rouleau** (`fusee-en-rouleau`) : 5 à 7 ans
Un rouleau recouvert de papier de couleur, avec un cône en haut (fait avec un cercle de 12 cm fendu jusqu'au centre), trois ailerons en bas, des flammes rouges, orange et jaunes qui sortent du bas, des hublots ronds et un nom de fusée.
Gabarits : cercle du cône de 12 cm avec la fente, 3 ailerons, hublots, flammes.

**8. Dragon cracheur de feu** (`dragon-cracheur-de-feu`) : 5 à 7 ans
Un rouleau recouvert de papier de couleur, transformé en tête de dragon : yeux, narines, écailles, deux cornes, deux petites ailes. Des bandes de papier de soie rouge, orange et jaune sortent de la gueule : quand on souffle, il crache du feu. Le dragon doit être rigolo, pas effrayant.
Gabarits : cornes, ailes, yeux, écailles.

**9. Étoile de shérif** (`etoile-de-sherif`) : 6 à 12 ans
Une étoile en carton d'environ 10 cm, recouverte de papier aluminium, décorée d'un rond au centre et de points au bout des branches, avec une pince à linge au dos.
Gabarits : l'étoile de 10 cm (avec ses branches à bouts ronds, comme une vraie étoile de shérif), et des idées de décoration.

**10. Longue-vue de pirate** (`longue-vue-de-pirate`) : 6 à 12 ans
Deux rouleaux en carton dont l'un coulisse dans l'autre, décorés en marron, noir ou doré, avec des bagues en carton, des rivets dessinés et un cordon.
Gabarits : les bagues, et des bandes de décoration pirate (bois, cuivre, rivets) à enrouler.

**11. Chapeau de sorcière** (`chapeau-de-sorciere`) : 6 à 12 ans
Un cône en papier noir ou violet (un quart de cercle de 30 cm de rayon) sur un grand bord en anneau de 30 cm de diamètre, avec une bande de couleur à la base et des décorations : étoiles, lunes, chauves-souris. La pointe peut être pliée pour faire un chapeau tordu. Il doit être joyeux, pas effrayant.
Gabarits : le quart de cercle et l'anneau (en morceaux à assembler ou « à reproduire sur A3 »), la bande, l'étoile, la lune, la chauve-souris.

## Pour commencer

Commence par la Couronne de Noël en mains et enchaîne les 11 activités jusqu'au bout. À la fin, donne-moi le bilan complet et la requête de vérification suivante, avec son résultat :

```sql
select c.slug, a.illustration_path, r.storage_path, r.page_count
from public.content_items c
join public.activities a on a.content_id = c.id
left join public.activity_resources r on r.activity_id = c.id
where c.slug in ('couronne-de-noel-mains','bonhomme-de-neige-en-assiette','citrouille-en-assiette','poule-de-paques-en-assiette','masque-de-carnaval-en-assiette','jumelles-en-rouleaux','fusee-en-rouleau','dragon-cracheur-de-feu','etoile-de-sherif','longue-vue-de-pirate','chapeau-de-sorciere')
order by c.slug;
```
