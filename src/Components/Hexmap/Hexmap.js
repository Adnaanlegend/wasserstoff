import React from "react";
import "../Hexmap/Hexmap.css";
import Heximg2 from "../Hexmap/Heximg2.jpg";

const Hexmap = () => {
 
  return (
    <div className="map">
      <img className="hex" src={Heximg2} alt="Your Image" />
    </div> 
  );
};

export default Hexmap;
