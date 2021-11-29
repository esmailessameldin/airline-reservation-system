const router = require('express').Router();
let user = require('../Modules/user.js');
let flight = require("../Modules/flight.js");
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
     var x = {} 
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
     const l=await flight.findOneAndUpdate({Number:flightnum},{$set:{["cabin."+seatclass[0]+".seats."+seatclass[1]]:true}},{new:true})

      userflight = await flight.findOne({Number : flightnum}) ; 
     
      x["flight"] = userflight ;

    user.findOneAndUpdate(
        { name: username },
        {
          $push: { flights: x  },
        
        },
        { new: true }
      )

    .then(() => res.json('flight added!'))
    .catch(err => res.status(400).json('Error: ' + err)); 
    console.log(userflight);
});


  
module.exports = router;