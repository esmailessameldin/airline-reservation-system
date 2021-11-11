const mongoose=require('mongoose');
const schema=mongoose.Schema;
const FlightSchema= new schema({
  Number:{type:Number,unique:true,required:true},
  departure:{type:String,required:true},
  arrival:{type:String,required:true},
  date:{type:String,required:true},
  EconomySeats:{type:Number,required:true},
  BuinessClassSeats:{type:Number,required:true},
  airport:{type:String,required:true},
});

module.exports= mongoose.model('Flights', FlightSchema);