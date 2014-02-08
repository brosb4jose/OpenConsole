'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', '$socket', 'Global', function ($scope,$socket,Global) {
    $scope.global = Global;

    $socket.on('getID', function(data){
    	console.log('Player name: ', data)
    })

    $scope.connect = function() {
    	console.log('tryna connect');
    	console.log
    	$socket.emit('test', {my: 'data'});
    }

    $scope.setName = function(){
    	$socket.emit('setName', {name: 'Jose Contreras'})
    }
}]);