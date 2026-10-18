# Prompt à coller dans ton autre compte Claude (Claude Code)

Ouvre une session Claude Code sur le dépôt **ryryplus/animup**, puis colle tout ce qui est sous la ligne.

---

Tu travailles sur **Anim’Up**, une app Expo / React Native pour les animateurs de centres de loisirs. La personne qui porte le projet est francophone et n’est pas développeuse : réponds en français, simplement, et montre des résultats concrets.

## Ta mission

Créer de **nouveaux plannings thématiques de 5 jours**, **5 par tranche d’âge**, en suivant exactement la direction déjà prise sur le projet : **simple, court, et construit avec les jeux qui existent déjà**. Tu n’inventes pas de nouveaux jeux et tu ne compliques pas ceux qui existent.

Les 5 tranches d’âge de l’app : `ps` (3 ans), `ms` (4 ans), `gs` (5 ans), `6-7`, `8-12`. Au total : 25 plannings. **Travaille tranche par tranche** : une PR par tranche (5 plannings), et attends l’accord de la personne avant de passer à la suivante. Commence par `8-12` ou `6-7`, qui ressemblent le plus au planning existant.

## À lire avant d’écrire quoi que ce soit

1. `CLAUDE.md`, `AGENTS.md` et `docs/CONTEXTE-PROJET.md` : les règles de travail du projet (elles s’appliquent toutes).
2. `docs/wizard-school-planning.md` : le seul planning existant, « Bienvenue à l’école des sorciers ».
3. `supabase/migrations/20260928183515_wizard_school_planning.sql` : la structure des tables.
4. `supabase/migrations/20261018120000_simplify_wizard_school_planning.sql` : **le modèle à suivre**. C’est la version simplifiée du planning, validée par la personne : une seule règle de points, des textes courts, 2 activités au plus par demi-journée.
5. `src/lib/plannings.ts` et les écrans `app/(tabs)/(plannings)/` : comment l’app affiche un planning.

## Règles non négociables

**Le contenu**
- Chaque planning dure **5 jours**. Chaque demi-journée (`morning`, `afternoon`) a **2 activités au plus**.
- Chaque activité **ouvre une fiche qui existe déjà** dans le catalogue : grands jeux, petits jeux, jeux sportifs, activités manuelles, chants. Tu la relies par son `slug` et tu vérifies dans Supabase qu’elle existe et qu’elle convient à l’âge (table `activity_age_groups`).
- Tu peux ajouter quelques **moments** sans fiche (accueil, lettre d’ouverture, cérémonie de fin). Ils ont alors des `instructions` courtes et complètes.
- **On habille, on ne change pas** : le `context` raconte le jeu dans le thème (« le ballon devient un sort »), mais **les règles du jeu ne changent pas**. Écris-le dans le texte : « Les règles ne changent pas. »
- **Textes courts**, au **tutoiement** de l’animateur, avec des phrases naturelles :
  - la présentation fait 5 lignes au plus ;
  - 5 à 6 conseils, d’une phrase chacun ;
  - chaque `context` fait 1 à 2 phrases.
- Les âges, durées et effectifs doivent être réalistes. En maternelle, prévois 25 à 45 minutes par activité, un seul groupe et rien à lire.
- **Thèmes originaux et variés** : pirates, cirque, espace, jungle, chevaliers, détectives, fête foraine, océan, ferme, Jeux olympiques… Aucune licence : pas de Harry Potter, Disney, Pokémon, Pat’Patrouille… ni de nom qui ressemble à une licence. Ne refais pas un thème « école de magie ».
- Tu ne crées **aucun nouveau jeu**. S’il manque vraiment une fiche pour un planning, signale-le à la personne au lieu de l’écrire.

**Les points et les maisons**
- **6-7 et 8-12 ans** : 4 maisons ou équipes originales (code, nom, couleur, symbole, qualité), et **une seule règle de points**, la même que dans le planning des sorciers. Après chaque activité, chaque maison reçoit 1, 2 ou 3 points : 1 si elle a joué le jeu, 2 si elle a réussi ou gagné, 3 si elle a en plus aidé les autres ou été fair-play. Le `points_guidance` de chaque activité commence par le motif (Épreuve, Coopération, Créativité, Fair-play, Entraide, Mission ou Rangement), suivi de « 1 à 3 points par maison, selon la règle habituelle ».
- **Maternelle (PS, MS, GS)** : **pas de maisons et pas de compétition**. Toute la semaine est coopérative. Mets dans `points_guidance` une phrase comme « Pas de points : on fête ensemble ce que le groupe a réussi. » Vérifie dans l’app ce qui se passe pour un planning **sans maisons**. Aujourd’hui, l’onglet Points et le tirage supposent 4 maisons. Si c’est le cas, fais la petite modification de code qui masque les points et le tirage quand un planning n’a pas de maisons, dans la PR de la première tranche maternelle, avec un test.

**La couverture**
- Aujourd’hui, seul le planning des sorciers a une couverture illustrée (`WizardPlanningCover` dans `src/components/planning-ui.tsx`, image `activity-illustrations/plannings/bienvenue-ecole-sorciers.jpg`).
- Généralise ce composant à **tout planning** : il affiche `activity-illustrations/plannings/<slug>.jpg` s’il existe, sinon la présentation actuelle (badge, titre, univers). Fais-le dans la première PR.
- Pour chaque planning, écris un **prompt d’illustration** pour GPT. C’est GPT qui fait les images, pas toi.
  - Format : 1536 × 1024, JPEG de moins de 1 Mo.
  - Style : illustration peinte, riche et lumineuse, façon film d’animation, dans le même univers que les grands jeux Anim’Up.
  - Le sujet doit être dans la moitié droite, avec un fond calme et sombre à gauche et en bas pour le titre en blanc.
  - Pas de texte, pas de logo, rien sous licence.

## Comment livrer

- **Supabase** : un fichier SQL par tranche dans `supabase/migrations/`. Il doit faire uniquement des **insertions**, dans une transaction, et s’arrêter sans rien modifier si :
  - un des plannings existe déjà ;
  - une fiche citée est introuvable.
- Tu ne modifies jamais le planning des sorciers ni les fiches du catalogue. Les plannings sont publiés (`published = true`).
- **Tu n’appliques rien toi-même dans Supabase.** C’est GPT qui exécute le SQL depuis ta branche. Tu peux seulement lire la base pour vérifier.
- **Une PR par tranche.** Ne fusionne **jamais** sans le mot « fusionne » de la personne.
- Lance `npm run check` avant chaque PR et dis honnêtement ce que tu n’as pas pu vérifier.
- À la fin de chaque tranche, donne à la personne deux choses :
  1. **un message prêt à coller à GPT**, qui lui demande d’exécuter le SQL de ta branche, de créer et déposer les 5 couvertures (`activity-illustrations/plannings/<slug>.jpg`), puis de renvoyer une requête de vérification ;
  2. **un résumé en français simple** : les 5 thèmes et, pour chacun, ce qu’on fait chaque jour, en une ligne.

## Le but

Un animateur pressé ouvre le planning le matin même sur son téléphone et sait quoi faire : 2 activités par demi-journée, des fiches qu’il connaît déjà, une histoire légère par-dessus, une règle de points simple pour les grands et rien de compétitif pour les petits.
