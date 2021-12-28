const router = require('express').Router();
const user = require('../Modules/user.js');
const flight = require("../Modules/flight.js");
const bookings = require("../Modules/booking");
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> parent of ba10554 (merge)





>>>>>>> parent of ba10554 (merge)


router.route('/user-cancel-reserved-flights').post(async (req, res) => {
  
var logged=req.body.username
var booking=req.body.booking
var seat=''
var seat2=''
var flightnum=req.body.flightNumber
const k=await bookings.findOne({bookingnumber:booking})

const nono=await user.findOne({name:k.username})
const bookingflights = k.flight 
console.log(bookingflights)
seat = bookingflights[0].seat
seat2 = bookingflights[1].seat

const bye =await bookings.findOneAndDelete({bookingnumber:booking})

var seatclass=seat.split("")
if(seatclass[0]=="A")
{
  seatclass[0]=0 ;
} if(seatclass[0]=="B")
{
  seatclass[0]=1 ;
}
if(seatclass[0] == "C")
{
  seatclass[0]=2;
}

var seatclass2=seat2.split("")
if(seatclass2[0]=="A")
{
  seatclass2[0]=0 ;
} if(seatclass2[0]=="B")
{
  seatclass2[0]=1 ;
}
if(seatclass2[0] == "C")
{
  seatclass2[0]=2;
}

const y=await flight.findOneAndUpdate({Number:bookingflights[0].flight.Number},{"$inc": { "numberOfPassengers": -1 },$set:{["cabin."+seatclass[0]+".seats."+seatclass[1]]:false}},{new:true})

const frawla=await flight.findOneAndUpdate({Number:bookingflights[1].flight.Number},{"$inc": { "numberOfPassengers": -1 },$set:{["cabin."+seatclass2[0]+".seats."+seatclass2[1]]:false}},{new:true})

  const l=await user.updateMany({name:logged},{$pull:{flights:{Bookingnumber:booking}}},{new:true})
var flightNumber= booking
var flightPrice=y.price + frawla.price
var email =k.email
    console.log(l)
    res.send("Reservation cancelled");
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'airlinereservationguc@gmail.com',
          pass: '@@@123456789'
        }
      });
      
      const mailOptions = {
        from: 'airlinereservationguc@gmail.com',
        to: nono.Email,
        subject: 'Cancelled Reseravtion',
        text: 'Dear Client, you recently cancelled your trip with booking number  ' +flightNumber+'  and the amount refundable is  '+flightPrice+" egp"
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
 
  });
router.route("/get-password").post(async (req,res)=>{
await user.findOne(
  {name:req.body.name}

).then(
  (res2)=>{if(!res2) return res.status(404).send("verybad") ;
  else{
const hardpass=req.body.password
if(!hardpass.localeCompare(res2.password)) return res.status(200).send("verygood") ;else{
  return res.status(400).send("verybad")
}


  } }
)})
router.route("/change-password").post(async(req,res)=>{
  const cp =await user.findOneAndUpdate(
    {name:req.body.name},{password:req.body.password}
  )
return res.status(200).send("password changed successfully very nice")
})
router.route("/update-user").post(async (req, res) => {
  const u = await user.findOneAndUpdate(
    {name:req.body.name},
    {    firstName:req.body.firstName,
        lastName:req.body.lastName,
        passportNumber:req.body.passportNumber,
        address:req.body.address,  
        countrycode:req.body.countrycode,  
        telephonnumber:req.body.telephonnumber,
        Email:req.body.Email,
    },
    { new: true }
  );
  if(u)
  res.send("User data updated successfull");
  console.log(u);
});
router.route('/add').post((req, res) => {
    const u = new user({
        name: req.body.name,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        passportNumber:req.body.passportNumber,
        Email:req.body.Email,
        address:req.body.address,  
        countrycode:req.body.countrycode,  
        telephonnumber:req.body.telephonnumber,
        });
  u .save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err)); 
    console.log(u)
});
router.route('/signin').post(async (req,res)=>{
    let status=""
    const l=  req.body.password;

    const u = await user.find({name:req.body.username}).catch(err=>console.log(err));
    if (u.length === 0)
    {
      return res.status(404).send("cannot find user")
    }


      try {
        console.log(u)
        console.log(u[0].password)
        if (await bcrypt.compare(l , u[0].password))
        {
          console.log(u)
          res.send(u[0].id+""+status)
        }
        else {
          console.log(u)
          res.send("wrong password")
        }
      } catch (error) {
        res.status(500).send(error + "")
      }
 
  
    
   

 

})
router.route('/:id').get((req, res) => {
    var x=req.params.id
    
    console.log(x)
       user.findOne({id:x})
      .then(user => res.json(user))
      .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/user-add-flight').post(async(req, res) => {
  console.log(this.body)
      var depseatnumber = req.body.depseat ;
      var depseatclass = depseatnumber.split(" ");
     var username = req.body.username ;
     var depflightnum = req.body.depflightnum ;
     var departureflight = req.body.departureflight ;


     var retseatnumber = req.body.retseat ;
     var retseatclass = retseatnumber.split(" ");
    var retflightnum = req.body.retflightnum ;
    var retflight = req.body.retflight ;

     console.log(depseatnumber)
     var y ={}
     var randomnumber=Math.floor(Math.random() * 1000001);
     var x = {} 
             x["Bookingnumber"]=randomnumber
             y["Bookingnumber"]=randomnumber
  
    x["flightType"] = departureflight 

    
     if(depseatclass[0]==0)
     {
         x["seat"] = "A" + depseatclass[1];
     } if(depseatclass[0]==1)
     {
         x["seat"] = "B" + depseatclass[1] ;
     }
     if(depseatclass[0] == 2)
     {
         x["seat"] = "C" + depseatclass[1];
     }

     y["flightType"] = retflight; 
    
 
     if(retseatclass[0]==0)
     {
         y["seat"] = "A" + retseatclass[1];
     } if(retseatclass[0]==1)
     {
         y["seat"] = "B" + retseatclass[1] ;
     }
     if(retseatclass[0] == 2)
     {
         y["seat"] = "C" + retseatclass[1];
     }

     const l=await flight.findOneAndUpdate({Number:depflightnum},{"$inc": { "numberOfPassengers": +1 },$set:{["cabin."+depseatclass[0]+".seats."+depseatclass[1]]:true}},{new:true})
     const l1=await flight.findOneAndUpdate({Number:retflightnum},{"$inc": { "numberOfPassengers": +1 },$set:{["cabin."+retseatclass[0]+".seats."+retseatclass[1]]:true}},{new:true})
      userdepflight = await flight.findOne({Number : depflightnum}) ; 
      userretflight = await flight.findOne({Number : retflightnum}) ; 
  
      x["flight"] = userdepflight ;
      y["flight"] = userretflight ;
   
   const c = await  user.findOneAndUpdate(
        { name: username },
        {
          $push:   {flights: {$each: [x,y]}   },   
        },
        { new: true }
      )

    const book = await new bookings ({
        username : username ,
        bookingnumber : randomnumber
      })

   await  book.save() 
   console.log(book)
   console.log(x)
   console.log(y)
console.log(this.body)
    await  bookings.findOneAndUpdate({ bookingnumber : randomnumber}, {  $push: { flight: {$each: [x,y] }}  } , {new:true})
    .then(() => res.json('flight added!'))
    .catch(err => res.status(400).json('Error: ' + err))
 
})
router.route("/find-all-user").get(async (req, res) => {
    const u = await user.find({})
    res.send(u);
    console.log(u);
  });
 router.route("/find-all-booking").post(async (req, res) => {
    const t = await bookings.find({})
    res.send(t);
    console.log(t);
  });
router.route("/find-user").post(async (req, res) => {
    const u = await user.findOne({name : req.body.user})
    
    res.send(u);
    console.log(u);
  });
  router.route("/change-password").post(async (req, res) => {
    const u = await user.find({})
    
    res.send(u);
    console.log(u);
  });
router.route("/edit-seat").post(async(req,res)=>{
  var oldseat=req.body.oldseat
  var index=req.body.index
  var olseat = oldseat.split("");
  var retseatnumber = req.body.retseat ;
  var retseatclass = retseatnumber.split(" ");
  var retflightnum = req.body.retflightnum ;
  var newseat=''

  const l2=await flight.findOneAndUpdate({Number:retflightnum},{$set:{["cabin."+retseatclass[0]+".seats."+retseatclass[1]]:true}},{new:true})
 
  if(olseat[0]=="A")
{
  olseat[0]=0 ;
} if(olseat[0]=="B")
{
  olseat[0]=1 ;
}
if(olseat[0] == "C")
{
  olseat[0]=2;
}
  if(retseatclass[0]==0)
     {
       newseat = "A" + retseatclass[1];
     } if(retseatclass[0]==1)
     {
      newseat = "B" + retseatclass[1] ;
     }
     if(retseatclass[0] == 2)
     {
      newseat = "C" + retseatclass[1];
     }



const l1=await flight.findOneAndUpdate({Number:retflightnum},{$set:{["cabin."+olseat[0]+".seats."+olseat[1]]:false}},{new:true})
l1.save()

var usernames=req.body.username
const test =await flight.findOne({Number:retflightnum})
const u =await user.findOneAndUpdate({name:usernames},{$set:{["flights."+index+".seat"]:newseat,["flights."+index+".flight"]:test}},{new:true})

res.send("Seat changed")

})

module.exports = router;