// Importing necessary modules from Swiper
import { Pagination, Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { filterCourse } from "../../../constant/dummyJson";
import "./Slider.css";
import { useState } from "react";
import Card from "../../../components/Card/Card.jsx";

const Slider = () => {
  const [isHover, setIsHover] = useState("");

  return (
    <div className="upCmnCrs" onMouseLeave={() => setIsHover("")}>
      <Swiper
        // slidesPerView={1}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false, //
        // }}
        // loop={true}
        breakpoints={{
          1750: {
            spaceBetween: 26,
            slidesPerView: 4,
          },
          1240: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          500: {
            slidesPerView: 1,
          },
        }}
        pagination={false}
        modules={[Pagination, Autoplay]}
        className="mySwiper bg-black h-[680px] k"
        touchEventsTarget="container"
      >
        {filterCourse.map((cat, index) => (
          <SwiperSlide key={index}>
            <Card key={index} {...cat} slider={true} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
