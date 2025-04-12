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
  useEffect(() => {
    const handleCopy = e => e.preventDefault()
    const handleCut = e => e.preventDefault()
    const handlePaste = e => e.preventDefault()
    const handleContextMenu = e => e.preventDefault()
    // const handleSelectStart = e => e.preventDefault()

    document.addEventListener('copy', handleCopy)
    document.addEventListener('cut', handleCut)
    document.addEventListener('paste', handlePaste)
    document.addEventListener('contextmenu', handleContextMenu)
    // document.addEventListener('selectstart', handleSelectStart)

    return () => {
      document.removeEventListener('copy', handleCopy)
      document.removeEventListener('cut', handleCut)
      document.removeEventListener('paste', handlePaste)
      document.removeEventListener('contextmenu', handleContextMenu)
      // document.removeEventListener('selectstart', handleSelectStart)
    }
  }, [])
  
  return (
    <>
      <Navbar />
      <WhatsNewHero title={"Courses"} />
      <div className="sectionPadding pt-[0px] font-sans">
        <div>
          <SearchCourses />
          {/* <Course currentCategory={"Show All"} /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
