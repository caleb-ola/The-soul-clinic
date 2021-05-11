import React, { useState, useEffect } from "react";

import Testifier from "../reusable-components/testifier";
import "./testimonial.css";

const Testimonial = () => {
  const [testimony, setTestimony] = useState();
  const [testire, setTestire] = useState({
    person1: "active",
    person2: "",
    person3: "",
  });

  const testifier1 = () => {
    setTestire({ person1: "active", person2: "", person3: "" });
    setTestimony(
      <div className="testimonial-text">
        <h3>I’m Totally Different…</h3>
        <div className="testimonial-para">
          <p>
            The woman I am at the moment is different from the woman I was at
            the start of the #SoulCoaching program. I’ll say I’ve learned,
            unlearned, and relearned. It was learning made easy because there
            were other folks too on their lows and it gave me peace to realize
            that I wasn’t alone going through the worst in life. Coach TFA is
            accommodating, attentive, kind, sweet, diplomatic, and vulnerable.
          </p>
          <p>
            She did not make us feel like outcasts, but rather shared her own
            stories too. She was so in sync with everyone in the group. Overall,
            I feel great, I have started saying my Affirmations and I will
            always put to practice all I’ve learned from Coach TFA and the
            friends I made during the program. Thank you for having us!
          </p>
        </div>
      </div>
    );
  };
  const testifier2 = () => {
    setTestire({ person1: "", person2: "active", person3: "" });
    setTestimony(
      <div className="testimonial-text">
        <h3>I LOVE WHAT THEY DO</h3>
        <div className="testimonial-para">
          <p>
            It was learning made easy because there were other folks too on
            their lows and it gave me peace to realize that I wasn’t alone going
            through the worst in life. Coach TFA is accommodating, attentive,
            kind, sweet, diplomatic, and vulnerable.
          </p>
          <p>
            She was so in sync with everyone in the group. I feel great, She did
            not make us feel like outcasts, but rather shared her own stories
            too. I have started saying my Affirmations and I will always put to
            practice all I’ve learned from Coach TFA and the friends I made
            during the program. Thank you for having us!
          </p>
        </div>
      </div>
    );
  };
  const testifier3 = () => {
    setTestire({ person1: "", person2: "", person3: "active" });
    setTestimony(
      <div className="testimonial-text">
        <h3>AWESOME AND FACINATING</h3>
        <div className="testimonial-para">
          <p>
            I’ll say I’ve learned, unlearned, and relearned. It was learning
            made easy because there were other folks too on their lows and it
            gave me peace to realize that I wasn’t alone going through the worst
            in life. Coach TFA is accommodating, attentive, kind, sweet,
            diplomatic, and vulnerable.
          </p>
          <p>
            She did not make us feel like outcasts, but rather shared her own
            stories too. She was so in sync with everyone in the group. Overall,
            I feel great, I have started saying my Affirmations and I will
            always put to practice all I’ve learned from Coach TFA and the
            friends I made during the program. Thank you for having us!
          </p>
        </div>
      </div>
    );
  };

  useEffect(() => {
    return testifier1();
  }, []);
  return (
    <section id="testimonial">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 col-md-12 col-sm-12">
            <h3>How our clients’ lives are being changed</h3>
            <p>
              Hear from real people who have successfully navigated difficult
              times.
            </p>
          </div>
          <div className="icons col-lg-2 col-md-12 col-sm-12">
            {/* <i class="fas fa-chevron-circle-left fa-2x"></i>
            <i class="fas fa-chevron-circle-right fa-2x"></i> */}
            <button className="btn shadow-none see-all-btn">SEE ALL</button>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
            <nav className="navbar navbar-expand navbar-light new-Nav">
              <div className="mx-auto" id="">
                <ul className="navbar-nav navi nav-fill w-100  mx-auto navbar-dark">
                  <li className={`nav-item new-item ${testire.person1}`}>
                    <button className="nav-link naval " onClick={testifier1}>
                      <div className="power">
                        <Testifier
                          image={"images/testifier1.png"}
                          name={"Ifeoluwanimi Olubodun"}
                          text={"Group #SoulCoaching Client"}
                        />
                      </div>
                    </button>
                  </li>
                  <li className={`nav-item new-item ${testire.person2} `}>
                    <button className={`nav-link naval `} onClick={testifier2}>
                      <div className="power">
                        <Testifier
                          image={"images/testifier2.png"}
                          name={"Ifeoluwanimi Olubodun"}
                          text={"Group #SoulCoaching Client"}
                        />{" "}
                      </div>
                    </button>
                  </li>
                  <li className={`nav-item new-item naval3 ${testire.person3}`}>
                    <button className={`nav-link naval  `} onClick={testifier3}>
                      <div className="power">
                        <Testifier
                          image={"images/testifier3.png"}
                          name={"Ifeoluwanimi Olubodun"}
                          text={"Group #SoulCoaching Client"}
                        />{" "}
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="testy col-xl-7 col-lg-7 col-md-12 col-sm-12">
            {testimony}
          </div>
        </div>

        <div className="row"></div>
      </div>
    </section>
  );
};

export default Testimonial;
