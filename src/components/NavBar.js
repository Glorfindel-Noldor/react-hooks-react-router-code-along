import React from "react";
import { NavLink } from "react-router-dom";




/* Add basic styling for NavLinks */
const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };
  
  /* define the NavBar component */  
  function NavBar() {
    return (
      <div>
        <NavLink
          to="/"
          /* set exact so it knows to only set activeStyle when route is deeply equal to link */
          exact
          style={linkStyles}
          /* add prop for activeStyle */
          activeStyle={{
            background: "red",
          }}
        > Home
        </NavLink>
        <NavLink
          to="/about"
          exact
          style={linkStyles}
          activeStyle={{
            background: "red",
          }}
        >
          About
        </NavLink>
        <NavLink
          to="/login"
          exact
          style={linkStyles}
          activeStyle={{
            background: "red",
          }}
        >
          Login
        </NavLink>
        <NavLink 
          to={'/singup'}
          exact style={linkStyles}
          activeStyle={{background: 'red'}} >
         Sing Up 
        </NavLink>
      </div>
    );
  }
export default NavBar;