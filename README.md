<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Énigme de Zoro</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-image: url('fond.jpg');
            background-size: cover;
            background-position: center;
            color: #fff;
        }
        #logo {
            width: 150px;
            display: block;
            margin: 0 auto 20px;
        }
        h1 {
            text-align: center;
        }
        form {
            max-width: 400px;
            margin: 0 auto;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 10px;
        }
        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
            box-sizing: border-box;
        }
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            cursor: pointer;
        }
        #resultat {
            margin-top: 20px;
            text-align: center;
        }
    </style>
</head>
<body>

    <img id="logo" src="zoro_logo.png" alt="Drapeau de Zoro">

    <h1>Énigme de Zoro</h1>

    <form id="zoroEnigmeForm" action="traitement.php" method="post">
        <label for="reponse">Quel est le nom du maître d'armes de Zoro avant qu'il ne devienne un pirate ?</label>
        <input type="text" id="reponse" name="reponse" placeholder="Votre réponse...">
        <input type="submit" value="Vérifier">
    </form>

    <div id="resultat"></div>

    <script>
        document.getElementById("zoroEnigmeForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Empêcher le rechargement de la page
            var reponse = document.getElementById("reponse").value;
            if (reponse.trim().toLowerCase() === "shimotsuki kôshirô") {
                document.getElementById("resultat").innerHTML = "Bonne réponse ! La récompense est : 0";
            } else {
                document.getElementById("resultat").innerHTML = "Désolé, mauvaise réponse. Veuillez réessayer.";
            }
        });
    </script>

</body>
</html>
