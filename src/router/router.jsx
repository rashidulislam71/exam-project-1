
import { createBrowserRouter } from 'react-router-dom';
import App from './../App';
import Home from './../Pages/Home/Home';
import Jobs from './../Pages/Jobs/Jobs';
import About from './../Pages/About/About';
import Contact from './../Pages/Contact/Contact';
import SignIn from './../Pages/Auth/SignIn/SignIn';
import SignUp from './../Pages/Auth/Sign up/SignUp';
import NotFound from './../Pages/NotFound/NotFound';

const routers = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/jobs",
                element: <Jobs />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
           
        ]
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/signin",
        element: <SignIn />,
    },
    {
        path: "*",
        element: <NotFound />,
    },

])

export default routers;