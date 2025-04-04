import { useState } from "react";
import Cancel from "../../components/dialoge/Cancel";
import Ok from "../../components/dialoge/Ok";
import VerifyForm from "../../components/Verify/VerifyForm";
import UpcominEvents from "../Home/UpcomingEvents/UpcominEvents";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import WhatsNewHero from "../WhatsNew/WhatsNewHero";

const Verify = () => {
  // const [isOkay, setIsOkay] = useState(false);
  // const [isError, setIsError] = useState(true);
  return (
    <>
      {/* {isOkay && <Ok setIsOkay={setIsOkay} />}
      {isError && <Cancel setIsError={setIsError} />} */}

      <Navbar />
      <WhatsNewHero title={"Coming Soon ...."} />
      {/* <div className=" sectionGap  bg-black">
        <VerifyForm setIsOkay={setIsOkay} setIsError={setIsError} />
      </div>
      <div className="mt-[60px] md:mt-[80px]   lg:mt-[80px] xl:mt-[100px] 2xl:mt-[100px]">
        <UpcominEvents />
      </div> */}
      <Footer />
    </>
  );
};

export default Verify;
