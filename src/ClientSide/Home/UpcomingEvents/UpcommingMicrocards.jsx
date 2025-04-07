/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaClock } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { SlCalender } from "react-icons/sl";


const UpcommingMicrocards = ({ category, time, title, img, duration, location , slug }) => {
  return (
    <div className='p-5 grid  items-center gap-10  bg-white   rounded-[16px] '>
      <div className='relative w-full h-[150px] lg:h-[30vh] 2xl:h-[30vh] flex items-center overflow-hidden'>
        <img
          src={img}
          alt='webinar'
          className='rounded-[8px] object-cover w-full h-full'
        />
        <div className='absolute 2xl:top-[10px] 2xl:left-[10px] xl:top-[10px] xl:left-[10px] top-[15px] left-[6px] '>
          <p className='2xl:px-[12px] 2xl:py-[6px] px-5 py-1 text-white text-sm font-medium  leading-[18px]  border-2 border-[#FFD300] rounded-[50px]'>
            {' '}
            {category}
          </p>
        </div>
      </div>
      <div>
        <div>
          <p className='text-black font-lexend  flex gap-2 items-center'> <SlCalender/> {time}</p>
        </div>
        <div className='mt-1'>
          <h4 className='text-[#1A1A1A] text-lg md:text-2xl font-bold font-sans'>
            {title}
          </h4>
          <div className='py-3 space-y-1'>
            <p className='flex gap-x-3 items-center text-sm md:text-lg font-medium font-lexend text-black'>
              {' '}
              <span>
                <FaClock />
              </span>{' '}
              {duration}
            </p>
            <p className='flex gap-x-3 items-center text-sm md:text-lg font-medium font-lexend text-black'>
              {' '}
              <span>
                <FaLocationDot />
              </span>{' '}
              {location}
            </p>
          </div>
        </div>
        <div className='mt-5 mb-5'>
          <Link to={`/micro-courses/${slug}`}>
            <button className='  text-[#010101]  px-5 py-2 text-sm lg:text-base font-medium border border-[#FFD300] rounded-[50px] w-full cursor-pointer bg-[#FFD300] '>
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcommingMicrocards
