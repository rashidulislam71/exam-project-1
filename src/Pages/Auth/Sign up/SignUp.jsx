import React from "react";
import SocialSignUp from "../SocialSignUp/SocialSignUp";
import "../../PagesCSS/Pages.css";
import "../../../Component/MainLayout/Common/Common.css";
import signUpImage from "../../../assets/images/sinup3.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signUpPageParent">
      <Link to="/">
        <div className="logo">
          <h1>HALALA RIJIK</h1>
        </div>
      </Link>

      <div className="signUpPageInfo flex">
        <div className="SigUpImage">
          <img src={signUpImage} alt="" />
        </div>
        <div className="signUpForm">
          <div className="title">
            <h1>Registration</h1>
            <hr />
            <div className="haveAccount">
              <p>
                Already Have An Account? <span>Log In</span>
              </p>
            </div>
          </div>

          <div className="formInfo">
            <form>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
              />{" "}
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />{" "}
              <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />{" "}
              <br />
              <input
                type="password"
                name="ConfirmPassword"
                id="ConfirmPassword"
                placeholder="Confirm Password."
              />
            </form>
            <div className="submitBtn">
              <button>REGISTRATION</button>
            </div>
          </div>
          <SocialSignUp />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
