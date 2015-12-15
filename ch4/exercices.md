# Chapitre 4

## Code asynchrone

L'objectif est de comprendre dans quel ordre s'exécute le code lorsqu'il est exécuté en asynchrone.

1. Lancer la commande `./ch4/check.js -s ch4/tryit.js` et suivre les instructions dans le fichier `tryit.js`
2. Faire la même chose pour les fichiers `first.js` et `second.js`
3. Vous pouvez faire les fichiers `third.js` et `fourth.js` s'il vous reste du temps

## Promesses

1. Lancer la commande `node ch4/promise.js` et regarder les erreurs
2. Coder ce qui est nécessaire pour faire passer la 1ère partie, puis la seconde

## Tests asynchrones

1. Lancer la commande `npm install chai-as-promised`
2. Lancer la commande `mocha ch4/test -w`
3. Regarder les erreurs et coder les tests
  * le premier test nécessite un callback
  * les autres font appel aux promesses. astuce : mocha sait gérer les promesses :)

