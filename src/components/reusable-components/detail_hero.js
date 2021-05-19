import React from "react";
// JSX
import HeroSlider, { Slide } from "hero-slider";

// CSS
import "./detail_hero.css";

const DetailHero = (props) => {
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
        height: "400px",
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
        <div className="detail-hero-overlay">
          <p>{props.text}</p>
          <h1> {props.title}</h1>
          <div className="author-image-container">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-12 ">
                <img
                  src={props.imageTwo}
                  alt="author's image"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-10 col-md-10 col-sm-12 author-details-container">
                <p>{props.author}</p>
                <p>{props.date}</p>
                <div className="hero-socials">
                  <ul className="social">
                    <li>
                      <a className="list-insta">
                        <i class="fab fa-instagram rnd"></i>
                      </a>
                    </li>
                    <li>
                      <a className="list-twitter">
                        <i class="fab fa-twitter rnd"></i>
                      </a>
                    </li>
                    <li>
                      <a className="list-fb">
                        <i class="fab fa-facebook-f rnd"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
    </HeroSlider>
  );
};

export default DetailHero;
