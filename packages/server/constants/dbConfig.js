var mongoose=require('mongoose');


var dbConf={};

dbConf.LOCAL_DB_URL='mongodb://localhost:27017/resumeDemo';


dbConf.createLocalConnection=function(){
	console.log('in config');
	if(mongoose.connection.readyState)
		{
			console.log('connection exist ');
			return mongoose.connection; 
		}

	else
	{
		console.log('creating conection');
		//mongoose.Promise = global.Promise;
		return mongoose.connect(dbConf.LOCAL_DB_URL); 	
	}	
};

dbConf.closeConnection=function(){
	if(mongoose.connection.readyState)
		mongoose.connection.close();

	console.log('closing conection');
};

module.exports=dbConf;