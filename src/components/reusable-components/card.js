import React from "react";

const Card = (props) => {
  return (
    <div class="card" style={{ width: "18rem;" }}>
      <img src={props.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.text}</p>
        <a href="#" class="btn btn-primary">
          {props.button}
          <i class="fas fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Card;