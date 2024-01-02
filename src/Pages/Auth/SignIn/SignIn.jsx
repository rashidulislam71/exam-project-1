import SocialSignUp from "./../SocialSignUp/SocialSignUp";
import { Link, useNavigate } from "react-router-dom";
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

    console.log(email);
    console.log(password);
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
      <div className="signUpPageParent">
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
                  id="email"
                  autoFocus
                  required
                />{" "}
                <br />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
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
                <div className="submitBtn">
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
