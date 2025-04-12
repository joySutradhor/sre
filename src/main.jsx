import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ClientSide/Home/Home";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import CourseDetails from "./ClientSide/CourseDetails/CourseDetails";
import Verify from "./ClientSide/Verify/Verify";
import ContactUs from "./ClientSide/ContactUs/ContactUs";
import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import Navbar from "./ClientSide/Shared/Navbar/Navbar";
import Footer from "./ClientSide/Shared/Footer/Footer";
import Courses from "./ClientSide/Courses/Courses";
import AboutUsPage from "./ClientSide/AboutUsPage/AboutUsPage";
import SignUp from "./ClientSide/SignUp/SignUp";
import LogIn from "./ClientSide/LogIn/LogIn";
import AdminDashboard from "./ClientSide/Dashboard/AdminDashboard/AdminDashboard";
import UserDashboard from "./ClientSide/Dashboard/UserDashboard/UserDashboard";
import ViewDetails from "./ClientSide/Dashboard/UserDashboard/ViewDetails/ViewDetails";

import WhatsNew from "./ClientSide/WhatsNew/WhatsNew";
import FoundationCourse from "./ClientSide/CourseDetails/FoundationCourse/FoundationCourse";
import UpcommingMIcroCourses from "./ClientSide/Home/UpcomingEvents/UpcommingMIcroCourses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/navbar",
    element: <Navbar></Navbar>,
  },
  {
    path: "/footer",
    element: <Footer></Footer>,
  },
  {
    path: "/courseDetails/:title",
    element: <CourseDetails></CourseDetails>,
  },
  {
    path: "/course/:title",
    element: <FoundationCourse></FoundationCourse>,
  },
  {
    path: "/whatsnew",
    element: <WhatsNew></WhatsNew>,
  },

  {
    path: "/about",
    element: <AboutUsPage></AboutUsPage>,
  },
  {
    path: "/verify",
    element: <Verify></Verify>,
  },
  {
    path: "/contactUs",
    element: <ContactUs></ContactUs>,
  },
  {
    path: "/courses",
    element: <Courses></Courses>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
  {
    path: "/LogIn",
    element: <LogIn></LogIn>,
  },
  {
    path: "/userdashboard",
    element: <UserDashboard></UserDashboard>,
  },
  {
    path: "/viewDetails",
    element: <ViewDetails></ViewDetails>,
  },
  {
    path: "/admindashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    path: "/micro-courses/:slug",
    element: <UpcommingMIcroCourses></UpcommingMIcroCourses>,
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
