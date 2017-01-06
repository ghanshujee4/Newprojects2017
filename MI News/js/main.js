'use strict';
var app = angular.module('App', []);
app.controller('MyController', function ($scope) {
    debugger
    $scope.name = "Ghnahsyam jha";
    $scope.gallery = "Our Gallery";
    //debugger;    //$scope.img1 = "images/g2.jpg";
    //$scope.name = 'abc';
    //debugger;
    
    $scope.slides = [
        {
            image: 'g2.jpg'
        },
        {
            image: 'g4.jpg'

        },
        {
        image: 'g5.jpg'
    },
    {
    image: 'g6.jpg'
    }, {
        image: 'g1.jpg'
    },
    {
        image: 'g3.jpg'
    }
    ];
});



//app.config(['$routeProvider',
//function($routeProvider) {
//    debugger;
//    $routeProvider
//    .when("/", {
//        templateUrl: "index.html",
//        controller: 'AddOrderController'
//    })
//    .when("/about", {
//        templateUrl: "About.html"
//    })
//    .when("/services", {
//        templateUrl: "Services.html"
//    })
//    .when("/blue", {
//        templateUrl: "Gallery.htm"
//    });
//}]);


