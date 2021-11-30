import React, { Component } from 'react';
import { Button, Icon,Message } from 'semantic-ui-react';
import axios from 'axios';

export default class CreateFlight extends Component {
  constructor(props) {
    super(props);

    this.onChangeDay = this.onChangeDay.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTime=this.onChangeTime.bind(this)
    this.onChangeCrn=this.onChangeCrn.bind(this)
    this.onChangeBuilding=this.onChangeBuilding.bind(this)
    this.onChangeRoom=this.onChangeRoom.bind(this)
  

    this.state = { 
    name:'',
    time:'',
    day:'',
    capacity:20,
    credits: 4,
    students:0,
    building:'',
    room:0,
    teacher:'',
    crn:'',
    array:[],
    exists:false

    }
  }
  
 
  onChangeTime(e){
    this.setState({
        time:e.target.value
    })
   
}
onChangeDay(e){
    this.setState({
        day:e.target.value
    })
}

  onChangeBuilding(e) {
    this.setState({
        building:e.target.value
    })
  }
  onChangeRoom(e) {
    this.setState({
      room: e.target.value
    })
  }
 
  onChangeCrn(e){
      this.setState({

        crn:e.target.value
      })
  }
 
  onSubmit(e) {
    e.preventDefault();
    this.state.array=this.props.match.params.name.split(",")
const test ={
      name:this.state.array[0],
    teacher:this.state.array[1],
    day:this.state.day,
    time:this.state.time,
    building:this.state.building,
    room:this.state.room,
    crn:this.state.crn
}
console.log(test)
axios.post('http://localhost:5000/admins/addsections',test)
.then(res=>{
alert(res.data)

})


  }
render() {
  var left = 350 + 'px';
  var top = 1+ 'px';
  var padding = 15 + 'px';
  var right =0 +'px';
  var width = +'vh';

    return (
      
        <div style = {{width:"100vh"}}>
          <div class="ui compact message"  style={{padding,right,width, top,position:'fixed'}}>
           <p>Fill out the form below to sign-up for a new account</p>
         </div>
        <form style = {{width:"100vh",position: 'absolute', left: '50%', top: '45%',
        transform: 'translate(-50%, -50%)'}} onSubmit={this.onSubmit}>
          
          <div className="form-group" > 
            <label  style={{color: 'blue',fontWeight: "900",fontstyle:'italic'}}>Number of first class seats: </label>
            <input  type="text"
         
                required
                value={this.state.time}
                onChange={this.onChangeTime}
                className="form-control"
               
                />
          </div>
            
          <div className="form-group" > 
            <label style={{color: 'orange',fontWeight: "900",fontstyle:'italic'}}>Number of economy seats: </label>
            <input  type="text"
         
                required
                value={this.state.time}
                onChange={this.onChangeTime}
                className="form-control"
               
                />
          </div>
            
          <div className="form-group" > 
            <label style={{color: 'blue',fontWeight: "900",fontstyle:'italic'}}>Number of  business seats: </label>
            <input  type="text"
         
                required
                value={this.state.time}
                onChange={this.onChangeTime}
                className="form-control"
               
                />
          </div>
            
          <div className="form-group" > 
            <label style={{color: 'blue',fontWeight: "900",fontstyle:'italic'}}>Departure airport: </label>
            <input  type="text"
         
                required
                value={this.state.time}
                onChange={this.onChangeTime}
                className="form-control"
               
                />
          </div>
            
          <div className="form-group" > 
            <label style={{color: 'blue',fontWeight: "900",fontstyle:'italic'}}>Arrival airport: </label>
            <input  type="text"
         
                required
                value={this.state.time}
                onChange={this.onChangeTime}
                className="form-control"
               
                />
          </div>
            
          <div className="form-group" > 
            <label style={{color: 'blue',fontWeight: "900",fontstyle:'italic'}}>Departure date: </label>
            <input  type="text"
         
                required
                value={this.state.time}
                onChange={this.onChangeTime}
                className="form-control"
               
                />
          </div>
            
          <div className="form-group" > 
            <label style={{color: 'blue',fontWeight: "900",fontstyle:'italic'}}>Departure time: </label>
            <input  type="text"
         
                required
                value={this.state.time}
                onChange={this.onChangeTime}
                className="form-control"
               
                />
          </div>
            
          <div className="form-group" > 
            <label style={{color: 'blue',fontWeight: "900",fontstyle:'italic'}}>Arrival time: </label>
            <input  type="text"
         
                required
                value={this.state.time}
                onChange={this.onChangeTime}
                className="form-control"
               
                />
          </div>
            
          <div className="form-group" > 
            <label style={{color: 'teal',fontWeight: "900",fontstyle:'italic'}}>Baggage allowance: </label>
            <input  type="text"
         
                required
                value={this.state.time}
                onChange={this.onChangeTime}
                className="form-control"
               
                />
          </div>
            
          <div className="form-group" > 
            <label style={{color: 'blue',fontWeight: "900",fontstyle:'italic'}} >Trip duration: </label>
            <input  type="text"
         
                required
                value={this.state.time}
                onChange={this.onChangeTime}
                className="form-control"
               
                />
          </div>
            
          <div className="form-group" > 
            <label style={{color: 'blue',fontWeight: "900",fontstyle:'italic'}}>Price: </label>
            <input  type="text"
         
                required
                value={this.state.time}
                onChange={this.onChangeTime}
                className="form-control"
               
                />
          </div>
          
          <div>
          <Button  color='#212121' content='Primary' animated  style = {{width:"17vh",position: 'absolute', left: '49%', top: '105%',
        transform: 'translate(-50%, -50%)'}} type="submit" value="login" >
      <Button.Content visible>Submit</Button.Content>
      <Button.Content hidden>
        <Icon name='plane' />
      </Button.Content>
    </Button>
  
  </div>
  
        </form>
      </div>
    )
  }
}