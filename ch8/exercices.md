# Chapitre 8

## Express

L'objectif est de coder un petit serveur express

1. Ouvrez le fichier server.js
2. Utilisez express pour retourner simplement 'Hello World!' lors d'un GET sur /
    * N'oubliez pas de faire écouter express sur un port au choix (dernier commentaire) avant de tester !
    * Pour lancer le serveur, exécutez `node ch8/server.js`
3. Utilisez express pour indiquer que public fournit des ressources statiques
  * testez avec http://localhost:<port>/css/style.css ou http://localhost:<port>/img/logo.png

## Express et Jade

1. Ouvrez le fichier views/hello.jade pour voir le template
2. Codez ce qui est nécessaire dans server.js, pour retourner un HTML généré à partir du template jade, avec express, en y passant des données

## Socket.io

1. Dans le fichier public/chat.html, codez ce qui est nécessaire côté client pour envoyer un événement 'chat message', et s'abonner au message serveur 'chat message'.
2. Dans le fichier server.js, ajouter la route /chat pour retourner le fichier public/chat.html
3. Ensuite, codez ce qu'il faut pour écouter l'événement 'chat message' de chaque socket connecté, et boradcasté le message reçu à tous les autres sockets
  * Pour tester, allez sur http://localhost:<port>/chat, et saisissez un message
  * Testez ensuite avec 2 onglets ouverts