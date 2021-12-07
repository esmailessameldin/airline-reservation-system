import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

export default class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.onChangefirstName= this.onChangefirstName.bind(this);
    this.onChangelastName = this.onChangelastName.bind(this);
    this.onChangepassportNumber = this.onChangepassportNumber.bind(this)
    this.onChangeEmail = this.onChangeEmail.bind(this);
    
    this.onSubmit=this.onSubmit.bind(this)
    this.state = { 
      firstName:'',
      lastName:'',
      passportNumber:'',
      Email:'',
    }
  }
  onChangefirstName(e){
    this.setState({

      firstName:e.target.value
    })
}
onChangelastName(e){
  this.setState({

    lastName:e.target.value
  })
}
onChangepassportNumber(e){
  this.setState({

    passportNumber:e.target.value
  })
}
onChangeEmail(e){
  this.setState({

    Email:e.target.value
  })
}
  onSubmit(e) {
    e.preventDefault();
const test ={ 
 name:this.props.match.params.name,
  firstName:this.state.firstName,
  lastName:this.state.lastName,
  passportNumber:this.state.passportNumber,
  Email:this.state.Email,
}
console.log(test)
axios.post('http://localhost:5000/users/update-user',test)
.then(res=>{
alert(res.data)

})


  }

  componentDidMount(){
    const test={
      name:this.props.match.params.name
    }
    axios.post('http://localhost:5000/users/find-user',test).then(res=>{
          this.setState({
           
            firstName:res.data.firstName,
            lastName:res.data.lastName,
            passportNumber:res.data.passportNumber,
            Email:res.data.Email,
          })
  
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
           <p style={{color: 'purple',fontWeight: "900",fontstyle:'italic'}}>Fill out the form below to update your info</p>
         </div>
        <form style = {{width:"100vh",position: 'absolute', left: '45%', top: '54%',
        transform: 'translate(-50%, -50%)'}} onSubmit={this.onSubmit}>
          
          <div className="form-group" > 
            <label  style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}}>Number of first class seats: </label>
            <input  type="text"
         
                required
                value={this.state.firstName}
                onChange={this.onChangefirstName}
                className="form-control"
               
                />
          </div>
            
          <div className="form-group" > 
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}}>Number of economy seats: </label>
            <input  type="text"
         
                required
                value={this.state.lastName}
                onChange={this.onChangelastName}
                className="form-control"
               
                />
          </div>
            
          <div className="form-group" > 
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}}>Number of  business seats: </label>
            <input  type="text"
         
                required
                value={this.state.passportNumber}
                onChange={this.onChangepassportNumber}
                className="form-control"
               
                />
          </div>
            
          <div className="form-group" > 
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}}>Departure airport: </label>
            <input  type="text"
         
                required
                value={this.state.Email}
                onChange={this.onChangeEmail}
                className="form-control"
               
                />
          </div>
      
          <div>
         
  
  </div>
  
        </form>
        <Button onClick={this.onSubmit} color='purple' content='Primary' animated  style = {{width:"17vh",position: 'absolute', left: '75%', top: '50%',
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