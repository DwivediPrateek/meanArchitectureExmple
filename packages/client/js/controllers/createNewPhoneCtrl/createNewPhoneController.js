'use strict';

var meanArchiControllers=angular.module('meanArchiControllers');

meanArchiControllers.controller('createNewPhoneController',['$scope','phoneFactory',
	function($scope,phoneFactory){    
		phoneFactory.getPhoneList().success(function(response){
				if(response.length>0)
				{
					$scope.phoneList=response;
				}
		}).error(function(error){
				if(error)
					$scope.resposeMessage=error;
		});

		$scope.savePhone=function(phone){
			phoneFactory.createPhone(phone)
			.success(function(response){
				if(response)
					$scope.phone=response;
			})
			.error(function(error){
				if(error)
					$scope.resposeMessage=error;	
			});
		};
	}]);


