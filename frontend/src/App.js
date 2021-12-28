import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import Adminhomepage from './components/AdminHomepage'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import createflight from './components/create-flight'
import clienthomepage from './components/client-homepage.js'
import AdminLogin from './components/Admin-Login.js'
import finduser from './components/find-user' 
import findflight from './components/find-flight.js'
import addflight from './components/addflight'
import updateflight from './components/updateflight.js'
import UpdateUser from './components/updateuser.js'
import Register from './components/registerUser.js'
import guesthomepage from './components/guesthomepage.js'
import guestflights from './components/guesttrip.js'
import ChangePassword from './components/ChangePassword';
import editflightseat from './components/edit-flight.js'
<<<<<<< HEAD
<<<<<<< HEAD
=======
import findFlightCabin from './components/find-flight-Cabin'

>>>>>>> parent of ba10554 (merge)
=======
import findFlightCabin from './components/find-flight-Cabin'

>>>>>>> parent of ba10554 (merge)

function App() {
  return (
    <Router>
      <Navbar />

         <Route  path="/finduser" exact component={finduser}/> 
         <Route  path="/edit-flight" exact component={editflightseat}/> 
         <Route  path="/addflight/:name" exact component={addflight}/> 
         <Route  path="/user-find-flight/:name" exact component={findflight}/> 
         <Route  path="/register" exact component={Register}/> 
         <Route  path="/" exact component={Homepage}/>
         <Route  path="/admin" exact component={AdminLogin}/>
         <Route  path="/client-homepage/:id" exact component={clienthomepage}/>
         <Route  path="/Update-Flight/:id" exact component={updateflight}/>
         <Route  path="/Update-User/:name" exact component={UpdateUser}/>
         <Route  path="/:id/CreateFlight" exact component={createflight}/>
         <Route  path="/admin-homepage/:id" exact component={Adminhomepage}/>
         <Route  path="/guest-homepage/:name" exact component={guesthomepage}/>
         <Route  path="/guestFlight" exact component={guestflights}/>
         <Route  path="/change-password/:name" exact component={ChangePassword}/> 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
         <Route  path="/payment" exact component={payment}/> 
=======
<<<<<<< HEAD
         <Route  path="/payment" exact component={payment}/> 
=======
=======
         <Route  path="/payment" exact component={payment}/> 
=======
>>>>>>> parent of ba10554 (merge)
         <Route  path="/find-flight-Cabin/:name" exact component={findFlightCabin}/> 
         
>>>>>>> 2cda4c3f1c30ce5100408bbff3e2ebbe935030df
>>>>>>> parent of ba10554 (merge)
=======
         
>>>>>>> parent of 8c87a9e (no)
=======
         
>>>>>>> parent of 8c87a9e (no)
=======
         
>>>>>>> parent of 8c87a9e (no)
=======
         
>>>>>>> parent of 8c87a9e (no)
        
        
    
    </Router>

  );
}

export default App;
