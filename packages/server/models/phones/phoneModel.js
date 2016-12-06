var dbConf=require('../../constants/dbConfig');
var db=dbConf.createLocalConnection();
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
 

var phoneSchema = new Schema({  
  name: { type: String, required: true},
  manufactureName:{ type: String, index:true,required: true},
  price: { type: Number, required: true},
  battery:{ type: String, required: true},
  camera:{ type: String, required: true},
  ram:{ type: String, required: true},
  os:{type:String,required: true},
  cpu: {type:String,required: true},
  screenSize: {type:String,required: true}
});


var phoneModel = db.model('Phone', phoneSchema);


module.exports = phoneModel;