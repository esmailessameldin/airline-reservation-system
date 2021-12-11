import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import axios from 'axios';

export default class ChangePassword extends Component{
    constructor(props) {
        super(props);


        this.onChangePassword= this.onChangePassword.bind(this);
        this.onChangePasswordConfirm= this.onChangePasswordConfirm.bind(this);
        this.onChangePasswordNew= this.onChangePasswordNew.bind(this);
        this.onSubmit=this.onSubmit.bind(this)
        this.state = { 
         
          password:'',
          passwordnew:'',
          passwordconfirm:''

        }
      }

      onChangePassword(e){

        this.setState({
            password:e.target.value
          })
      }
      onChangePasswordNew(e){
        console.log(this.state);
        this.setState({
            passwordnew:e.target.value
          })
      }
      onChangePasswordConfirm(e){
    
      console.log(this.state);
      this.setState({
        passwordconfirm:e.target.value
      })
     
      }
      onSubmit(e){
          e.preventDefault()
         
          if(this.state.passwordnew===this.state.passwordconfirm){

          const changepass = {name:this.props.match.params.name ,password:this.state.passwordnew}
           console.log(this.props.match.params.name);
           const user={name: this.props.match.params.name,password: this.state.password}
           axios.post('http://localhost:5000/users/get-password',user).then(
               (res)=>{
                   axios.post('http://localhost:5000/users/change-password',changepass).then(
                    (res)=>{

                        console.log("done !")
                        alert("Password Changed Successfully !!!")
                        
                    }

                   ).catch((err)=>{console.log(err)}) 
                console.log(res);
                
                }
           ).catch((err)=>{
               console.log(err)
               alert("Wrong Password !!!")
        })
      }else{
        console.log("retard!")
        alert("Passwords Must Match !!!")
    } 
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
                  <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}}>Old Password: </label>
                  <input  type="password"
               
                      required
                      value={this.state.password}
                      onChange={this.onChangePassword}
                      className="form-control"
                     
                      />
                </div>
                <div className="form-group" > 
                  <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}}>New Password: </label>
                  <input  type="password"
               
                      required
                      value={this.state.passwordnew}
                      onChange={this.onChangePasswordNew}
                      className="form-control"
                     
                      />
                </div>
                <div className="form-group" > 
                  <label style={{color: 'purple',backgroundColor: 'teal',fontWeight: "900",fontstyle:'italic'}}>Confirm New Password: </label>
                  <input  type="password"
               
                      required
                      value={this.state.passwordconfirm}
                      onChange={this.onChangePasswordConfirm}
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
