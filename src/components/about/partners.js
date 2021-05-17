import React from "react";
import "./partners.css";

import PartnerCard from "../reusable-components/partner_card";

const Partners = () => {
  return (
    <section id="partners">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 col-md-12 col-sm-12">
            <h3>Our Partners</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <PartnerCard
              image={"images/about/partner.png"}
              title={"Team member name"}
              text={
                "Some teaxt goes here to further explain role. Or maybe not needed? Let’s decide this"
              }
              role={"Member designation/role"}
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            {" "}
            <PartnerCard
              image={"images/about/partner.png"}
              title={"Team member name"}
              text={
                "Some teaxt goes here to further explain role. Or maybe not needed? Let’s decide this"
              }
              role={"Member designation/role"}
            />
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            {" "}
            <PartnerCard
              image={"images/about/partner.png"}
              title={"Team member name"}
              text={
                "Some teaxt goes here to further explain role. Or maybe not needed? Let’s decide this"
              }
              role={"Member designation/role"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
