//Sets the variable myApp as a Angular applicatation named 'DSI'. The module ui-router is injected as a dependency to provide url routing. 
var myApp = angular.module('SSM', ['ui.router']);

// A .config function is used to provide 'state' and url routing for the app thru the stateProvider (from ui-router).
myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider, $state) {


}]);
