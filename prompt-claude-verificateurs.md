# Prompt à coller dans ton autre compte Claude (Claude Code)

Ouvre une session Claude Code sur le dépôt **ryryplus/animup**, puis colle tout ce qui est sous la ligne.

---

Tu travailles sur **Anim'Up**, une app Expo / React Native pour les animateurs de centres de loisirs. La personne qui porte le projet est francophone et n'est pas développeuse : réponds en français, simplement.

## Ta mission

Relire tout le catalogue **comme le ferait un animateur débutant** qui ouvre l'appli le matin même, et corriger ce qui n'est pas clair. Pour ça, tu lances **5 agents en parallèle, un par catégorie** :
- grands jeux ;
- petits jeux ;
- jeux sportifs ;
- activités manuelles ;
- plannings thématiques.

**On ne vérifie pas les chants.**

Chaque agent relit **toutes** les fiches de sa catégorie, sans échantillonner. Il corrige ce qui doit l'être, puis te fait un rapport. Tu enchaînes tout **sans attendre de validation**.

## La règle d'or : ne complexifie rien

- Tu **clarifies**, tu ne changes pas les jeux : on garde les mêmes règles, la même mécanique et le même matériel. On n'ajoute ni variante, ni système de points, ni rôle, ni étape.
- Une correction rend une fiche **plus courte ou plus claire**, jamais plus longue sans raison.
- **Style :** tutoiement de l'animateur, phrases courtes et naturelles, une idée par phrase, pas de jargon.
- En cas de doute, tu ne modifies pas : tu notes le point dans le rapport, pour que la personne décide.

## À lire avant de commencer

1. `CLAUDE.md`, `AGENTS.md` et `docs/CONTEXTE-PROJET.md` : les règles du projet. **Pour cette mission, ce message prime sur elles** : tu peux appliquer toi-même dans Supabase et fusionner tes PR sans attendre « fusionne ».
2. `.claude/skills/grand-jeu-animup/SKILL.md` et `content/grand-games/README.md` : comment sont faits les grands jeux et comment les modifier.
3. Les tables, dans Supabase (projet `hhqkyzpizssbeoxehurt`) :
   - `content_items` (slug, titre, résumé) et `activities` (catégorie, durée, effectifs, lieu, `illustration_path`) ;
   - `activity_age_groups` et `activity_sections` (`description`, `objectives`, `materials`, `preparation`, `steps`, `variants`, `tips`, `safety`) ;
   - `activity_kits.kit` (le kit des grands jeux) et `activity_resources` (les PDF) ;
   - pour les plannings : `thematic_plannings`, `thematic_planning_days` et `planning_occurrences`.

## Ce que vérifie chaque agent

**1. Grands jeux** : la partie **« Avant de jouer »** des règles, en priorité. Elle est souvent floue. Un débutant doit savoir, sans rien deviner :
- **le terrain** : sa taille, ses limites et où se trouvent les camps, la prison, les postes ou les cachettes ;
- **le matériel**, avec les quantités exactes : combien de foulards, de cartes, de plots… ;
- **les équipes** : combien, de combien d'enfants, et comment on les forme ;
- **le rôle de chaque animateur** : une ligne chacun, « Animateur 1 : … », « Animateur 2 : … » ;
- **ce qu'on installe avant l'arrivée des enfants**.

Vérifie ensuite :
- que « Le but », « Comment on joue » et « Fin de partie et gagnants » se comprennent en une lecture ;
- qu'on sait toujours **qui gagne et comment on départage** ;
- que le titre du 4e groupe correspond au jeu : « Si on est attrapé… » seulement si on peut être attrapé ;
- que les supports cités dans le texte existent bien dans l'onglet « À imprimer » ;
- pour la maternelle, que personne n'est éliminé et qu'il n'y a rien à lire pour les enfants.

Les grands jeux se modifient dans `content/grand-games/<slug>.game.json`. Valide avec `node scripts/grand-game/check.mjs`, puis génère le SQL avec les scripts existants.

**2. Petits jeux**
- Peut-on lancer le jeu en **2 minutes**, sans préparation compliquée ?
- Les règles s'expliquent-elles aux enfants en quelques phrases ?
- Le **signal de départ et de fin** est-il clair ?
- L'âge et le nombre d'enfants sont-ils réalistes ?
- Le matériel est-il vraiment nécessaire et facile à trouver ?
- Repère aussi les **doublons** : le même jeu sous deux noms. Ne les supprime pas, liste-les.

**3. Jeux sportifs**
- Le jeu **n'a-t-il pas été trop complexifié** ? Il doit rester simple pour un débutant, proche de la version que tout le monde connaît. Si une fiche a ajouté des règles, des rôles ou des points inutiles, reviens à la version simple et note-le dans le rapport.
- Le terrain, les limites et le matériel (plots, ballons, chasubles) sont-ils clairs ?
- La **sécurité** est-elle claire, sans en faire trop : surface, distances, contacts interdits, hydratation ?
- La durée et l'âge sont-ils réalistes ?
- La fiche explique-t-elle comment **éviter qu'un enfant attende sur le banc** (pas d'élimination longue) ?

**4. Activités manuelles**
- Les **étapes** : dans le bon ordre, une action par étape. On sait qui fait quoi (l'enfant ou l'adulte) et quand laisser sécher.
- Le **matériel** : complet, avec les quantités par enfant, courant et peu cher.
- Est-ce réalisable par l'âge indiqué ? Sinon, ajuste l'âge ou précise ce que fait l'adulte.
- **L'illustration** : regarde-la (bucket `activity-illustrations`, chemin `illustration_path`). Montre-t-elle bien le bricolage fini décrit dans la fiche ? Si elle ne correspond pas ou s'il n'y en a pas, note-le.
- **Faut-il un PDF à imprimer ?** Oui seulement si l'activité demande un gabarit ou une forme précise à découper, qu'on ne peut pas faire à main levée. Liste ceux qui en ont besoin et n'en ont pas.
- **Tu ne fais aucune image ni aucun PDF toi-même** : c'est ChatGPT qui les fait (voir « Ce que tu livres »).

**5. Plannings thématiques**
- Chaque activité citée ouvre une **fiche qui existe**, adaptée à l'âge du planning (`activity_age_groups`).
- Il y a **2 activités au plus par demi-journée**, avec des durées réalistes.
- Les « moments » sans fiche (accueil, cérémonie…) ont des **instructions courtes et complètes**.
- Le petit texte d'histoire (`context`) fait 1 ou 2 phrases et dit que les règles ne changent pas.
- La présentation et les conseils sont courts et clairs.

## Comment tu corriges

- Les corrections se font **uniquement par du SQL** dans `supabase/migrations/`, avec un fichier par catégorie. Pour les grands jeux, passe aussi par les fichiers `.game.json`.
- Chaque fichier SQL est **gardé** : il ne modifie une fiche que si son texte est encore celui que tu as relu, dans une transaction. Il ne supprime **jamais** une fiche, une ressource ou une image.
- Une **PR par catégorie**. Tu peux la fusionner toi-même quand `npm run check` passe et que les données sont bien en base : vérifie avec des requêtes de lecture.
- Tu ne touches pas au code de l'appli, sauf si une catégorie entière est mal affichée. Dans ce cas, fais la plus petite correction possible, avec un test.

## Ce que tu livres à la fin

1. **Un rapport en français simple**, catégorie par catégorie :
   - combien de fiches relues et combien corrigées ;
   - les 5 corrections les plus importantes, en une ligne chacune (avant → après) ;
   - **ce que tu laisses décider** à la personne : doutes, doublons, jeux qui te semblent trop compliqués mais que tu n'as pas osé simplifier.
2. **Un seul message prêt à coller à ChatGPT** pour les activités manuelles qui ont besoin d'une illustration refaite ou d'un PDF à imprimer. Il contient :
   - pour chacune : ce que doit montrer l'image et ce que doit contenir le PDF ;
   - le style : illustration jeunesse peinte, colorée et chaleureuse, comme les autres activités manuelles d'Anim'Up ; PDF dessiné, pas robotique ;
   - les chemins de dépôt : `activity-illustrations/crafts-<date>/<slug>.jpg` en 1536 × 1024, et `activity-resources/crafts/<slug>.pdf` ;
   - le SQL de rattachement (`activities.illustration_path` et `activity_resources`) ;
   - une requête de vérification.

## Le but

Un animateur débutant ouvre n'importe quelle fiche et sait quoi faire **du premier coup**, sans rien deviner, et sans que le jeu ait été rendu plus compliqué.
