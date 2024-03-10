import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Doctors from "../Pages/Doctors/Doctors";
import Blogs from "../Pages/Blogs/Blogs";
import Contact from "../Pages/Contact/Contact";
import Error from "../Pages/Error/Error";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/services',
                element: <Services />,
            },
            {
                path: '/doctors',
                element: <Doctors />,
            },
            {
                path: '/blogs',
                element: <Blogs />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '*',
                element: <Error />,
            },
        ]
    },
]);


export default routes;
