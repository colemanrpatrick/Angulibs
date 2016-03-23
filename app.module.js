angular
  .module('addlibs',['ngRoute'])
  .config(function($routeProvider, $locationProvider){
    $routeProvider
    .when('/',{
      templateUrl: "templates/home.html",
      controller: "homeController"
    })
    .when('/lib1',{
      templateUrl: "templates/lib1.html",
      controller: "lib1Controller"
    });
  });
