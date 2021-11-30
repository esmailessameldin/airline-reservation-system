const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bookingSchema = new schema({
    username : {type: String} ,
    flight : {type : []},
    bookingnumber : {type:Number,unique:true,required:true},
});


module.exports = mongoose.model("booking", bookingSchema);
