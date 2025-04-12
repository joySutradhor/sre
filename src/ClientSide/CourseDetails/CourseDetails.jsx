import { useEffect } from "react";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import CourseDetailsHero from "./CourseDetailsHero/CourseDetailsHero";
import FoundationCourse from "./FoundationCourse/FoundationCourse";
import JoinOurClan from "./JoinOurClan/JoinOurClan";
import Benefits from "./Benefits/Benefits";
import CurriculumTest from "./Curriculum/CurriculumTest";
import { useParams } from "react-router-dom";
import { filterCourse } from "../../constant/dummyJson";

const CourseDetails = () => {
  const { title } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const course = filterCourse.find(
    (course) => course.title === decodeURIComponent(title)
  );

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
    <div>
      <Navbar></Navbar>

      {course ? (
        <>
          <CourseDetailsHero course={course} />
          <FoundationCourse course={course} />
          <JoinOurClan course={course} />
          <CurriculumTest course={course} />
          <Benefits course={course} />
        </>
      ) : (
        <p>Course not found!</p>
      )}
      <Footer></Footer>
    </div>
  );
};

export default CourseDetails;
