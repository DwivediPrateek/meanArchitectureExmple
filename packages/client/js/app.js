'use strict';

var meanArchiModule=angular.module('meanArchi',['ngMaterial','ui.router','meanArchiControllers','meanArchiFactories']);


meanArchiModule.config(function($stateProvider, $urlRouterProvider){
    
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
    .state('home',{
        url:'/home',
        templateUrl:'partials/home.html',
        controller:'createNewPhoneController'       
    })
    
    .state('crud',{
        url:'/crud',
        templateUrl:'partials/crudDemo.html',
        controller:'createProfileController'
    })
    .state('createNewPhone',{
        url:'/createNewPhone',
        templateUrl:'partials/createNewPhone.html',
        controller:'createNewPhoneController'
    })

});

meanArchiModule.service('serverURL',[function(){
    this.URL='http://localhost:8080/#';
}]);