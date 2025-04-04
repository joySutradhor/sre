import { useEffect } from "react";
import JoinOurClan from "../CourseDetails/JoinOurClan/JoinOurClan";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import ContactCard from "./ContactCard/ContactCard";
import ContactForm from "./ContactForm/ContactForm";
import ContactUsHero from "./ContactUsHero/ContactUsHero";
import Faq from "./Faq/Faq";
import { filterCourse } from "../../constant/dummyJson";
import { useParams } from "react-router-dom";
import Balance from "../Home/Balance/Balance";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Function to handle input change
  const { title } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const course = filterCourse.find(
    (course) => course.title === decodeURIComponent(title)
  );
  return (
    <div className="bg-[#010101] ">
      <Navbar></Navbar>
      <ContactUsHero></ContactUsHero>
      <ContactCard></ContactCard>
      <ContactForm></ContactForm>
      <Balance></Balance>
      {course ? (
        <>
          <JoinOurClan course={course}></JoinOurClan>
        </>
      ) : (
        <p>Course not found!</p>
      )}

      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
