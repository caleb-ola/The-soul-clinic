import React from "react";
import "./lead_coach.css";

const LeadCoach = () => {
  return (
    <section id="lead-coach">
      <div className="container">
        <div className="row">
          <div className="col col-lg-12 col-md-12 col-sm-12">
            <h3>Our Lead Coach</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {" "}
            <div className="soulful-video soulful-vid">
              <img
                src="images/about/lead-coach.jpg"
                alt="why the soul clinic i for you"
                classsName="image1 img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 soulful-text soulful-words">
            <div className="soulful-para">
              <p>
                Funmi Ayowole is a multidimensional woman and is happy to be
                recognized for a number of things, but mostly for her work in
                Emotional Health, her personally coined term - #SoulCoaching and
                her devotion to resuscitating the hearts of leaders back to
                vitality.
              </p>
              <p>
                Known as #YourSoulCoach, Funmi is a Speaker, Coach and Healing
                Facilitator who has been helping people identify and achieve
                their personal goals by combating issues that cause them stress,
                anxiety, and depression. Her mission is to consistently be a
                channel of restorative soul health to leaders through her
                passion, story, and skills.
              </p>
              <p>
                TFA as she is popularly known is also a communications
                professional with over 13 years of experience providing client
                leadership in the marketplace, working with a myriad of brands
                and clients, and most recently as an Account Manager in Toronto,
                Canada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadCoach;
