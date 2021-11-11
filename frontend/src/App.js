import React from 'react';
import { HashRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
      <Navbar />
         <Routes>
         <Route path="/" element={<Homepage />}></Route>


    </Routes>
    </Router>

  );
}

export default App;
