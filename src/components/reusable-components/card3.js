import React from "react";

import "./card.css";
const Card = (props) => {
  return (
    <div class="card" style={{ width: "18rem;" }}>
      <img src={props.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.text}</p>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 listen">
            <a href={props.link} class="btn btn-primary shadow-none">
              <i class={props.icon}></i>
              {`  ${props.button1} `}
            </a>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 category">
            <p class="cat">{`${props.button2} `}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;