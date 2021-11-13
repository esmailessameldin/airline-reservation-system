import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import Adminhomepage from './components/AdminHomepage'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import AdminLogin from './components/Admin-Login.js'
function App() {
  return (
    <Router>
      <Navbar />

         <Routes>
         <Route  path="/" element={<Homepage />}></Route>
         <Route  path="/admin" element={<AdminLogin/>}></Route>
         <Route  path={"/admin-homepage/:id"} element={<Adminhomepage/>}></Route>

    </Routes>
    </Router>

  );
}

export default App;
