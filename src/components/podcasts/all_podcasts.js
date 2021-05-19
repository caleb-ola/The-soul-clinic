import React from "react";

import Card3 from "../reusable-components/card3";

import "./all_podcasts.css";

const AllPodcasts = () => {
  return (
    <section id="all-podcasts">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card3
              image={"/images/podcasts/podcast1.jpg"}
              title={"Soul wounds: heart break"}
              text={"Podcast subtitle stays here and can take full width"}
              icon={"far fa-play-circle"}
              button1={"Listen"}
              button2={"Romance"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card3
              image={"/images/podcasts/podcast2.jpg"}
              title={"Soul wounds: heart break"}
              text={"Podcast subtitle stays here and can take full width"}
              icon={"far fa-play-circle"}
              button1={"Listen"}
              button2={"Romance"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card3
              image={"/images/podcasts/podcast3.jpg"}
              title={"Soul wounds: heart break"}
              text={"Podcast subtitle stays here and can take full width"}
              icon={"far fa-play-circle"}
              button1={"Listen"}
              button2={"Romance"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card3
              image={"/images/podcasts/podcast4.jpg"}
              title={"Soul wounds: heart break"}
              text={"Podcast subtitle stays here and can take full width"}
              icon={"far fa-play-circle"}
              button1={"Listen"}
              button2={"Romance"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card3
              image={"/images/podcasts/podcast5.jpg"}
              title={"Soul wounds: heart break"}
              text={"Podcast subtitle stays here and can take full width"}
              icon={"far fa-play-circle"}
              button1={"Listen"}
              button2={"Romance"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card3
              image={"/images/podcasts/podcast6.jpg"}
              title={"Soul wounds: heart break"}
              text={"Podcast subtitle stays here and can take full width"}
              icon={"far fa-play-circle"}
              button1={"Listen"}
              button2={"Romance"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card3
              image={"/images/podcasts/podcast4.jpg"}
              title={"Soul wounds: heart break"}
              text={"Podcast subtitle stays here and can take full width"}
              icon={"far fa-play-circle"}
              button1={"Listen"}
              button2={"Romance"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card3
              image={"/images/podcasts/podcast5.jpg"}
              title={"Soul wounds: heart break"}
              text={"Podcast subtitle stays here and can take full width"}
              icon={"far fa-play-circle"}
              button1={"Listen"}
              button2={"Romance"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card3
              image={"/images/podcasts/podcast6.jpg"}
              title={"Soul wounds: heart break"}
              text={"Podcast subtitle stays here and can take full width"}
              icon={"far fa-play-circle"}
              button1={"Listen"}
              button2={"Romance"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllPodcasts;
