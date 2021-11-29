import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import "./table.css";
import { withRouter } from "react-router";
import { Message } from 'semantic-ui-react'

 class AdminHomepage extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      flights:[],
      loaded:false,

    }
  }
  
  
onClick(e){
  e.preventDefault();
  window.location='/'+this.props.match.params.id+'/CreateFlight'
}

componentDidMount(){
  console.log(this.props.match.params.id)
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
    
    var left = 350 + 'px';
    var top = 45+ 'px';
    var padding = 23 + 'px';
    var right =250 +'px';
    var width =120 +'vh';
    if (this.state.loaded){
return (<div >
        
  <Message size='massive' color='blue'  style={{padding,right,width, top,position:'fixed'}}
icon='user'
header={"Welcome " + this.props.match.params.id + " to the admin homepage"}

/>
<Button onClick={this.onClick} color='purple' content='Primary' animated  style = {{width:"25vh",position: 'absolute', left: '30%', top: '30%',
        transform: 'translate(-50%, -50%)'}}  value="login" >
      <Button.Content visible>Create a new flight</Button.Content>
      <Button.Content hidden>
        <Icon name='plane' />
      </Button.Content>
    </Button>

<table class="ui striped inverted table"   style={{padding:'20px',right:'140px',width:'160vh', top:'32%',position:'fixed'}}>
  <thead >
    <tr>
      <th>Flight number</th>
      <th>Flight Departure time</th>
      <th>Flight arrival time</th>
      <th>Flight date</th>
      <th>Number of economy seats</th>
      <th>Number of Buisness class seats</th>
      <th>Airport</th>
    </tr>
  </thead>
 
   
  

<tbody  >
       {this.state.flights.map((item, key) => {
         return (

          
           <tr key={key}>
                   
             <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.Number} </td>
             <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.departure} </td>
             <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.arrival} </td>
             <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.date} </td>
             <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.EconomySeats} </td>
             <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.BuinessClassSeats} </td>
             <td style={{color: 'white',fontWeight: "900",fontstyle:'italic'}}>{item.airport} </td>
           </tr>
         );
       })}
     
     </tbody>
</table>
</div>
)

    }
    return (
        <div >
        
             <Message size='massive' color='blue'  style={{padding,right,width, top,position:'fixed'}}
    icon='user'
    header='Welcome to the admin homepage'
   
  />

<div style={{padding:'100px',right:'300px',width:'600px', top:'30%',position:'fixed'}} class="ui segment">
  <div class="ui active inverted dimmer">
    <div class="ui text loader">Loading please wait</div>
  </div>
  <p></p>
</div>
      </div>
    )
  }
}
export default withRouter(AdminHomepage);