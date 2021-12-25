import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

import { useEffect } from "react";




export default class findFlightCabin extends Component {
  
 
        
    
      
    constructor(props) {
    super(props);
   
    this.onChangeCabinclass = this.onChangeCabinclass.bind(this);
    
    this.onChangedeparturetime = this.onChangedeparturetime.bind(this);
    
    
    this.onSubmit=this.onSubmit.bind(this)
    this.state = { 
     
        cabin:'',
      departuretime : '',
    
     

    }
  }


onChangedeparturetime(e){
  this.setState({

    departuretime:e.target.value
  })
}
onChangeCabinclass(e){
  this.setState({

    cabin:e.target.value
  })
}


  onSubmit(e) {
    e.preventDefault();
const test ={ 
    cabin:this.state.cabin,

  departuretime:this.state.departuretime,
  
}
console.log(test)
axios.post('http://localhost:5000/admin/find-flight-Cabin',test)
.then(res=>{
  console.log(res.data)
this.setState({
flights:res.data
})
console.log(this.state.flights)
this.setState({
  showtable:true
})


})


  }
render() {
 
  var top = 1+ 'px';
  var padding = 15 + 'px';
  var right =700 +'px';
  var width = +'vh';
if(this.state.showtable){
  return(
  <table class="ui striped inverted blue   table"   style={{padding:'20px',right:'140px',width:'160vh', top:'32%',position:'fixed'}}>
  <thead >
    <tr>
      <th>Number</th>
      <th>Dep. Airport</th>
      <th>Arrival Airport</th>
      <th>Dep. Time</th>
      <th>Arrival Time</th>
      <th>Num. of Passengers</th>
      <th>Bag. Allowance</th>
      <th>Trip Duration</th>
      <th>Price</th>
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
           </tr>
         );
       })}
     
     </tbody>
</table>
  )
}
else{
    return (
      
        <div style = {{width:"100vh"}}>
          <div class="ui compact message"  style={{color:'purple',padding,right,width, top,position:'fixed'}}>
           <p style={{color: 'purple',fontWeight: "900",fontstyle:'italic'}}>Fill out the form below to find a flight</p>
         </div>
        <form style = {{width:"100vh",position: 'absolute', left: '45%', top: '25%',
        transform: 'translate(-50%, -50%)'}} onSubmit={this.onSubmit}>
          
        <div className="form-group" > 
        <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}}>Cabin Class: </label>    
        <br></br>
        <input type="radio" id="cabin_a" name="cabinclass" value="A"  onChange={this.onChangeCabinclass}/> 
        <label for="cabin_a">First Class</label>
        <br></br>
        <input type="radio" id="cabin_b" name="cabinclass" value="B" onChange={this.onChangeCabinclass}/> 
        <label for="cabin_b">Economy Class</label>
        <br></br>
        <input type="radio" id="cabin_c" name="cabinclass" value="C" onChange={this.onChangeCabinclass}/> 
        <label for="cabin_c">Business Class</label>
        <br></br>
        </div>
        
          <div className="form-group" > 
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}}>Departure time: </label>
            <input  type="text"
         
                required
                value={this.state.departuretime}
                onChange={this.onChangedeparturetime}
                className="form-control"
               
                />
          </div>
        </form>

  
        <Button onClick={this.onSubmit} color='purple' content='Primary' animated  style = {{width:"17vh",position: 'absolute', left: '45%', top: '50%',
        transform: 'translate(-50%, -50%)'}} type="submit" value="login" >
      <Button.Content visible>Submit</Button.Content>
      <Button.Content hidden>
        <Icon name='save' />
      </Button.Content>
    </Button> 
      </div>
    )
}
  }
}