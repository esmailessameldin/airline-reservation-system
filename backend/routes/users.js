const router = require('express').Router();
const user = require('../Modules/user.js');
const flight = require("../Modules/flight.js");
const bookings = require("../Modules/booking");
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');


router.route('/user-cancel-reserved-flights').post(async (req, res) => {
  
var logged=req.body.username
var booking=req.body.booking
var seat=''
var seat2=''
var flightnum=req.body.flightNumber
const k=await bookings.findOne({bookingnumber:booking})


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
        to: k.Email,
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
router.route("/update-user").post(async (req, res) => {
  const u = await flight.findOneAndUpdate(
    {
      
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        passportNumber:req.body.passportNumber,
        Email:req.body.Email,
    },
    { new: true }
  );
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
        });
  u .save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err)); 
    console.log(u)
});
router.route('/signin').post(async(req,res)=>{
    let status=""

    user.findOne({name:req.body.username}).then(user=>{
        if(!user){
           status="user does not exist please try again"
           res.send(status)
        }else{
            const l= req.body.password;
            flag2 = l.localeCompare(user.password);
            if(flag2){
             status="wrong password"
             res.send(status)
            }else{
                console.log(user)
               return res.send(user.id+""+status)
            }
        }
    }).catch(err=>console.log(err));
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
    const t = await booking.find({})
    res.send(t);
    console.log(t);
  });


router.route("/find-user").post(async (req, res) => {
    const u = await user.findOne({name : req.body.user})
    
    res.send(u);
    console.log(u);
  });



  
module.exports = router;