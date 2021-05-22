import React, { useState } from "react";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "./calendar.css";

const Calendary = () => {
  const [date, setDate] = useState(new Date());
  const [dis, setDis] = useState(false);
  const [time, setTime] = useState();
  const [confirm, setConfirm] = useState({
    bookOne: "",
    bookTwo: "",
    bookThree: "",
    bookFour: "",
    bookFive: "",
    bookSix: "",
  });

  const onChange = (date) => {
    setDate(date);
    setDis(true);
    setConfirm({
      bookOne: "",
      bookTwo: "",
      bookThree: "",
      bookFour: "",
      bookFive: "",
      bookSix: "",
    });
    setTime(<div className="row">{date && date.toString()}</div>);
  };
  const confOne = () => {
    setConfirm({
      bookOne: <a className="btn  shadow-none book-btn">Book Now</a>,
      bookSix: "",
      bookThree: "",
      bookFour: "",
      bookFive: "",
      bookSix: "",
    });
  };
  const confTwo = () => {
    setConfirm({
      bookOne: "",
      bookTwo: <a className="btn  shadow-none book-btn">Book Now</a>,
      bookThree: "",
      bookFour: "",
      bookFive: "",
      bookSix: "",
    });
  };
  const confThree = () => {
    setConfirm({
      bookOne: "",
      bookTwo: "",
      bookThree: <a className="btn  shadow-none book-btn">Book Now</a>,
      bookFour: "",
      bookFive: "",
      bookSix: "",
    });
  };
  const confFour = () => {
    setConfirm({
      bookOne: "",
      bookTwo: "",
      bookThree: "",
      bookFour: <a className="btn  shadow-none book-btn">Book Now</a>,
      bookFive: "",
      bookSix: "",
    });
  };

  const confFive = () => {
    setConfirm({
      bookOne: "",
      bookTwo: "",
      bookThree: "",
      bookFour: "",
      bookFive: <a className="btn  shadow-none book-btn">Book Now</a>,
      bookSix: "",
    });
  };
  const confSix = () => {
    setConfirm({
      bookOne: "",
      bookTwo: "",
      bookThree: "",
      bookFour: "",
      bookFive: "",
      bookSix: <a className="btn  shadow-none book-btn">Book Now</a>,
    });
  };
  return (
    <div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <Calendar onClickDay={onChange} value={date} />
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-12"
          style={{ display: dis ? "block" : "none" }}
        >
          {time}
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-2">
              <a className="btn  shadow-none time-btn" onClick={confOne}>
                9:00AM
              </a>
              {confirm.bookOne}
            </div>
            <div className="col-lg-12 col-md-12 col-sm-2">
              <button className="btn  shadow-none time-btn" onClick={confTwo}>
                10:00AM
              </button>
              {confirm.bookTwo}
            </div>
            <div className="col-lg-12 col-md-12 col-sm-2">
              <a className="btn  shadow-none time-btn" onClick={confThree}>
                11:00AM
              </a>
              {confirm.bookThree}
            </div>
            <div className="col-lg-12 col-md-12 col-sm-2">
              <button className="btn  shadow-none time-btn" onClick={confFour}>
                12:00PM
              </button>
              {confirm.bookFour}
            </div>
            <div className="col-lg-12 col-md-12 col-sm-2">
              <a className="btn  shadow-none time-btn" onClick={confFive}>
                1:00PM
              </a>
              {confirm.bookFive}
            </div>
            <div className="col-lg-12 col-md-12 col-sm-2">
              <button className="btn  shadow-none time-btn" onClick={confSix}>
                2:00PM
              </button>
              {confirm.bookSix}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendary;
