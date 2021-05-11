import React from "react";
import "./events.css";

const Events = () => {
  return (
    <section id="events">
      <div className="container">
        <div className="row">
          <div className="col coll col-lg-12 col-md-12 col-sm-12">
            <h3>
              We have loads of virtual events that you can attend or watch
              replays.
            </h3>
          </div>
        </div>
        <div className="row rowl">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div class="card mb-3 event-card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="images/event1.jpg"
                    alt="Event image"
                    className="img-fluid"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Introduction to #SoulCoaching</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                    <a href="#" class="btn btn-primary">
                      ATTEND <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div class="card mb-3 event-card">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src="images/event1.jpg"
                    alt="Event image"
                    className="img-fluid"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Introduction to #SoulCoaching</h5>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor
                    </p>
                    <a href="#" class="btn btn-primary">
                      ATTEND <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="faq-btn-container">
          <button className="btn faq-btn"> SEE ALL EVENTS</button>
        </div>
      </div>
    </section>
  );
};

export default Events;
