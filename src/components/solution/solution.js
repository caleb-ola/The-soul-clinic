import React from "react";

import Header from "../header";
import Footer from "../footer";
import Pagination from "../reusable-components/pagination";
import Heroes from "../reusable-components/heroes";
import AllSolutions from "./all_solutions";
import "./solution.css";

const Solution = () => {
  return (
    <div>
      <Header />
      <Heroes
        image={"/images/solutions/solution-header.png"}
        title={"Your Soul Solutions"}
        text={
          "Using a unique mix of mild-therapy, coaching, and counseling, with a biblical foundation and virtual means, we provide;"
        }
      />
      <AllSolutions />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Solution;
