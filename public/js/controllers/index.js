'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', '$socket', '$location', 'Global', function ($scope,$socket,$location,Global) {
    $scope.global = Global;

 	// Socket Responses
    $socket.on('getRoom', function(data){
    	$scope.global.room = data.room
    	$location.path('/gR/' + data.room)
    })

    // Socket Commands
    $scope.startGameRoom = function(){
    	$socket.emit('startRoom')
    }
}]);