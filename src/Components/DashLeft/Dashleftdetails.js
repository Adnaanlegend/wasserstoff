import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";
import React from "react";
import "../DashLeft/Dashleftdetails.css";
import { RiCopperDiamondLine } from "react-icons/ri";

const Dashleftdetails = () => {
  return (
    <div className="SidebardetailData">
      <p className="headingDesign">Design Faster</p>

      <div className="circle-earning">
        <div className="circles item-center">
          <div className="outercircle item-center">
            <div className="circles inner-bar item-center">
              <div className="innercircle item-center">
                <div className="innermostcircle item-center">
                  <RiCopperDiamondLine size="30" color="#8676FF" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="circle">
          <div class="bar"></div>
          <div class="box">
            <span></span>
          </div>
        </div>
        <p className="total-title">Total earning</p>
        <p className="updown">
          $12,875
          <span className="arrow-up">
          <AiFillCaretUp /> 2% up
          </span>
        </p>
        <p className="compare">Compared to $21,504 last year</p>
        <div className="types">
          <div>
            <span className="type-name">Travel</span>{" "}
            <span className="type-count">852</span>
            <svg
              width="68"
              height="13"
              viewBox="0 0 68 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3C8.62687 3 7.61194 12 17.7612 12C27.9104 12 25.3731 5 34 5C42.6269 5 44.5157 1 51.2537 1C57.7936 1 59.3731 10.5 68 10.5"
                stroke="#8676FF"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <span className="type-name">Presentation</span>{" "}
            <span className="type-count">753</span>
            <svg
              width="68"
              height="13"
              viewBox="0 0 68 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3C8.62687 3 7.61194 12 17.7612 12C27.9104 12 25.3731 5 34 5C42.6269 5 44.5157 1 51.2537 1C57.7936 1 59.3731 10.5 68 10.5"
                stroke="#FF708B"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <span className="type-name">Research</span>{" "}
            <span className="type-count">553</span>
            <svg
              width="68"
              height="13"
              viewBox="0 0 68 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3C8.62687 3 7.61194 12 17.7612 12C27.9104 12 25.3731 5 34 5C42.6269 5 44.5157 1 51.2537 1C57.7936 1 59.3731 10.5 68 10.5"
                stroke="#FFBA69"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-blue">
        <div className="blue-bottom-border">
          <p style={{ fontSize: "0.8rem" }}>Total earning</p>
          <p style={{ fontSize: "1.4rem" }}>
            $12,875
            <span className="arrow arrow-up">
            <AiFillCaretUp /> &nbsp;10% up
            </span>
          </p>
          <p className="compare" style={{ fontSize: "0.7rem", opacity: "0.8" }}>
            Compared to $21,504 last year
          </p>
        </div>
        <div>
          <p style={{ fontSize: "0.8rem" }}>Sales</p>
          <p style={{ fontSize: "1.4rem" }}>
            $43,123
            <span className="arrow arrow-up">
              <i class="fa-solid fa-caret-up"></i>&nbsp;12% up
            </span>
          </p>
          <p className="compare" style={{ fontSize: "0.7rem", opacity: "0.8" }}>
            Compared to $21,504 last year
          </p>
        </div>
      </div>

      <div className="types acc-data">
        <div>
          <span className="name">Travel</span>{" "}
          <span className="acc-count">760</span>
          <span>2,540</span>
          <span className="arrow-up">
            <AiFillCaretUp />
          </span>
        </div>
        <div>
          <span className="name">Presentation</span>{" "}
          <span className="acc-count">650</span>
          <span>2,307</span>
          <span className="arrow-down">
            <AiFillCaretDown />
          </span>
        </div>
        <div>
          <span className="name">Research</span>{" "}
          <span className="acc-count">612</span>
          <span>2,140</span>
          <span className="arrow-up">
            <AiFillCaretUp />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashleftdetails;
