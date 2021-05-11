import React from "react";

import "./soulful.css";

const Soulful = () => {
  return (
    <section id="soulful">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            {" "}
            <div className="soulful-video">
              <video controls>
                <source src="movie.mp4" type="video/mp4" />
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 soulful-text">
            <h3>Dear Soulful One,</h3>
            <div className="soulful-para">
              <p>
                Have you gone through trauma, abuse, or a bad breakup? Or do you
                struggle with self-hate or low self-esteem and you desperately
                need a hand?
              </p>
              <p>
                In case you are wondering if what you need is a therapist, a
                counselor, a coach, or just simply a shoulder to cry on. We
                recommend The Soul Health Quick Scan, which will help you check
                your emotional ‘vital signs’, as a great place to start.
              </p>
            </div>

            <div className="soulful-btn">
              <button className="btn donate-btn">CHECK MY SOUL HEALTH</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Soulful;
