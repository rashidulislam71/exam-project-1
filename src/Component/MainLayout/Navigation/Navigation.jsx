import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import "../Common/Common.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/Firebase.Config";
import { signOut } from "firebase/auth";

const Navigation = () => {
  const [user] = useAuthState(auth);

  
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

        <div className="menu flex">
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/jobs">JOBS</NavLink>
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>

          {user ? (
            <Link onClick={logout} to="/login">
              Logout
            </Link>
          ) : (
            <Link to="/login">LogIn</Link>
          )}
          {user ? (
            <span>{user?.displayName}</span>
          ) : (
            <NavLink to="/signup">Sign Up</NavLink>
          )}

          <span>{user?.photoURL ? <img src={user?.photoURL}></img> : ""}</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
