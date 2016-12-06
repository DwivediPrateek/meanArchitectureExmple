var userModel=require('../../models/users/userModel.js');
var dbConf=require('../../constants/dbConfig');

var errorMsgs=require('../../constants/errorMsg');


var userCntrlObj={};
userCntrlObj.createUserProfileCtrl=function(request,response){ 
    if(request.body)
    {  
        var newUserObj=new userModel(request.body);              
        newUserObj.save(function(error,newUserObjAfterSave){
            if(error)
            {
                console.log('error is '+error);
                dbConf.closeConnection();
                response.json(errorMsgs.CREATE_USER_SAVE_ERROR);
            }
            else if(newUserObjAfterSave)
            {
                console.log('succ');
                dbConf.closeConnection();
                response.json(newUserObjAfterSave);
            }
        });
    }
    else
    {
        response.json(errorMsgs.NO_DATA_RECEIVED_FOR_CREATE);
    }
};

module.exports=userCntrlObj;