import React from "react";

import "./vision.css";

const Vision = () => {
  return (
    <section id="vision">
      <div className="container">
        <div className="row">
          <div className="col col-lg-12 col-md-12 col-sm-12">
            {/* <h3>Why The Soul Clinic is For You</h3> */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {" "}
            <div className="soulful-video soulful-vid">
              <img
                src="images/about/about1.png"
                alt="why the soul clinic i for you"
                classsName="image1 img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 soulful-text soulful-words">
            <h3>OUR VISION</h3>

            <div className="soulful-para">
              <p>
                The Soul Clinic will be a global champion of restoration, with a
                network of soul coaches, accessible 24/7, equipping and
                nurturing the hearts of leaders back to vitality, achieving a
                ripple effect in the family, community, marketplace, and all
                spheres of influence.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 soulful-text soulful-words">
            <h3>WHAT WE DO</h3>
            <div className="soulful-para">
              <p>
                The Soul Clinic is a #SoulCoaching company that leverages
                technology to provide tools for emotional healing and mental
                clarity – to ensure that leaders are not held back by past pains
                and trauma.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="soulful-video soulful-vid">
              <img
                src="images/why33.png"
                alt="why the soul clinic i for you"
                classsName="image1 img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
