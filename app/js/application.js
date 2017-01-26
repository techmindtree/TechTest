/*================================================================
App anupweb
==================================================================*/
'use strict';

var app = angular.module('anupweb', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    	.when('', {
            controller: '',
            templateUrl: ''
    	})

    	.otherwise({ redirectTo: '/' });
}]);
