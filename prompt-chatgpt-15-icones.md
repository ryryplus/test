# Prompt à coller dans ChatGPT

Colle tout ce qui est sous la ligne. Il n'y a pas de fichier à joindre.

---

Tu vas dessiner **15 petites illustrations** pour l'interface de l'appli Anim'Up, une boîte à idées pour les animateurs de centres de loisirs, puis les déposer dans Supabase. Elles remplacent des icônes au trait trop « robotiques » : sur l'accueil, dans le profil et sur la page Premium.

## Le style (le plus important)

- **Un seul et même style pour les 15**, comme un jeu d'autocollants dessinés par le même illustrateur : même épaisseur de contour, même lumière, même palette.
- Le style des illustrations Anim'Up : **dessin jeunesse à plat**, formes rondes et douces, petits contours bleu marine (#102F56), aplats de couleur avec une ombre très légère.
- **Couleurs** : jaune Anim'Up #FFCB28, turquoise #3CC7B5, corail #F27A6B, bleu #4F8CFF, violet doux #8754E5, orange #F07828 et bleu marine #102F56.
- Les illustrations sont affichées **toutes petites** : de 30 à 52 pixels à l'écran. Il faut donc **un seul objet** par illustration, des formes simples, très peu de détails, et une silhouette reconnaissable d'un coup d'œil.
- **Fond transparent**, objet centré avec une petite marge autour.
- **Aucun texte, aucune lettre, aucun chiffre, aucun logo**. Pas de personnage, sauf un petit visage souriant si c'est indiqué.

## La méthode

1. Fais d'abord **une planche avec les 15 illustrations côte à côte**, pour vérifier qu'elles vont bien ensemble. Corrige celle qui détonne.
2. Ensuite, exporte **chaque illustration séparément** : PNG carré de **512 × 512 px**, fond transparent, moins de 150 Ko.

## Les 15 illustrations

| Nom du fichier | Où elle s'affiche | Ce qu'elle montre |
|---|---|---|
| `trouve-activite.png` | Accueil : « Trouve-moi une activité » | Une étoile magique jaune qui scintille, avec deux ou trois petites étincelles autour : l'idée surprise |
| `trouve-formation.png` | Accueil : « Trouve-moi une formation » | Une toque de diplômé posée sur un petit carnet, avec un ruban |
| `petit-plus.png` | Accueil : « Le petit + de l'animateur » | Une ampoule jaune allumée, avec un petit sourire |
| `grands-jeux.png` | Accueil : catégorie Grands jeux | Un drapeau violet planté, avec une petite carte au trésor roulée au pied |
| `petits-jeux.png` | Accueil : catégorie Petits jeux | Un plot orange et un foulard coloré noué |
| `sports.png` | Accueil : catégorie Activités sportives | Un ballon turquoise et blanc avec un sifflet |
| `plannings.png` | Accueil : catégorie Plannings | Un petit calendrier orange, avec un soleil sur une des cases |
| `chants.png` | Accueil : catégorie Chants | Deux notes de musique bleues qui dansent |
| `manuelles.png` | Accueil : catégorie Activités manuelles | Une palette de peinture corail avec un pinceau et une paire de ciseaux à bouts ronds |
| `premium.png` | Profil et page Premium | Une étoile dorée brillante, un peu plus « précieuse » que les autres |
| `mode-nuit.png` | Profil : mode nuit | Une lune endormie bleu doux avec deux petites étoiles |
| `proposer.png` | Profil : « Propose ton activité » | Une feuille avec un crayon jaune et une petite ampoule : l'idée qu'on envoie |
| `email.png` | Profil : adresse e-mail | Une enveloppe fermée |
| `connexion.png` | Profil : méthode de connexion | Un cadenas fermé, rond et sympathique |
| `mot-de-passe.png` | Profil : changer le mot de passe | Une clé dorée |

## La mise en ligne

1. Dans Supabase (projet `hhqkyzpizssbeoxehurt`), va dans Storage, bucket **`activity-illustrations`**. Dépose chaque fichier dans le dossier **`ui/`**, sous le nom exact du tableau. Par exemple : `ui/trouve-activite.png`.
2. Il n'y a **aucun SQL à lancer** : l'appli trouve les images toute seule grâce à leur nom.
3. Ne touche à rien d'autre dans Supabase.

À la fin, montre-moi la planche des 15 et la liste des fichiers déposés.
