import React from "react";

import Header from "../header";
import Footer from "../footer";
import Heroes from "../reusable-components/heroes";
import Pagination from "../reusable-components/pagination";
import AllCoaches from "./all_coaches";

import "./coach.css";

const Coach = () => {
  return (
    <div>
      <Header />
      <Heroes
        image={"/images/coaches/coaches-header.png"}
        title={"Coaches"}
        text={
          "Sometimes, all you need is an empathetic ear and an experienced hand to guide you to success."
        }
      />
      <AllCoaches />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Coach;
