import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

export default class editflight extends Component {
  constructor(props) {
    super(props);
    this.onChangeretseat = this.onChangeretseat.bind(this);
    this.onSubmit=this.onSubmit.bind(this)
    this.state = { 
        username:"",
        oldseat:"",
        index:1,
        retseat:'',
        retflightnum:0,
        newseat:[],
        newseat2:''
    }
  }
 

onChangeretseat(e){
  this.setState({

    retseat:e.target.value
  })
  this.state.newseat = this.state.retseat.split("");
if(this.state.newseat[0]=='A')
this.state.newseat2=this.state.newseat2+"0 "+this.state.newseat[1]
if(this.state.newseat[0]=='B')
this.state.newseat2=this.state.newseat2+"1 "+this.state.newseat[1]
if(this.state.newseat[0]=='C')
this.state.newseat2=this.state.newseat2+"2 "+this.state.newseat[1]

}

  onSubmit(e) {
    e.preventDefault();
const test ={ 
 username:this.props.location.state.username,
 oldseat:this.props.location.state.flightseat,
 index:this.props.location.state.flightindex,
 retseat:this.state.retseat,
 retflightnum:this.props.location.state.number

}

console.log(test)
axios.post('http://localhost:5000/users/edit-seat',test)
.then(res=>{
alert(res.data)

})


  }

  componentDidMount(){
      console.log(this.props.location.state)
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
           <p style={{color: 'purple',fontWeight: "900",fontstyle:'italic'}}>Enter the new seat you desire to book</p>
           
         </div>
        <form style = {{width:"100vh",position: 'absolute', left: '45%', top: '40%',
        transform: 'translate(-50%, -50%)'}} onSubmit={this.onSubmit}>
          <div className="form-group" > 
            <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}} >New seat: </label>
            <input  type="text"
         
                required
                value={this.state.retseat}
                onChange={this.onChangeretseat}
                className="form-control"
               
                />
          </div>
      
          <div>
         
  
  </div>
  
        </form>
        <Button onClick={this.onSubmit} color='purple' content='Primary' animated  style = {{width:"17vh",position: 'absolute', left: '50%', top: '70%',
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