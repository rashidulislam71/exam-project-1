

import auth from "../../Firebase/Firebase.Config";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {


    const [user] = useAuthState(auth);
   
        // if(typeof user === "null"){
        //     <Navigate to="/signup" />
        // }

    return (
        <div>
            {
            //    user ? children : <Navigate to="/login" />
            };
        </div>
    );
};

export default PrivateRouter;