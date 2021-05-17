import React from "react";
import "./partner_card.css";
const PartnerCard = (props) => {
  return (
    <div className="card partner-card" style={{ width: "18rem;" }}>
      <img src={props.image} className="partner-image" alt="partner image" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="role">{props.role}</p>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
};

export default PartnerCard;
