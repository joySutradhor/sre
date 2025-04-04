// /* eslint-disable no-irregular-whitespace */
// const SearchCourses = () => {
//     return (
//         <div className=" flex justify-between items-center mt-[50px]">
//             <div>
//                 <p className="text-white ">Showing 1-9 Of 62 Results</p>
//             </div>
//             <div className="max-w-[380px] coursesSrchBtn">
//                 <input
//                     type="Search courses"
//                     required
//                     className="w-full placeholder:text-[#FFFFFFCC] text-[#FFFFFFCC] px-4 py-[10px]"
//                     placeholder="Search courses "
//                 />
//                 <button>Search</button>
//             </div>
//         </div>
//     )
// }

// export default SearchCourses

/* eslint-disable no-irregular-whitespace */
const SearchCourses = () => {
  return (
    <div className=" flex justify-between items-center  mt-[50px] mb-[30px] md:mb-[70px]">
      <div>
        <p className="text-white text-[9px] md:text-[14px]">
          Showing 1-9 Of 62 Results
        </p>
      </div>
      <div className="max-w-[172px] md:max-w-[380px] coursesSrchBtn">
        <input
          type="Search courses"
          required
          className="w-full placeholder:text-[#FFFFFFCC] text-[12px] md:text-[18px] text-[#FFFFFFCC] md:px-[15px] md:py-[10px] rounded-[8px]"
          placeholder="Search courses "
        />
        {/* <button>Search</button> */}
      </div>
    </div>
  );
};

export default SearchCourses;
