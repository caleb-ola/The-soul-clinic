import React from "react";

import Card from "../reusable-components/card";
import "./all_videos.css";

const AllVideos = () => {
  return (
    <section id="all-videos">
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

export default AllVideos;
