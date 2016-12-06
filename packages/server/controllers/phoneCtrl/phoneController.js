var phoneModel=require('../../models/phones/phoneModel.js');
var dbConf=require('../../constants/dbConfig');

var errorMsgs=require('../../constants/errorMsg');


var phoneCntrlObj={};
phoneCntrlObj.createNewPhone=function(request,response){ 
    if(request.body)
    {  
        var newPhoneObj=new phoneModel(request.body);              
        newPhoneObj.save(function(error,newPhoneObjAfterSave){
            if(error)
            {
                console.log('error in creating new phone '+error);
                dbConf.closeConnection();
                response.json(errorMsgs.CREATE_PHONE_SAVE_ERROR);
            }
            else if(newPhoneObjAfterSave)
            {
                console.log('successfully created new phone');
                dbConf.closeConnection();
                response.json(newPhoneObjAfterSave);
            }
        });
    }
    else
    {
        response.json(errorMsgs.NO_DATA_RECEIVED_FOR_CREATE);
    }
};


phoneCntrlObj.getPhoneList=function(request,response){
    console.log('req for phone list');
    phoneModel.find({},function(error,phoneList){
        if(error)
        {
            console.log('error in getting phone list '+error);
            dbConf.closeConnection();
            response.json(errorMsgs.CREATE_PHONE_SAVE_ERROR);
        }
        else if(phoneList)
        {
            console.log('successfully fetched list of phone');
                dbConf.closeConnection();
                response.json(phoneList);
        }

    });
};
module.exports=phoneCntrlObj;