import React from "react";

import "./dashboard_card.css";
const DashboardCard = (props) => {
  return (
    <div id="#dash-card" className="dash-card">
      <div className="row">
        <h5>{props.title}</h5>
        <div className="col-lg-8 col-md-8 col-sm-8 card-content">
          <p>{props.text}</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 card-icon">{props.icon}</div>
      </div>
    </div>
  );
};

export default DashboardCard;
