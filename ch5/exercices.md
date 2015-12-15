# Chapitre 5

## EventEmitter

L'objectif est de coder un event emitter, puis de s'abonner aux événements

1. Lancer la commande `node ch5/eventemitter.js` et voir le déroulement : vous devez reproduire la même chose avec du publish/subscribe
2. Ouvrir `randomizer.js` et commenter les console.log dans les fonctions tweet, error, end
3. Utiliser la classe EventEmitter de Node, lever les événements correspondants, puis écouter les événements dans le fichier eventemitter.js
  * loguer les événements tweet et error (les données sont transmises avec l'événement)
  * arrêter le process proprement lors de l'événement end; auparavant, désabonner tous les listeners de l'event emitter
  * conseil : faites un événement après l'autre

## Streams

Les streams seront vus au chapitre 6, avec les modules core