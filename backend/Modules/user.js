const mongoose=require('mongoose');
const schema=mongoose.Schema;
const UserSchema= new schema({
  name:{type:String,unique:true,required:true},
  password:{type:String,required:true},
  firstName:{type:String,},
  lastName:{type:String,},
  passportNumber:{type:Number,unique:true,},
  Email:{type:String,unique:true,},
  flights:{type:[]}
});

module.exports= mongoose.model('Users', UserSchema);