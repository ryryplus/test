# Prompt à coller dans ChatGPT

Joins le fichier `supports-grands-jeux-6-12-ans.zip` à ton message, puis colle tout ce qui est sous la ligne.

---

Voici un ZIP avec les supports à imprimer de 15 grands jeux Anim'Up pour les 6-12 ans. Ce sont 35 PDF déjà prêts : il n'y a rien à dessiner ni à modifier. Fais tout d'un coup, sans me demander de valider.

1. Ouvre le ZIP. Il contient un dossier `games/` (un sous-dossier par jeu) et un fichier `rattachement.sql`.
2. Dépose chaque PDF dans Supabase (projet `hhqkyzpizssbeoxehurt`), Storage, bucket `activity-resources`, **au même chemin que dans le ZIP**. Exemple : `games/sagamore/cartes-roles.pdf`. Garde les noms exacts. Si un fichier existe déjà, remplace-le.
3. Lance tout le contenu de `rattachement.sql` dans Supabase. Il rattache chaque PDF à son jeu. Il ne fait rien pour un fichier qui n'est pas en ligne, et on peut le relancer sans risque.
4. Vérifie avec cette requête. Elle doit renvoyer 35 lignes, toutes avec `en_ligne = true` et `rattache = true` :
   ```sql
   select o.name, true as en_ligne,
     exists (select 1 from public.activity_resources r where r.storage_path = o.name) as rattache
   from storage.objects o
   where o.bucket_id = 'activity-resources' and o.name like 'games/%' and o.name like '%.pdf'
     and split_part(o.name, '/', 2) in ('fort-boyard-sportif','l-affaire-de-la-fete-des-geants','l-enquete-de-la-cloche-d-or','l-homme-en-noir-chasse-aux-couleurs','la-bataille-navale-geante','le-brevet-des-cinq-sens','le-carre-magique','le-festival-des-compagnies','le-grand-pari-des-80-jours','le-jeu-de-piste-de-la-carte-dechiree','le-mystere-du-manoir','le-village-sous-la-lune','les-douze-travaux-d-hercule','olympiades','sagamore')
     and split_part(o.name, '/', 3) not in ('fiches-score-arbitres.pdf','feuille-recapitulative.pdf')
   order by o.name;
   ```
5. Donne-moi le bilan en une ligne : combien de fichiers sont en ligne et rattachés. S'il y a un problème, dis-moi lequel.

Ne touche à rien d'autre dans Supabase : ni aux règles des jeux, ni aux autres tables, ni aux autres dossiers.

Si tu ne peux pas déposer les fichiers toi-même, dis-le-moi tout de suite. Je les glisserai moi-même dans le bucket, puis tu lanceras le SQL.
