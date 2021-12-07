import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

export default class UpdateFlight extends Component {
  constructor(props) {
    super(props);
   
    this.onChangedepartureAirport = this.onChangedepartureAirport.bind(this);
    this.onChangearrivalAirport = this.onChangearrivalAirport.bind(this);
    this.onChangedeparturetime = this.onChangedeparturetime.bind(this);
    this.onChangearrivaltime = this.onChangearrivaltime.bind(this);
    this.onChangebaggageallowance= this.onChangebaggageallowance.bind(this);
    this.onChangetripDuration = this.onChangetripDuration.bind(this);
    this.onChangeprice = this.onChangeprice.bind(this);
    this.onSubmit=this.onSubmit.bind(this)
    this.state = { 
      departureAirport: '',
      arrivalAirport: '',
      departuretime : '',
      arrivaltime: '',
      baggageallowance : 0,
      tripDuration : '',
      price: 0,

    }
  }





  componentDidMount(){
  const test={
    number:this.props.match.params.id
  }
  axios.post('http://localhost:5000/admin/find-flight',test).then(res=>{
        this.setState({
         
          departureAirport:res.data.departureAirport,
          arrivalAirport:res.data.arrivalAirport,
          departuretime :res.data.departuretime,
          arrivaltime:res.data.arrivaltime,
          baggageallowance :res.data.baggageallowance,
          tripDuration :res.data.tripDuration,
          price:res.data.price

        })





  })







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
onChangebaggageallowance(e){
  this.setState({

    baggageallowance:e.target.value
  })
}
onChangetripDuration(e){
  this.setState({

    tripDuration:e.target.value
  })
}
onChangeprice(e){
  this.setState({

    price:e.target.value
  })
}
  onSubmit(e) {
    e.preventDefault();
const test ={ 
  flightnumber:this.props.match.params.id,
  departureAirport:this.state.departureAirport,
  arrivalAirport:this.state.arrivalAirport,
  departuretime:this.state.departuretime,
  arrivaltime:this.state.arrivaltime,
  baggageallowance:this.state.baggageallowance,
  tripDuration:this.state.tripDuration,
  price:this.state.price
}
console.log(test)
axios.post('http://localhost:5000/admin/update-flight',test)
.then(res=>{
alert(res.data)

})


  }
render() {
 
  var top = 1+ 'px';
  var padding = 15 + 'px';
  var right =600 +'px';
  var width = +'vh';

    return (
      
        <div style = {{width:"100vh"}}>
          <div class="ui compact message"  style={{color:'purple',padding,right,width, top,position:'fixed'}}>
           <p style={{color: 'purple',fontWeight: "900",fontstyle:'italic'}}>Fill out the form below to update the flight</p>
         </div>
        <form style = {{width:"100vh",position: 'absolute', left: '45%', top: '54%',
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
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}}>Baggage allowance: </label>
            <input  type="text"
         
                required
                value={this.state.baggageallowance}
                onChange={this.onChangebaggageallowance}
                className="form-control"
               
                />
          </div>
            
          <div className="form-group" > 
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}} >Trip duration: </label>
            <input  type="text"
         
                required
                value={this.state.tripDuration}
                onChange={this.onChangetripDuration}
                className="form-control"
               
                />
          </div>
        
          <div className="form-group" > 
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}} >Price: </label>
            <input  type="text"
         
                required
                value={this.state.price}
                onChange={this.onChangeprice}
                className="form-control"
               
                />
          </div>
            
          
          
          <div>
         
  
  </div>
  
        </form>
        <Button onClick={this.onSubmit} color='purple' content='Primary' animated  style = {{width:"17vh",position: 'absolute', left: '75%', top: '50%',
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