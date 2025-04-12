
import { FaLocationDot } from 'react-icons/fa6'

const Balance = () => {


  return (
    <div className='sectionGap grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[100px]'>
      <div className=' md:h-[400px] lg:h-[600px]  rounded-[8px]   relative flex justify-center items-center'>
        <div className='relative'>
          <img src='/map.png' alt='' className='w-full h-full object-cover' />
          <div className='absolute top-[32%] left-[14%] md:top-[36%] md:left-[14%] lg:top-[32%] lg:left-[14%]'>
            <FaLocationDot className='text-[#fff] text-sm md:text-xl animate-pulse  ' />
          </div>
          <div className='absolute top-[45%] right-[29%] md:top-[48%] md:right-[30%] lg:top-[45%] lg:right-[29%]'>
            <FaLocationDot className='text-[#fff] text-sm md:text-xl  animate-pulse ' />
          </div>
          <div className='absolute top-[40%] right-[26.5%] md:top-[45%] md:right-[26.5%] lg:top-[40%] lg:right-[26.5%] xl:top-[42%] 2xl:top-[45%]'>
            <FaLocationDot className='text-[#fff] text-sm  md:text-xl   ' />
          </div>
        </div>
      </div>

      <div className='text-[#FFFFFF] '>
        <h1 className='pb-[20px]  popularCategoryHead '>Our Global Presence</h1>
        <p className='pb-[40px] joinClanSubPara font-lexend'>
          At eduden, we are committed to delivering world-class education with
          expert instructors, cutting-edge technology, and an innovative
          approach—empowering students to reach their full potential. With
          branches across multiple countries, we bring quality learning closer
          to you! Learn Beyond Borders. Grow Without Limits
        </p>

        {/* <div className='2xl:w-[60px] 2xl:h-[60px] xl:w-[60px] xl:h-[60px] lg:w-[85px] lg:h-[65px] md:w-[60px] md:h-[60px] sm:w-[60px] sm:h-[60px] ts:w-[60px] ts:h-[40px] w-[60px] h-[40px] flex justify-center items-center bg-[#FFFFFF] rounded-[36px]'>
          <FaLocationDot className='text-[#000] h-[18px] w-[18px] md:h-[28px] md:w-[22px] ' />
        </div> */}

        <div className='grid grid-cols-[10%_90%]  md:grid-cols-[5%_95%]  lg:grid-cols-[10%_90%] xl:grid-cols-[5%_95%] items-start  gap-x-[22px] pb-[40px]'>
          <div className='size-10 flex justify-center items-center rounded-[100%] bg-[#FFFFFF] '>
            <FaLocationDot className='text-[#000]  ' />
          </div>

          <div>
            <h1 className='pb-[12px] text-[24px] leading-[36px] '>India</h1>
            <p className='joinClanSubPara font-lexend'>
            Nokia Care Building, South Dumdum, Kolkata
            </p>
          </div>
        </div>

        <div className='grid grid-cols-[10%_90%]  md:grid-cols-[5%_95%]  lg:grid-cols-[10%_90%] xl:grid-cols-[5%_95%] items-start  gap-x-[22px] pb-[40px]'>
          <div className='size-10 flex justify-center items-center rounded-[100%] bg-[#FFFFFF] '>
            <FaLocationDot className='text-[#000]  ' />
          </div>

          <div>
            <h1 className='pb-[12px] text-[24px] leading-[36px] '>
              Bangladesh
            </h1>
            <p className='joinClanSubPara font-lexend'> 24/A, Road-06, Nabinagar Housing, Mohammadpur, Dhaka</p>
          </div>
        </div>

        <div className='grid grid-cols-[10%_90%] md:grid-cols-[5%_95%]  lg:grid-cols-[10%_90%] xl:grid-cols-[5%_95%]  items-start  gap-x-[22px] pb-[40px]'>
          <div className='size-10 flex justify-center items-center rounded-[100%] bg-[#FFFFFF] '>
            <FaLocationDot className='text-[#000]  ' />
          </div>

          <div>
            <h1 className='pb-[12px] text-[24px] leading-[36px] '>USA</h1>
            <p className='joinClanSubPara font-lexend'>
              1729 N 2nd St Studio 204A,Minneapolis, MN 55411
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Balance
