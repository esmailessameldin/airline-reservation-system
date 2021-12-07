import React, { Component } from "react";
import axios, { Axios } from 'axios';
import style from './image.css'
import './radio.css'
import firstimage from './firstclass.jpg'
import economyimage from './economy.jpg'
import businessimage from './buisnessclass.jpg'
import { Text } from "react-native";
import { Button, Icon,Message } from 'semantic-ui-react';
import { RadioButton } from 'react-native-paper';
        export default class Addflight extends Component {
            
          constructor(props) {
            super(props);
            this.book=this.book.bind(this)
            this.book2=this.book2.bind(this)
            this.onClick=this.onClick.bind(this)
            this.onClick2=this.onClick2.bind(this)
            this.onClick3=this.onClick3.bind(this)
            this.onClick4=this.onClick4.bind(this)
            this.onClick5=this.onClick5.bind(this)
            this.onClick6=this.onClick6.bind(this)
            this.onClick7=this.onClick7.bind(this)
        
            this.onClickFinisher=this.onClickFinisher.bind(this)
            this.onClickLastFinisher = this.onClickLastFinisher.bind(this)
     
     
            this.state = {
              returnflights : [] ,
              flights: [],
              final:{
                seat:'',
                username:'',
                flightnum:'',
                returnf:false
                                    
              },
ok:null,
              flightNumber:0,
              flightNumber2:0,
              flightpicked:false,
              containerpicked:false,
              btngana:false,
              selectedflight:null,
              selectedflight2:null,
              freeseatsFirst:0,
              freeseatsbus:0,
              freeseatseco:0,
              freeseatsFirst2:0,
              freeseatsbus2:0,
              freeseatseco2:0,
              firstlength:0,
              buslength:0,
              class:0,
              class2:0,
              ecolength:0,
              cabin:[],
              cabin2:[],
              seat:'',
              seat2:'',
              
              
              
            }

          }



          book2(e,i){
            e.preventDefault();
            console.log(i)
            this.state.flightNumber2=i
            const flight={
              number:i
            }
            axios.post('http://localhost:5000/admin/findlflight ',flight).then(res=>{

            console.log(res.data)
            this.setState({
              selectedflight2:res.data
            })

            
            this.setState({
           
              cabin2:this.state.selectedflight2[0].cabin
              
            })
           
            for(var i=0;i<this.state.cabin2[0].seats.length;i++){
              if(!this.state.cabin2[0].seats[i]){
                   this.state.freeseatsFirst2=this.state.freeseatsFirst2+1
              }
            }
            for(var i=0;i<this.state.cabin2[1].seats.length;i++){
              if(!this.state.cabin2[1].seats[i]){
                   this.state.freeseatseco2=this.state.freeseatseco2+1
              }
            }
            for(var i=0;i<this.state.cabin2[2].seats.length;i++){
              if(!this.state.cabin2[2].seats[i]){
                   this.state.freeseatsbus2=this.state.freeseatsbus2+1
              }
            }
            this.setState({
              flightpicked:true,
              btngana:true,
              containerpicked:false,
              flightpicked:false,
             
            
            })
            console.log(this.state)
            })

          }
          book(e,i){
            e.preventDefault();
            console.log(i)
            this.state.flightNumber=i
            const flight={
              number:i
            }
            axios.post('http://localhost:5000/admin/findlflight ',flight).then(res=>{

         
            this.setState({
              selectedflight:res.data
            })
            console.log(this.state.selectedflight[0].departureAirport)


            
            this.setState({
           
              cabin:this.state.selectedflight[0].cabin
              
            })
           
            for(var i=0;i<this.state.cabin[0].seats.length;i++){
              if(!this.state.cabin[0].seats[i]){
                   this.state.freeseatsFirst=this.state.freeseatsFirst+1
              }
            }
            for(var i=0;i<this.state.cabin[1].seats.length;i++){
              if(!this.state.cabin[1].seats[i]){
                   this.state.freeseatseco=this.state.freeseatseco+1
              }
            }
            for(var i=0;i<this.state.cabin[2].seats.length;i++){
              if(!this.state.cabin[2].seats[i]){
                   this.state.freeseatsbus=this.state.freeseatsbus+1
              }
            }
            this.setState({
              flightpicked:true})
            console.log(this.state)
            })

          }
        onClick(e){
          e.preventDefault();
          this.setState({
             seat:this.state.seat+'0 ',
             containerpicked:true,
            flightpicked:false,
            class:0
          })
          console.log(this.state.cabin[this.state.class].seats)
        }
        onClick2(e){
          e.preventDefault();
          this.setState({
            seat:this.state.seat+'1 ',
            containerpicked:true,
            flightpicked:false,
            class:1
         })
         console.log(this.state.seat)
        }
        onClick3(e){
          e.preventDefault();
          this.setState({
            seat:this.state.seat+'2 ',
            containerpicked:true,
            flightpicked:false,
            class:2
         })
          console.log(this.state)
        }
        onClick4(e){
          e.preventDefault();
         console.log(this.state.seat)
       
          setTimeout(() => {  const ret={
            arr: this.state.selectedflight[0].arrivalAirport,
            dep: this.state.selectedflight[0].departureAirport
          
          }
         
          axios.post('http://localhost:5000/admin/find-returnflight',ret).then(res=>{
         
       this.setState({
        
         containerpicked:true ,
         flightpicked:true,
         returnflights : res.data


       })
     
       console.log(res.data)
     
  
          })
 
        }, 3000);
         

        
        }
        onClick5(e){
          e.preventDefault();
          this.setState({
             seat2:this.state.seat2+'0 ',
             containerpicked:true,
            flightpicked:true,
            class2:0
          })
          console.log(this.state.cabin2[this.state.class2].seats)
        }
        onClick6(e){
          e.preventDefault();
          this.setState({
            seat2:this.state.seat2+'1 ',
            containerpicked:true,
            flightpicked:true,
            class2:1
         })
         console.log(this.state.seat2)
        }
        onClick7(e){
          e.preventDefault();
          this.setState({
            seat2:this.state.seat2+'2 ',
            containerpicked:true,
            flightpicked:true,
            class2:2
         })
          console.log(this.state)
        }

        onClickFinisher(e,i){
          e.preventDefault();
          
          this.setState({
             
              containerpicked:false,
              flightpicked:true,
              btngana:true ,

              
           })}
           onClickLastFinisher(e){
            e.preventDefault();
         
           setTimeout(() => {  const Finisher={
              depseat:this.state.seat,
              username: this.props.match.params.name,
              depflightnum:this.state.flightNumber,
              departureflight:"departure",
              retseat:this.state.seat2,
              retflightnum:this.state.flightNumber2,
              retflight: "return"
            }

            console.log(Finisher)
            this.state.ok=window.confirm("Are you sure you want to reserve this trip")
            if(this.state.ok)
            axios.post('http://localhost:5000/users/user-add-flight',Finisher).then(res=>{
           
             alert(res.data)
       
    
            })
   
          }, 3000);
           

           }
      
          componentDidMount(){
            console.log(this.state)
          axios.get('http://localhost:5000/admin/get-all-flights').then(res=>{
          console.log(res.data)
          this.setState({
            flights:res.data,
            loaded:true
          })
          console.log(this.state.flights)
          
          })
          }

              
          render() {
           var textstyle={
              fontSize: 13,
              fontWeight: "bold",
              left: '3%', 
              top: '37%',
              position: 'absolute',color: 'purple',fontstyle:'oldstyle-nums' ,backgroundColor:"teal"
            }
            var textstyle2={
              fontSize: 13,
              fontWeight: "bold",
              left: '35%', 
              top: '37%',
              position: 'absolute',color: 'purple',fontstyle:'oldstyle-nums' ,backgroundColor:"teal"
            }
            var textstyle3={
              fontSize: 13,
              fontWeight: "bold",
              left: '68%', 
              top: '37%',
              position: 'absolute',color: 'purple',fontstyle:'oldstyle-nums' ,backgroundColor:"teal"
            }
            var top = 45+ 'px';
            var padding = 23 + 'px';
            var right =250 +'px';
            var width =120 +'vh';
             var imagestyle={
             
              width: 35+'vh',
              height: 25+'vh',
              left: '5%', 
              top: '40%',
              position: 'absolute'
          }
          var imagestyle2={
             
            width: 35+'vh',
            height: 25+'vh',
            left: '40%', 
            top: '40%',
            position: 'absolute'
        }
        var imagestyle3={
             
          width: 35+'vh',
          height: 25+'vh',
          left: '73%', 
          top: '40%',
          position: 'absolute'
      }
            if(this.state.flightpicked && !this.state.containerpicked && !this.state.btngana ){
              return(
                
                <div>
                   <Message size='small' color='purple'  style={{padding,right,width, top,position:'fixed'}}
icon='user'
header={"Please choose the preferred class for the departure"}

/>
<Text style={textstyle}>This is the first class cabin and there is {this.state.freeseatsFirst} free seats</Text>
<Text style={textstyle2}>This is the economy class cabin and there is {this.state.freeseatsbus} free seats</Text>
<Text style={textstyle3}>This is the business class cabin and there is {this.state.freeseatseco} free seats</Text>
<img class="ui small image" src={firstimage} style = {imagestyle} />
<img class="ui small image" src={economyimage} style = {imagestyle2} />
<img class="ui small image" src={businessimage} style = {imagestyle3} />
<Button  color='purple' onClick={this.onClick} content='Primary' animated  style = {{position: 'absolute', left: '14%', top: '70%',
        transform: 'translate(-50%, -50%)'}}  >
      <Button.Content visible>First class</Button.Content>
      <Button.Content hidden>
        <Icon name="hand point right outline" />
      </Button.Content>
    </Button><Button  color='purple' onClick={this.onClick2} content='Primary' animated  style = {{position: 'absolute', left: '49%', top: '70%',
        transform: 'translate(-50%, -50%)'}}  >
      <Button.Content visible>Economy class </Button.Content>
      <Button.Content hidden>
        <Icon name="hand point right outline" />
      </Button.Content>
    </Button><Button  color='purple' onClick={this.onClick3} content='Primary' animated  style = {{position: 'absolute', left: '82%', top: '70%',
        transform: 'translate(-50%, -50%)'}}  >
      <Button.Content visible>Buisness class</Button.Content>
      <Button.Content hidden>
        <Icon name="hand point right outline" />
      </Button.Content>
    </Button>




                </div>
              )

            }
            
            if(!this.state.flightpicked && !this.state.containerpicked && !this.state.btngana ){
                return(
                  
                  <div>
                       <Message size='small' color='purple'  style={{padding,right,width, top,position:'fixed'}}
icon='plane'
header={"Please choose one of the available departure flights below"}

/>
<table class="ui striped inverted blue   table"   style={{padding:'20px',right:'140px',width:'160vh', top:'32%',position:'fixed'}}>
  <thead >
    <tr>
      <th>Flight number</th>
      <th>Departure airport</th>
      <th>arrival airport</th>
      <th>Departure time</th>
      <th>Arrival time</th>
      <th>Number of passengers</th>
      <th>Baggage allowance</th>
      <th>Trip duration</th>
      <th>Price</th>
      <th></th>
    </tr>
  </thead>
 
   
  

<tbody  >
       {this.state.flights.map((item, key) => {
         return (

          
           <tr key={key}>
                   
             <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.Number} </td>
             <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.departureAirport} </td>
             <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.arrivalAirport} </td>
             <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.departuretime} </td>
             <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.arrivaltime} </td>
             <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.numberOfPassengers} </td>
             <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.baggageallowance} </td>
             <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.tripDuration} </td>
             <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.price} </td>
             <td> <Button  color='purple' content='primary'  animated   onClick={(e) => this.book(e, item.Number)}    >
      <Button.Content visible>Book</Button.Content>
      <Button.Content hidden>
        <Icon name='plane' />
      </Button.Content>
    </Button></td>
           </tr>
         );
       })}
     
     </tbody>
</table>
</div>
                )
                  
          }
          
        if(this.state.containerpicked && !this.state.flightpicked && !this.state.btngana  ){
        return (
        
        <div class="flex-container">
          {this.state.cabin[this.state.class].seats.map((item, key) => {
            if(!item)
         return (
          <div key={key}>
    <button  onClick={(e) => this.onClick4(e,key)} class={"ui compact green disabled icon button"} >
  <i class="plane icon"></i>You have to register to book flights
</button>
 
        </div>
        
        )
        else{
          return(
            <button key={key} class="ui red disabled button">
  <i class="ban icon"></i>
  Seat {key+1} is taken
</button>

          )
        }
       })}
           
           <Button  color='purple' content='primary'  animated   style={{position:'absloute',top:'80%',left:'50%'}}   onClick={this.onClick4}  >
      <Button.Content visible>Go to return flights</Button.Content>
      <Button.Content hidden>
        <Icon name='plane' />
      </Button.Content>
    </Button>
        
        </div>
        )}
     
        if(this.state.containerpicked && this.state.flightpicked && !this.state.btngana ){

          return(

             
            <div>
            <Message size='small' color='purple'  style={{padding,right,width, top,position:'fixed'}}
icon='plane'
header={"Please choose one of the available return flights below"}

/>
<table class="ui striped inverted blue   table"   style={{padding:'20px',right:'140px',width:'160vh', top:'32%',position:'fixed'}}>
<thead >
<tr>
<th>Flight number</th>
<th>Departure airport</th>
<th>arrival airport</th>
<th>Departure time</th>
<th>Arrival time</th>
<th>Number of passengers</th>
<th>Baggage allowance</th>
<th>Trip duration</th>
<th>Price</th>
<th></th>
</tr>
</thead>




<tbody  >
{this.state.returnflights.map((item, key) => {
return (


        <tr key={key}>
        
              <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.Number} </td>
              <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.departureAirport} </td>
              <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.arrivalAirport} </td>
              <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.departuretime} </td>
              <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.arrivaltime} </td>
              <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.numberOfPassengers} </td>
              <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.baggageallowance} </td>
              <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.tripDuration} </td>
              <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.price} </td>
             <td> <Button  color='purple' content='primary'  animated   onClick={(e) => this.book2(e, item.Number)}    >
            <Button.Content visible>Book</Button.Content>
      <Button.Content hidden>
    <Icon name='plane' />
    </Button.Content>
    </Button></td>
</tr>
);
})}

</tbody>
</table>
</div>

          )

        }
 if( !this.state.flightpicked && !this.state.containerpicked && this.state.btngana){
  return(<div>
    <Message size='small' color='purple'  style={{padding,right,width, top,position:'fixed'}}
  icon='user'
  header={"Please choose the preferred class for the return flight"}
  
  />
  <Text style={textstyle}>This is the first class cabin and there is {this.state.freeseatsFirst2} free seats</Text>
  <Text style={textstyle2}>This is the economy class cabin and there is {this.state.freeseatsbus2} free seats</Text>
  <Text style={textstyle3}>This is the business class cabin and there is {this.state.freeseatseco2} free seats</Text>
  <img class="ui small image" src={firstimage} style = {imagestyle} />
  <img class="ui small image" src={economyimage} style = {imagestyle2} />
  <img class="ui small image" src={businessimage} style = {imagestyle3} />
  <Button  color='purple' onClick={this.onClick5} content='Primary' animated  style = {{position: 'absolute', left: '14%', top: '70%',
  transform: 'translate(-50%, -50%)'}}  >
  <Button.Content visible>First class</Button.Content>
  <Button.Content hidden>
  <Icon name="hand point right outline" />
  </Button.Content>
  </Button><Button  color='purple' onClick={this.onClick6} content='Primary' animated  style = {{position: 'absolute', left: '49%', top: '70%',
  transform: 'translate(-50%, -50%)'}}  >
  <Button.Content visible>Economy class </Button.Content>
  <Button.Content hidden>
  <Icon name="hand point right outline" />
  </Button.Content>
  </Button><Button  color='purple' onClick={this.onClick7} content='Primary' animated  style = {{position: 'absolute', left: '82%', top: '70%',
  transform: 'translate(-50%, -50%)'}}  >
  <Button.Content visible>Buisness class</Button.Content>
  <Button.Content hidden>
  <Icon name="hand point right outline" />
  </Button.Content>
  </Button>
  
  
  
  
  </div>)
   
 }

 if( this.state.flightpicked && this.state.containerpicked && this.state.btngana){
return(
  <div class="flex-container">
          {this.state.cabin2[this.state.class].seats.map((item, key) => {
            if(!item)
         return (
          <div key={key}>
    <button  onClick={(e) => this.onClickFinisher(e,key)} class={"ui compact green disabled icon button"} >
  <i class="plane icon"></i>You have to register to choose a seat {key+1}
</button>
        </div>
        
        )
        else{
          return(
            <button key={key} class="ui red disabled button">
  <i class="ban icon"></i>
  Seat {key+1} is taken
</button>

          )
        }
       })}
            <Button  color='purple' content='primary'  animated   style={{position:'absloute',top:'80%',left:'50%'}}   onClick={this.onClickFinisher}  >
      <Button.Content visible>Go to return flights</Button.Content>
      <Button.Content hidden>
        <Icon name='plane' />
      </Button.Content>
    </Button>
          
    
        
        </div>
)
 }

 if(this.state.flightpicked && !this.state.containerpicked && this.state.btngana)
 {
var classa1 = '' ;
var cabins1 = '' ;
var seatbtngan1 = this.state.seat.split(" ");

var classa2 = '' ;
var cabins2 = '' ;
var seatbtngan2 = this.state.seat2.split(" ");

if(seatbtngan2[0]==0)
{
    classa2= "A" + seatbtngan2[1];
    cabins2 = "Firstclass"
} if(seatbtngan2[0]==1)
{
  classa2= "B" + seatbtngan2[1];
  cabins2 = "Economy"
}
if(seatbtngan2[0] == 2)
{
  classa2= "C" + seatbtngan2[1];
  cabins2 = "Business"
}




  if(seatbtngan1[0]==0)
  {
      classa1= "A" + seatbtngan1[1];
      cabins1 = "Firstclass"
  } if(seatbtngan1[0]==1)
  {
    classa1= "B" + seatbtngan1[1];
    cabins1 = "Economy"
  }
  if(seatbtngan1[0] == 2)
  {
    classa1= "C" + seatbtngan1[1];
    cabins1 = "Business"
  }







  return(
    <div>
    <Message size='small' color='purple'  style={{padding,right,width, top,position:'fixed'}}
icon='plane'
header={"this is the summary of your trip. please confirm your booking "}

/>



<table class="ui definition table"  style={{color:'blue' ,padding:'20px',right:'140px',width:'160vh', top:'27%',position:'fixed'}}> 
  <thead>
    <tr><th></th>
    <th>Flight number</th>
<th>Departure airport</th>
<th>arrival airport</th>
<th>Departure time</th>
<th>Arrival time</th>
<th>Seat</th>
<th>Cabin</th>


<th>Price</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>Departure Flight</td>
     
      <td>{this.state.selectedflight[0].Number} </td>
      <td>{this.state.selectedflight[0].departureAirport} </td>
      <td>{this.state.selectedflight[0].arrivalAirport} </td>
      <td>{this.state.selectedflight[0].departuretime} </td>
      <td>{this.state.selectedflight[0].arrivaltime} </td>
      <td>{classa1} </td>
      <td>{cabins1} </td>

      <td>{this.state.selectedflight[0].price} </td>

    </tr>
    <tr>
      <td>Return Flight </td>
      <td>{this.state.selectedflight2[0].Number} </td>
      <td>{this.state.selectedflight2[0].departureAirport} </td>
      <td>{this.state.selectedflight2[0].arrivalAirport} </td>
      <td>{this.state.selectedflight2[0].departuretime} </td>
      <td>{this.state.selectedflight2[0].arrivaltime} </td>
      <td>{classa2} </td>
      <td>{cabins2} </td>
      <td>{this.state.selectedflight2[0].price} </td>

    </tr>
</tbody>

</table>

<div class="ui statistic" style={{padding:'20px',right:'140px',width:'160vh', top:'60%',position:'fixed'}} >
  <div class="value">
    Total Price : {this.state.selectedflight[0].price +this.state.selectedflight2[0].price } EGP
  </div>
  <div class="label">
    
  </div>
</div>




</div>



  )



 }


      }

        }