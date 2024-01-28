import React from "react";
import "../Home/Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Hexmap from "../Hexmap/Hexmap";
import Salesfigure from "../Salesfigure/Salesfigure";

const Home = () => {
  return (
    <div className="content-wrapper home-wrapper">
      <div className="container-wrapper">
        <Sidebar />
        <Hexmap />
    </div>
    <Salesfigure />
    </div>
  );
};

export default Home;
