'use strict';

var meanArchiControllers=angular.module('meanArchiControllers',[]);

meanArchiControllers.controller('createProfileController',['$scope','createProfileFactory',
	function($scope,createProfileFactory){
        $scope.data='hi';
	$scope.user={};
	$scope.saveUser=function(user){
		createProfileFactory.createUser(user)
		.success(function(response){
			if(response)
				$scope.resposeMessage=response;
		})
		.error(function(error){
			if(error)
		$scope.resposeMessage=error;	
		});
	};
}]);


