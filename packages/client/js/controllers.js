  'use strict';

    var phoneMartControllers=angular.module('phoneMartControllers',[]);

    phoneMartControllers.controller('mainController',['$scope',function($scope){}]);
    phoneMartControllers.controller('navListCntrl',['$scope','$mdSidenav','navList','$http',function($scope,$mdSidenav,navList,$http){
       navList.getData(function(navList){
           
           console.log('navList received from json file..'+navList);
           $scope.navList=navList;           
       });

            
    }]);

    phoneMartControllers.controller('homeController',['$scope','$http','searchedPhoneService',function($scope,$http,searchedPhoneService){        
        console.log('calling REST service from Home..');
        $http.get('/home').success(function(phoneList){
            console.log('Success from REST Service...');
            $scope.phoneList=phoneList;            
            $scope.searchedPhone=searchedPhoneService.getSearchString();
            
        })
        .error(function(errorFromServer){
            console.log('Error from REST Service...');
            if(errorFromServer)
            $scope.errorMessage=errorFromServer;
        });
        console.log('Call to REST Service from Home completed...');
    }]);

    phoneMartControllers.controller('topRatedController',['$scope','$http',function($scope,$http){
        $http.get('/topRatedController').success(function(topRatedPhoneList){
            $scope.topRatedPhoneList=topRatedPhoneList;
        })
         .error(function(errorFromServer){
            if(errorFromServer)
            $scope.errorMessage=errorFromServer;
        });
    }]);

   

    phoneMartControllers.controller('crudController',['$scope','$http',function($scope,$http){
        (function(){
            console.log('Rest Call for getting Lsit of Contacts on page load');
                $http.get('/getContactList').success(function(contactList){		
                console.log('Rest Call for getting Lsit success on page load');
                $scope.contactList=contactList;
            }).error(function(error){
                    console.log('Rest Call for getting Lsit of got an error on page load...'+error);
                });
        })();

        $scope.showContact=function(){
                console.log('Rest Call for getting Lsit of Contacts');
                $http.get('/getContactList').success(function(contactList){		
                console.log('Rest Call for getting Lsit success');
                $scope.contactList=contactList;
            }).error(function(error){
                    console.log('Rest Call for getting Lsit of got an error...'+error);
                });
        }	;

        $scope.addContact=function(){		
                if($scope.contact==null|| $scope.contact=="")
                    alert("enter some data plzzzz  !!!!");
                else
                {
                    console.log('Rest Call for adding data to DB....');			
                    $http.post('/postContactData',$scope.contact).success(function(updatedData){	
                        console.log('Rest Call for adding data to DB success');			
                        $scope.contactList=updatedData;
                        $scope.contact="";
                    }).error(function(error){
                        console.log('Rest Call for adding data to DB got an error...'+error);			
                })
                }
                             
            };

        $scope.deleteContact=function(deleteContactID){	
                        console.log('Rest Call for deleteing contact from DB ');			
            $http.delete('/deleteThisContact/'+ deleteContactID).success(function(updatedContactList){
                console.log('Rest Call for deleteing contact from DB sucess.. ');			
                $scope.contactList=updatedContactList;})
            .error(function(error){
                console.log('Rest Call for deleteing contact from DB got an error... +error');			
            });		
        };	

        $scope.editContact=function(editThisContactID){	
            console.log('Rest Call for editing contact ');			
            $http.get('/editThisContactID/'+editThisContactID).success(function(contactToBeEdited){
                console.log('Rest Call for editing contact sucess...');			
                $scope.contact=contactToBeEdited;
            })
            .error(function(error){
                console.log('Rest Call for editing contact got an error..');			
            })
        };

        $scope.updateContact=function(IdofContactToBeUpdated){
            debugger;
            console.log('Rest Call for updating contact ');			
            $http.put('/updatedContact/'+IdofContactToBeUpdated,$scope.contact).success(function(updatedData){
                console.log('Rest Call for updating contact sucess');			
                $scope.contactList=updatedData;
                $scope.contact='';
            })
            .error(function(error){
                console.log('Rest Call for updating contact error....');			
            });
        };

        }]);