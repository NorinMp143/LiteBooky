var myApp = angular.module("myapp",['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl:"team/madan.html",
        controller:"madancontroller"
    })
    .when("/Nikhil",{
        templateUrl:"team/nikhil.html",
        controller:"nikhilcontroller"
    })
    .when("/Ankit",{
        templateUrl:"team/ankit.html",
        controller:"ankitcontroller"
    })
});


myApp.controller("madancontroller", ['$scope', '$log', function($scope, $log){
    $scope.name = "Madan Lal";
    $scope.title = "Full Stack Developer";
    $scope.email = "madanparmar637@gmail.com";
    $scope.facebook = "https://www.facebook.com/NmOaRdIaN";
    $scope.linkedin = "https://www.linkedin.com/in/madan-lal-b078a7151/";
    $scope.google = "https://twitter.com/MadanPa74002488";
    $scope.twitter = "https://twitter.com/MadanPa74002488";
    $scope.instagram = "https://www.instagram.com/madan143.2399/";
}]);

myApp.controller("ankitcontroller",["$scope", '$log', function($scope, $log){
    $scope.name = "Ankit Jaiswal";
    $scope.title = "Front End Developer";
    $scope.email = "ankit@gmail.com";
    $scope.facebook = "https://www.facebook.com/profile.php?id=100008184482119";
    $scope.linkedin = "https://www.linkedin.com/in/ankit-jaiswal-192623159/";
    $scope.google = "https://twitter.com/MadanPa74002488";
    $scope.twitter = "https://twitter.com/MadanPa74002488";
    $scope.instagram = "https://www.instagram.com/madan143.2399/";
}]);

myApp.controller("nikhilcontroller",["$scope", '$log', function($scope, $log){
    $scope.name = "Nikhil";
    $scope.title = "Front End Developer";
    $scope.email = "nikhil@gmail.com";
    $scope.facebook = "https://www.facebook.com/profile.php?id=100006869595730";
    $scope.linkedin = "https://www.linkedin.com/in/nikhil-chakilam-cse/";
    $scope.google = "https://twitter.com/MadanPa74002488";
    $scope.twitter = "https://twitter.com/MadanPa74002488";
    $scope.instagram = "https://www.instagram.com/madan143.2399/";
}]);