'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'views/index.html',
            controller: 'IndexController'
        }).
		when('/gR/:number', {
            templateUrl: 'views/controller/registration.html',
            controller: 'RegistrationController'
        }).
        when('/gR/:number/tube', {
            templateUrl: 'views/tube/gameList.html',
            controller: 'GameListController'
        }).
        when('/gR/:number/player/:playerID', {
            templateUrl: 'views/controller/vote.html',
            controller: 'VoteController'
        }).
        //  /gR/:number/game/:gameID/tube
        //  /gR/:number/game/:gameID/player/:playerID"
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