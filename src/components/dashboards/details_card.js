import React from "react";

import "./details_card.css";

const DetailsCard = () => {
  return (
    <section id="dashboard-body">
      <div className="container">
        <div id="details-card">
          <h3>More Details</h3>
          <div className="details-card">
            <h5>Coach's Details</h5>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3 coach-image-container">
                    <img src="images/vector.png" />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 coach-title-container">
                    <h6>Dayo Salako</h6>
                    <p>Family Coach</p>
                  </div>
                </div>
                <div className="coach-title-paragraph">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <h5>Meeting's Details</h5>
            <div className="row timing">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <p>
                  {" "}
                  <i class="far fa-calendar-alt"></i> {"  "} 21st March, 2022
                </p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <p>
                  <i class="far fa-clock"></i> {"  "} 13:00 - 14:00
                </p>
              </div>
            </div>
            <a className="btn detail-btn">Start Meeting</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsCard;
