import React, { useState } from "react";
import Calendary from "./calendar";
import ScheduleText from "./schedule_text";
import Header from "../header";

import "./schedule.css";

const ScheduleSoul = () => {
  return (
    <div>
      <Header />
      <section id="schedule">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <ScheduleText
                title={"An Hour Individual Soul Coaching  "}
                text={
                  "Using a holistic approach to healing for your mind, will, and emotions with tools to equip you for freedom in your future, we designed this transformational session with our experienced coaches, just for you."
                }
                time={"1 Hour"}
                coach={"Mental Health Coach"}
                timeZone={"(GMT + 1) West Central Africa"}
              />
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
              <Calendary />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScheduleSoul;
