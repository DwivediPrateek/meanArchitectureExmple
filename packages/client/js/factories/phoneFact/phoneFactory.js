'use strict';

var meanArchiFactories=angular.module('meanArchiFactories');

meanArchiFactories.factory('phoneFactory',['$http','serverURL',function($http,serverURL){
	
	return{
		createPhone	: function(phone){
			var url='/createNewPhone';
			return $http.post(url,phone);
		},
		getPhoneList : function(){
			var url='/getPhoneList';
			return $http.get(url);
		}
	}
	
}]);	