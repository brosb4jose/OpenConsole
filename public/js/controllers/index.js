'use strict';

angular.module('mean.system').controller('IndexController', ['$scope', '$socket', 'Global', function ($scope,$socket,Global) {
    $scope.global = Global;

    $scope.connect = function() {
    	console.log('tryna connect');
    	$socket.emit('test', {my: 'data'});
    }
}]);