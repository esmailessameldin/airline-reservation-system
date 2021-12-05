import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';
import { Message } from 'semantic-ui-react'

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.register=this.register.bind(this)
    this.admin=this.admin.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this)
    this.state = {
     existinguser: '',
      password:''
    }
  }
  
  admin(e){
    e.preventDefault();
    window.location='/adminLogin'
  }
register(e){
   e.preventDefault();
window.location='/register'

}

  onChangeUsername(e) {
    e.preventDefault();
    this.setState({
      existinguser: e.target.value
    })
    console.log(this.state.existinguser)
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
componentDidMount(){
  console.log(this.state.existinguser)
}

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.existinguser,
      password: this.state.password
    }

    console.log(user);

    axios.post('http://localhost:5000/users/signin', user)
      .then(res =>{ 
        if(res.data==="user does not exist please try again"){
          alert("User does not exist please try again")
          return
        }
        else if(res.data==="wrong password"){
          alert("Wrong password")
          return
        }else{
         window.location='/client-homepage/'+this.state.existinguser  
        }
      
      });

    this.setState({
      email: '',
      password:''
      
    })
    

  }
render() {
    var top = 45+ 'px';
    var padding = 23 + 'px';
    var right =250 +'px';
    var width =120 +'vh';
    return (
        <div >
            
             <Message size='massive' color='purple'  style={{padding,right,width, top,position:'fixed'}}
    icon='plane'
    header='Welcome to the Airplane reservation system'
    content='Created by The-Outcasts.'
  />
        <form onSubmit={this.onSubmit}>
          <div className="form-group" style = {{width:"100vh",position: 'absolute',backgroundColor: 'teal', left: '50%', top: '40%',
        transform: 'translate(-50%, -50%)'}}> 
            <label style={{color: 'purple',fontWeight: "900",fontstyle:'italic'}}> Username :</label>
            <input  type="text"
                required
              value={this.state.existinguser}
                onChange={this.onChangeUsername}
                className="form-control"
               
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', backgroundColor: 'teal',left: '50%', top: '50%',
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
        transform: 'translate(-50%, -50%)'}} onClick={this.register}   value="register" >
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