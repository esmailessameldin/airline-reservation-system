import React from "react";
import { elastic as Menu } from "react-burger-menu";
import { NavLink } from 'react-router-dom'
export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <NavLink   to="/">
   Home
</NavLink>

<NavLink exact={true} activeClassName='active' to="/admin">
   Admin Login
</NavLink>

      
    </Menu>
  );
};
