import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import "../Common/Common.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.Config";
import { signOut } from "firebase/auth";

const Navigation = () => {
  const [user] = useAuthState(auth);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="navigationParent">
      <div className="navigation flex">
        <div className="navLogo">
          <h1>
            HALAL <span>JIBIKA</span>
          </h1>
        </div>

        {/* Menu Toggle Button */}
        <div className="menuToggle" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </div>

        {/* Menu */}
        <div className={`menu flex ${isMenuOpen ? "open" : ""}`}>
          {/* Close Icon */}
          <div className="closeIcon" onClick={toggleMenu}>
            &times;
          </div>
        </div>

        <div className="menu flex">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/jobs">JOBS</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>

          {user ? (
            <NavLink onClick={logout} to="/login">
              LOGOUT
            </NavLink>
          ) : (
            <NavLink to="/login">LOGIN</NavLink>
          )}
          {user ? (
            <span
              style={{
                cursor: "pointer",
                textTransform: "uppercase",
                color: "rgb(254, 94, 1)",
              }}
            >
              {user?.displayName}
            </span>
          ) : (
            <NavLink to="/signup">SIGN IN</NavLink>
          )}

          <span>{user?.photoURL ? <img src={user?.photoURL}></img> : ""}</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
