# Cours - Browserify
## Qu'est ce que Browserify
Browserify est une bibliothèque javascript s'utilisant en ligne de commande.
Elle permet le découpage d'une application en module.
Pour se faire elle crée qu'un seul point d'entrée en façade (__bundle.js__).
Elle facilite par la même occasion le référencement en annexes.

### Sans Browserify
Intégration dans le fichier .html :
```
    <script src="js/app2.js"></script>
    <script src="js/controller2.js"></script>
    <script src="js/app.js"></script>
    <script src="js/controller1.js"></script>
    <script src="js/directives.js"></script>
    <script src="js/routes.js"></script>
```


### Avec Browserify
Phase de réfraction de code :
> _app.js_
```
angular.module("App", ['ngRoute',require("./app2")]);
angular.module("App").controller("App1Controller", ["$scope",require("./controller1")]);
angular.module("App").directive("dirClient",require("./directives"));
angular.module("App").config(["$routeProvider",require("./routes")]);
```
> Les autres modules doivent être exportés :
```
module.exports=angular.module("App2").name;
```

Intégration dans le fichier .html :
```
    <script src="js/bundle.js"></script>
```

## Alternative
WebPack est une alternative à Browserify pour Angular-cli.
Il supporte les différents systèmes de modules (__CommonJS, AMD, ES2015, ...__).
Il construit un graphe des dépendances et se configure via le fichier : __webpack.config.js__.
