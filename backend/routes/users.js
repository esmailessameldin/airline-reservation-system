const router = require('express').Router();
let user = require('../Modules/user.js');
let flight = require("../Modules/flight.js");
let booking = require("../Modules/booking");
const mongoose = require('mongoose');
router.route('/add').post((req, res) => {
    const u = new user({
        name: req.body.name,
        password:req.body.password,
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
      var seatnumber = req.body.seat ;
      var seatclass = seatnumber.split(" ");
     var username = req.body.username ;
     var flightnum = req.body.flightnum ;
     var returnf = req.body.returnf ;
     var randomnumber=Math.floor(Math.random() * 1000001);
     var x = {} 

    if(returnf){
        returnf = "return flight";
    }
    else
    {
        returnf = "departure flight"
    }
    x["flightType"] = returnf 
     if(seatclass[0]=0)
     {
         x["seat"] = "A" + seatclass[1];
     } if(seatclass[0]=1)
     {
         x["seat"] = "B" + seatclass[1] ;
     }
     if(seatclass[0] = 2)
     {
         x["seat"] = "C" + seatclass[1];
     }
     const l=await flight.findOneAndUpdate({Number:flightnum},{"$inc": { "numberOfPassengers": +1 },$set:{["cabin."+seatclass[0]+".seats."+seatclass[1]]:true}},{new:true})

      userflight = await flight.findOne({Number : flightnum}) ; 
     console.log(userflight)
      x["flight"] = userflight ;
      console.log(x)
   const c = await  user.findOneAndUpdate(
        { name: username },
        {
          $push: { flights: x  },   
        },
        { new: true }
      )

      const book = new booking ({
        username : username ,
        bookingnumber : randomnumber
      })

   await   book.save()

    await  booking.findOneAndUpdate({ bookingnumber : randomnumber}, {  $push: { flight: userflight }} , {new:true})
    .then(() => res.json('flight added!'))
    .catch(err => res.status(400).json('Error: ' + err)); 
    console.log(userflight);
});

router.route("/find-all-user").get(async (req, res) => {
    const u = await user.find({})
    res.send(u);
    console.log(u);
  });

router.route("/find-user").post(async (req, res) => {
    const u = await user.findOne({name : req.body.username})
    res.send(u);
    console.log(u);
  });



  
module.exports = router;