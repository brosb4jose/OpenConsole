'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'views/index.html',
            controller: 'IndexController'
        }).
		when('/gR/:roomID', {
            templateUrl: 'views/controller/registration.html',
            controller: 'RegistrationController'
        }).
        when('/gR/:roomID/tube', {
            templateUrl: 'views/tube/gameList.html',
            controller: 'GameListController'
        }).
        when('/gR/:roomID/player/:playerID', {
            templateUrl: 'views/controller/vote.html',
            controller: 'VoteController'
        }).
        when('/gR/:roomID/game/:gameID/tube', {
            templateUrl: 'views/controller/game.html',
            controller: 'GameController'
        }).
        when('/gR/:roomID/game/:gameID/player/:playerID', {
            templateUrl: 'views/controller/pad.html',
            controller: 'PadController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);