import React from "react";

import "./details.css";

const Details = (props) => {
  return (
    <section id="details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 left-detail">
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <img src={props.imageTwo} alt="post image" className="img-fluid" />
            <h4>{props.subhead}</h4>
            <p>{props.textTwo}</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 right-detail">
            <img
              src={props.image}
              alt="blog post image two"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
