import React from "react";

import Header from "../header";
import Footer from "../footer";
import Pagination from "../reusable-components/pagination";
import Heroes from "../reusable-components/heroes";
// import All from "../reusable-components/all";
import AllEbooks from "./all_ebooks";

import "./ebooks.css";

const Ebooks = () => {
  return (
    <div>
      <Header />
      <Heroes
        image={"images/ebooks/ebooks-header.png"}
        title={"ebooks"}
        text={
          "We have curated some really inspiring books that could help you along on your journey to wholeness."
        }
      />
      <AllEbooks />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Ebooks;
