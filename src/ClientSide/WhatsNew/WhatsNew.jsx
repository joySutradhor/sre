import FreeWebinar from "../../components/WhatsNew/FreeWebinar";
import UpCmnTtle from "../../components/WhatsNew/UpCmnTtle";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import UpcommingMicroEvents from "./upcommingMicroEvents";

import WhatsNewHero from "./WhatsNewHero";

const WhatsNew = () => {
	return (
		<div>
			<Navbar />
			<WhatsNewHero title={"What's New"} />

			<div className="mt-[110px] md:mt-[80px]   lg:mt-[80px] xl:mt-[100px] 2xl:mt-[100px]">
			<UpCmnTtle />
				<UpcommingMicroEvents />
			</div>

			<FreeWebinar />

			<Footer></Footer>
		</div>
	);
};

export default WhatsNew;
