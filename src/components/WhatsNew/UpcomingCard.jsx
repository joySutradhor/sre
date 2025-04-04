/* eslint-disable no-sparse-arrays */
/* eslint-disable react/prop-types */

import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import CardFotter from "./CardFotter";

/* 
(parameter) courseDetails: {
    id: number;
    category: string;
    price: string;
    title: string;
    rating: number;
    image: string;
    hoverBgColor: string;
    description: string;
    details: {
        students: number;
        duration: string;
    };
    img: any;
    button?: undefined;
} | {        */
const UpcomingCard = ({ category, price, title, rating, img, description }) => {
  return (
    <div className="text-left rounded-[20px] bg-white">
      <div className="relative ">
        <img src={img} alt="course picture" className="w-full" />
        <div className="absolute w-[102px] h-[102px] rounded-full bg-[#010101] flex items-center justify-center right-[35px] -translate-y-1/2">
          <h4 className="font-gucina text-[#93DF4C] font-bold text-[35px]">
            {price}
          </h4>
        </div>
      </div>
      <div className="ml-[25px] md:ml-4 2xl:ml-[25px] bg-white rounded-b-[20px]">
        <div className="mt-[71px] flex gap-[25px]">
          <h4 className="font-gucina text-[#A8FF57] text-[20px] font-bold leading-[23px] py-[5px] px-[9px] rounded-[50px] bg-[#010101]">
            {category}
          </h4>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((i, index) => {
              return (
                <div key={index}>
                  {index + 1 <= rating ? (
                    <FaStar fill="orange" />
                  ) : (
                    <CiStar key={index} fill="black" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-[25px] text-[#010101] text-[30px] font-bold font-gucina text-left">
          <h3>{title}</h3>
        </div>
        <div className="font-sans text-[#010101] text-[14px]">
          <p>{description}</p>
        </div>
        <CardFotter />
      </div>
    </div>
  );
};

export default UpcomingCard;
