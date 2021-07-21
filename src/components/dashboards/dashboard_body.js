import React from "react";
import DashboardCard from "./dashboard_card";
import MeetingLog from "./meeting_log";
import Referral from "./referral";

import "./dashboard_body.css";
const DashboardBody = () => {
  return (
    <section id="dashboard-body">
      <div className="container">
        <h3>Dashboard</h3>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <DashboardCard
              title={"Take a quick scan"}
              text={
                "We have designed a simple scan to help you check your emotional ‘vital signs’ in just 7 minutes!"
              }
              icon={<i class="fas  fa-arrow-right"></i>}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <DashboardCard
              title={"Speak with the Lead Coach"}
              text={
                "Get the chance to speak with The Soul Coach herself. Each moment promises to be transformational."
              }
              icon={<i class="fas fa-volume-up"></i>}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <DashboardCard
              title={"Talk to a coach"}
              text={
                "Sometimes, all you need is an empathetic ear and an experienced hand to guide you to success."
              }
              icon={<i class="fas fa-volume-up"></i>}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <DashboardCard
              title={"Book a free call"}
              text={
                "We have designed a simple scan to help you check your emotional ‘vital signs’ in just 7 minutes!"
              }
              icon={<i class="fas fa-phone-volume"></i>}
            />
          </div>
        </div>
        <h3>Meeting Logs</h3>
        <div>
          <MeetingLog />
        </div>
        <h3>Referral</h3>
        <div>
          <Referral />
        </div>
      </div>
    </section>
  );
};

export default DashboardBody;
