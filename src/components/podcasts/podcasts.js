import React from "react";

import Header from "../header";
import Footer from "../footer";
import Pagination from "../reusable-components/pagination";
import Heroes from "../reusable-components/heroes";
import AllPodcasts from "./all_podcasts";

import "./podcasts.css";

const Podcasts = () => {
  return (
    <div>
      <Header />
      <Heroes
        image={"/images/podcasts/podcast-header.png"}
        title={"Podcasts"}
        text={
          "We have curated some really inspiring podcasts ranging from identity to finance that could help you along on your journey to wholeness."
        }
      />
      <AllPodcasts />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Podcasts;
