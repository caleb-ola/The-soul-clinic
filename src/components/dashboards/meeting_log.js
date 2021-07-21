import React, { useState, useEffect } from "react";

// import Bounce from "react-reveal/Bounce";
import MeetingContent from "./meeting_content";
import "./meeting_log.css";

const MeetingLog = () => {
  const [detail, setDetail] = useState();
  const [day, setDay] = useState({
    dayOne: "active",
    dayTwo: "",
    dayThree: "",
  });

  const showDayOne = () => {
    setDay({
      dayOne: "active",
      dayTwo: "",
      dayThree: "",
    });
    setDetail(
      <div>
        <MeetingContent name={"Dr. John Doe"} />
      </div>
    );
  };
  useEffect(() => {
    return showDayOne();
  }, []);

  const showDayTwo = () => {
    setDay({
      dayOne: "",
      dayTwo: "active",
      dayThree: "",
    });

    setDetail(
      <div>
        {" "}
        <MeetingContent name={"Dayo Salako"} />
      </div>
    );
  };

  return (
    <section id="meeting-log">
      <div className="focus">
        <nav className="navbar navbar-expand  navbar-light new-Nav">
          <div className="ml-auto" id="">
            <ul className="navbar-nav  nav-fill w-100  mx-auto navbar-dark">
              <li className={`nav-item new-item ${day.dayOne}`}>
                <button className="nav-link naval " onClick={showDayOne}>
                  <div className="power">Previous meeting</div>
                </button>
              </li>
              <li className={`nav-item new-item ${day.dayTwo}`}>
                <button className={`nav-link naval `} onClick={showDayTwo}>
                  <div className="power">Upcoming meeting</div>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        {detail}
      </div>
    </section>
  );
};

export default MeetingLog;
