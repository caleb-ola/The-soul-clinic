import React from "react";

import Sidebar from "./sidebar";
import ReturnBar from "./return_bar";
import DetailsCard from "./details_card";

import "./details.css";
const Details = () => {
  return (
    <section>
      <div>
        <Sidebar />
        <div className="content">
          <ReturnBar />
          <DetailsCard />
        </div>
      </div>
    </section>
  );
};

export default Details;
