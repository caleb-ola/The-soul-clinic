import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTS
import Home from "../containers/home";
import Register from "../components/register";

import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={Register}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
