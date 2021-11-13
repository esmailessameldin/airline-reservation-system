import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

import { Alert } from 'react-bootstrap'
import Text from 'react-native'
import { Message } from 'semantic-ui-react'
const fail=()=>{
    <Alert style={{top:'0%',left:'500px',position:'fixed'}} variant='danger'>
    Wrong password ! please try again
  </Alert>
}
export default class AdminLogin extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this)

    this.state = {
        username: '',
      password:'',
      alertstatus:''
    }
  }
  
  


  onChangeEmail(e) {
    this.setState({
        username: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
componentDidMount(){
 
}
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    console.log(user);
console.log(user.username)
    axios.post('http://localhost:5000/admin/signin', user)
      .then(res =>{ 
          
        if(res.data==="user does not exist please try again"){
            alert("Admin does not exist please try again")
        }
        else if(res.data==="wrong password"){
            alert("Wrong password please try again")
        }else{
          
            window.location=`/admin-homepage/`+user.username
        }
      
      });

    this.setState({
      username: '',
      password:''
      
    })
    

  }
render() {
    
    var left = 350 + 'px';
    var top = 45+ 'px';
    var padding = 23 + 'px';
    var right =250 +'px';
    var width =120 +'vh';
    return (
        <div >
        
             <Message size='massive' color='blue'  style={{padding,right,width, top,position:'fixed'}}
    icon='user'
    header='This is the Admin Login page.'
    content='Please enter your credntials below.'
  />
        <form onSubmit={this.onSubmit}>
          <div className="form-group" style = {{width:"100vh",position: 'absolute', left: '50%', top: '40%',
        transform: 'translate(-50%, -50%)'}}> 
            <label style={{color: 'Purple',fontWeight: "900",fontstyle:'italic'}}> Admin's username :</label>
            <input  type="text"
                required
                value={this.state.username}
                onChange={this.onChangeEmail}
                className="form-control"
               
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label style={{color: 'purple',fontWeight: "900",fontstyle:'italic'}}>Password: </label>
            <input  input type="password" name="password"
                required
                value={this.state.password}
                onChange={this.onChangePassword}
                className="form-control"
                />
          </div>
          <div>
          
    <Button  color='blue' content='Primary' animated  style = {{width:"20vh",position: 'absolute', left: '40%', top: '70%',
        transform: 'translate(-50%, -50%)'}} type="submit" value="login" >
      <Button.Content visible>Login</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button  color='purple' content='Secondary'  animated  style = {{width:"20vh",position: 'absolute', left: '50%', top: '70%',
        transform: 'translate(-50%, -50%)'}} type="submit" value="register" >
      <Button.Content visible>Register</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    
  </div>
  
        </form>
      </div>
    )
  }
}