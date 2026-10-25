# Prompt à coller dans ChatGPT — cadres décorés du planning PDF

Joins à ton message l'image `apercu-pdf-decorations.png` (l'aperçu des 5 cadres de base), puis colle tout ce qui est sous la ligne.

---

Tu es illustrateur jeunesse pour Anim'Up, une appli pour les animateurs de centres de loisirs et de colonies. Les animateurs y composent leur planning de la semaine, puis l'impriment en PDF. Je te joins l'aperçu des cadres actuels, dessinés en formes simples. Je voudrais que tu redessines ces **5 cadres décoratifs** pour les rendre beaux, chaleureux et vraiment illustrés.

## Format de chaque image (très important)
- **Paysage, 3508 × 2480 pixels** (A4 paysage), **PNG**.
- **Le centre doit rester vide et blanc** : c'est là que le planning s'affiche. Laisse libre un grand rectangle blanc aux coins arrondis, qui commence à **8 % du bord gauche et du bord droit**, **9 % du haut** et **8 % du bas**.
- Les décorations restent **dans la bande autour de ce rectangle**, sans jamais déborder dessus.
- Pas de texte, pas de lettres, pas de chiffres, pas de logo.
- Le fond de la bande peut être coloré ou texturé doucement, mais reste **clair** : le planning sera imprimé à la maison ou au centre, il ne faut pas vider la cartouche d'encre.

## Le style
- Illustration jeunesse peinte, colorée et chaleureuse, comme les illustrations des activités d'Anim'Up. Contours doux, un peu de texture, rien de robotique ni de géométrique.
- Les motifs sont répartis de façon vivante, pas en ligne parfaite, avec des tailles variées. Ils sont plus présents dans les coins.
- Le résultat doit donner envie d'afficher le planning au mur de la salle d'activités.

## Les 5 cadres
1. **classique.png** : couleurs d'Anim'Up (jaune soleil #FFCB28, bleu nuit #102F56, turquoise, corail, violet). Étoiles, confettis, crayons de couleur, ballons, petits drapeaux de fête.
2. **halloween.png** : citrouilles souriantes (pas effrayantes), chauves-souris mignonnes, bonbons, chapeaux de sorcière, petits fantômes rigolos, toiles d'araignée légères. Orange et violet sur fond crème. Ça doit rester adapté aux enfants de 3 à 12 ans.
3. **noel.png** : houx, flocons, sapins, cadeaux, sucres d'orge, guirlandes, étoiles dorées. Rouge et vert sur fond très clair.
4. **printemps.png** : fleurs, feuilles, papillons, coccinelles, petits oiseaux. Rose, vert tendre et lilas sur fond très clair.
5. **ete.png** : soleil, vagues, coquillages, palmiers, parasols, glaces, ballons de plage. Jaune, bleu turquoise et corail sur fond très clair.

Fais-les une par une, en gardant exactement la même zone blanche au centre pour les 5.

## Où les déposer (pour moi, pas pour ChatGPT)
Dans Supabase → Storage → bucket `activity-illustrations` → dossier `planning-frames`, avec ces noms exacts : `classique.png`, `halloween.png`, `noel.png`, `printemps.png`, `ete.png`. L'appli les utilise tout de suite, sans nouvelle version.
