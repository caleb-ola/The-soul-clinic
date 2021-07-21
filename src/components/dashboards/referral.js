import React from "react";

import "./referral.css";

const Referral = () => {
  return (
    <section id="referral">
      <div className="referral-container">
        <h6>Invite your friends to the platform</h6>
      </div>
      <div className="referral-content">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <a className="btn shadow-none referral-btn">
              https://www.pinterest.com/pin/70791025379912764/
            </a>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <a className=" btn shadow-none referral-btn-two">COPY LINK</a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className="or">
              <p>or </p>{" "}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <p>Select a platform to invite your friends</p>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12 referral-socials">
            <div className="hero-socials">
              <ul className="social">
                <li>
                  <a className="list-instal">
                    <i class="fab fa-instagram rnd"></i>
                  </a>
                </li>
                <li>
                  <a className="list-twitterr">
                    <i class="fab fa-twitter rnd"></i>
                  </a>
                </li>
                <li>
                  <a className="list-faceb">
                    <i class="fab fa-facebook-f rnd"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referral;
