// import { useState } from "react"
// import { courses } from "../../../constant/dummyJson"
// import UpComingCrsDetails from "../../WhatsNew/UpComingCrsDetails"
// import UpcomingCard from "../../WhatsNew/UpcomingCard"
// import handleMouseEnter from "../../../helpers/handleMouseEnter"
// import CoursesPagination from "../CoursesPagination"

// const CourseLists = () => {
//     const [isHover, setIsHover] = useState("")

//     return (
//         <>
//             <div className="crses mt-[75px]">
//                 {courses.map((courseDetails) => (
//                     <div
//                         className={`courses min-h-[500px] md:min-h-[680px] lg:min-h-[750px] 2xl:min-h-[0px] rounded-[20px] ${
//                             isHover === courseDetails.id && "upCmnhover"
//                         } cursor-pointer`}
//                         key={courseDetails.id}
//                         onMouseEnter={() =>
//                             handleMouseEnter(courseDetails.id, setIsHover)
//                         }
//                         onMouseLeave={() => setIsHover("")}
//                     >
//                         {isHover !== courseDetails.id ? (
//                             <UpcomingCard {...courseDetails} />
//                         ) : (
//                             <UpComingCrsDetails
//                                 crsDetails={courseDetails.crsDetails}
//                                 title={courseDetails.title}
//                                 rating={courseDetails.rating}
//                                 price={courseDetails.price}
//                                 category={courseDetails.category}
//                             />
//                         )}
//                     </div>
//                 ))}
//             </div>
//             <CoursesPagination />
//         </>
//     )
// }

// export default CourseLists

import { useState } from "react";
import { courses } from "../../../constant/dummyJson";
import UpComingCrsDetails from "../../WhatsNew/UpComingCrsDetails";
import UpcomingCard from "../../WhatsNew/UpcomingCard";
import handleMouseEnter from "../../../helpers/handleMouseEnter";
import CoursesPagination from "../CoursesPagination";

const CourseLists = () => {
  const [isHover, setIsHover] = useState("");

  return (
    <>
      <div className="mt-[75px] grid-cols-1 grid lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  gap-[26px] h-full">
        {courses.map((courseDetails) => (
          <div
            className={`courses min-h-[500px] md:min-h-[680px] bg-white lg:min-h-[613px] 2xl:min-h-[0px] rounded-[20px] ${
              isHover === courseDetails.id && "upCmnhover"
            } cursor-pointer`}
            key={courseDetails.id}
            onMouseEnter={() => handleMouseEnter(courseDetails.id, setIsHover)}
            onMouseLeave={() => setIsHover("")}
          >
            {isHover !== courseDetails.id ? (
              <UpcomingCard {...courseDetails} />
            ) : (
              <UpComingCrsDetails
                crsDetails={courseDetails.crsDetails}
                title={courseDetails.title}
                rating={courseDetails.rating}
                price={courseDetails.price}
                category={courseDetails.category}
              />
            )}
          </div>
        ))}
      </div>
      <CoursesPagination />
    </>
  );
};

export default CourseLists;
