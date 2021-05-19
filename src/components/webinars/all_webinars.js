import React from "react";

import Card from "../reusable-components/card";
import "./all_webinars.css";

const AllWebinars = () => {
  return (
    <section id="all-webinars">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/events/video1.jpg"}
              title={"General Emotional Health"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
              }
              link={"#"}
              button={"Watch Now"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/events/video2.jpg"}
              title={"Specialized Emotional Health"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
              }
              link={"#"}
              button={"Watch Now"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/events/video3.jpg"}
              title={"Deep Soul Work"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
              }
              link={"#"}
              button={"Watch Now"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/events/video1.jpg"}
              title={"General Emotional Health"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
              }
              link={"#"}
              button={"Watch Now"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/events/video2.jpg"}
              title={"Specialized Emotional Health"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
              }
              link={"#"}
              button={"Watch Now"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/events/video3.jpg"}
              title={"Deep Soul Work"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
              }
              link={"#"}
              button={"Watch Now"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/events/video1.jpg"}
              title={"General Emotional Health"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
              }
              link={"#"}
              button={"Watch Now"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/events/video2.jpg"}
              title={"Specialized Emotional Health"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
              }
              link={"#"}
              button={"Watch Now"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/events/video3.jpg"}
              title={"Deep Soul Work"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
              }
              link={"#"}
              button={"Watch Now"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllWebinars;
