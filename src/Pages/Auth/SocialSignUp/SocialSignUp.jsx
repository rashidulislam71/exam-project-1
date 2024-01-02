import { VscGithubInverted } from "react-icons/vsc";
import { IoLogoGoogleplus } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import auth from "../../../Firebase/Firebase.Config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../../Component/Loading/Loading";

const SocialSignUp = () => {
  const navigate = useNavigate();

  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  if (googleLoading || githubLoading) {
    <Loading />;
  }

  if (googleError || githubError) {
    <p style={{ color: "red" }}>
      Error: {googleError?.message} {githubError?.message}
    </p>;
  }

  if (googleUser || githubUser) {
    navigate(`/`)
    return toast.success(`Log In Successfully`);
  }

  return (
    <div>
      <ToastContainer />
      <div className="socialSignUpInfo">
        <div className="or flex">
          <hr />
          <p>or</p> <hr />
        </div>
        <div className="social flex">
          <div className="google flex">
            <div className="googleLogo flex">
              <IoLogoGoogleplus />
            </div>
            <div className="text">
              <button onClick={() => signInWithGoogle()} className="googleBtn">
                Continue With Google
              </button>
            </div>
          </div>

          <div className="gitHub flex">
            <div className="gitHubLogo flex">
              <VscGithubInverted />
            </div>
            <div className="text">
              <button onClick={() => signInWithGithub()} className="gitBtn">
                Continue With GitHub
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSignUp;
