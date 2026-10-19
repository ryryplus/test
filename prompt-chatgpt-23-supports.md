# Prompt à coller dans ChatGPT

Joins le fichier `supports-a-refaire-gpt.zip` à ton message, puis colle tout ce qui est sous la ligne.

---

Tu vas refaire en plus beau 23 supports à imprimer de l'appli Anim'Up, puis les mettre en ligne dans Supabase. Ils apparaissent dans l'appli, dans l'onglet « À imprimer » des activités.

## Ce que contient le ZIP

Les 23 PDF actuels, rangés comme dans Supabase (`crafts/...` et `games/<slug>/...`). Ils sont justes, mais trop simples : des formes géométriques, des pictogrammes et aucun vrai dessin. **Leur contenu est validé** : textes, nombres, formes à découper, tailles, nombre de pages, nombre de cartes.

## Ce que tu dois faire

Pour chaque fichier, fais une nouvelle version **plus belle et dessinée**, avec **exactement le même contenu** :
- les mêmes textes, au mot près ;
- les mêmes nombres ;
- le même nombre de pages et de cartes ;
- les mêmes formes et les mêmes tailles.

Tu enchaînes tout, fichier après fichier, **sans me demander de valider**. Relis toi-même chaque page avant de passer à la suivante : tout le texte de l'ancien PDF doit être là, sans faute, et le bon nombre de cartes ou de pièces aussi. Si quelque chose ne va pas, refais la page tout de suite.

**La méthode, pour que ce soit beau ET juste :**
1. **Les dessins, tu les fais** avec ton générateur d'images : personnages, animaux, objets, décors, bandeaux de titre.
2. **Le texte, les contours à découper et les grilles, tu les poses avec du code** (Python, avec reportlab ou PIL), en reprenant ceux de l'ancien PDF. Ne fais jamais écrire un long texte par le générateur d'images : il fait des fautes et il invente.
3. Les pages presque sans texte, comme un panneau avec un mot et un dessin, peuvent être une seule image dessinée. Vérifie quand même chaque mot.

## Les règles par type de support

**A. Les gabarits d'activités manuelles** (`crafts/`, 10 fichiers)
- C'est l'enfant qui découpe et décore. Garde **exactement la même forme et la même taille** (impression à 100 %), avec un contour net et bien visible, et les mêmes pointillés de pliage ou de collage.
- À l'intérieur des formes, fais un **dessin au trait à colorier** (contours noirs, sans remplissage). Exemples : des pierres précieuses sur la couronne, des écailles sur le poisson, des moustaches sur le masque de chat. L'enfant colorie : pas d'aplats de couleur dedans.
- En haut de la première page, ajoute une **petite image en couleur du bricolage fini**, pour que l'animateur voie le résultat.

**B. Les supports des grands jeux classiques 6-12 ans** (6 fichiers : course d'orientation, escape game, chasse au trésor, chasse aux œufs, rallye photo, stratège)
- Mêmes cartes, mêmes codes, mêmes lettres, mêmes énigmes, au mot près.
- Ajoute un vrai décor dessiné adapté au jeu : forêt et boussole, coffre et engrenages, carte au trésor, prairie de Pâques, appareil photo, armée de bois. Fais aussi de jolis dos et cadres de cartes.
- Sur les balises et les cartes, les **symboles qui servent au jeu** (motifs, étoile, cœur, lune, soleil, nuage, éclair, couleurs des œufs, grades et chiffres) restent **les mêmes et bien reconnaissables**. Tu peux les dessiner plus joliment, mais pas les changer.

**C. Les supports des grands jeux maternelle** (7 fichiers : ferme, kermesse, train des doudous, jardin des rêves, jouets cassés, empreintes, grands déménageurs)
- Les enfants de 3 à 5 ans ne lisent pas : **le dessin doit parler tout seul**. Par exemple, la chambre, la cuisine et le salon sont dessinés comme de vraies pièces, et les enclos de la ferme comme de vrais enclos.
- Les **formes et couleurs qui servent au jeu restent identiques** : rond, carré, triangle et leurs couleurs, soleil, goutte, cartes-bagages… Ce sont elles que les enfants associent.
- Les autres supports de ces jeux sont déjà dessinés et en ligne (par exemple les cartes animaux de la ferme). Garde le même style et les mêmes personnages.

## Le style, pour tous

- **Format :** A4, avec la même orientation que l'ancien PDF et une marge blanche d'environ 1 cm.
- **Dessin :** illustration jeunesse peinte, colorée et chaleureuse, façon film d'animation, dans le même univers que les illustrations Anim'Up. Rien ne doit faire peur.
- **Encre :** fond blanc ou très clair, sans grands aplats sombres. Ça doit rester lisible imprimé en noir et blanc, donc ne distingue jamais deux choses seulement par la couleur : ajoute une forme ou un motif.
- **Texte :** police ronde et très lisible, en bleu marine #102F56. Petit trait jaune #FFCB28 sous le titre. « Anim'Up » en tout petit et en gris, en bas à droite.
- **Cartes à découper :** pointillés autour, coins arrondis, même taille et même nombre que dans l'ancien PDF.
- **Interdit :** les logos, les marques, les personnages connus et les vraies photos d'enfants.

## Mise en ligne de chaque fichier, dès qu'il est fini

1. **Dépôt.** Dans Supabase (projet `hhqkyzpizssbeoxehurt`), Storage, bucket `activity-resources`, dépose le PDF **au même chemin et sous le même nom que dans le ZIP**, et remplace l'ancien. Par exemple : `crafts/couronne-decoree.pdf`. Il doit faire moins de 4 Mo ; si c'est trop lourd, compresse les images.
2. **Nombre de pages.** Le fichier est déjà rattaché à son activité. Mets seulement à jour le nombre de pages :
   ```sql
   update public.activity_resources set page_count = <nombre de pages>
   where storage_path = '<chemin du fichier>';
   ```
3. Écris une ligne de bilan, par exemple « crafts/couronne-decoree.pdf : en ligne, 2 pages », et passe au fichier suivant.

**Si tu ne peux pas déposer les fichiers toi-même :** continue quand même toute la liste. À la fin, donne-moi un seul ZIP rangé comme celui que je t'ai donné, plus le SQL des nombres de pages.

**Si tu es coupé** (limite de messages ou d'images) : quand j'écris « continue », reprends exactement là où tu t'es arrêté.

**Ne touche à rien d'autre dans Supabase.**

## La liste (23 fichiers, dans cet ordre)

**Activités manuelles**
1. `crafts/couronne-decoree.pdf` : la couronne
2. `crafts/masque-animal-simple.pdf` : le masque de chat
3. `crafts/poisson-en-papier.pdf` : le poisson
4. `crafts/soleil-en-assiette-carton.pdf` : le soleil
5. `crafts/chenille-en-papier.pdf` : la chenille
6. `crafts/arbre-des-saisons.pdf` : l'arbre des saisons
7. `crafts/collage-de-formes.pdf` : le collage de formes
8. `crafts/empreintes-de-mains.pdf` : les empreintes de mains
9. `crafts/gommettes-libres.pdf` : les gommettes
10. `crafts/peinture-propre-sous-pochette.pdf` : la peinture sous pochette

**Grands jeux classiques (6-12 ans)**
11. `games/la-chasse-au-tresor/devinettes-et-lettres.pdf`
12. `games/la-chasse-aux-oeufs/oeufs-et-etiquettes.pdf`
13. `games/course-d-orientation-simple/balises-et-cartons.pdf`
14. `games/escape-game-sportif/lettre-et-enigmes.pdf` : la lettre du Professeur Tic-Tac
15. `games/le-rallye-photo/balises-et-feuille-de-route.pdf`
16. `games/le-stratege-geant/cartes-de-grade.pdf`

**Grands jeux maternelle (3-5 ans)**
17. `games/la-ferme-en-folie/panneaux-enclos.pdf`
18. `games/la-kermesse-des-tout-petits/panneaux-des-stands.pdf`
19. `games/le-grand-depart-du-train-des-doudous/supports-gare.pdf`
20. `games/le-reveil-du-jardin-des-reves/gabarits-fleur.pdf`
21. `games/le-village-des-jouets-casses/pieces-des-jouets.pdf`
22. `games/les-empreintes-mysterieuses/empreintes.pdf`
23. `games/les-grands-demenageurs/panneaux-des-pieces.pdf`

## Pour commencer

Commence par la couronne et enchaîne toute la liste jusqu'au bout sans t'arrêter. À la fin, donne-moi le bilan complet : les fichiers en ligne, leur nombre de pages et les problèmes éventuels.
