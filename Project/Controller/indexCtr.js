var app = angular.module("MyApp", ['ngRoute']);
app.config(["$routeProvider" , "$locationProvider" , function($routeProvider , $locationProvider){
    $routeProvider.
    when("/home", {
        templateUrl : "views/home.html",
        controller : ""
    }).when("/about", {
        templateUrl : "views/about.html",
        controller : ""
    }).when("/services", {
        templateUrl : "views/services.html",
        controller : ""
    }).when("/contact", {
        templateUrl : "views/contact.html",
        controller : ""
    }).when("/gallery", {
        templateUrl : "views/gallery.html",
        controller : ""
    }).when("/client", {
        templateUrl : "views/client.html",
        controller : ""
    }).otherwise({
        redirectTo:"/home"
    });
}]);

