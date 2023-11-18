import React from "react";
import { Route, Switch } from "react-router-dom";
import SingUp from "./Singup";
import Home from "./Home";
import About from "./About";
import Login from "./Login";

import NavBar from "./NavBar";

/* add the NavBar component to our App component */

function App() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={'/singup'} >
            <SingUp/>
          </Route>
        </Switch>
      </div>
    );
  }

export default  App;