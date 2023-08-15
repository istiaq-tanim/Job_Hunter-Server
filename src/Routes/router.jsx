import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Register/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";

import SingleJob from "../Pages/Home/FresherJob/SingleJob";
import ExperienceSingleJob from "../Pages/Home/ExperienceJobs/ExperienceSingleJob";
import Contact from "../Pages/Contact/Contact";

import PrivateRoutes from "./PrivateRoutes.jsx";
import CompanyDetails from "../Pages/Home/TopCompany/CompanyDetails";

const Router = createBrowserRouter([{
      path: "/",
      element: <Main></Main>,
      children: [
            {
                  path: "/",
                  element: <Home></Home>
            },
            {
                  path:"/login",
                  element:<Login></Login>
            },
            {
                  path:"/register",
                  element:<Register></Register>
            },
            {
                  path:"/about",
                  element:<About></About>
                  
            
            },
            {
                  path:"/freshJob/:id",
                  element:<PrivateRoutes><SingleJob></SingleJob></PrivateRoutes>
            },
            { 
                  path:"/experienceJob/:id",
                  element:<PrivateRoutes><ExperienceSingleJob></ExperienceSingleJob></PrivateRoutes>

            },
            { 
                  path:"/companyDetails/:id",
                  element:<CompanyDetails></CompanyDetails>

            },
            {
                  path:"/contact",
                  element:<Contact></Contact>
            }

      ]

}])

export default Router