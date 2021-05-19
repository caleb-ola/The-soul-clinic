import React from "react";

import "./nextPrev.css";

const NextPrev = () => {
  return (
    <section id="next-prev">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <a href="#">
              <div
                className="prev-container"
                style={{
                  backgroundImage: "url(/images/blog/blog1.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <p>PREVIOUS POST</p>
                <h4>
                  Post title stays here no matter how long or wide it is. It
                  should stay with...
                </h4>
              </div>
            </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <a href="#">
              <div
                className="prev-container"
                style={{
                  backgroundImage: "url(/images/blog/blog2.jpg)",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <p>NEXT POST</p>
                <h4>
                  Post title stays here no matter how long or wide it is. It
                  should stay with...
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextPrev;
