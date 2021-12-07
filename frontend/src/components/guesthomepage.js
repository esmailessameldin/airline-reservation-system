import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import "./table.css";
import { withRouter } from "react-router";
import { Message } from 'semantic-ui-react'

 class clienthomepage extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.onClick4= this.onClick4.bind(this);
    this.onClick5= this.onClick5  .bind(this);
    this.state = {
      flights:[],
      loaded:false,
     
      seating:[],
      ok:null

    }
  }
  
  
onClick(e){
  e.preventDefault();
  window.location='/guestFlight'
}
  
onClick4(e){
  e.preventDefault();
  window.location='/user-find-flight/'+this.props.match.params.id
}
onClick2(e,i,u){
  e.preventDefault();
  const btngan={
    username:this.props.match.params.id,
    flightNumber:i,
    booking:u
  }
  this.state.ok=window.confirm("Are you sure you want to cancel this flight's reservation ?")
  if(this.state.ok)
  axios.post('http://localhost:5000/users/user-cancel-reserved-flights',btngan).then(res=>{
    alert(res.data)
    window.location.reload(true);
  })
}

componentDidMount(){
  console.log(this.props.match.params.id)
  const user={
    user:this.props.match.params.id
  }
 
  
}
  onClick5(e){
    e.preventDefault();
    window.location='/Update-User/'+this.props.match.params.id
  }
render() {
    var top = 45+ 'px';
    var padding = 23 + 'px';
    var right =250 +'px';
    var width =120 +'vh';
 
      console.log(this.state.flights)
      
return (<div >
        
  <Message size='massive' color='purple'  style={{padding,right,width, top,position:'fixed'}}
icon='user'
header={"Welcome ysta to your homepage"}

/>
<Button onClick={this.onClick} color='purple' content='Primary' animated  style = {{position: 'absolute', left: '30%', top: '30%',
        transform: 'translate(-50%, -50%)'}}  value="login" >
      <Button.Content visible>Add trip</Button.Content>
      <Button.Content hidden>
        <Icon name='plane' />
      </Button.Content>
    </Button>
    <Button onClick={this.onClick4} color='purple' content='Primary' animated  style = {{position: 'absolute', left: '60%', top: '30%',
        transform: 'translate(-50%, -50%)'}}  value="login" >
      <Button.Content visible>Find flight</Button.Content>
      <Button.Content hidden>
        <Icon name='plane' />
      </Button.Content>
    </Button>

  

</div>
)

    
   
  }
}
export default withRouter(clienthomepage);