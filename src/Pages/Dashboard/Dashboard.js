import React from "react";
import "../Dashboard/Dashboard.css"
import Dashleftdetails from "../../Components/DashLeft/Dashleftdetails";
import BubblesChart from "../../Components/Dashright/Dashright";

const Dashboard = () => {
    return (
        <div className="content-wrapper dashboard-wrapper">
          <div className="container-wrapper">
            <Dashleftdetails />
            <BubblesChart />
          </div>
        </div>
      );
};

export default Dashboard;
