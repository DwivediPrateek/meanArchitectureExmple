'use strict';

var meanArchiFactories=angular.module('meanArchiFactories',[]);

meanArchiFactories.factory('createProfileFactory',['$http','serverURL',function($http,serverURL){
	
    return{
        createUser	:function(userObjuserObj){
		var url='/createUserProfile';
		return $http.post(url,userObjuserObj);
	}
    }
    
}]);	