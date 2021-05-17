import React from "react";

import Header from "../header";
import Footer from "../footer";
import Heros from "../reusable-components/heros";
import Vision from "./vision";
import LeadCoach from "./lead_coach";
import Contacts from "./contacts";

import "./about.css";
import Partners from "./partners";

const About = () => {
  return (
    <div>
      <Header />
      <Heros
        title={"About Us"}
        image={"images/about/about-hero.png"}
        text={
          "The Soul Clinic is a company created to serve as a funnel for emotional health and mental rejuvenation. It is a platform that thrives on new media and communications technology to reach people globally."
        }
      />
      <Vision />
      <LeadCoach />
      <Partners />
      <Contacts />

      <Footer />
    </div>
  );
};

export default About;
