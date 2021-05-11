import React from "react";

import "./faq.css";

const Faq = () => {
  return (
    <section id="faq">
      <div className="container">
        <div className="row ">
          <div className="col faq-header ">
            <h3>Frequently Asked Questions</h3>
          </div>
        </div>
        <div className="row faqs1">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div class="dropdown">
              <button
                class="btn shadow-none dropdown-toggle drp-down"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Can I book the same coach twice?
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Answer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div class="dropdown">
              <button
                class="btn  shadow-none dropdown-toggle drp-down"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Which coaches handle the sessions?
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row faqs2">
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div class="dropdown">
              <button
                class="btn shadow-none dropdown-toggle drp-down"
                type="button"
                id="dropdownMenuButton3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                What time zones does the platform use?
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Answer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div class="dropdown">
              <button
                class="btn shadow-none dropdown-toggle drp-down"
                type="button"
                id="dropdownMenuButton4"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Which coaches handle the sessions?
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" href="#">
                    Answer
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="faq-btn-container">
          <button className="btn shadow-none faq-btn"> SEE MORE</button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
