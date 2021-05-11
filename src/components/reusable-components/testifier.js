import React from "react";

const Testifier = (props) => {
  return (
    <div className="testifier">
      <div className="row">
        <div className="left col-lg-3 col-md-12 col-sm-12">
          <img src={props.image} alt="testimonial image" />
        </div>
        <div className="right col-lg-8 col-md-12 col-sm-12">
          <h6>{props.name}</h6>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Testifier;
