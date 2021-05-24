import React from "react";

import Sidebar from "./sidebar";
import ReturnBar from "./return_bar";
import DashboardBody from "./dashboard_body";

import "./user_dashboard.css";
const UserDashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="content">
        <ReturnBar />
        <DashboardBody />
      </div>
    </div>
  );
};

export default UserDashboard;
