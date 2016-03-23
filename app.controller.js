angular
 .module('addlibs')
 .controller('homeController', function($rootScope,$scope,$location){
   $scope.go = function(path,user){
    $rootScope.user = user;
    $location.path(path);
   };
 })
 .controller('lib1Controller', function($scope,$rootScope){
   console.log("TEST");
   $scope.name = $rootScope.user.name;//
   $scope.age = $rootScope.user.age;//
   $scope.holiday = $rootScope.user.holiday;//
   $scope.action = $rootScope.user.action;//
   $scope.person = $rootScope.user.person;//
   $scope.person2 = $rootScope.user.person2;//
   $scope.clothing = $rootScope.user.clothing;//
   $scope.greeting = $rootScope.user.greeting;//
   $scope.objects = $rootScope.user.objects;//
   $scope.activity = $rootScope.user.activity;//
   $scope.explicative = $rootScope.user.explicative;//
   $scope.location = $rootScope.user.location;//
   $scope.object2 = $rootScope.user.object2;//
   $scope.insult = $rootScope.user.insult;//
   $scope.object3 = $rootScope.user.object3;//
   $scope.bodypart = $rootScope.user.bodypart;//
   $scope.transportation =$rootScope.user.transportation;//
   $scope.person3 = $rootScope.user.person3;//
   $scope.wrestle = $rootScope.user.wrestle;
 });
