import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';






export default class findFlight extends Component {
  constructor(props) {
    super(props);
   
    this.onChangedepartureAirport = this.onChangedepartureAirport.bind(this);
    this.onChangearrivalAirport = this.onChangearrivalAirport.bind(this);
    this.onChangedeparturetime = this.onChangedeparturetime.bind(this);
    this.onChangearrivaltime = this.onChangearrivaltime.bind(this);
    this.onChangenumberOfPassengers = this.onChangenumberOfPassengers.bind(this);
    this.onSubmit=this.onSubmit.bind(this)
    this.state = { 
     
      departureAirport: '',
      arrivalAirport: '',
      departuretime : '',
      arrivaltime: '',
      numberOfPassengers: 0 ,
      showtable:false,
      flights:[]
     

    }
  }

onChangedepartureAirport(e){
  this.setState({

    departureAirport:e.target.value
  })
}
onChangearrivalAirport(e){
  this.setState({

    arrivalAirport:e.target.value
  })
}
onChangedeparturetime(e){
  this.setState({

    departuretime:e.target.value
  })
}
onChangearrivaltime(e){
  this.setState({

    arrivaltime:e.target.value
  })
}
onChangenumberOfPassengers(e){
    this.setState({
  
        numberOfPassengers:e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();
const test ={ 
  departureAirport:this.state.departureAirport,
  arrivalAirport:this.state.arrivalAirport,
  departuretime:this.state.departuretime,
  arrivaltime:this.state.arrivaltime,
}
console.log(test)
axios.post('http://localhost:5000/admin/find-flight',test)
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
  var right =600 +'px';
  var width = +'vh';
if(this.state.showtable){
  return(
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
           <p style={{color: 'purple',fontWeight: "900",fontstyle:'italic'}}>Fill out the form below to create a new flight</p>
         </div>
        <form style = {{width:"100vh",position: 'absolute', left: '45%', top: '20%',
        transform: 'translate(-50%, -50%)'}} onSubmit={this.onSubmit}>
          
        
            
          
            
        
          <div className="form-group" > 
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}}>Departure airport: </label>
            <input  type="text"
         
                required
                value={this.state.departureAirport}
                onChange={this.onChangedepartureAirport}
                className="form-control"
               
                />
          </div>
            
          <div className="form-group" > 
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}}>Arrival airport: </label>
            <input  type="text"
         
                required
                value={this.state.arrivalAirport}
                onChange={this.onChangearrivalAirport}
                className="form-control"
               
                />
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
            
          <div className="form-group" > 
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}}>Arrival time: </label>
            <input  type="text"
         
                required
                value={this.state.arrivaltime}
                onChange={this.onChangearrivaltime}
                className="form-control"
               
                />
          </div>
          <div className="form-group" > 
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}}>Arrival time: </label>
            <input  type="text"
         
                required
                value={this.state.numberOfPassengers}
                onChange={this.onChangenumberOfPassengers}
                className="form-control"
               
                />
          </div>
            
            
       
            
        </form>
        <Button onClick={this.onSubmit} color='purple' content='Primary' animated  style = {{width:"17vh",position: 'absolute', left: '75%', top: '20%',
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