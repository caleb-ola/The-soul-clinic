import React from "react";

import Card from "./card";
import "./all.css";

const All = (props) => {
  return (
    <section id="all">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/videos/video4.jpg"}
              title={"Video title stays here and can take full width"}
              text={"Video subtitle stays here and can take full width"}
              link={"#"}
              button={"Watch Now"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/videos/video5.jpg"}
              title={"Video title stays here and can take full width"}
              text={"Video subtitle stays here and can take full width"}
              link={"#"}
              button={"Watch Now"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/videos/video6.jpg"}
              title={"Video title stays here and can take full width"}
              text={"Video subtitle stays here and can take full width"}
              link={"#"}
              button={"Watch Now"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/videos/video4.jpg"}
              title={"Video title stays here and can take full width"}
              text={"Video subtitle stays here and can take full width"}
              link={"#"}
              button={"Watch Now"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/videos/video5.jpg"}
              title={"Video title stays here and can take full width"}
              text={"Video subtitle stays here and can take full width"}
              link={"#"}
              button={"Watch Now"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/videos/video6.jpg"}
              title={"Video title stays here and can take full width"}
              text={"Video subtitle stays here and can take full width"}
              link={"#"}
              button={"Watch Now"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/videos/video4.jpg"}
              title={"Video title stays here and can take full width"}
              text={"Video subtitle stays here and can take full width"}
              link={"#"}
              button={"Watch Now"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/videos/video5.jpg"}
              title={"Video title stays here and can take full width"}
              text={"Video subtitle stays here and can take full width"}
              link={"#"}
              button={"Watch Now"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/videos/video6.jpg"}
              title={"Video title stays here and can take full width"}
              text={"Video subtitle stays here and can take full width"}
              link={"#"}
              button={"Watch Now"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default All;
