

import "./Signin.css"

import SocialSignUp from "./../SocialSignUp/SocialSignUp";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../../assets/images/Log_in_img.png"
import LogInImage from "../../../assets/images/login4_prev_ui.png";
import { ToastContainer, toast } from "react-toastify";
import {
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import Loading from "./../../../Component/Loading/Loading";
import auth from "../../../Firebase/Firebase.Config";


const SignIn = () => {
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (loading) {
    return <Loading />;
  }

  const loginHandling = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
   
    if (!email || !password) {
      return alert("email or password doesn't match!");
    } else {
      await signInWithEmailAndPassword(email, password);
      if (user) {
        navigate("/");
        toast.success("Log in successfully!");
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="signInPageParent">
        <div className="signInPageInfo flex">
          <div className="motivation">
            <div className="LogInImage">
              {/* <img src={loginImage} alt="" /> */}
            </div>
          </div>
          <div className="signInForm">
            <div className="title">
              <h1>Log In</h1>
              <hr />
              <div className="haveAccountLogIn">
                <p>
                  Create a New Free Account?
                  <Link to="/signup">
                    <span>Registration</span>
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
                  id="emailLogIn"
                  autoFocus
                  required
                />{" "}
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="passwordLogIn"
                  required
                />{" "}
                <br />
                {error ? (
                  <p style={{ color: "red" }}>
                    Email or Password does not match!
                  </p>
                ) : (
                  ""
                )}
                <div className="submitBtnLogIn">
                  <button type="submit">LOGIN</button>
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
