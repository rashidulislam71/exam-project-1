import { VscGithubInverted } from "react-icons/vsc";
import { IoLogoGoogleplus } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../../Firebase/Firebase.Config";

const SocialSignUp = () => {
  const provider = new GoogleAuthProvider();
  const providerGit = new GithubAuthProvider();
  const navigate = useNavigate();

  // Continue with google account function
  const continueWithGoogleAccount = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        if (user) {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  //Continue with GitHub Function
  const continueWithGitHub = (e) => {
    e.preventDefault();

    signInWithPopup(auth, providerGit)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        if (user) {
          navigate("/");
        }
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GithubAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div>
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
              <button onClick={continueWithGoogleAccount} className="googleBtn">
                Continue With Google
              </button>
            </div>
          </div>

          <div className="gitHub flex">
            <div className="gitHubLogo flex">
              <VscGithubInverted />
            </div>
            <div className="text">
              <button onClick={continueWithGitHub} className="gitBtn">
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
