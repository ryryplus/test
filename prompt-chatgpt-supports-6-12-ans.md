# Prompt à coller dans ChatGPT

Joins le fichier `supports-grands-jeux-6-12-ans.zip` à ton message, puis colle tout ce qui est sous la ligne.

---

Tu vas refaire, en plus beau, les supports à imprimer de 15 grands jeux Anim'Up pour les 6-12 ans, puis les mettre en ligne dans Supabase. Ils apparaîtront dans l'appli, dans l'onglet « À imprimer » de chaque jeu.

## Ce que contient le ZIP

- `games/<slug>/<fichier>.pdf` : les 35 supports actuels. Ils sont justes, mais trop simples : des pictogrammes, beaucoup de texte et pas d'illustrations. **Le contenu est validé** : textes, règles, énigmes, réponses, noms, nombres, nombre de cartes, tailles des grilles.
- `rattachement.sql` : le SQL qui rattache chaque fichier à son jeu.

## Ce que tu dois faire

Pour chaque fichier, fais une nouvelle version **plus belle**, mais avec **exactement le même contenu**. On ne change ni les textes, ni les règles, ni les nombres. On ne retire rien et on n'invente rien.

Tu enchaînes tout, fichier après fichier, **sans me demander de valider**. Relis toi-même chaque page avant de passer à la suivante : tout le texte de l'ancien PDF doit être là, sans faute, et le bon nombre de cartes ou de cases aussi. Si quelque chose ne va pas, refais la page tout de suite.

**La méthode, pour que ce soit beau ET juste :**
1. **Les illustrations, tu les dessines** avec ton générateur d'images : personnages, objets, décors, bandeaux de titre, dos de cartes, petites icônes.
2. **Le texte, les cases et les grilles, tu les poses avec du code** (Python, avec reportlab ou PIL), en recopiant le texte de l'ancien PDF. Ne fais jamais écrire un long texte par le générateur d'images : il fait des fautes et il invente.
3. Les pages qui n'ont presque pas de texte peuvent être une seule image dessinée. C'est le cas des grandes cartes des cachettes, des panneaux, de Dame Capucine et de la carte du monde. Vérifie quand même chaque mot.

**Le style :**
- **Format :** A4 portrait, ou paysage si l'ancien PDF est en paysage, avec une marge blanche d'environ 1 cm.
- **Dessin :** illustration jeunesse peinte, colorée et chaleureuse, façon film d'animation, dans le même univers que les illustrations des jeux Anim'Up. Le ton est aventure, enquête ou fête selon le jeu, adapté à des 6-12 ans : ça ne doit pas faire bébé, et rien ne doit faire peur.
- **Encre :** fond blanc ou très clair. Pas de grands aplats sombres. Ça doit rester lisible en noir et blanc, donc ne distingue jamais deux choses seulement par la couleur : ajoute une forme ou un motif.
- **Texte :** police ronde et très lisible, en bleu marine #102F56. Petit trait jaune #FFCB28 sous le titre. « Anim'Up » en tout petit et en gris, en bas à droite.
- **Cartes à découper :** pointillés autour, coins arrondis, même taille et même nombre que dans l'ancien PDF.
- **Grilles, tableaux et cases à cocher :** même nombre de lignes et de colonnes, avec assez de place pour écrire à la main.
- **Personnages :** un personnage qui revient sur plusieurs pages doit être exactement le même partout.
- **Interdit :** les logos, les marques, les personnages connus et les vraies photos d'enfants.

## Mise en ligne de chaque fichier, dès qu'il est fini

1. **Dépôt.** Dans Supabase (projet `hhqkyzpizssbeoxehurt`), Storage, bucket `activity-resources`, dépose le fichier **au même chemin et sous le même nom que dans le ZIP**, en PDF. Exemple : `games/sagamore/cartes-roles.pdf`. Remplace l'ancien s'il y est. Taille : moins de 4 Mo. Si c'est trop lourd, compresse les images.
2. **Rattachement.** Lance la ligne de `rattachement.sql` qui correspond à ce fichier. Ensuite, mets le vrai nombre de pages :
   ```sql
   update public.activity_resources set page_count = <nombre de pages>
   where storage_path = 'games/<slug>/<fichier>.pdf';
   ```
3. Écris une ligne de bilan (« Sagamore, cartes-roles : en ligne, 4 pages ») et passe au fichier suivant.

**Si tu ne peux pas déposer les fichiers toi-même :** continue quand même toute la liste. À la fin, donne-moi un seul ZIP rangé comme celui que je t'ai donné, plus le SQL complet (rattachement et nombre de pages) à lancer une fois que j'ai déposé les fichiers.

**Si tu es coupé** (limite de messages ou d'images) : quand j'écris « continue », reprends exactement là où tu t'es arrêté.

**Ne touche à rien d'autre dans Supabase** : ni aux règles des jeux, ni aux autres tables, ni aux autres dossiers.

## La liste (35 fichiers, dans cet ordre)

Pour chaque fichier, l'ancien PDF du ZIP donne le contenu exact. Mes notes disent seulement quoi illustrer.

1. **Le Brevet des Cinq Sens** (`le-brevet-des-cinq-sens`), 6-7 ans
   - `passeport.pdf` : un passeport d'explorateur, avec un petit explorateur et les 5 sens illustrés sur les cases à gommettes.
2. **L'Enquête de la Cloche d'Or** (`l-enquete-de-la-cloche-d-or`), 6-7 ans
   - `cartes-illustrees.pdf` : les 4 cachettes (Fontaine, Grand Chêne, Manège, Jardin des tournesols), en vraies illustrations pleine carte.
   - `tableau-d-enquete.pdf` : les 12 images du tableau QUI ? / AVEC QUOI ? / OÙ ?, en vraies illustrations.
   - `cartes-ce-n-est-pas.pdf` : mêmes images en petit. Le plan des enveloppes est pour les adultes, donc il reste un tableau clair.
   - `poste-facteur.pdf` : les étiquettes des boîtes aux lettres avec les animaux dessinés, et les 16 lettres.
3. **L'Homme en noir : la chasse aux couleurs** (`l-homme-en-noir-chasse-aux-couleurs`)
   - `grilles.pdf` : les mêmes grilles, avec un bandeau illustré (l'Homme en noir, gentil et mystérieux, et des taches de couleur).
4. **Le Carré magique** (`le-carre-magique`)
   - `grilles-magiques.pdf` et `grilles-equipes.pdf` : les grilles exactes, posées par code. Les 6 symboles deviennent de belles icônes dessinées, toujours reconnaissables par leur forme.
5. **Le Festival des Compagnies** (`le-festival-des-compagnies`)
   - `cartes-du-festival.pdf` : les 36 cartes (Personnages, Répliques, Lieux), chacune avec une petite illustration et un dos de carte par famille.
   - `story-board.pdf` : les 3 cases, avec un décor de théâtre et des rideaux autour.
6. **Le Secret du Fort des Marées** (`fort-boyard-sportif`)
   - `cartes-cles-et-indices.pdf` : des clés et des cartes indices illustrées, façon trésor de fort marin.
   - `carnet-du-sage.pdf` : les 36 énigmes et les réponses, au mot près (posées par code). Ajoute le Sage illustré, le cadenas et un décor de parchemin.
7. **La Bataille navale géante** (`la-bataille-navale-geante`)
   - `grilles.pdf` et `papiers-de-tir.pdf` : les grilles exactes, avec des bateaux dessinés et un bandeau de mer.
8. **Le Jeu de Piste de la Carte Déchirée** (`le-jeu-de-piste-de-la-carte-dechiree`)
   - `fiche-des-signes.pdf` : les 5 signes dessinés comme à la craie et au bâton, avec le texte exact.
   - `planches-signes.pdf` : les 18 cartes-signes par équipe, aux mêmes couleurs et formes.
   - `carte-en-4-morceaux.pdf` : un cadre de vieille carte au trésor illustré, l'intérieur restant à compléter.
9. **L'Affaire de la Fête des Géants** (`l-affaire-de-la-fete-des-geants`)
   - `fiches-personnages.pdf` : un portrait illustré pour chacun des 8 personnages, et le texte exact.
   - `panneaux-tables.pdf` : les 8 lieux illustrés (Bureau du comité, Garage, Kiosque, Boulangerie, Journal, Jardin municipal, Atelier de couture, Maison des porteurs).
   - `feuille-enquete.pdf` : le même tableau, avec un bandeau d'enquête.
   - `solution.pdf` : texte exact, mise en page plus agréable et portraits en petit.
   - `dame-capucine.pdf` : la géante sur ses briques et ses 4 roues, en grande illustration.
10. **Le Mystère du Manoir** (`le-mystere-du-manoir`)
    - `temoignages.pdf` : les témoignages exacts, avec les portraits de Madame Violette et du Professeur Léonard. Ce sont les mêmes que sur les fiches suspects déjà en ligne : `games/le-mystere-du-manoir/fiches_suspects_du_manoir_mysterieux.png`.
11. **Le Village sous la Lune** (`le-village-sous-la-lune`)
    - `cartes-roles.pdf` : une illustration par rôle (loup-garou pas effrayant, Voyante, Sorcière, villageois variés), et un dos de carte commun.
    - `fiche-meneur.pdf` : texte exact, avec un décor de village la nuit en bandeau.
12. **Les Douze Travaux d'Hercule** (`les-douze-travaux-d-hercule`)
    - `fiches-travaux.pdf` : une illustration du mythe en haut de chacune des 6 fiches, et le texte exact.
    - `feuille-de-route.pdf` : les cases à cocher, avec Hercule et des icônes pour chaque travail.
13. **Le Grand Pari des 80 jours** (`le-grand-pari-des-80-jours`)
    - `fiches-escales.pdf` : une illustration du pays en haut de chacune des 8 fiches, et le texte exact.
    - `passeport.pdf` : un vrai passeport de voyageur de 1872 illustré.
    - `calendrier-80-jours.pdf` : les mêmes bandes de jours, avec un bandeau de voyage (train, bateau, montgolfière).
    - `loteria.pdf` : les 16 cartes et les 6 tablas, en vraies illustrations, avec les mots espagnols exacts.
    - `carte-du-monde.pdf` : une belle carte du monde illustrée, avec les 8 escales, la route vers l'est et la ligne de changement de date.
14. **Les Grandes Olympiades** (`olympiades`)
    - `feuille-de-scores.pdf` : le même tableau, avec un bandeau sportif (podium, médailles).
15. **Le Sagamore des Deux Royaumes** (`sagamore`)
    - `cartes-roles.pdf` : une illustration par rôle (Sorcier, Sachem, Espion, Guerrier, Sagamore), aux couleurs de chaque royaume (Lune et Soleil), avec « qui bat qui » exact.
    - `cartes-vie.pdf` : des cartes lune et soleil illustrées, au même nombre.

## Pour commencer

Commence par le Brevet des Cinq Sens et enchaîne toute la liste jusqu'au bout sans t'arrêter. À la fin, donne-moi le bilan complet : les fichiers en ligne, leur nombre de pages, et les problèmes éventuels.
