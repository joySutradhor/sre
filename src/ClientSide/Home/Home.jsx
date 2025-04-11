// import { useEffect } from "react";
// import Faq from "../ContactUs/Faq/Faq";
// import JoinOurClan from "../CourseDetails/JoinOurClan/JoinOurClan";
// import Footer from "../Shared/Footer/Footer";
// import AboutUs from "./AboutUs/AboutUs";
// import AllCourses from "./AllCourses/AllCourses";
// import HeroSection from "./HeroSection/HeroSection";
// import NeedHelp from "./NeedHelp/NeedHelp";
// import OurCollaboration from "./OurCollaboration/OurCollaboration";
// import PopularCategories from "./PopularCategories/PopularCategories";
// import Testimonial from "./Testimonial/Testimonial";
// import TrendingCourses from "./TrendingCourses/TrendingCourses";
// import UpcominEvents from "./UpcomingEvents/UpcominEvents";
// import Video from "./Video/Video";

// const Home = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   return (
//     <div className="">
//       <HeroSection></HeroSection>
//       <AboutUs></AboutUs>
//       <PopularCategories></PopularCategories>
//       <TrendingCourses></TrendingCourses>
//       <AllCourses></AllCourses>
//       <Video></Video>
//       <OurCollaboration></OurCollaboration>
//       <JoinOurClan></JoinOurClan>
//       <UpcominEvents></UpcominEvents>
//       <Testimonial></Testimonial>
//       <NeedHelp></NeedHelp>
//       <Faq></Faq>
//       <Footer></Footer>
//     </div>
//   );
// };

// export default Home;

import { useEffect } from "react";
import Faq from "../ContactUs/Faq/Faq";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AboutUs from "./AboutUs/AboutUs";
import AllCourses from "./AllCourses/AllCourses";
// import HeroSection from "./HeroSection/HeroSection";
import CustomSlider from "./HeroSection/HeroSectionTest";
import NeedHelp from "./NeedHelp/NeedHelp";
import OurCollaboration from "./OurCollaboration/OurCollaboration";
// import PopularCategories from "./PopularCategories/PopularCategories";
import Testimonial from "./Testimonial/Testimonial";
// import TrendingCourses from "./TrendingCourses/TrendingCourses";
import UpcominEvents from "./UpcomingEvents/UpcominEvents";
// import Video from "./Video/Video";
import Balance from "./Balance/Balance";
import Placement from "./Placement/Placement";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      {/* <HeroSection></HeroSection> */}
      <CustomSlider />
      <AboutUs></AboutUs>
      <Placement/>
      {/* <PopularCategories></PopularCategories> */}
      {/* <TrendingCourses></TrendingCourses> */}
      <AllCourses sectionGap="sectionGap"></AllCourses>
      {/* <Video></Video> */}
      <OurCollaboration></OurCollaboration>
      {/* <JoinOurClan></JoinOurClan> */}
      <div className=" pt-[60px]  md:pt-[80px] xl:pt-[250px] ">
        <UpcominEvents></UpcominEvents>
      </div>
      <Testimonial></Testimonial>
      <NeedHelp></NeedHelp>
      <Balance></Balance>
      <Faq></Faq>
      <Footer></Footer>
    </div>
  );
};

export default Home;
