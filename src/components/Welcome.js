import React from "react";
import Header from "./Header.js";
import Desktop from "../assets/svgs/developer-dark.svg";
import Wave from "../assets/svgs/wave.svg";
import { Link } from "react-router-dom";

const Welcome = ({ setScrolled }) => {
  return (
    <div className="welcome-container">
      <Header setScrolled={setScrolled} />
      <div className="home-welcome">
        <div className="home-welcome-left hide move-in">
          <div>
            <h1 className="welcome-text">
              Designing <span>Tomorrow's</span> Web <span>Today</span>.
            </h1>
            <p>
              Experience the difference: Our websites are 100% hand-coded for
              superior performance.
            </p>
            <button className="btn-solid home-btn">
              <Link to="/contact">Get Started Now</Link>
            </button>
          </div>
        </div>
        <img
          className="desktop hide move-in move-in-right"
          src={Desktop}
          alt=""
        />
      </div>
      <img src={Wave} className="wave" alt="" />
    </div>
  );
};

export default Welcome;
