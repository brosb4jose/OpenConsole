'use strict';

angular.module('mean.system').controller('GameListController', ['$scope', '$socket', '$location', 'Global', function ($scope,$socket,$location,Global) {
    $scope.global = Global;

 	// Socket Responses
    $socket.on('test', function(data){

    })

    // Socket Commands
    $scope.test = function(){
    }
}]);