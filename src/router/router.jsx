
import { createBrowserRouter } from 'react-router-dom';
import App from './../App';
import Home from './../Pages/Home/Home';
import Jobs from './../Pages/Jobs/Jobs';
import About from './../Pages/About/About';
import Contact from './../Pages/Contact/Contact';
import SignIn from './../Pages/Auth/SignIn/SignIn';
import SignUp from './../Pages/Auth/Sign up/SignUp';
import NotFound from './../Pages/NotFound/NotFound';

import JobApply from './../Component/JobsComponent/JobApply/JobApply';
import Favorite from './../Pages/Favorite/Favorite';
import PrivateRouter from '../Component/PrivateRouter/PrivateRouter';
import Error from './../Pages/error/Error';
import PostJob from '../Component/PostJob/PostJob';
import axios from 'axios';

import AppliedJob from './../Component/AppliedJobComponent/AppliedJob/AppliedJob';



const routers = createBrowserRouter([
    {
        element: <App />,
        errorElement: <NotFound/>,
        children:[
            {
                path: "/",
                element: <Home/>,
            },
            {
                
                path: "/jobs",
                element: <Jobs />,
                loader: () => axios.get("http://localhost:9000/jobs"),
                errorElement: <Error />
                
            },
            {
                path: "/jobs/:jobId",
                element: <JobApply />,
                loader: ({params}) => axios.get(`http://localhost:9000/jobs/${params.jobId}`),
                errorElement: <Error />
            },
            {
                path: "/favorite",
                element: <Favorite />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/login",
                element: <SignIn />,
            },
            {
                path: "/postJobs",
                element: <PostJob />
            },
            {
                path: "/appliedJob",
                element: <AppliedJob />
            },
   
           
        ]
    }
 

])

export default routers;