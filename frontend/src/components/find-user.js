import React, { Component } from 'react';
import { Button, Icon,Message ,List} from 'semantic-ui-react';
import axios from 'axios';



export default class finduser extends Component {
    constructor(props) {
      super(props);
      this.onChangeusername= this.onChangeusername.bind(this);
      this.onSubmit= this.onSubmit.bind(this);
  
      this.state = { 
        username: '',
        newname: '' ,
        newpassword: '',

     
  
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
      this.setState({
        newname : res.data.name,
        newpassword : res.data.password

      })
  
  
  })
  
  
    }
  render() {
    var left = 350 + 'px';
    var top = 1+ 'px';
    var padding = 15 + 'px';
    var right =600 +'px';
    var width = +'vh';
  
      return (
        
          <div style = {{width:"100vh"}}>
            <div class="ui compact message"  style={{color:'purple',padding,right,width, top,position:'fixed'}}>
             <p style={{color: 'purple',fontWeight: "900",fontstyle:'italic'}}>Fill out the form below to create a new flight</p>
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


              
            <List  style = {{width:"17vh",position: 'absolute', left: '10%', top: '300%',
          transform: 'translate(-50%, -50%)'}}>
                  <List.Item>
                             <List.Header>user name</List.Header>{this.state.newname}
                                 </List.Item>
    <List.Item>
      <List.Header>password</List.Header>
      {this.state.newpassword}
    </List.Item>
  </List>
            
        
    
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