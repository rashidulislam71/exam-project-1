import React from "react";
import SocialSignUp from "./../SocialSignUp/SocialSignUp";
import { Link } from "react-router-dom";
import LogInImage from "../../../assets/images/login4_prev_ui.png";

const SignIn = () => {
  return (
    <div>
      <div className="signUpPageParent">
        <Link to="/">
          <div className="logo">
            <h1>HALAL JIBIKA</h1>
          </div>
        </Link>

        <div className="signInPageInfo flex">
          <div className="motivation">
            <div className="LogInImage">
              <img src={LogInImage} alt="" />
            </div>
           
            <div className="motivationText">
              <p>
                <span>Elevate your professional journey</span> <br />
                with unwavering motivation. Align 
                passion with purpose,<br /> set clear goals, 
                and embrace challenges. Recognition <br />  and a positive work
                culture fuel 
                enthusiasm. In the dynamic <br /> landscape of 
                work, ignite your passion for success,
                making each task a meaningful step 
                toward achieving your career goals.
              </p>
            </div>
          </div>
          <div className="signUpForm">
            <div className="title">
              <h1>Registration</h1>
              <hr />
              <div className="haveAccount">
                <p>
                  Create a New Free Account?
                  <Link to="/signup">
                    {" "}
                    <span>Registration</span>{" "}
                  </Link>
                </p>
              </div>
            </div>

            <div className="formInfo">
              <form>
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
    </div>
  );
};

export default SignIn;
