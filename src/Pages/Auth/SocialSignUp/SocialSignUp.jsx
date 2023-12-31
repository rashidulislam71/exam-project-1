import { VscGithubInverted } from "react-icons/vsc";
import { IoLogoGoogleplus } from "react-icons/io";

const SocialSignUp = () => {
    return (


        <div>
            <div className="socialSignUpInfo">
                <div className="or flex">
                    <hr /><p>or</p>  <hr />
                </div>
                <div className="social flex">
                    <div className="google flex">
                        <div className="googleLogo flex">
                        <IoLogoGoogleplus />
                        </div>
                        <div className="text">
                            <button className="googleBtn">Sign Up With Google</button>
                        </div>
                    </div>

                    <div className="gitHub flex">
                        <div className="gitHubLogo flex">
                        <VscGithubInverted />
                        </div>
                        <div className="text">
                            <button className="gitBtn">Sign Up With GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialSignUp;