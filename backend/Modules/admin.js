const mongoose=require('mongoose');
const schema=mongoose.Schema;
const AdminSchema= new schema({
  name:{type:String,unique:true,required:true},
  password:{type:String,required:true},
});

module.exports= mongoose.model('Admins', AdminSchema);