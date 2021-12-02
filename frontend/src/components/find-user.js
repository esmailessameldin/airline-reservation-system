import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import "./table2.css";


export default class finduser extends Component {
    constructor(props) {
      super(props);
      this.onChangeusername= this.onChangeusername.bind(this);
      this.onSubmit= this.onSubmit.bind(this);
  
      this.state = { 
        username: '',
        newname: '' ,
        newpassword: '',
        flights:['empty'],
        showtable:false

     
  
      }
    }


  onChangeusername(e){
    console.log(this.state.username)
    this.setState({
  
      username:e.target.value,
    })
    console.log(this.state.username)


  
  }

    onSubmit(e) {

      e.preventDefault();
      console.log(this.state.username)
  const test ={ 
    user:this.state.username
  }
  console.log(test)
  axios.post('http://localhost:5000/users/find-user',test)
  .then(res=>{ 
      console.log(res.data)
      if(res.data.flights.length>0)
      this.setState({
        newname : res.data.name,
        newpassword : res.data.password,
        flights:res.data.flights[0].flight,
        
      })
      if(!res.data.flights===0)
      this.setState({
        newname : res.data.name,
        newpassword : res.data.password,
       
        
      })
      if(!this.state.flights){
          this.setState({
              flights:['empty']
          })
      }
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
      <div style = {{width:"100vh"}}>
      <div class="ui compact message"  style={{color:'purple',padding,right,width, top,position:'fixed'}}>
       <p style={{color: 'purple',fontWeight: "900",fontstyle:'italic'}}>Enter the username you want to search</p>
     </div>
    <form style = {{width:"100vh",position: 'absolute', left: '45%', top: '10%',
    transform: 'translate(-50%, -50%)'}} onSubmit={this.onSubmit}>
      

      <div className="form-group" > 
        <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}} >UserName: </label>
        <input  type="text"
     
            required
            value={this.state.username}
            onChange={this.onChangeusername}
            className="form-control"
           
            />
      </div>
    </form>
    <div style = {{position: 'absolute', width: 'auto',left: '37%', top: '13%',height:'auto',padding:'auto'}} class="ui big inverted blue segment">
<div class="ui inverted relaxed divided list">
<div style={{color: 'purple',fontWeight: "900",fontstyle:'italic'}} class="item">
<div class="content">
  <div style={{color: 'white',fontWeight: "900",fontstyle:'italic'}} class="header">Username</div>
 {this.state.newname}
</div>
</div>

</div>
</div>
<div style = {{position: 'absolute', width: 'auto',left: '48%', top: '13%',height:'auto',padding:'auto'}} class="ui big inverted blue segment">
<div class="ui inverted relaxed divided list">

<div style={{color: 'purple',fontWeight: "900",fontstyle:'italic'}} class="item">
<div class="content">
  <div style={{color: 'white',fontWeight: "900",fontstyle:'italic'}} class="header">Password</div>
  {this.state.newpassword}
</div>
</div>

</div>
</div>
<table  class="ui striped inverted blue disabled  table"   style={{right:'140px',width:'160vh', top:'35%',position:'fixed'}}>
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
 
   
    
     <tr>
             
       <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{this.state.flights.Number} </td>
       <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{this.state.flights.departureAirport} </td>
       <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{this.state.flights.arrivalAirport} </td>
       <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{this.state.flights.departuretime} </td>
       <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{this.state.flights.arrivaltime} </td>
       <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{this.state.flights.numberOfPassengers} </td>
       <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{this.state.flights.baggageallowance} </td>
       <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{this.state.flights.tripDuration} </td>
       <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{this.state.flights.price} </td>
     </tr>
   

</tbody>
</table>
    <Button onClick={this.onSubmit} color='purple' content='Primary' animated  style = {{width:"17vh",position: 'absolute', left: '75%', top: '10%',
    transform: 'translate(-50%, -50%)'}} type="submit" value="login" >
  <Button.Content visible>Submit</Button.Content>
  <Button.Content hidden>
    <Icon name='save' />
  </Button.Content>
</Button> 
  </div>
    )

  }else{
      return (
        
          <div style = {{width:"100vh"}}>
            <div class="ui compact message"  style={{color:'purple',padding,right,width, top,position:'fixed'}}>
             <p style={{color: 'purple',fontWeight: "900",fontstyle:'italic'}}>Enter the username you want to search</p>
           </div>
          <form style = {{width:"100vh",position: 'absolute', left: '45%', top: '10%',
          transform: 'translate(-50%, -50%)'}} onSubmit={this.onSubmit}>
            
  
            <div className="form-group" > 
              <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}} >UserName: </label>
              <input  type="text"
           
                  required
                  value={this.state.username}
                  onChange={this.onChangeusername}
                  className="form-control"
                 
                  />
            </div>


          </form>
          <Button onClick={this.onSubmit} color='purple' content='Primary' animated  style = {{width:"17vh",position: 'absolute', left: '75%', top: '10%',
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