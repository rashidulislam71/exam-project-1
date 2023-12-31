import React from "react";
import SocialSignUp from "../SocialSignUp/SocialSignUp";
import "../../PagesCSS/Pages.css";
import "../../../Component/MainLayout/Common/Common.css";
import signUpImage from "../../../assets/images/sinup3.jpg";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../Firebase/Firebase.Config";

import {
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import Loading from './../../../Component/Loading/Loading';
import { ToastContainer, toast } from "react-toastify";



const SignUp = () => {

  const navigate = useNavigate();


  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });

  // updateProfile hook
  const [updateProfile, updating] = useUpdateProfile(auth);

  if (loading || updating) {
    return <Loading />;
  }

  if(error){
    return error
  }

  // Sign up with email and password
  const signUpWithEmailAndPassword = async (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    console.log(fullName)
    console.log(email)
    console.log(password)
    console.log(confirmPassword)

    if (!fullName || !email || !password || !confirmPassword) {
      return toast.error("Fill up the form before");
    } 
    else if (password !== confirmPassword) {
      return toast.error("Password doesn't match!");
    } 
    else {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: fullName });
    }
    
  };

  if(user){
    navigate("/")
  };

 



  return (
    <div className="signUpPageParent">
      <ToastContainer />
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
                Already Have An Account?
                <Link to="/login">
                  {" "}
                  <span>Log In</span>{" "}
                </Link>
              </p>
            </div>
          </div>

          <div className="formInfo">
            <form onSubmit={signUpWithEmailAndPassword}>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full Name"
                autoFocus
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
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password."
              />
            <div className="submitBtn">
              <button type="onsubmit" onSubmit={signUpWithEmailAndPassword}>REGISTRATION</button>
            </div>
            </form>
          </div>
          <SocialSignUp />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
