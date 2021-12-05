import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

export default class CreateFlight extends Component {
  constructor(props) {
    super(props);
    this.onChangeusername= this.onChangeusername.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onChangeuserfirstname= this.onChangeuserfirstname.bind(this);
    this.onChangelastname = this.onChangelastname.bind(this);
    this.onChangeemail= this.onChangeemail.bind(this);
    this.onChangepassport = this.onChangepassport.bind(this);
 
    this.onSubmit=this.onSubmit.bind(this)
    this.state = { 
      username: '',
      password: '',
      firstName: '',
      lastname: '',
      email: '',
      passport: '',
     
    
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
onChangeuserfirstname(e){
  this.setState({

    firstName:e.target.value
  })
}
onChangelastname(e){
this.setState({

  lastname:e.target.value
})
}
onChangeemail(e){
  this.setState({

    email:e.target.value
  })
}
onChangepassport(e){
this.setState({

  passport:e.target.value
})
}


  onSubmit(e) {
    e.preventDefault();
const test ={ 
    name:this.state.username,
    password :this.state.password,
    firstName:this.state.firstName,
    lastName :this.state.lastname,
    passportNumber:this.state.passport,
    Email :this.state.email,
 
 
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
        <form style = {{width:"100vh",position: 'absolute', left: '45%', top: '30%',
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
          <div className="form-group" > 
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}} >First name: </label>
            <input  type="text"
         
                required
                value={this.state.firstName}
                onChange={this.onChangeuserfirstname}
                className="form-control"
               
                />
          </div>
          <div className="form-group" > 
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}} >Last name: </label>
            <input  type="text"
         
                required
                value={this.state.lastname}
                onChange={this.onChangelastname}
                className="form-control"
               
                />
          </div>
          <div className="form-group" > 
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}} >Passport number: </label>
            <input  type="text"
         
                required
                value={this.state.passport}
                onChange={this.onChangepassport}
                className="form-control"
               
                />
          </div>
          <div className="form-group" > 
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}} >Email: </label>
            <input  type="text"
         
                required
                value={this.state.email}
                onChange={this.onChangeemail}
                className="form-control"
               
                />
          </div>

          
          
          <div>
         
  
  </div>
  
        </form>
        <Button onClick={this.onSubmit} color='purple' content='Primary' animated  style = {{position: 'absolute', left: '45%', top: '60%',
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