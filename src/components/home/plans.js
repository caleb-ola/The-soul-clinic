import React from "react";
import Card from "../reusable-components/card";

import "./plans.css";

const Plans = () => {
  return (
    <section id="plans">
      <div className="container">
        <div>
          <div className="row">
            <div className="col col-lg-10 col-md-12 col-sm-12">
              <h3>Your Solution for Mental and Emotional Healing</h3>
              <p>
                Using a unique mix of mild-therapy, coaching, and counseling,
                with a biblical foundation and virtual means, we provide;
              </p>
            </div>
            <div className="icons col-lg-2 col-md-12 col-sm-12">
              <button className="btn see-all-btn">SEE ALL</button>
            </div>
          </div>
          <div className="row card-row">
            <div className="card-col col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <Card
                image={"images/solution1.jpg"}
                title={"One-Off Coaching Sessions"}
                text={
                  "Our 1-hour virtual coaching will help you get rid of the overwhelm in your relationships, career, and family life."
                }
                button={"Yes! Schedule A Call"}
              />
            </div>
            <div className="card-col col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <Card
                image={"images/solution2.jpg"}
                title={"Free 15mins #SoulCoaching"}
                text={
                  "This virtual session allows you tounburden to a support coach, and get first-aid solutions and recommendations at absolutely no cost!"
                }
                button={"Book A Free Call"}
              />
            </div>
            <div className="card-col col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <Card
                image={"images/solution3.jpg"}
                title={"Soul Transformation with the Lead Coach"}
                text={
                  "Get the chance to speak with The Soul Coach herself. Each moment promises to be transformational."
                }
                button={"Schedule A Session"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
