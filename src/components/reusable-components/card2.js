import React from "react";

import "./card.css";
const Card = (props) => {
  return (
    <div class="card" style={{ width: "18rem;" }}>
      <img src={props.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.text}</p>
        <a href={props.link} class="btn btn-primary shadow-none">
          {`${props.button} `}
          <i class={props.icon}></i>
        </a>
      </div>
    </div>
  );
};

export default Card;
