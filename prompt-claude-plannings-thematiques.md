# Prompt à coller dans ton autre compte Claude (Claude Code)

Ouvre une session Claude Code sur le dépôt **ryryplus/animup**, puis colle tout ce qui est sous la ligne.

---

Tu travailles sur **Anim’Up**, une app Expo / React Native pour les animateurs de centres de loisirs. La personne qui porte le projet est francophone et n’est pas développeuse : réponds en français, simplement, et montre des résultats concrets.

## Ta mission

Créer de **nouveaux plannings thématiques de 5 jours**, **5 par tranche d’âge**, en suivant exactement la direction déjà prise sur le projet : **simple, court, et construit avec les jeux qui existent déjà**. Tu n’inventes pas de nouveaux jeux et tu ne compliques pas ceux qui existent.

Les 5 tranches d’âge de l’app : `ps` (3 ans), `ms` (4 ans), `gs` (5 ans), `6-7`, `8-12`. Au total : 25 plannings. Travaille tranche par tranche, une PR par tranche (5 plannings), et **enchaîne les 5 tranches sans attendre de validation** entre deux.

**Commence par regarder ce qui se fait sur Internet** : les thèmes de semaines et de séjours les plus utilisés en centres de loisirs et en colonies, par tranche d’âge. Cherche dans les sites d’animateurs, les plannings d’accueils de loisirs publiés par les mairies, les blogs d’animation, etc. Choisis les thèmes qui plaisent le plus aux enfants et aux animateurs.

## À lire avant d’écrire quoi que ce soit

1. `CLAUDE.md`, `AGENTS.md` et `docs/CONTEXTE-PROJET.md` : les règles de travail du projet. **Pour cette mission, ce message prime sur elles** : tu peux appliquer toi-même dans Supabase, fusionner tes PR sans attendre « fusionne », et utiliser des thèmes inspirés de licences.
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
- **Thèmes variés et populaires** : pirates, cirque, espace, jungle, chevaliers, détectives, fête foraine, océan… Les **thèmes inspirés de licences connues des enfants sont autorisés et même bienvenus** (films, dessins animés, jeux vidéo à la mode), s’ils sont populaires dans les centres. Ne refais pas un thème « école de magie », il existe déjà.
- Tu ne crées **aucun nouveau jeu**. S’il manque vraiment une fiche pour un planning, signale-le à la personne au lieu de l’écrire.

**Les points et les maisons**
- Les maisons et les points existent dans le planning des sorciers **parce que le thème s’y prête** (les maisons d’une école de magie). **Ce n’est pas obligatoire.** Mets des équipes et des points seulement si le thème en a besoin (une compétition, un tournoi, des clans…). Sinon, pas de maisons ni de points.
- Si tu mets des points, garde une règle simple et la même toute la semaine. Par exemple : 1, 2 ou 3 points par équipe après chaque activité.
- La compétition n’est **pas interdite en maternelle** : adapte-la simplement à l’âge (petits défis, tout le monde est félicité).
- Vérifie dans l’app ce qui se passe pour un planning **sans maisons**. Aujourd’hui, l’onglet Points et le tirage supposent 4 maisons. Si c’est le cas, fais la petite modification de code qui les masque quand un planning n’a pas de maisons, avec un test.

**La couverture**
- Aujourd’hui, seul le planning des sorciers a une couverture illustrée (`WizardPlanningCover` dans `src/components/planning-ui.tsx`, image `activity-illustrations/plannings/bienvenue-ecole-sorciers.jpg`).
- Généralise ce composant à **tout planning** : il affiche `activity-illustrations/plannings/<slug>.jpg` s’il existe, sinon la présentation actuelle (badge, titre, univers). Fais-le dans la première PR.
- Pour chaque planning, écris un **prompt d’illustration** pour GPT. C’est GPT qui fait les images, pas toi.
  - Format : 1536 × 1024, JPEG de moins de 1 Mo.
  - Style : illustration peinte, riche et lumineuse, façon film d’animation, dans le même univers que les grands jeux Anim’Up.
  - Le sujet doit être dans la moitié droite, avec un fond calme et sombre à gauche et en bas pour le titre en blanc.
  - Pas de texte, pas de logo. Pour un thème inspiré d’une licence, le prompt évoque l’univers (décor, ambiance, couleurs) sans demander les personnages officiels, que GPT refuse de dessiner.

## Comment livrer

- **Supabase** : tu peux appliquer toi-même tes changements, avec un fichier SQL par tranche dans `supabase/migrations/`. Il doit faire uniquement des **insertions**, dans une transaction, et s’arrêter sans rien modifier si :
  - un des plannings existe déjà ;
  - une fiche citée est introuvable.
- Tu ne modifies jamais le planning des sorciers ni les fiches du catalogue. Les plannings sont publiés (`published = true`).
- **Une PR par tranche**, que tu peux fusionner toi-même quand `npm run check` passe et que les données sont bien en base. Vérifie avec des requêtes de lecture et dis honnêtement ce que tu n’as pas pu vérifier.
- **Le seul travail que tu ne fais pas, ce sont les illustrations : c’est GPT qui les fait.** À la fin, donne à la personne deux choses :
  1. **un seul message prêt à coller à GPT**, qui lui demande de créer et déposer les couvertures de tous les plannings (`activity-illustrations/plannings/<slug>.jpg`, avec un prompt détaillé par planning), puis de renvoyer une requête de vérification ;
  2. **un résumé en français simple** : par tranche d’âge, les 5 thèmes et, pour chacun, ce qu’on fait chaque jour, en une ligne.

## Le but

Un animateur pressé ouvre le planning le matin même sur son téléphone et sait quoi faire : 2 activités par demi-journée, des fiches qu’il connaît déjà, une histoire légère par-dessus, et des points seulement quand le thème s’y prête.
