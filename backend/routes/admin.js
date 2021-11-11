const router = require('express').Router();
let admin = require('../modules/admin.js');
let flight=require('../Modules/flight.js')
const mongoose = require('mongoose');
router.route('/add').post((req, res) => {
    const u = new admin({
        name: req.body.name,
        password:req.body.password,
        });
  u .save()
    .then(() => res.json('admin added!'))
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
router.route('/create-flight').post(async(req,res)=>{
    const u = new flight({
         Number:req.body.flightnumber,
         departure:req.body.departure,
         arrival:req.body.arrival,
         date:req.body.date,
         EconomySeats:req.body.EconomySeats,
         BuinessClassSeats:req.body.BuinessClassSeats,
         airport:req.body.airport

        });
  u .save()
    .then(() => res.json('flight added!'))
    .catch(err => res.status(400).json('Error: ' + err)); 
    console.log(u)
  })
  router.route('/get-all-flights').get(async(req,res)=>{
    const u=await flight.find({})
res.send(u)
console.log(u)
  })
  router.route('/update-flight').post(async(req,res)=>{
 const u=await flight.findOneAndUpdate({number:req.params.number},{
    Number:req.body.flightnumber,
    departure:req.body.departure,
    arrival:req.body.arrival,
    date:req.body.date,
    EconomySeats:req.body.EconomySeats,
    BuinessClassSeats:req.body.BuinessClassSeats,
    airport:req.body.airport
 },{new:true})
 res.send("flight updated successfull")
 console.log(u)
 
 })
 router.route('/smite-flight').delete(async(req,res)=>{
    const u=await flight.findOneAndDelete({number:req.body.number})
    console.log(u)
    res.send("donzo")
})
router.route('/find-flight').post(async(req,res)=>{
    const u = await flight.findOne({$or: [
        {departure:req.body.departure,},
        {arrival:req.body.arrival},
         {date:req.body.date},
         {EconomySeats:req.body.EconomySeats,},
         {BuinessClassSeats:req.body.BuinessClassSeats,},
         { airport:req.body.airport},
    ]})

        res.send(u)
        console.log(u)
    })
module.exports = router;