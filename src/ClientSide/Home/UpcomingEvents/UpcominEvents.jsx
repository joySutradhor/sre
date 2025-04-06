import { upcommingEvents } from '../../../constant/dummyJson'
import UpcommingMicrocards from './UpcommingMicrocards'




const UpcominEvents = () => {
  return (
    <div className='text-[#FFFFFF]  sectionGap mt-[50px] md:mt-0 group'>
      <div>
        <h1 className='popularCategoryHead mb-[20px] md:mb-[45px] md:text-center relative block lg:hidden'>
          Upcoming{' '}
          <span className=' text-white  '>
            Micro Courses  
          </span>
          <span className=' text-white  BorderGlobal  border-[#FFD300] relative inline-block lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:h-[4px] lg:after:w-0 lg:after:bg-[#FFD300] after:transition-all after:duration-300 group-hover:after:w-full'>
             Micro Courses 
          </span>
        </h1>
        <h1 className='popularCategoryHead mb-[20px] md:mb-[45px] md:text-center relative lg:block hidden'>
          Upcoming{' '}
          <span className=' text-white  '>
            Micro Courses   {' '}
          </span>
          <span className=' text-white  relative inline-block lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:h-[4px] lg:after:w-0 lg:after:bg-[#FFD300] after:transition-all after:duration-300 group-hover:after:w-full'>
             Micro Courses 
          </span>
        </h1>

        <p
          className='joinClanSubPara  mb-[35px]  lg:px-[5vw]
      md:px-[10px]  md:text-center text-balance'
        >
          Our upcoming micro courses are designed to fit into your busy life
          while delivering real, hands-on knowledge. Perfect for anyone eager to
          learn, stay current, and make a real impact in today’s fast-moving
          world.
        </p>
      </div>

      <div className=' mt-[35px] md:mt-[75px] grid md:grid-cols-2 xl:grid-cols-3  gap-5'>
        {upcommingEvents.map(webinar => (
          <UpcommingMicrocards key={webinar.id} {...webinar} />
        ))}
      </div>
    </div>
  )
}

export default UpcominEvents
