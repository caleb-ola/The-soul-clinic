import React, { useState } from "react";
import Calendary from "./calendar";
import ScheduleText from "./schedule_text";
import Header from "../header";

import "./schedule.css";

const ScheduleLead = () => {
  return (
    <div>
      <Header />
      <section id="schedule">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <ScheduleText
                title={"Soul Transformation with the Lead Coach "}
                text={
                  "Get the chance to speak with The Soul Coach herself. Each moment promises to be transformational, here is one you don't want to miss."
                }
                time={"1 Hour"}
                coach={"Lead Coach Session"}
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

export default ScheduleLead;
