'use strict';

var app = angular
    .module('afterYouEmsApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'reCAPTCHA',
        'ui.router'
    ])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

/**.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('main', {
                url: "/",
                templateUrl: "view/main.html",
                controller: "MainCtrl"
            })
            .state('login', {
                url: "/login",
                templateUrl: "view/login.html",
                controller: "LoginCtrl"
            })
    });**/


