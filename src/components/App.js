import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// COMPONENTS
import Home from "../containers/home";
import Register from "./authentication/register";
import Login from "./authentication/login";
import Reset from "./authentication/reset_password";
import About from "./about/about";
import Blog from "./blog/blog";
import BlogDetails from "./blog/blog_details";

import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/blog/blog_details" component={BlogDetails} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/reset_password" component={Reset} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
