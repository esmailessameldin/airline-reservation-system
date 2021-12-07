import React from "react";
import { bubble as Menu } from "react-burger-menu";
import { NavLink } from 'react-router-dom'
export default props => {
  return (
 
    <Menu {...props}>
      <NavLink   to="/">
   Home
</NavLink>

<NavLink exact={true} activeClassName='active' to="/admin">
   Admin Login
</NavLink>
<NavLink exact={true} activeClassName='active' to="/guest-homepage/guest">
Guest homepage
</NavLink>

      
    </Menu>
  );
};
