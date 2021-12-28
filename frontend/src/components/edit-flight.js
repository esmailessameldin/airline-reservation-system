import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { Message } from 'semantic-ui-react';
import axios from 'axios';
import firstimage from './firstclass.jpg'
import economyimage from './economy.jpg'
import businessimage from './buisnessclass.jpg'
import { Text } from "react-native";
export default class editflight extends Component {
  constructor(props) {
    super(props);
    this.onChangeretseat = this.onChangeretseat.bind(this);
    this.onClick=this.onClick.bind(this)
    this.onClick2=this.onClick2.bind(this)
    this.onClick3=this.onClick3.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
    this.state = { 
        username:"",
        oldseat:"",
        index:1,
        retseat:'',
        retflightnum:0,
        newseat:'',
        newseat2:'',
        flight:[],
        cabin:[],
        seatpicked:false,
        freeseatsFirst:0,
        freeseatsbus:0,
        freeseatseco:0,
    }
  }
  onClick(e){
    e.preventDefault();
    this.setState({
      retseat:this.state.newseat+'0 ',
       containerpicked:true,
      flightpicked:false,
      class:0,
      seatpicked:true
    })
  
  }
  onClick2(e){
    e.preventDefault();
    this.setState({
      retseat:this.state.newseat+'1 ',
      containerpicked:true,
      flightpicked:false,
      class:1,
      seatpicked:true,
   })

  }
  onClick3(e){
    e.preventDefault();
    this.setState({
      retseat:this.state.newseat+'2 ',
      containerpicked:true,
      flightpicked:false,
      class:2,
      seatpicked:true
   })
 
  }

onChangeretseat(e){
  this.setState({

    retseat:e.target.value
  })
  this.state.newseat = this.state.retseat.split("");
if(this.state.newseat[0]=='A')
this.state.newseat2=this.state.newseat2+"0 "+this.state.newseat[1]
if(this.state.newseat[0]=='B')
this.state.newseat2=this.state.newseat2+"1 "+this.state.newseat[1]
if(this.state.newseat[0]=='C')
this.state.newseat2=this.state.newseat2+"2 "+this.state.newseat[1]

}

  onSubmit(e,i) {
    e.preventDefault();
   this.state.retseat=this.state.retseat+i
const test ={ 
 username:this.props.location.state.username,
 oldseat:this.props.location.state.flightseat,
 index:this.props.location.state.flightindex,
 retseat:this.state.retseat,
 retflightnum:this.props.location.state.number

}

console.log(test)
axios.post('http://localhost:5000/users/edit-seat',test)
.then(res=>{
alert(res.data)

})


  }

  componentDidMount(){
  
   
          
            const flight={
              number:this.props.location.state.number
            }
            axios.post('http://localhost:5000/admin/findlflight ',flight).then(res=>{

         
            this.setState({
              selectedflight:res.data[0]
            })
            console.log(res.data[0])


            
            this.setState({
           
              cabin:this.state.selectedflight.cabin
              
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
  




render() {
 
  var top = 1+ 'px';
  var padding = 15 + 'px';
  var right =600 +'px';
  var width = +'vh';
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
if(!this.state.seatpicked)
  return(<div>
    <Message size='small' color='purple'  style={{right:'30%',width:'70vh', top:'5%',position:'fixed'}}
  icon='user'
  header={"Please choose the preferred class for the return flight"}
  
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
  
  
  
  
  </div>)
if(this.state.seatpicked)
    return (
      <div class="flex-container">
      {this.state.cabin[this.state.class].seats.map((item, key) => {
        if(!item)
     return (
      <div key={key}>
<button  onClick={(e) => this.onSubmit(e,key)} class={"ui compact green labeled icon button"} >
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

    )
  }
}