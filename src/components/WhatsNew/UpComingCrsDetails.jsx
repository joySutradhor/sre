// /* eslint-disable react/prop-types */

// import { CiStar } from "react-icons/ci";
// import { FaStar } from "react-icons/fa";
// import TitleContainer from "../../ClientSide/Shared/TitleContainer/TitleContainer";
// import { BsArrowRight } from "react-icons/bs";
// import CardFotter from "./CardFotter";

// const UpComingCrsDetails = ({
//   title,
//   rating,
//   price,
//   crsDetails,
//   category,
//   ...rest
// }) => {
//   return (
//     <div className="px-[25px] md:px-4 2xl:px-[25px] text-left" {...rest}>
//       <div className="flex items-center justify-between mt-[35px]">
//         <h4 className="text-[#A8FF57] rounded-[50px] bg-[#010101] px-[9px] py-[5px]">
//           {category}
//         </h4>
//         <div className="flex items-center gap-[5px] 2xl:gap-[10px]">
//           {[1, 2, 3, 4, 5].map((i, index) => {
//             return (
//               <div key={index}>
//                 {index + 1 <= rating ? (
//                   <FaStar fill="black" />
//                 ) : (
//                   <CiStar key={index} fill="white" />
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className="text-[#010101] text-[30px]  font-bold font-gucina  mt-[30px]  ">
//         {title}
//       </div>
//       <div className="mt-[10px]">
//         <p className="text-[#010101] text-[14px]  font-sans leading-[24px ]">
//           {crsDetails}
//         </p>
//       </div>
//       <div className="mt-10 flex items-center justify-between">
//         <TitleContainer
//           title={"Enroll Now"}
//           className={
//             "px-[18px] py-2 bg-[#000] text-[#A8FF57] rounded-[50px] text-nowrap"
//           }
//         />
//         <BsArrowRight size={50} color="black" />
//         <TitleContainer
//           title={price}
//           className={
//             "px-[25px] py-[13px] text-[#A8FF57] rounded-[50px] bg-[#010101] text-[20px] font-gucina font-bold"
//           }
//         />
//       </div>
//       <div className="mt-[24px]">
//         <CardFotter />
//       </div>
//     </div>
//   );
// };

// export default UpComingCrsDetails;

/* eslint-disable react/prop-types */

import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import TitleContainer from "../../ClientSide/Shared/TitleContainer/TitleContainer";
import { BsArrowRight } from "react-icons/bs";
import CardFotter from "./CardFotter";

const UpComingCrsDetails = ({
  title,
  rating,
  price,
  crsDetails,
  category,
  ...rest
}) => {
  return (
    <div
      className="px-[25px] md:px-4 2xl:px-[25px] text-left h-full pb-[25px] flex-col flex justify-between"
      {...rest}
    >
      <div className="">
        <div className="flex items-center justify-between mt-[35px]">
          <h4 className="text-[#A8FF57] rounded-[50px] bg-[#010101] px-[9px] py-[5px]">
            {category}
          </h4>
          <div className="flex items-center gap-[5px] 2xl:gap-[10px]">
            {[1, 2, 3, 4, 5].map((i, index) => {
              return (
                <div key={index}>
                  {index + 1 <= rating ? (
                    <FaStar fill="black" />
                  ) : (
                    <CiStar key={index} fill="white" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-[#010101] text-[30px]  font-bold font-gucina  mt-[30px]  ">
          {title}
        </div>
        <div className="mt-[10px]">
          <p className="text-[#010101] text-[14px]  font-sans leading-[24px ]">
            {crsDetails}
          </p>
        </div>
      </div>
      <div className="mt-[24px]">
        <div className="">
          <div className="mt-10 flex items-center justify-between ">
            <TitleContainer
              title={"Enroll Now"}
              className={
                "px-[18px] py-2 bg-[#000] text-[#A8FF57] rounded-[50px] text-nowrap"
              }
            />
            {/* <BsArrowRight size={50} color="black" /> */}
            {/* <img src="/arrow.svg" className="inline-block" alt="" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 60"
              className="w-12 h-12 text-black"
            >
              <line
                x1="0"
                y1="30"
                x2="170"
                y2="30"
                stroke="black"
                strokeWidth="3"
              />
              <polygon points="170,30 150,20 150,40" fill="black" />
            </svg>

            <TitleContainer
              title={price}
              className={
                "px-[18px] py-2 text-[#A8FF57] rounded-[50px] bg-[#010101] text-[16px] font-gucina font-bold"
              }
            />
          </div>
        </div>
        <CardFotter />
      </div>
    </div>
  );
};

export default UpComingCrsDetails;
