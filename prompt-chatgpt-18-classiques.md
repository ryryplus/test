# Prompt à coller dans ChatGPT

Colle tout ce qui est sous la ligne dans une conversation ChatGPT où GitHub et Supabase sont connectés.

---

Dans le dépôt GitHub **ryryplus/animup**, branche **claude/jeux-classiques-sport-petits**, il y a 18 jeux classiques (9 jeux sportifs et 9 petits jeux) et des renommages à mettre en ligne dans Supabase (projet `hhqkyzpizssbeoxehurt`). Fais tout dans l’ordre, sans me demander de valider, puis donne-moi un bilan.

## 1. Lancer les 2 SQL

Exécute chaque fichier tel quel, en entier, sans rien modifier. S’il s’arrête avec une erreur, ne contourne rien et copie-moi le message exact.
1. `supabase/migrations/20261018100000_add_classic_sports_and_small_games.sql` (ajoute les 18 jeux)
2. `supabase/migrations/20261018100100_rename_branded_activity_titles.sql` (renomme 13 titres)

## 2. Créer les 18 illustrations

Pour chaque jeu, crée l’image décrite, en JPEG de moins de 1 Mo, et dépose-la dans le bucket `activity-illustrations`, dans le dossier `classiques-20261018/`, sous le nom indiqué. Toutes les images suivent le même style :

> Style : illustration vectorielle plate et douce, comme les autres petits jeux et jeux sportifs d’Anim’Up : fond crème clair, sol turquoise pâle ou cour beige, enfants souriants et variés en t-shirts turquoise, corail, jaune et bleu avec pantalons bleu marine, traits simples, couleurs pastel, pas de décor chargé. Format paysage 3:2 (1536×1024), sujet au centre. Pas de texte lisible, pas de logo, aucun personnage sous licence.

**La Queue du renard** (jeu sportif) → `classiques-20261018/la-queue-du-renard.jpg`

> Illustration pour l’activité « La Queue du renard » de l’application Anim’Up. Scène : des enfants de 6 à 10 ans courent dans une cour, chacun avec un foulard coloré glissé à la ceinture dans le dos comme une queue de renard ; une fille attrape en riant le foulard d’un garçon qui se retourne, surpris.

**Le Chamboule-tout** (jeu sportif) → `classiques-20261018/chamboule-tout.jpg`

> Illustration pour l’activité « Le Chamboule-tout » de l’application Anim’Up. Scène : une pyramide de boîtes colorées sur un banc ; un garçon de 7 ans lance une balle en mousse et les boîtes du haut commencent à tomber, pendant que deux enfants applaudissent derrière la ligne de tir.

**Le Cache-cache** (jeu sportif) → `classiques-20261018/cache-cache.jpg`

> Illustration pour l’activité « Le Cache-cache » de l’application Anim’Up. Scène : un enfant compte les yeux cachés contre un arbre, pendant que d’autres enfants de 5 à 8 ans se cachent derrière un buisson, un banc et un gros pot de fleurs, en pouffant de rire.

**Le Chat et la souris** (jeu sportif) → `classiques-20261018/le-chat-et-la-souris.jpg`

> Illustration pour l’activité « Le Chat et la souris » de l’application Anim’Up. Scène : une ronde d’enfants de 5 à 8 ans se tient par la main, bras levés ; une fillette (la souris) passe en riant sous les bras pendant qu’un garçon (le chat) la poursuit.

**Quelle heure est-il, Monsieur le Loup ?** (jeu sportif) → `classiques-20261018/quelle-heure-est-il-monsieur-le-loup.jpg`

> Illustration pour l’activité « Quelle heure est-il, Monsieur le Loup ? » de l’application Anim’Up. Scène : un animateur de dos au fond de la cour joue le loup, et une ligne d’enfants de 3 à 6 ans avance à petits pas en comptant sur leurs doigts, l’air malicieux et un peu inquiet.

**La Balle au capitaine** (jeu sportif) → `classiques-20261018/balle-au-capitaine.jpg`

> Illustration pour l’activité « La Balle au capitaine » de l’application Anim’Up. Scène : dans un gymnase, une capitaine debout sur un tapis bleu au fond du terrain attrape un ballon en mousse lancé par un coéquipier, tandis que d’autres enfants en chasubles de deux couleurs se démarquent.

**La Marelle** (jeu sportif) → `classiques-20261018/la-marelle.jpg`

> Illustration pour l’activité « La Marelle » de l’application Anim’Up. Scène : une marelle tracée à la craie dans une cour ; une fillette saute à cloche-pied, bras écartés pour l’équilibre, pendant que deux enfants attendent leur tour avec leur palet.

**La Corde à sauter** (jeu sportif) → `classiques-20261018/la-corde-a-sauter.jpg`

> Illustration pour l’activité « La Corde à sauter » de l’application Anim’Up. Scène : deux enfants font tourner une grande corde dans la cour et une fillette saute au milieu en riant, pendant que d’autres attendent en chantant et en tapant dans leurs mains.

**L’Élastique** (jeu sportif) → `classiques-20261018/l-elastique.jpg`

> Illustration pour l’activité « L’Élastique » de l’application Anim’Up. Scène : deux enfants tiennent un élastique tendu aux chevilles, face à face, et une fillette saute à cheval dessus, concentrée ; un troisième enfant applaudit.

**Pigeon vole** (petit jeu) → `classiques-20261018/pigeon-vole.jpg`

> Illustration pour l’activité « Pigeon vole » de l’application Anim’Up. Scène : des enfants de 4 à 8 ans assis en cercle lèvent les mains comme des ailes, sauf un garçon qui se rend compte en riant qu’il s’est fait piéger ; l’animatrice mime un pigeon.

**Le Pendu** (petit jeu) → `classiques-20261018/le-pendu.jpg`

> Illustration pour l’activité « Le Pendu » de l’application Anim’Up. Scène : devant un tableau où des tirets forment un mot à moitié trouvé, à côté d’un bonhomme de neige dessiné en quelques traits, des enfants de 8 à 10 ans lèvent la main pour proposer une lettre.

**Zip Zap Boing** (petit jeu) → `classiques-20261018/zip-zap-boing.jpg`

> Illustration pour l’activité « Zip Zap Boing » de l’application Anim’Up. Scène : des enfants debout en cercle font des gestes vifs et joyeux : l’un pointe quelqu’un en face, une autre lève les mains comme un bouclier ; tout le monde rit.

**Le grand vent souffle sur…** (petit jeu) → `classiques-20261018/le-grand-vent-souffle.jpg`

> Illustration pour l’activité « Le grand vent souffle sur… » de l’application Anim’Up. Scène : un cercle de chaises dans une salle ; plusieurs enfants se lèvent en même temps pour changer de place, pendant qu’un garçon au centre cherche une chaise libre, amusé.

**La Tomate** (petit jeu) → `classiques-20261018/la-tomate.jpg`

> Illustration pour l’activité « La Tomate » de l’application Anim’Up. Scène : des enfants assis en cercle ; au centre, un garçon pose une question avec un air très sérieux à une fillette qui serre les lèvres pour ne pas rire ; les autres pouffent derrière leurs mains.

**Le Ninja** (petit jeu) → `classiques-20261018/le-ninja.jpg`

> Illustration pour l’activité « Le Ninja » de l’application Anim’Up. Scène : des enfants debout en cercle, figés dans des poses de ninja rigolotes, bras tendus et jambes fléchies ; un garçon tente de toucher la main d’une fille qui esquive en riant.

**Le Furet** (petit jeu) → `classiques-20261018/le-furet.jpg`

> Illustration pour l’activité « Le Furet » de l’application Anim’Up. Scène : des enfants de 4 à 7 ans assis en rond chantent en faisant glisser un anneau sur une ficelle qu’ils tiennent tous ; au centre, une fillette observe les mains en cherchant le furet.

**Les Chaises musicales** (petit jeu) → `classiques-20261018/les-chaises-musicales.jpg`

> Illustration pour l’activité « Les Chaises musicales » de l’application Anim’Up. Scène : des enfants tournent autour d’un cercle de chaises en musique, dans une salle colorée ; la musique s’arrête et ils se précipitent en riant pour s’asseoir, deux enfants se serrant sur la même chaise.

**Le Duel du shérif** (petit jeu) → `classiques-20261018/le-duel-du-sherif.jpg`

> Illustration pour l’activité « Le Duel du shérif » de l’application Anim’Up. Scène : des enfants debout en cercle ; au centre, une fillette vise quelqu’un avec sa main en forme de pistolet, l’enfant visé s’accroupit vite et ses deux voisins dégainent l’un vers l’autre en riant.

## 3. Rattacher les illustrations

Lance ce SQL (il ne rattache que les images qui sont en ligne) :
```sql
update public.activities a set illustration_path = 'classiques-20261018/' || c.slug || '.jpg'
from public.content_items c
where c.id = a.content_id and a.illustration_path is null
  and c.slug in ('la-queue-du-renard','chamboule-tout','cache-cache','le-chat-et-la-souris','quelle-heure-est-il-monsieur-le-loup','balle-au-capitaine','la-marelle','la-corde-a-sauter','l-elastique','pigeon-vole','le-pendu','zip-zap-boing','le-grand-vent-souffle','la-tomate','le-ninja','le-furet','les-chaises-musicales','le-duel-du-sherif')
  and exists (select 1 from storage.objects o where o.bucket_id = 'activity-illustrations' and o.name = 'classiques-20261018/' || c.slug || '.jpg');
```

## 4. Vérifier

```sql
select a.category_code, count(*) as jeux,
  count(*) filter (where exists (select 1 from storage.objects o where o.bucket_id = 'activity-illustrations' and o.name = a.illustration_path)) as avec_image
from public.content_items c join public.activities a on a.content_id = c.id
where c.slug in ('la-queue-du-renard','chamboule-tout','cache-cache','le-chat-et-la-souris','quelle-heure-est-il-monsieur-le-loup','balle-au-capitaine','la-marelle','la-corde-a-sauter','l-elastique','pigeon-vole','le-pendu','zip-zap-boing','le-grand-vent-souffle','la-tomate','le-ninja','le-furet','les-chaises-musicales','le-duel-du-sherif')
group by a.category_code;

select slug, title from public.content_items
where slug in ('pictionary','times-up','taboo-maison','password','tournoi-puissance-4','puissance-4-geant-en-relais','puissance-4-sportif','molky-quilles','just-dance-sans-ecran','koh-lanta-sportif','ninja-warrior-simplifie','le-juste-prix-dobjets','balle-aux-bases')
order by slug;
```
Résultat attendu : 9 `sports` et 9 `small-games`, tous avec image ; et les 13 nouveaux titres.

Ne touche à rien d’autre dans Supabase.
