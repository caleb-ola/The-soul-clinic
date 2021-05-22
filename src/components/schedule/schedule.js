import React, { useState } from "react";
import Calendary from "./calendar";
import ScheduleText from "./schedule_text";
import Header from "../header";

import "./schedule.css";

const Schedule = () => {
  return (
    <div>
      <Header />
      <section id="schedule">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <ScheduleText
                title={"Free 15mins Soul Coaching "}
                text={
                  "At absolutely no cost, you can gain 15-minute access to the listening and sympathetic ears of our coaches and get the right counsel for your mental and emotional wellbeing."
                }
                time={"15 minutes"}
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

export default Schedule;
