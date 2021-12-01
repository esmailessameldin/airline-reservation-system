import React, { Component } from "react";
import axios from 'axios';
import { CheckBox } from 'react-native'
import {Table}from 'react-bootstrap'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
const loading = () => (
    <div>
     <Segment style = {{position: 'absolute', left: '50%', top: '39%',
      transform: 'translate(-50%, -50%)'}}>
      <Dimmer active>
        <Loader size='massive'>Loading data</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
    </div>)
   
    
        export default class CreateExercise extends Component {
            
          constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
            this.setSelection=this.setSelection.bind(this)
            this.onChangecheck=this.onChangecheck.bind(this)
            
     
            this.state = {
              students: [],
              loading:false,
              isSelected:false,
              attendance:[],
            }

          }
        
componentDidMount(){
  

axios.get('http://localhost:5000/faculty/getenrolled/'+this.props.match.params.name).then(
    res=>{
        console.log(res.data)
     
       for(var i=0;i<res.data.length;i++){
         var array=res.data[i].split(" ")
           this.state.students.push(array[0]+" "+array[1])
           axios.get('http://localhost:5000/users/get/'+array[0]+" "+array[1]).then(res=>{
            this.state.attendance.push(res.data.attendance)
            console.log(this.state.attendance)
            
              })

       }
      

    }
   
) 
setTimeout(function() { 
    console.log(this.state.students)
   
    this.setState({
            
            
        loading:false
    })
    console.log(this.state.loading)
    console.log(this.state.students)
}.bind(this), 10000)
    

 
}

onChangecheck(e,o){
  if(this.state.attendance[o][e]){ this.state.attendance[o][e]=false}else{
  if(!this.state.attendance[o][e]){this.state.attendance[o][e]=true}}
 this.forceUpdate()
 const user ={
   array:this.state.attendance[o]
 }
axios.post('http://localhost:5000/users/updateattendance/'+this.state.students[o],user)

}
setSelection(e){
  this.setState({ isSelected: true })
}


          handleClick(e) {
            console.log(e);
            window.location = "/majors/" + e;
          }

          render() {
            
            if(this.state.loading){
                return loading()
                  
          }
        
        return (
          <div>
            
          <Table  style= {{left: '0%', top: '100%'}} >
           <thead class="table table-dark">
             <tr>
               <th>Name</th>
               <th>1</th>
               <th>2</th>
               <th>3</th>
               <th>4</th>
               <th>5</th>
               <th>6</th>
               <th>7</th>
               <th>8</th>
               <th>9</th>
               <th>10</th>
               <th>11</th>
               <th>12</th>
               <th>13</th>
               <th>14</th>
               <th>15</th>
               <th>16</th>
               <th>17</th>
               <th>18</th>
               <th>19</th>
               <th>20</th>
               <th>21</th>
               <th>22</th>
               <th>23</th>
               <th>24</th>
               <th>25</th>
               <th>26</th>
               <th>27</th>
               <th>28</th>
               <th>29</th>
               <th>30</th>
              
             </tr>
           </thead>
           <tbody class="thead-light">
         {this.state.students.map((item,index) => {
           return (
          <tr>
            <th>{item}</th>
            {this.state.attendance[index].map((item,key)=>{
                    return(<th key={key}> 
                      <CheckBox
                        value={item}
                        onValueChange={()=>  this.onChangecheck(key,index)}
                      />
                      
                      
                                     </th>)
    
               


            })}

             

         
          </tr>
               
       
           
                 
                  
               
             
             
           );
         })}
             </tbody>
         </Table>
         </div>
   
        );
      }
        }