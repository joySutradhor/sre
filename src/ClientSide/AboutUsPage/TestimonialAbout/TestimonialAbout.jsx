import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
// import "./Testimonial.css";

const TestimonialAbout = () => {
  const is2XL = useMediaQuery({ minWidth: 1536 });
  const isXl = useMediaQuery({ minWidth: 1366 });
  const isLg = useMediaQuery({ minWidth: 1024 });
  const isMd = useMediaQuery({ minWidth: 768 });

  let slidesToShow = 1;
  //   let slidesToScroll = 1;

  if (is2XL) {
    slidesToShow = 1;
    // slidesToScroll = 4;
  } else if (isXl) {
    slidesToShow = 1;
    // slidesToScroll = 3;
  } else if (isLg) {
    slidesToShow = 1;
    // slidesToScroll = 3;
  } else if (isMd) {
    slidesToShow = 1;
    // slidesToScroll = 2;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: slidesToShow,
    // slidesToScroll: slidesToScroll,
  };
  return (
    <div className="section ">
      <div className="relative">
        <div
          style={{
            backgroundImage: `url("https://i.ibb.co.com/wBkKgnw/group-1088-66f6576d0b079.webp")`,
          }}
          className="bg-no-repeat bg-center bg-cover w-full h-[684px] flex justify-center items-center"
        ></div>
        {/* large */}
        <div className="hidden md:block">
          <div className=" sectionGap absolute inset-0 grid grid-cols-2 items-center justify-between lg:gap-[119px] gap-[30px]">
            {/* ------slider */}

            <div className="slider-container md:pb-[50px] pb-0 ">
              <Slider {...settings}>
                <div className="text-[#FFFFFF] rounded-[10px]  max-w-[95%] pt-[50px] pb-[50px] pl-[35px]  relative bg-[#22212199]/[.6] ">
                  <div className="flex justify-between items-start">
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={45}
                      className="  text-[#FFFFFF] pb-[15px]"
                    />

                    {/* Star Rating */}
                    <div className="flex items-center pb-[25px] text-[#F6941E] gap-x-[6px] pr-[46px]">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className="text-[#FFFFFF] joinClanSubPara pr-[46px] pb-[25px]">
                      Ex urna finibus natoque auctor pretium etiam consequat
                      eleifend himenaeos mauris placerat ridiculus odio praesent
                      Ex urna finibus natoque auctor pretium etiam consequat
                      eleifend himenaeos mauris placerat ridiculus odio
                      praesentEx urna finibus natoque auctor pretium etiam
                      consequat eleifend himenaeos mauris placerat ridiculus
                      odio praesent
                    </p>
                  </div>

                  <div className="flex items-center mb-5">
                    <div>
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src="https://i.ibb.co.com/mTzDs5N/ellipse-14-1-66f6556b12a75.webp"
                        alt="Lisa Dowen"
                      />
                    </div>
                    <div className="ml-[12px]">
                      <p className="text-[20px] leading-[23px] font-bold font-gucina text-xl text-[#A8FF57]">
                        Nazmul Islam
                      </p>
                      <p className="font-sans font-normal text-[10px] leading-[11.5px] text-[#FFFFFF]">
                        Graphics Designer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-[#FFFFFF] rounded-[10px]  max-w-[95%] pt-[50px] pb-[50px] pl-[35px]  relative bg-[#22212199]/[.6] ">
                  <div className="flex justify-between items-start">
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={45}
                      className="  text-[#FFFFFF] pb-[15px]"
                    />

                    {/* Star Rating */}
                    <div className="flex items-center pb-[25px] text-[#F6941E] gap-x-[6px] pr-[46px]">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className="text-[#FFFFFF] joinClanSubPara pr-[46px] pb-[25px]">
                      Ex urna finibus natoque auctor pretium etiam consequat
                      eleifend himenaeos mauris placerat ridiculus odio praesent
                      Ex urna finibus natoque auctor pretium etiam consequat
                      eleifend himenaeos mauris placerat ridiculus odio
                      praesentEx urna finibus natoque auctor pretium etiam
                      consequat eleifend himenaeos mauris placerat ridiculus
                      odio praesent
                    </p>
                  </div>

                  <div className="flex items-center mb-5">
                    <div>
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src="https://i.ibb.co.com/mTzDs5N/ellipse-14-1-66f6556b12a75.webp"
                        alt="Lisa Dowen"
                      />
                    </div>
                    <div className="ml-[12px]">
                      <p className="text-[20px] leading-[23px] font-bold font-gucina text-xl text-[#A8FF57]">
                        Nazmul Islam
                      </p>
                      <p className="font-sans font-normal text-[10px] leading-[11.5px] text-[#FFFFFF]">
                        Graphics Designer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-[#FFFFFF] rounded-[10px]  max-w-[95%] pt-[50px] pb-[50px] pl-[35px]  relative bg-[#22212199]/[.6] ">
                  <div className="flex justify-between items-start">
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={45}
                      className="  text-[#FFFFFF] pb-[15px]"
                    />

                    {/* Star Rating */}
                    <div className="flex items-center pb-[25px] text-[#F6941E] gap-x-[6px] pr-[46px]">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className="text-[#FFFFFF] joinClanSubPara pr-[46px] pb-[25px]">
                      Ex urna finibus natoque auctor pretium etiam consequat
                      eleifend himenaeos mauris placerat ridiculus odio praesent
                      Ex urna finibus natoque auctor pretium etiam consequat
                      eleifend himenaeos mauris placerat ridiculus odio
                      praesentEx urna finibus natoque auctor pretium etiam
                      consequat eleifend himenaeos mauris placerat ridiculus
                      odio praesent
                    </p>
                  </div>

                  <div className="flex items-center mb-5">
                    <div>
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src="https://i.ibb.co.com/mTzDs5N/ellipse-14-1-66f6556b12a75.webp"
                        alt="Lisa Dowen"
                      />
                    </div>
                    <div className="ml-[12px]">
                      <p className="text-[20px] leading-[23px] font-bold font-gucina text-xl text-[#A8FF57]">
                        Nazmul Islam
                      </p>
                      <p className="font-sans font-normal text-[10px] leading-[11.5px] text-[#FFFFFF]">
                        Graphics Designer
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>

            {/* text */}

            <div className=" ">
              <h1 className="text-[#A8FF57] testimonialSub pb-[5px]">
                Testimonial
              </h1>
              <h1 className="popularCategoryHead text-[#FFFFFF]  pb-[20px] ">
                What students say
              </h1>
              <p className="joinClanSubPara text-[#FFFFFF] pb-[35px]">
                Ex urna finibus natoque auctor pretium etiam consequat eleifend
                himenaeos mauris placerat ridiculus odio praesent Ex urna
                finibus natoque auctor pretium etiam consequat eleifend
                himenaeos mauris placerat ridiculus odio praesent Ex urna
                finibus natoque auctor pretium etiam consequat eleifend
                himenaeos mauris placerat ridiculus odio praesent
              </p>
              {/* <button className="text-[#010101] buttonPara">
                View All Testimonial
              </button> */}
            </div>
          </div>
        </div>

        {/* phone */}

        <div className="md:hidden block">
          <div className=" sectionGap absolute inset-0 grid grid-cols-1 items-center justify-between  gap-[30px]">
            {/* text */}

            <div className=" text-center">
              <h1 className="text-[#A8FF57] testimonialSub mb-[5px] ">
                Testimonial
              </h1>
              <h1 className="popularCategoryHead text-[#FFFFFF]  ">
                What students say
              </h1>
              <p className="joinClanSubPara text-[#FFFFFF]  pt-[20px]">
                Ex urna finibus natoque auctor pretium etiam consequat eleifend
                himenaeos mauris placerat ridiculus odio praesent Ex urna
                finibus natoque auctor pretium etiam consequat eleifend
                himenaeos mauris placerat ridiculus odio praesent Ex urna
                finibus natoque auctor pretium etiam consequat eleifend
                himenaeos mauris placerat ridiculus odio praesent
              </p>

              {/* <button className="text-[#010101] buttonPara"></button> */}
            </div>
            {/* ------slider */}
            <div className="slider-container md:mb-[30px] pb-0 ">
              <Slider {...settings}>
                <div className="text-[#FFFFFF] rounded-[10px]  max-w-[95%] pt-[20px]    pl-[35px]  relative bg-[#22212199]/[.6] ">
                  <div className="flex justify-between items-start">
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={20}
                      className="  text-[#FFFFFF] mb-[15px]"
                    />

                    {/* Star Rating */}
                    <div className="flex items-center mb-[25px] text-[#F6941E] gap-x-[6px] pr-[46px]">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className="text-[#FFFFFF] joinClanSubPara pr-[46px] pb-[25px]">
                      Ex urna finibus natoque auctor pretium etiam consequat
                      eleifend himenaeos mauris placerat ridiculus odio praesent
                      Ex urna finibus natoque auctor pretium etiam consequat
                      eleifend himenaeos mauris placerat ridiculus odio
                      praesentEx urna finibus natoque auctor pretium etiam
                      consequat eleifend himenaeos mauris placerat ridiculus
                      odio praesent
                    </p>
                  </div>

                  <div className="flex items-center mb-5">
                    <div>
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src="https://i.ibb.co.com/mTzDs5N/ellipse-14-1-66f6556b12a75.webp"
                        alt="Lisa Dowen"
                      />
                    </div>
                    <div className="ml-[12px]">
                      <p className="text-[20px] leading-[23px] font-bold font-gucina text-xl text-[#A8FF57]">
                        Nazmul Islam
                      </p>
                      <p className="font-sans font-normal text-[10px] leading-[11.5px] text-[#FFFFFF]">
                        Graphics Designer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-[#FFFFFF] rounded-[10px]  max-w-[95%] pt-[20px]    pl-[35px]  relative bg-[#22212199]/[.6] ">
                  <div className="flex justify-between items-start">
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={20}
                      className="  text-[#FFFFFF] mb-[15px]"
                    />

                    {/* Star Rating */}
                    <div className="flex items-center mb-[25px] text-[#F6941E] gap-x-[6px] pr-[46px]">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className="text-[#FFFFFF] joinClanSubPara pr-[46px] pb-[25px]">
                      Ex urna finibus natoque auctor pretium etiam consequat
                      eleifend himenaeos mauris placerat ridiculus odio praesent
                      Ex urna finibus natoque auctor pretium etiam consequat
                      eleifend himenaeos mauris placerat ridiculus odio
                      praesentEx urna finibus natoque auctor pretium etiam
                      consequat eleifend himenaeos mauris placerat ridiculus
                      odio praesent
                    </p>
                  </div>

                  <div className="flex items-center mb-5">
                    <div>
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src="https://i.ibb.co.com/mTzDs5N/ellipse-14-1-66f6556b12a75.webp"
                        alt="Lisa Dowen"
                      />
                    </div>
                    <div className="ml-[12px]">
                      <p className="text-[20px] leading-[23px] font-bold font-gucina text-xl text-[#A8FF57]">
                        Nazmul Islam
                      </p>
                      <p className="font-sans font-normal text-[10px] leading-[11.5px] text-[#FFFFFF]">
                        Graphics Designer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-[#FFFFFF] rounded-[10px]  max-w-[95%] pt-[20px]    pl-[35px]  relative bg-[#22212199]/[.6] ">
                  <div className="flex justify-between items-start">
                    {/* FaQuoteLeft Icon */}
                    <FaQuoteLeft
                      size={20}
                      className="  text-[#FFFFFF] mb-[15px]"
                    />

                    {/* Star Rating */}
                    <div className="flex items-center mb-[25px] text-[#F6941E] gap-x-[6px] pr-[46px]">
                      <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                    </div>
                  </div>

                  <div>
                    <p className="text-[#FFFFFF] joinClanSubPara pr-[46px] pb-[25px]">
                      Ex urna finibus natoque auctor pretium etiam consequat
                      eleifend himenaeos mauris placerat ridiculus odio praesent
                      Ex urna finibus natoque auctor pretium etiam consequat
                      eleifend himenaeos mauris placerat ridiculus odio
                      praesentEx urna finibus natoque auctor pretium etiam
                      consequat eleifend himenaeos mauris placerat ridiculus
                      odio praesent
                    </p>
                  </div>

                  <div className="flex items-center mb-5">
                    <div>
                      <img
                        className="w-[50px] h-[50px] object-cover"
                        src="https://i.ibb.co.com/mTzDs5N/ellipse-14-1-66f6556b12a75.webp"
                        alt="Lisa Dowen"
                      />
                    </div>
                    <div className="ml-[12px]">
                      <p className="text-[20px] leading-[23px] font-bold font-gucina text-xl text-[#A8FF57]">
                        Nazmul Islam
                      </p>
                      <p className="font-sans font-normal text-[10px] leading-[11.5px] text-[#FFFFFF]">
                        Graphics Designer
                      </p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialAbout;
