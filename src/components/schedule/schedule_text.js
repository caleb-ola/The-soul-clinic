import React from "react";

import "./schedule_text.css";

const ScheduleText = (props) => {
  return (
    <div className="schedule-text">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <p>
        <i class="far fa-clock"></i>
        {props.time}
      </p>

      {props.coach && (
        <p>
          <i class="fas fa-brain"></i>
          {props.coach}
        </p>
      )}
      <p>
        <i class="fas fa-globe-africa"></i>
        {props.timeZone}
      </p>
    </div>
  );
};

export default ScheduleText;
