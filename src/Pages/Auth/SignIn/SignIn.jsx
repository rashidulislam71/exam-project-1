import React, { useState } from "react";
import SocialSignUp from "./../SocialSignUp/SocialSignUp";
import { Link, useNavigate } from "react-router-dom";
import LogInImage from "../../../assets/images/login4_prev_ui.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "./../../../Component/Loading/Loading";
import auth from "./../../../Firebase/Firebase.Config";
import AuthError from './../AuthError/AuthError';
import { ToastContainer, toast } from "react-toastify";

const SignIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
    return <Loading />;
  }

  // Log in function
  const loginHandling = async (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Email filed empty!");
    }
    else if(!password) {
      return toast.error("Password filed empty!")
    }
    else {
      await signInWithEmailAndPassword(email, password);
    }
    if (user) {
      navigate("/");
    }
   
  };

  

  return (
    <div>
      <ToastContainer />
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
                with unwavering motivation. Align passion with purpose,
                <br /> set clear goals, and embrace challenges. Recognition{" "}
                <br /> and a positive work culture fuel enthusiasm. In the
                dynamic <br /> landscape of work, ignite your passion for
                success, making each task a meaningful step toward achieving
                your career goals.
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
              <form onSubmit={loginHandling}>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  autoFocus
                  required
                />{" "}
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  required
                />{" "}
                <br />
                {
                  error ? <p style={{color: "red"}}>Email or Password does not match!</p> : ""
                }
                <div className="submitBtn">
                  <button onClick={loginHandling}>LOGIN</button>
                </div>
              </form>
            </div>
            <SocialSignUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
