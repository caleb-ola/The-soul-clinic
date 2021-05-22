import React from "react";

import "./schedule_text.css";

const ScheduleText = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <p>{props.time}</p>
      <p>{props.timeZone}</p>
    </div>
  );
};

export default ScheduleText;
