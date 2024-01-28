import { AiFillCaretRight } from "react-icons/ai"; 
import React from "react";
import "../Sidebar/Sidebar.css";
import { BiTrendingUp, BiCrown, BiBarChartAlt2 } from "react-icons/bi";
import Sidebardata from "../SidebarData/Sidebardata";
import User from "../Users/User";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="div1 div">
        <p className="users">
          All Users <span className="details" >DETAILS <AiFillCaretRight /> </span>
        </p>
        <p className="total">2,431,340</p>
      </div>
      <div className="SidebarData">
        <Sidebardata
          title="Total Earning"
          count="540,549"
          bg="#8676FF"
          icon={
            <BiTrendingUp
              size="25"
              color="white"
              style={{
                border: "2px solid white",
                borderRadius: "50%",
              }}
            />
          }
        />
        <Sidebardata
          title="Sales"
          count="1,205,677"
          bg="#66C8FF"
          icon={<BiCrown size="25" color="white" />}
        />
        <Sidebardata
          title="Purchase"
          count="48,430,039"
          bg="#FF9066"
          icon={<BiBarChartAlt2 size="25" color="white" />}
        />
      </div>
      <div className="percentage-circle">
        <User
          title="92,980"
          color="blue"
          user="Active Now"
          percentage="27%"
        />
        <User title="22,652" color="green" user="New Users" percentage="67%" />
      </div>
    </div>
  );
};

export default Sidebar;
