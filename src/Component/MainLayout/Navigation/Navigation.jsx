import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import "../Common/Common.css";

const Navigation = () => {
  return (
    <div className="navigationParent">
      <div className="navigation flex">
        <div className="navLogo">
          <h1>
            HALAL <span>JIBIKA</span>
          </h1>
        </div>

        <div className="menu flex">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/jobs">JOBS</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/signup">SIGN UP</NavLink>
          <NavLink to="/signin">SIGN IN</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
