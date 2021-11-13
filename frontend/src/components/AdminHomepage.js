import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

import { Alert } from 'react-bootstrap'
import Text from 'react-native'
import { withRouter } from "react-router";
import { Message } from 'semantic-ui-react'

export default class AdminHomepage extends React.Component {

  constructor(props) {
    
    super(props);
   

    this.state = {
      flights:[],
      loaded:false
    }
  }
  
  


componentDidMount(){
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
header='Welcome to the admin homepage'

/>




<ul  style={{padding:'23px',right:'700px',width:'50vh', top:'30%',position:'fixed'}}>
       {this.state.flights.map((item, key) => {
         return (
           <li key={key}>

             <li style={{color: 'Purple',fontWeight: "900",fontstyle:'italic'}}> Flight number : {item.Number} </li>
             <li style={{color: 'Purple',fontWeight: "900",fontstyle:'italic'}}> Flight Departure time : {item.departure} </li>
             <li style={{color: 'Purple',fontWeight: "900",fontstyle:'italic'}}> Flight arrival time : {item.arrival} </li>
             <li style={{color: 'Purple',fontWeight: "900",fontstyle:'italic'}}> Flight date : {item.date} </li>
             <li style={{color: 'Purple',fontWeight: "900",fontstyle:'italic'}}> Number of economy seats : {item.EconomySeats} </li>
             <li style={{color: 'Purple',fontWeight: "900",fontstyle:'italic'}}> Number of Buisness class seats : {item.BuinessClassSeats} </li>
             <li style={{color: 'Purple',fontWeight: "900",fontstyle:'italic'}}> Airport: : {item.airport} </li>
           </li>
         );
       })}
     </ul>
</div>)

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