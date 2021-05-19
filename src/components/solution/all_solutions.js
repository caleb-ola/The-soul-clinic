import React from "react";

import Card from "../reusable-components/card";
import "./all_solutions.css";

const AllSolutions = () => {
  return (
    <section id="all-solution">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/solutions/solution1.jpg"}
              title={"One-Off Coaching Sessions"}
              text={
                "Our 1-hour virtual coaching will help you get rid of the overwhelm in your relationships, career, and family life."
              }
              link={"#"}
              button={"Yes! Schedule A Call"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/solutions/solution2.jpg"}
              title={"Free 15mins #SoulCoaching"}
              text={
                "This virtual session allows you tounburden to a support coach, and get first-aid solutions and recommendations at absolutely no cost!"
              }
              link={"#"}
              button={"Book A Free Call"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/solutions/solution3.jpg"}
              title={"Soul Transformation with the Lead Coach"}
              text={
                "Get the chance to speak with The Soul Coach herself. Each moment promises to be transformational."
              }
              link={"#"}
              button={"Schedule A Session"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/solutions/solution4.jpg"}
              title={"Group Coaching Programmes"}
              text={
                "Our group coaching comprises 7 weeks of Zoom live sessions, made up of 7-8 participants includes counselling, guided meditation, sharing real stories with the coach."
              }
              link={"#"}
              button={"Count Me In"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/solutions/solution5.jpg"}
              title={"Individual #SoulCoaching Programmes"}
              text={"Individual #SoulCoaching Programmes"}
              link={"#"}
              button={"I Want Soul Healing"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/solutions/solution6.jpg"}
              title={"Email Courses"}
              text={
                "Delivered right to your inbox, will be daily guides for meditation and journalingIndividual #SoulCoaching Programmes"
              }
              link={"#"}
              button={"Send Me Guides"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/solutions/solution7.jpg"}
              title={"Social Media Content"}
              text={
                "We provide you with videos, podcasts, tips, and education on how to grow in emotional maturity and mental well-being."
              }
              link={"#"}
              button={"Connect on IG"}
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Card
              image={"/images/solutions/solution8.jpg"}
              title={"The Soul Health QuickScan"}
              text={
                "Take an 8-min survey whose results will help you see exactly where your pain points lie."
              }
              link={"#"}
              button={"Assess My Soul Health"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllSolutions;
