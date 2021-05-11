import React from "react";
import "./why.css";

const Why = () => {
  return (
    <section id="why">
      <div className="container">
        <div className="row">
          <div className="col col-lg-12 col-md-12 col-sm-12">
            <h3>Why The Soul Clinic is For You</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {" "}
            <div className="soulful-video soulful-vid">
              <img
                src="images/why11.png"
                alt="why the soul clinic i for you"
                classsName="image1 img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 soulful-text soulful-words">
            <div className="soulful-para">
              <p>
                You might have soul wounds caused by past or present traumas,
                abuse, low-self-esteem, or self-hate. We are here to deliver a
                healing experience through #soulcoaching to you, virtually. Our
                experienced and sympathetic coaches are available and accessible
                to you 24/7, anywhere you are in the world.
              </p>
            </div>

            <div className="learn-btn">
              <button className="btn shadow-none learn-more-btn">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 soulful-text soulful-words">
            <h3>Join Us in Giving to this Cause </h3>
            <div className="soulful-para">
              <p>
                It breaks our hearts to see the statistics for various soul and
                mental health issues, rise. We want to do all we can to
                contribute to reducing these numbers. We provide a FREE 15 mins
                call to everyone, closing the economic gap.
              </p>
              <p>
                We request that you support this cause to ensure that it remains
                constantly available to anyone in need.
              </p>
            </div>

            <div className="learn-btn">
              <button className="btn shadow-none learn-more-btn">DONATE</button>
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

export default Why;
