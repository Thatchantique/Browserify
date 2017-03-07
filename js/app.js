/**
 * L'application 1
 * On lui attribue les composants nécessaires
 */
//angular.module("App", ['ngRoute','App2']);
angular.module("App", ['ngRoute',require("./app2")]);
angular.module("App").controller("App1Controller", ["$scope",require("./controller1")]);
angular.module("App").directive("dirClient",require("./directives"));
angular.module("App").config(["$routeProvider",require("./routes")]);