import React from 'react';
import { useState } from 'react';
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
import StripeContainer from './components/StripeContainer';

function App() {


	const [showItem, setShowItem] = useState(false);




  return (
    <Router>
      <div className='App'>
    <h1>The Spatula Store</h1>
    {showItem ? (
      <StripeContainer />
    ) : (
      <>
        <h3>$10.00</h3>
        <button onClick={() => setShowItem(true)}>Purchase Spatula</button>
      </>
    )}
  </div>
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
         
        
        
    
    </Router>

  );
}

export default App;
