# Prompt à coller dans ChatGPT

Joins le fichier `supports-a-refaire-gpt.zip` à ton message, puis colle tout ce qui est sous la ligne.

---

Tu vas refaire en plus beau 23 supports à imprimer de l'appli Anim'Up, puis les mettre en ligne dans Supabase. Ils apparaissent dans l'appli, dans l'onglet « À imprimer » des activités.

## Ce que contient le ZIP

Les 23 PDF actuels, rangés comme dans Supabase (`crafts/...` et `games/<slug>/...`). Les informations sont justes, mais le rendu fait trop robotique : des formes géométriques, des pictogrammes et aucun vrai dessin.

## Ce que tu dois faire

Pour chaque fichier, crée un **nouveau document bien meilleur**. Le but, c'est un vrai beau support d'animation, dessiné et chaleureux, qui donne envie, **pas un document qui fait robotique**.

**Tu as carte blanche sur la forme.** Tu peux tout redessiner :
- les formes ;
- la mise en page ;
- le nombre de pages ;
- l'ordre ;
- les décors ;
- l'ajout d'un petit mot d'explication ou d'une image du résultat.

Exemple : la couronne de Noël ne doit plus être une simple bande en zigzag, mais une **vraie belle couronne dessinée**, avec des pointes arrondies, des pierres, des motifs de Noël… Pareil pour le masque, le poisson, le soleil : de vrais dessins, pas des polygones.

**Ce qui doit rester, et seulement ça :**
1. **Les informations** : les textes, consignes, énigmes, devinettes, codes, lettres, chiffres et noms. Tu peux les reformuler un peu pour qu'ils sonnent mieux, au tutoiement, mais sans changer le sens ni la réponse d'une énigme.
2. **Ce qui sert au jeu** : le même nombre de cartes, de balises, de pièces ou d'étiquettes. Les **symboles et couleurs que les enfants doivent associer** restent les mêmes et bien reconnaissables : formes et couleurs des pièces, soleil, goutte, étoile, cœur, lune, couleurs des œufs, grades et chiffres du stratège. Ils servent au jeu et apparaissent aussi sur d'autres supports déjà en ligne.
3. **Le côté pratique** :
   - Ça s'imprime en A4 sur une imprimante normale, ça se découpe facilement aux ciseaux, et ça reste lisible en noir et blanc.
   - Les gabarits gardent une **taille utilisable**. Par exemple, la couronne doit pouvoir faire le tour d'une tête d'enfant une fois assemblée, et le masque doit avoir des trous pour les yeux au bon endroit.
   - Pour les gabarits à décorer, laisse de la place blanche à colorier ou à décorer par l'enfant.

Tu enchaînes tout, fichier après fichier, **sans me demander de valider**. Relis toi-même chaque document avant de passer au suivant : toutes les informations de l'ancien PDF doivent être là, sans faute, avec le bon nombre de cartes ou de pièces. Si quelque chose ne va pas, refais-le tout de suite.

**La méthode, pour que ce soit beau ET juste :**
1. **Les dessins, tu les fais** avec ton générateur d'images : personnages, animaux, objets, décors, bandeaux de titre, et même les formes à découper.
2. **Les textes longs, tu les poses avec du code** (Python, avec reportlab ou PIL) par-dessus tes dessins. Ne fais jamais écrire un long texte par le générateur d'images : il fait des fautes et il invente.
3. Une page avec un seul mot et un dessin (un panneau, par exemple) peut être une seule image dessinée. Vérifie quand même chaque mot.

## Quelques idées par type de support

**Les gabarits d'activités manuelles** (`crafts/`, 10 fichiers) : de vraies formes dessinées, jolies et faciles à découper. Ajoute des motifs au trait à colorier à l'intérieur et une petite image en couleur du bricolage fini en haut, pour que l'animateur voie le résultat.

**Les grands jeux classiques 6-12 ans** (6 fichiers) : un décor qui plonge dans le jeu. Par exemple :
- une forêt et une boussole pour la course d'orientation ;
- un coffre et des engrenages pour l'escape game ;
- une vieille carte pour la chasse au trésor ;
- une prairie de Pâques pour la chasse aux œufs ;
- un appareil photo pour le rallye ;
- deux armées et des blasons pour le stratège.

Fais aussi de beaux dos de cartes.

**Les grands jeux maternelle** (7 fichiers) : les enfants de 3 à 5 ans ne lisent pas, donc **le dessin doit parler tout seul**. Par exemple, une vraie chambre, une vraie cuisine, un vrai enclos de ferme. Les autres supports de ces jeux sont déjà dessinés et en ligne, comme les cartes animaux de la ferme : garde le même style et les mêmes personnages.

## Le style, pour tous

- **Dessin :** illustration jeunesse peinte, colorée et chaleureuse, façon film d'animation, dans le même univers que les illustrations Anim'Up et que les supports du Mystère du Manoir. Rien ne doit faire peur.
- **Encre :** fond clair, sans grands aplats sombres. Ça doit rester lisible imprimé en noir et blanc, donc ne distingue jamais deux choses seulement par la couleur : ajoute une forme ou un motif.
- **Texte :** police ronde et très lisible, en bleu marine #102F56. « Anim'Up » en tout petit et en gris, en bas à droite.
- **Interdit :** les logos, les marques, les personnages connus et les vraies photos d'enfants.

## Mise en ligne de chaque fichier, dès qu'il est fini

1. **Dépôt.** Dans Supabase (projet `hhqkyzpizssbeoxehurt`), Storage, bucket `activity-resources`, dépose le PDF **au même chemin et sous le même nom que dans le ZIP**, et remplace l'ancien. Le nom du fichier doit rester le même, sinon l'appli ne le trouve plus. Par exemple : `crafts/couronne-decoree.pdf`. Il doit faire moins de 4 Mo ; si c'est trop lourd, compresse les images.
2. **Nombre de pages.** Le fichier est déjà rattaché à son activité. Mets seulement à jour le nombre de pages, qui peut avoir changé :
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
