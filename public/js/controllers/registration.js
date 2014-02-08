'use strict';

angular.module('mean.system').controller('RegistrationController', ['$scope', '$socket', '$routeParams','$route','$location','Global', function ($scope, $socket, $location, $route, $routeParams, Global) {
    $scope.global = Global;


    console.log($routeParams)
    // Pull GameRoom from route
    //$scope.global.room = $routeParams.roomID

	// Socket Responses
    $socket.on('getID', function(data){
    	$scope.playerName = data
    	console.log('Player name: ', data)

    	console.log('Routing to new Controller')
        console.log('/gR/' + $scope.global.room + '/player/' + $scope.playerName)
    	//$location.path('/gR/' + $scope.global.room + '/player/' + $scope.playerName)
    })

    $scope.register = function(){
    	var nameInput = $scope.name
    	$socket.emit('register', {name: nameInput})
    }
}]);