const router = require("express").Router();
let admin = require("../modules/admin.js");
let flight = require("../Modules/flight.js");
const mongoose = require("mongoose");
router.route("/add").post((req, res) => {
  const u = new admin({
    name: req.body.name,
    password: req.body.password,
  });
  u.save()
    .then(() => res.json("admin added!"))
    .catch((err) => res.status(400).json("Error: " + err));
  console.log(u);
});
router.route("/signin").post(async (req, res) => {
  let status = "";

  admin
    .findOne({ name: req.body.username })
    .then((user) => {
      if (!user) {
        status = "user does not exist please try again";
        res.send(status);
      } else {
        const l = req.body.password;
        flag2 = l.localeCompare(user.password);
        if (flag2) {
          status = "wrong password";
          res.send(status);
        } else {
          console.log(user);
          return res.send(user.id + "" + status);
        }
      }
    })
    .catch((err) => console.log(err));
});
router.route("/create-flight").post(async (req, res) => {
  var x = {};
  var economy = {};
  var business = {};
  var y = req.body.flightnumber;
  var firstnumber=req.body.firstnumber;
  var economyNumber =req.body.economy;
  var businessNumber=req.body.business;
  var a = new Array (firstnumber) ;
  var b = new Array (economyNumber) ;
  var c = new Array ( businessNumber) ;

  x["class"] = "first" ;
  economy["class"] = "economy" ;
  business["class"] ="business" ;
  for (var i = 0; i < a.length; ++i)
   {     a[i] = false;
         b[i] = false;
         c[i] = false;
   }
  x["seats"] = a;
  economy["seats"] = b;
  business["seats"] = c ;

  const u = new flight({
    Number: y,
    departureAirport: req.body.departureAirport,
    arrivalAirport: req.body.arrivalAirport,
    departuretime:req.body.departuretime,
    arrivaltime:req.body.arrivaltime,
    numberOfPassengers:0,
    baggageallowance:req.body.baggageallowance,
    tripDuration:req.body.tripDuration,
    price:req.body.price,
  });
  await u.save();
  flight
    .findOneAndUpdate(
      { Number: y },
      {
        $push: { cabin: {$each : [x,economy,business] }  },
      
      },
      { new: true }
    )
    .then(() => res.json("flight added!"))
    .catch((err) => res.status(400).json("Error: " + err));
  console.log(u);
});
router.route("/get-all-flights").get(async (req, res) => {
    const u = await flight.find({});
  res.send(u);
  console.log(u);
});
router.route("/update-flight").post(async (req, res) => {
  const u = await flight.findOneAndUpdate(
    { Number: req.params.number },
    {
      Number: req.body.flightnumber,
      departure: req.body.departure,
      arrival: req.body.arrival,
      date: req.body.date,
      EconomySeats: req.body.EconomySeats,
      BuinessClassSeats: req.body.BuinessClassSeats,
      airport: req.body.airport,
    },
    { new: true }
  );
  res.send("flight updated successfull");
  console.log(u);
});
router.route("/smite-flight").delete(async (req, res) => {
  const u = await flight.findOneAndDelete({ number: req.body.number });
  console.log(u);
  res.send("donzo");
});
router.route("/find-flight").post(async (req, res) => {
  const u = await flight.findOne({
    $or: [
      { departure: req.body.departure },
      { arrival: req.body.arrival },
      { date: req.body.date },
      { EconomySeats: req.body.EconomySeats },
      { BuinessClassSeats: req.body.BuinessClassSeats },
      { airport: req.body.airport },
    ],
  });

  res.send(u);
  console.log(u);
});
router.route("/find-returnflight").post(async (req, res) => {
  var dep = req.body.depairport
  var arr = req.body.arr
  const u = await flight.find({departureAirport: arr , arrivalAirport: dep})
    res.send(u);
    console.log(u);
  });
module.exports = router;
