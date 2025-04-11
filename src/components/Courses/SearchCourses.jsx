import AllCourses from '../../ClientSide/Home/AllCourses/AllCourses'

// export default SearchCourses

/* eslint-disable no-irregular-whitespace */
const SearchCourses = () => {
  return (
    <section>
      <AllCourses sectionGap='sectionGapCourses' />
      <div className='group sectionGapCourses'>
        <div className='text-white'>
          <h1 className='popularCategoryHead mb-[20px] md:mb-[45px] md:text-center relative block lg:hidden'>
            Upcoming{' '}
            <span className=' text-white  BorderGlobal  border-[#FFD300] relative '>
              Micro Courses
            </span>
          </h1>
          <h1 className='popularCategoryHead mb-[20px] md:mb-[45px] md:text-center relative lg:block hidden'>
            May be{' '}
            <span className=' text-white  relative inline-block lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:h-[4px] lg:after:w-0 lg:after:bg-[#FFD300] after:transition-all after:duration-300 group-hover:after:w-full'>
             Not Relavent
            </span>
          </h1>

          <p
            className='joinClanSubPara  mb-[35px]  lg:px-[5vw]
      md:px-[10px]  md:text-center text-balance'
          >
            Our upcoming micro courses are designed to fit into your busy life
            while delivering real, hands-on knowledge. Perfect for anyone eager
            to learn, stay current, and make a real impact in today’s
            fast-moving world.
          </p>
        </div>
      </div>
      {/* <div className=' flex justify-between items-center  mt-[50px] mb-[30px] md:mb-[70px]'>
        <div>
          <p className='text-white text-[9px] md:text-[14px]'>
            Showing 1-9 Of 62 Results
          </p>
        </div>
        <div className='max-w-[172px] md:max-w-[380px] coursesSrchBtn'>
          <input
            type='Search courses'
            required
            className='w-full placeholder:text-[#FFFFFFCC] text-[12px] md:text-[18px] text-[#FFFFFFCC] md:px-[15px] md:py-[10px] rounded-[8px]'
            placeholder='Search courses '
          />
        </div>
      </div> */}
    </section>
  )
}

export default SearchCourses
