import React from "react";

import PartnerCard from "../reusable-components/partner_card";

import "./all_coaches.css";

const AllCoaches = () => {
  return (
    <section id="all-coaches">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <PartnerCard
              image={"/images/coaches/Ellipse2.png"}
              title={"Counsellor’s name"}
              role={"Member designation/role"}
              text={
                "Some teaxt goes here to further explain role. Or maybe not needed? Let’s decide this."
              }
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <PartnerCard
              image={"/images/coaches/Ellipse3.png"}
              title={"Counsellor’s name"}
              role={"Member designation/role"}
              text={
                "Some teaxt goes here to further explain role. Or maybe not needed? Let’s decide this."
              }
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <PartnerCard
              image={"/images/coaches/Ellipse4.png"}
              title={"Counsellor’s name"}
              role={"Member designation/role"}
              text={
                "Some teaxt goes here to further explain role. Or maybe not needed? Let’s decide this."
              }
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <PartnerCard
              image={"/images/coaches/Ellipse2.png"}
              title={"Counsellor’s name"}
              role={"Member designation/role"}
              text={
                "Some teaxt goes here to further explain role. Or maybe not needed? Let’s decide this."
              }
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <PartnerCard
              image={"/images/coaches/Ellipse3.png"}
              title={"Counsellor’s name"}
              role={"Member designation/role"}
              text={
                "Some teaxt goes here to further explain role. Or maybe not needed? Let’s decide this."
              }
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <PartnerCard
              image={"/images/coaches/Ellipse4.png"}
              title={"Counsellor’s name"}
              role={"Member designation/role"}
              text={
                "Some teaxt goes here to further explain role. Or maybe not needed? Let’s decide this."
              }
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <PartnerCard
              image={"/images/coaches/Ellipse2.png"}
              title={"Counsellor’s name"}
              role={"Member designation/role"}
              text={
                "Some teaxt goes here to further explain role. Or maybe not needed? Let’s decide this."
              }
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <PartnerCard
              image={"/images/coaches/Ellipse3.png"}
              title={"Counsellor’s name"}
              role={"Member designation/role"}
              text={
                "Some teaxt goes here to further explain role. Or maybe not needed? Let’s decide this."
              }
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <PartnerCard
              image={"/images/coaches/Ellipse4.png"}
              title={"Counsellor’s name"}
              role={"Member designation/role"}
              text={
                "Some teaxt goes here to further explain role. Or maybe not needed? Let’s decide this."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCoaches;
