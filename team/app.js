var myApp = angular.module("myapp",['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
    .when("/Madan",{
        templateUrl:"madan.html",
        controller:"madancontroller"
    })
    .when("/Ankit",{
        templateUrl:"ankit.html",
        controller:"ankitcontroller"
    })
});

myApp.controller("madancontroller", ['$scope', '$log', function($scope, $log){
    $scope.name = "Madan Lal";    
}]);

myApp.controller("ankitcontroller",["$scope", '$log', function($scope, $log){
    $scope.name = "Ankit Jaiswal";
}]);