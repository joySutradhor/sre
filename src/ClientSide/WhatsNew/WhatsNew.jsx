// import FreeWebinar from "../../components/WhatsNew/FreeWebinar";
import { useEffect } from "react";
import UpCmnTtle from "../../components/WhatsNew/UpCmnTtle";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import UpcommingMicroEvents from "./UpcommingMicroEvents";



import WhatsNewHero from "./WhatsNewHero";

const WhatsNew = () => {
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
			<Navbar />
			<WhatsNewHero title={"What's New"} />

			<div className="mt-[110px] md:mt-[80px]   lg:mt-[80px] xl:mt-[100px] 2xl:mt-[100px]">
			<UpCmnTtle />
				<UpcommingMicroEvents></UpcommingMicroEvents>
			</div>

			{/* <FreeWebinar /> */}

			<Footer></Footer>
		</div>
	);
};

export default WhatsNew;
