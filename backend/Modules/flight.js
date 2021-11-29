const mongoose = require("mongoose");
const schema = mongoose.Schema;
const FlightSchema = new schema({
  Number: { type: Number, unique: true, required: true },
  departureAirport: { type: String, required: true },
  arrivalAirport: { type: String, required: true },
  departuretime : { type: String, required: true },
  arrivaltime: { type: String, required: true },
  numberOfPassengers : {type : Number , required: true},
  baggageallowance : {type : Number , required: true},
  cabin: { type: [] },
  tripDuration : { type: String, required: true },
  price: {type : Number , required: true},
});

module.exports = mongoose.model("Flights", FlightSchema);
