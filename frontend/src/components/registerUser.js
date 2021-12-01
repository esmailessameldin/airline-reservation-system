import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

export default class CreateFlight extends Component {
  constructor(props) {
    super(props);
    this.onChangeusername= this.onChangeusername.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
 
    this.onSubmit=this.onSubmit.bind(this)
    this.state = { 
      username: '',
      password: '',
    
    }
  }
  onChangeusername(e){
    this.setState({

      username:e.target.value
    })
}
onChangepassword(e){
  this.setState({

    password:e.target.value
  })
}



  onSubmit(e) {
    e.preventDefault();
const test ={ 
    name:this.state.username,
    password :this.state.password,
 
}
console.log(test)
axios.post('http://localhost:5000/users/add',test)
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
           <p style={{color: 'purple',fontWeight: "900",fontstyle:'italic'}}>Fill out the form below to create a new flight</p>
         </div>
        <form style = {{width:"100vh",position: 'absolute', left: '45%', top: '20%',
        transform: 'translate(-50%, -50%)'}} onSubmit={this.onSubmit}>
          
         
            
        
            
    
          <div className="form-group" > 
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}} >User name: </label>
            <input  type="text"
         
                required
                value={this.state.username}
                onChange={this.onChangeusername}
                className="form-control"
               
                />
          </div>
          <div className="form-group" > 
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}} >Password: </label>
            <input  type="text"
         
                required
                value={this.state.password}
                onChange={this.onChangepassword}
                className="form-control"
               
                />
          </div>
            
          
          
          <div>
         
  
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