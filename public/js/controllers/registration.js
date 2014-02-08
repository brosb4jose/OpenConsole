'use strict';

angular.module('mean.system').controller('RegistrationController', ['$scope', '$socket', '$routeParams','$location','Global', function ($scope, $socket, $location, $routeParams, Global) {
    $scope.global = Global;

    // Pull GameRoom from route
    $scope.global.room = $routeParams.room

	// Socket Responses
    $socket.on('getID', function(data){
    	$scope.playerName = data
    	console.log('Player name: ', data)

    	console.log('Routing to new Controller')
    	$location.path('/gR/' + $scope.global.room + '/player/' + $scope.playerName)
    })

    $scope.register = function(){
    	nameInput = $(#name).value()
    	$socket.emit('register', {name: nameInput})
    }
}]);