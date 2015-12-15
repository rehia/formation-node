# Chapitre 3

## TripService

L'objectif est d'écrire des tests sur du code existant. Le code ciblé est celui du module TripService.

C'est un réseau social de voyageurs. Pour accéder au réseau social, il faut être logué. Pour voir les voyages d'une personne, il faut faire partie de ses amis.

1. Lancer la commande `npm install chai sinon`
2. Lancer la commande `npm install -g mocha`
3. Lancer les tests avec la commande `mocha ch3/test/` ou `npm test` ou `npm run test:watch`
4. Ecrire les tests nécessaires pour couvrir le code
  * il faudra probablement utiliser des astuces et du refactoring pour rendre le code testable unitairement.
  * pour en savoir plus sur les assertions chaijs.com/api/assert/ ou http://chaijs.com/api/bdd/
  * vous aurez probablement besoin de spy avec sinon http://sinonjs.org/docs/#spies et d'assertions sur les spy http://chaijs.com/plugins/sinon-chai

