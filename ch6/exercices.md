# Chapitre 6

## Serveur http

L'objectif est de coder un petit serveur http

1. Ouvrez le fichier `server.js
2. Coder le serveur
  * Commencer simplement par Hello World
  * Lisez bien les consignes dans les commentaires du fichier !!
  * Continuez par l'image et le json (attention aux content-type), en tenant compte de la requête
  * Le module url peut aider à interpréter la partie de l'url qui vous intéresse

## Streams

L'objectif est de chiffrer puis de zipper un fichier en streaming, en utilisant les modules de base de Node. Vous partiez du fichier tweets.json.

1. Ouvrez zip.js
2. Commencez par initialiser les 2 variables déclarées avec les chemins vers le fichiers correspondants, en utilisant path
3. Codez le stream pour
  1. Ouvrir le fichier d'origine (fs)
  2. le chiffrer (crypto)
  3. le zipper (zlib)
  4. écrire le résultat dans un nouveau fichier

## Streams et web

L'objectif est de streamer le fichier tweets.json.gz dans une requête HTTP

1. Ouvrez le fichier json_server.js
2. Codez le stream pour
  1. Ouvrir le fichier zippé
  2. le dézipper
  3. écrire le résultat directement dans la réponse http