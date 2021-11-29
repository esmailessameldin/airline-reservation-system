import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
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
    return (
        <div style = {{width:"100vh"}}>
        <form onSubmit={this.onSubmit}>
          <div className="form-group" style = {{width:"100vh",position: 'absolute', left: '50%', top: '64%',
        transform: 'translate(-50%, -50%)'}}> 
            <label>Time: </label>
            <input  type="text"
         
                required
                value={this.state.time}
                onChange={this.onChangeTime}
                className="form-control"
               
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '15.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Day: </label>
            <input  input type="text" 
         
                required
                value={this.state.day}
                onChange={this.onChangeDay}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '27.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>Building: </label>
            <input  input type="text"
                required
                value={this.state.building}
                onChange={this.onChangeBuilding}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '39.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>room: </label>
            <input  input type="text"
        
                required
                value={this.state.room}
                onChange={this.onChangeRoom}
                className="form-control"
                />
          </div>
          <div  style = {{width:"100vh",position: 'absolute', left: '50%', top: '51.8%',
        transform: 'translate(-50%, -50%)'}} className="form-group"> 
            <label>CRN: </label>
            <input  input type="text"
          
                required
                value={this.state.crn}
                onChange={this.onChangeCrn}
                className="form-control"
                />
          </div>
          <div>
    <Button  animated  style = {{width:"11vh",position: 'absolute', left: '50%', top: '77.8%',
        transform: 'translate(-50%, -50%)'}} type="submit" value="register" >
      <Button.Content visible>Submit</Button.Content>
      <Button.Content visible>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
  
  </div>
  
        </form>
      </div>
    )
  }
}