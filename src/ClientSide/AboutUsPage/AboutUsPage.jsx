import { useEffect } from "react";
import OurCollaboration from "../Home/OurCollaboration/OurCollaboration";
import Testimonial from "../Home/Testimonial/Testimonial";
// import Video from "../Home/Video/Video";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import AboutHero from "./AboutHero/AboutHero";
import OnlineCourses from "./OnlineCourses/OnlineCourses";
// import TestimonialAbout from "./TestimonialAbout/TestimonialAbout";

const AboutUsPage = () => {
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
		<div>
			<Navbar></Navbar>
			<AboutHero></AboutHero>
			<OnlineCourses></OnlineCourses>
			{/* <Video></Video> */}
			<Testimonial></Testimonial>
			{/* <TestimonialAbout /> */}
			<OurCollaboration></OurCollaboration>
			<Footer></Footer>
		</div>
	);
};

export default AboutUsPage;
