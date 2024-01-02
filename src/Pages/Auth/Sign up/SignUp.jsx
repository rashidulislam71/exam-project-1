import SocialSignUp from "../SocialSignUp/SocialSignUp";
import "../../PagesCSS/Pages.css";
import "../../../Component/MainLayout/Common/Common.css";
import signUpImage from "../../../assets/images/sinup3.jpg";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../Firebase/Firebase.Config";
import Loading from "../../../Component/Loading/Loading";


const SignUp = () => {

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true
    });
    
  const navigate = useNavigate();

  if(loading){
    return <Loading />
  };

  // updating profile
  const [updateProfile, updating] = useUpdateProfile(auth)

  const signUpWithEmailPassword = async (e) => {
    e.preventDefault();

    const username = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (!username || !email || !password || !confirmPassword) {
      toast.error("Field is empty");
    } else if (password !== confirmPassword) {
      toast.error("Password doesn't match!");
    } else {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: username });
      toast.success("Sign Up successful!");
      navigate("/");
    }
  };

  return (
    <div className="signUpPageParent">
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
                  <span>Log In</span>{" "}
                </Link>
              </p>
            </div>
          </div>

          <div className="formInfo">
            <form onSubmit={signUpWithEmailPassword}>
              <input
                className="signUpInput"
                type="text"
                placeholder="Full Name"
                name="username"
                id="fullName"
                autoFocus
              />
              <br />
              <input
                className="signUpInput"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
              />
              <br />
              <input
                className="signUpInput"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
              />
              <br />
              <input
                className="signUpInput"
                type="password"
                placeholder=" Confirm Password"
                name="confirmPassword"
                id="confirmPassword"
              />
              <br />
              <div className="submitBtn">
                <button>REGISTRATION</button>
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
