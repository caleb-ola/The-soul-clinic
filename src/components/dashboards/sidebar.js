import React from "react";

import "./sidebar.css";
const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="user-profile">
          <a className="user-profile-button" href="#home">
            {" "}
            <i className="fas fa-4x fa-user-circle"></i>{" "}
            <i className="fas fa-2x fa-plus-circle"></i>
          </a>
        </div>

        <a href="#news">
          <i className="fas fa-laptop-house"></i> Dashboard
        </a>
        <a href="#contact">
          <i className="fas fa-clipboard"></i> Quick Scan Result
        </a>
        <div className="logout-container">
          <a href="#logout">
            <i class="fas fa-sign-out-alt"></i> Logout
          </a>
        </div>
      </div>

      {/* <div className="content">
        <i class="fas fa-arrow-circle-right"></i>HELLOHJVGJGJFJGC
      </div> */}
    </div>
  );
};

export default Sidebar;
