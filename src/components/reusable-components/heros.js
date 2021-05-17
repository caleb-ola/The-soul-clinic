import React from "react";
// JSX
import HeroSlider, { Slide } from "hero-slider";

// CSS
import "./heroes.css";

const Heros = (props) => {
  return (
    <HeroSlider
      orientation="horizontal"
      initialSlide={1}
      onBeforeChange={(previousSlide, nextSlide) =>
        console.log("onBeforeChange", previousSlide, nextSlide)
      }
      onChange={(nextSlide) => console.log("onChange", nextSlide)}
      onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
      style={{
        backgroundColor: "#000",
      }}
      settings={{
        slidingDuration: 500,
        slidingDelay: 100,
        shouldAutoplay: false,
        shouldDisplayButtons: false,
        autoplayDuration: 5000,
        height: "500px",
      }}
    >
      <Slide
        className="slide "
        background={{
          backgroundImage: props.image,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAnimation: "zoom",
        }}
      >
        <div className="hero-overlay">
          <h1> {props.title}</h1>
          <p>{props.text}</p>
        </div>
      </Slide>
    </HeroSlider>
  );
};

export default Heros;
