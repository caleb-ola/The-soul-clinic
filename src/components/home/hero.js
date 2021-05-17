import React from "react";
// JSX
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";

// CSS
import "./hero.css";

const app = () => {
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
        shouldAutoplay: true,
        shouldDisplayButtons: true,
        autoplayDuration: 5000,
        height: "550px",
      }}
    >
      <Slide
        className="slide "
        background={{
          backgroundImage: "images/hero11.jpg",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAnimation: "zoom",
        }}
      >
        <div className="hero-overlay">
          <h1> Healthy Minds, Shaping Lives</h1>
          <p>
            We have mastered the art of helping leaders overcome obstacles on
            their path to achieving personal and professional success.
          </p>
        </div>
        <div className="hero-button">
          <a href="/register" class="btn btn-lg  shadow-none hero-btn">
            GET STARTED
          </a>
        </div>
      </Slide>

      <Slide
        className="slide"
        background={{
          backgroundImage: "images/hero22.jpg",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAnimation: "zoom",
        }}
      >
        <div className="hero-overlay">
          <h1>How is your soul health today?</h1>
          <p>
            We have designed a simple scan to help you check your emotional
            ‘vital signs’ in just 7 minutes!
          </p>
        </div>
        <div className="hero-button">
          <button class="btn btn-lg shadow none hero-btn">
            TAKE A QUICK SCAN
          </button>
        </div>
      </Slide>

      <Slide
        className="slide"
        background={{
          backgroundImage: "images/hero33.jpg",
          //   background:
          //     "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(images/hero3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundAnimation: "zoom",
        }}
      >
        <div className="hero-overlay">
          <h1>
            Our support coaches are available to speak with you for 15 minutes
            at NO COST.
          </h1>
          <p>
            Sometimes, all you need is an empathetic ear and an experienced hand
            to guide you to success.
          </p>
        </div>
        <div className="hero-button">
          <button class="btn btn-lg shadow-none hero-btn">
            GET ON A FREE CALL
          </button>
        </div>
      </Slide>

      {/* <ButtonsNav
        isNullAfterThreshold
        position={{
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      /> */}
      <Nav
        position={{
          bottom: "38%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    </HeroSlider>
  );
};

export default app;
