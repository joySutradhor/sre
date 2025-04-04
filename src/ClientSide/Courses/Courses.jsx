import SearchCourses from "../../components/Courses/SearchCourses";
import "./Courses.css";
// import CourseLists from "../../components/Courses/CourseLists/CourseLists";
import Navbar from "../Shared/Navbar/Navbar";

import { useEffect } from "react";
import WhatsNewHero from "../../ClientSide/WhatsNew/WhatsNewHero";
import Course from "../Home/AllCourses/Course";
import Footer from "../Shared/Footer/Footer";
const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <WhatsNewHero title={"Courses"} />
      <div className="sectionPadding pt-[0px] font-sans">
        <div>
          <SearchCourses />
          <Course currentCategory={"Show All"} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
