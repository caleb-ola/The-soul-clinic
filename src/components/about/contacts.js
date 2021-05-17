import React from "react";

import "./contacts.css";

const Contacts = () => {
  return (
    <section id="contacts">
      <div className="container">
        <div className="row">
          <div className=" contact col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <h3 className="">Phone</h3>
            <p>+7 (885) 589 69 85</p>
          </div>
          <div className=" contact col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <h3>Email</h3>
            <p>thesoulclinic101@gmail.com</p>
          </div>
          <div className="contact col-xl-4 col-lg-4 col-md-4 col-sm-12">
            <h3>Headquater</h3>
            <p>Greensborough Village Circle, Markham ON. L6E1M4, Canada</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
