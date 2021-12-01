import React from "react";
import { Component } from 'react';
import './style.css';
import background from "./background.jpg";
import SideBar from "./sidebar";
export default class Navbar extends Component {
  showSettings (event) {
    event.preventDefault();
  }
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
        <div id="App" style = {{ backgroundImage: `url(${background})`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh' }}>
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
  
        
      </div>
    );
  }
}
