import React from "react";
import SocialSignUp from "../SocialSignUp/SocialSignUp";
import "../../PagesCSS/Pages.css"
import "../../../Component/MainLayout/Common/Common.css"

const SignUp = () => {
  return (
    <div className="signUpPageParent">
      <div className="signUpPageInfo">
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
              <label>Full Name:</label> <br />
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
              />{" "}
              <br />
              <label>Email:</label> <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />{" "}
              <br />
              <label>Password:</label> <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />{" "}
              <br />
              <label>Confirm Password:</label> <br />
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
