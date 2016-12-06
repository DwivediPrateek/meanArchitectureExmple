var dbConf=require('../../constants/dbConfig');
 var db=dbConf.createLocalConnection();
var Schema = db.Schema;

var userSchema = new Schema({
  username: { type: String, required: true, unique: true ,index: true},
  password: { type: String, required: true },    
  firstName: { type: String, required: true},
  middleName:{ type: String, required: false},
  lastName: { type: String, required: true},
  sex:{ type: String, required: false},
  dateOfBirth:Date,
  panCard:{ type: String, required: false},
  email:{type:String,index: true,required: true},
  isAdmin: Boolean,
  address:{
    present:{
      flatNumber:{ type: String, required: true},
      societyName: {type: String, required: true},
      city:{ type: String, required: true},
      zipCode:{ type: Number, required: true},
      state:{ type: String, required: true},
      country:{ type: String, required: true}
    },
    permanent:{
      flatNumber:{ type: String, required: true},
      societyName: {type: String, required: true},
      city:{ type: String, required: true},
      zipCode:{ type: Number, required: true},
      state:{ type: String, required: true},
      country:{ type: String, required: true}
    }
  },
  createdDate: Date,
  updatedDate: Date
});


var userModel = db.model('User', userSchema);


module.exports = userModel;