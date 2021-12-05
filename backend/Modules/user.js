const mongoose=require('mongoose');
const schema=mongoose.Schema;
const UserSchema= new schema({
  name:{type:String,unique:true,required:true},
  password:{type:String,required:true},
  firstName:{type:String,required:true},
  lastName:{type:String,required:true},
  passportNumber:{type:Number,unique:true,required:true},
  Email:{type:String,unique:true,required:true},
  flights:{type:[]}
});

module.exports= mongoose.model('Users', UserSchema);