import React from "react";

import "./meeting_content.css";

const MeetingContent = (props) => {
  return (
    <div>
      <div className="row filter-row">
        <div className="col-lg-3 col-md-4 col-sm-6 filter-container">
          <div class="dropdown">
            <button
              class="btn shadow-none dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter by Coach type
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
        <div className="col-lg-3 col-md-4 col-sm-6 filter-container">
          <div class="dropdown">
            <button
              class="btn shadow-none dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Filter by Date
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

      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Meeting Date</th>
              <th scope="col">Meeting Information</th>
              <th scope="col">More Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>21st March, 2022</td>
              <td>Meeting with {props.name}</td>
              <td colspan="4">
                <a
                  href="/user_dashboard_details"
                  className="btn shadow-none table-btn"
                >
                  See More
                </a>
              </td>
            </tr>
            <tr>
              <td>21st March, 2022</td>
              <td>Meeting with {props.name}</td>
              <td colspan="4">
                {" "}
                <a
                  href="/user_dashboard_details"
                  className="btn shadow-none table-btn"
                >
                  See More
                </a>
              </td>
            </tr>
            <tr>
              <td>21st March, 2022</td>
              <td>Meeting with {props.name}</td>
              <td colspan="4">
                {" "}
                <a
                  href="/user_dashboard_details"
                  className="btn shadow-none table-btn"
                >
                  See More
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MeetingContent;
