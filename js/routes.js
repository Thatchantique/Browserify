/**
 * On définit 2 pages à partir de controllers differents
 */
/*angular.module("App").config(["$routeProvider",function($routeProvider) {
 $routeProvider.when('/page1', {
 controller: 'AppController',
 templateUrl: 'templates/main.html'
 }).when('/page2', {
 controller: 'App2Controller',
 templateUrl: 'templates/main.html'
 }).otherwise({
 redirectTo: '/page1'
 });
 }]);
 */
module.exports = function ($routeProvider) {
    $routeProvider.when('/page1', {
        controller: 'App1Controller',
        templateUrl: 'templates/main.html'
    }).when('/page2', {
        controller: 'App2Controller',
        templateUrl: 'templates/main.html'
    }).otherwise({
        redirectTo: '/page1'
    });
};