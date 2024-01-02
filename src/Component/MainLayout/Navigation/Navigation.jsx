import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import "../Common/Common.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.Config";
import { signOut } from "firebase/auth";
import logo1 from "../../../assets/images/LOGO3.png"

const Navigation = () => {
  const [user] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  return (
    <div className="navigationParent">
      <div className="navigation flex">
        <div className="navLogo flex">
        <img src={logo1} alt="LOGO" />
        <h3>HALAL JIBIKA</h3>
        </div>

        <div className="menu flex">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/jobs">JOBS</NavLink>
          <NavLink to="/favorite">FAVORITE</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="/show">show</NavLink>
         

          <div className="userInfo flex">
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
                {user ?.displayName}
              </span>
            ) : (
              <NavLink to="/signup">SIGN UP</NavLink>
            )}

            <span className="photoURL">
              {user?.photoURL ? <img src={user?.photoURL}></img> : ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
