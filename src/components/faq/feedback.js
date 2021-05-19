import React from "react";

import "./feedback.css";

const Feedback = () => {
  return (
    <section id="feedback">
      <div className="container contain">
        <div className="row ">
          <div className="col faq-header">
            <h3>
              Can’t find what you’re looking for? You can drop us a message.
            </h3>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 colla">
              <div>
                <label for="fname">First name</label>
              </div>
              <input type="text" className="fname ffaq" id="fname" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 collb">
              <div>
                <label for="fname">Last name</label>
              </div>
              <input type="text" className="lname ffaq" id="lname" />
            </div>
          </div>
          <div className="row">
            <label for="email">Email address</label>
            <input type="email" className="email ffaq" id="email" />
          </div>
          <div className="row">
            <label for="message">Message</label>
            <textarea
              className="message ffaq"
              id="message"
              placeholder="Type your message here"
            ></textarea>
          </div>
          <a href="#" className="btn faqi-btn shadow-none">
            {" "}
            SUBMIT MESSAGE
          </a>
        </form>
      </div>
    </section>
  );
};

export default Feedback;
