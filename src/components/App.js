import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTS
import Home from "../containers/home";
import Register from "./authentication/register";
import Login from "./authentication/login";
import Reset from "./authentication/reset_password";

import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/reset_password" component={Reset} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
