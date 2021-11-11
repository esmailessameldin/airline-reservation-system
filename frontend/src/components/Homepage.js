import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

import Text from 'react-native'
import { Message } from 'semantic-ui-react'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.register=this.register.bind(this)
    this.faculty=this.faculty.bind(this)
    this.admin=this.admin.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this)
    this.researcher=this.researcher.bind(this)
    this.state = {
     email: '',
      password:''
    }
  }
  
  admin(e){
    window.location='/adminLogin'
  }
register(e){
window.location='/register'

}
faculty(e){
  window.location="/faculty"
}
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
componentDidMount(){
  console.log(window.location.hostname)
}
researcher(e){
  e.preventDefault();
  window.location='/researcherlogin'
}
  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    console.log(user);

    axios.post('http://localhost:5000/users/login', user)
      .then(res =>{ 
        if(res.data==="user does not exist please try again"){
          alert("User does not exist please try again")
          return
        }
        else if(res.data==="wrong password"){
          alert("Wrong password")
          return
        }else{
          window.location='/student/'+res.data
        }
      
      });

    this.setState({
      email: '',
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
            
             <Message size='massive' color='black'  style={{padding,right,width, top,position:'fixed'}}
    icon='plane'
    header='Welcome to the Airplane reservation system'
    content='Created by The-Outcasts.'
  />
        <form onSubmit={this.onSubmit}>
          <div className="form-group" style = {{width:"100vh",position: 'absolute', left: '50%', top: '40%',
        transform: 'translate(-50%, -50%)'}}> 
            <label style={{color: 'Purple',fontWeight: "900",fontstyle:'italic'}}> Username :</label>
            <input  type="text"
                required
                value={this.state.email}
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