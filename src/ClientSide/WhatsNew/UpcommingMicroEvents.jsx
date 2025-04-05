// import { FaRegClock } from 'react-icons/fa'
// import { SlCalender } from 'react-icons/sl'
// import FreeWebinarCard from '../../../components/WhatsNew/FreeWebinarCard'
// import { freeWebinar } from "../../../constant/dummyJson";
// import UpCmnTtle from '../../../components/WhatsNew/UpCmnTtle';
import { FaClock } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const UpcommingMicroEvents = () => {
  return (
    <div className='text-[#FFFFFF]  sectionGap mt-[50px] md:mt-0'>
      <div>
        <h1 className='popularCategoryHead mb-[20px] md:mb-[45px] text-center'>
          {' '}
          Upcoming{' '}
          <span className='BorderGlobal  border-[#FFD300]'>Micro Courses</span>
        </h1>
        <p
          className='joinClanSubPara  mb-[35px]  2xl:px-[150px] xl:px-[150px] 
      md:px-[10px] px-[10px] text-center'
        >
          Well, because we’re not your grandma’s boring old school! At eduden,
          we’re the rebels of education, the mavericks of learning, and the
          champions of fun-filled knowledge. We’ll teach you how to slay dragons
          and code websites, all while cracking jokes and sipping on virtual
          coffee.
        </p>
      </div>

      <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[40px]'>
        <Link to="/micro-courses/graphics">
          <div className='rounded-[20px]  relative w-full h-[515px] overflow-hidden shadow-md group'>
            <img
              className='w-full h-full object-cover transition-all duration-500 opacity-15 md:opacity-100  group-hover:opacity-15'
              src='/assets/images/UpcomingEvents/Artificial Intelligence Bootcamp.jpg'
              alt=''
            />
            <div className='absolute inset-0 md:top-[277px]  flex flex-col justify-center items-center text-center  md:opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
              <h1 className='upcomingHead mb-[15px] lg:px-[50px] px-[20px]'>
                Start Earning with Graphics Design
              </h1>
              <p className='upcomingPara mb-[20px] lg:px-[50px] px-[20px]'>
                Join our hands-on offline workshop to master AI concepts and
                applications.
              </p>
            </div>
            <div className='absolute bottom-20 md:bottom-5 text-center left-0 w-full px-5 md:px-[10%] flex-wrap flex justify-center md:justify-between items-center  md:opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
              <div>
                <p className='flex gap-x-2 items-center'>
                  <span>
                    <FaClock />
                  </span>{' '}
                  1 Month
                </p>
              </div>

              <div>
                <p className='flex gap-x-2 items-center'>
                  <span>
                    <FaLocationDot />
                  </span>{' '}
                  Kolkata (Hybrid)
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/micro-courses/cnna">
          <div className='rounded-[20px] relative w-full h-[515px] overflow-hidden shadow-md group'>
            <img
              className='w-full h-full object-cover transition-all duration-500 opacity-15 md:opacity-100  group-hover:opacity-15'
              src='/assets/images/UpcomingEvents/Cybersecurity Mastery Bootcamp.jpg'
              alt=''
            />
            <div className='absolute inset-0 md:top-[277px] flex flex-col justify-center items-center text-center  md:opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
              <h1 className='upcomingHead mb-[15px] lg:px-[50px] px-[20px]'>
                Networking Basics - CCNA
              </h1>
              <p className='upcomingPara mb-[20px] lg:px-[50px] px-[20px]'>
                A workshop to secure your digital future with expert guidance.
              </p>
            </div>
            <div className='absolute bottom-20 md:bottom-5 text-center left-0 w-full px-5 md:px-[10%] flex-wrap flex justify-center md:justify-between items-center  md:opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
              <div>
                <p className='flex gap-x-2 items-center'>
                  <span>
                    <FaClock />
                  </span>{' '}
                  1 Month
                </p>
              </div>

              <div>
                <p className='flex gap-x-2 items-center'>
                  <span>
                    <FaLocationDot />
                  </span>{' '}
                  Kolkata (Hybrid)
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/micro-courses/python">
          <div className='rounded-[20px] relative w-full h-[515px] overflow-hidden shadow-md group'>
            <img
              className='w-full h-full object-cover transition-all duration-500 opacity-15 md:opacity-100  group-hover:opacity-15'
              src='/assets/images/UpcomingEvents/Android App Development Bootcamp.jpg'
              alt=''
            />
            <div className='absolute inset-0 md:top-[277px] flex flex-col justify-center items-center text-center  md:opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
              <h1 className='upcomingHead mb-[15px] lg:px-[50px] px-[20px]'>
                Understanding Python - Get Started
              </h1>
              <p className='upcomingPara mb-[20px] lg:px-[50px] px-[20px]'>
                Take part in our offline App Development workshop and build your
                own apps from scratch.
              </p>
            </div>
            <div className='absolute bottom-20 md:bottom-5 text-center left-0 w-full px-5 md:px-[10%] flex-wrap flex justify-center md:justify-between items-center  md:opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
              <div>
                <p className='flex gap-x-2 items-center'>
                  <span>
                    <FaClock />
                  </span>{' '}
                  1 Month
                </p>
              </div>

              <div>
                <p className='flex gap-x-2 items-center'>
                  <span>
                    <FaLocationDot />
                  </span>{' '}
                  Kolkata (Hybrid)
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default UpcommingMicroEvents
