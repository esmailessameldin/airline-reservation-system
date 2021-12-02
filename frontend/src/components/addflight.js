import React, { Component } from "react";
import axios from 'axios';
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
            this.onClick=this.onClick.bind(this)
            this.onClick2=this.onClick2.bind(this)
            this.onClick3=this.onClick3.bind(this)
            this.onClick4=this.onClick4.bind(this)
     
            this.state = {
              flights: [],
              final:{
                seat:'',
                username:'',
                flightnum:'',
                returnf:false
                                    
              },
              flightNumber:0,
              flightpicked:false,
              containerpicked:false,
              selectedflight:null,
              freeseatsFirst:0,
              freeseatsbus:0,
              freeseatseco:0,
              firstlength:0,
              buslength:0,
              class:0,
              ecolength:0,
              cabin:[],
              seat:'',
              
              
              
            }

          }



          book(e,i){
            e.preventDefault();
            console.log(i)
            this.state.flightNumber=i
            const flight={
              number:i
            }
            axios.post('http://localhost:5000/admin/findlflight ',flight).then(res=>{

            console.log(res.data)
            this.setState({
              selectedflight:res.data
            })

            
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
        onClick4(e,i){
          e.preventDefault();
          
        this.setState({
            seat:this.state.seat+(i+1),
            
         })
         console.log(this.state.seat)
       
          setTimeout(() => {  const final={
            seat:this.state.seat,
            username:this.props.match.params.name,
            flightnum:this.state.flightNumber,
            returnf:false
          }
          axios.post('http://localhost:5000/users/user-add-flight',final).then(res=>{
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
            if(this.state.flightpicked && !this.state.containerpicked){
              return(
                
                <div>
                   <Message size='small' color='purple'  style={{padding,right,width, top,position:'fixed'}}
icon='user'
header={"Please choose the preferred class"}

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
            
            if(!this.state.flightpicked && !this.state.containerpicked){
                return(
                  
                  <div>
                       <Message size='small' color='purple'  style={{padding,right,width, top,position:'fixed'}}
icon='user'
header={"Please choose one of the avilable flights below"}

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
             <td> <Button  color='purple' content='primary'  animated   onClick={(e) => this.book(e, item.Number)}   value="register" >
      <Button.Content visible>Book</Button.Content>
     
    </Button></td>
           </tr>
         );
       })}
     
     </tbody>
</table>
</div>
                )
                  
          }
          
        if(this.state.containerpicked && !this.state.flightpicked ){
        return (
        
        <div class="flex-container">
          {this.state.cabin[this.state.class].seats.map((item, key) => {
            if(!item)
         return (
          <div key={key}>
    <button  onClick={(e) => this.onClick4(e,key)} class={"ui compact green labeled icon button"} >
  <i class="plane icon"></i>Seat: {key+1}
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
            
          
          
        
        </div>
        )}
      }
        }