import React from "react";
import "./Dashboard.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Metrics from "./Metrics";
import ActivityChart from "./ActivityChart";
import Goals from "./Goals";
import RecentOrders from "./RecentOrders";
import CustomerFeedback from "./CustomerFeedback";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="content flex-grow-1">
          <div className="container-fluid dashboard">
            <div className="row mb-3">
              <h4>Dashboard</h4>
            </div>
            <Metrics />
            <div className="row">
              <ActivityChart />
              <Goals />
            </div>
            <div className="row">
              <RecentOrders />
              <CustomerFeedback />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
