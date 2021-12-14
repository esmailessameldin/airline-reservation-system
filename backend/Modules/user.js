const mongoose=require('mongoose');
const bcrypt = require('bcrypt');


const schema=mongoose.Schema;
const UserSchema= new schema({
  name:{type:String,unique:true,required:true},
  password:{type:String,required:true},
  firstName:{type:String,required:true},
  lastName:{type:String,required:true},
  address:{type:String,required:true},  
  countrycode:{type:Number,required:true},  
  telephonnumber:{type:Number,required:true},
  passportNumber:{type:Number,unique:true,required:true},
  Email:{type:String,unique:true,required:true},
  flights:{type:[]}
});


UserSchema.pre('save' , async function (next){


  try {
    
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(this.password , salt);
    this.password = hashpassword
    next()

  } catch (error) {
    console.log(error)
    
  }
}
)
module.exports= mongoose.model('Users', UserSchema);