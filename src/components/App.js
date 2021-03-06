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
import Faq from "./faq/faq";
import Coach from "./coach/coach";
import Webinar from "./webinars/webinar";
import Video from "./video/video";
import Ebooks from "./ebooks/ebooks";
import Podcasts from "./podcasts/podcasts";
import Solution from "./solution/solution";
import Schedule from "./schedule/schedule";
import ScheduleSoul from "./schedule/schedule_soul";
import ScheduleLead from "./schedule/schedule_lead";
import UserDashboard from "./dashboards/user_dashboard";
import UserDashboardDetails from "./dashboards/details";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/user_dashboard_details"
          component={UserDashboardDetails}
        />
        <Route path="/user_dashboard" component={UserDashboard} />
        <Route path="/schedule_lead" component={ScheduleLead} />
        <Route path="/schedule_soul" component={ScheduleSoul} />
        <Route path="/schedule15" component={Schedule} />
        <Route path="/solution" component={Solution} />
        <Route path="/podcasts" component={Podcasts} />
        <Route path="/ebooks" component={Ebooks} />
        <Route path="/videos" component={Video} />
        <Route path="/events" component={Webinar} />
        <Route path="/coaches" component={Coach} />
        <Route path="/faq" component={Faq} />
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
