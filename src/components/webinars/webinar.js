import React from "react";

import Header from "../header";
import Footer from "../footer";
import Heroes from "../reusable-components/heroes";
import Pagination from "../reusable-components/pagination";
import AllWebinars from "./all_webinars";

import "./webinar.css";

const Webinar = () => {
  return (
    <div>
      <Header />
      <Heroes
        image={"/images/events/webinars-header.png"}
        title={"Events"}
        text={
          "Watch a replay of our past events that could help you along on your journey to wholeness."
        }
      />
      <AllWebinars />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Webinar;
