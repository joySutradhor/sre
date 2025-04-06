/* eslint-disable no-unused-vars */

import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import TitleContainer from '../../ClientSide/Shared/TitleContainer/TitleContainer'
import CardFotter from '../WhatsNew/CardFotter'

/* eslint-disable react/prop-types */
const Card = ({
  category,
  title,
  price,
  image,
  description,
  crsDetails,
  img,
  slider
}) => {
  const [hover, setHover] = useState(false)
  const navigate = useNavigate()
  return (
    <>
      <div
        className={`cursor-pointer w-full h-full bg-white rounded-[20px] flex flex-col gap-1  justify-between group  hover:bg-gradient-to-b from-[#FFD300]  to-[#FAB70A]  flex-grow-0 flex-shrink-0 transition-colors ease-in-out duration-500  box-borders ${
          slider && 'h-full '
        }`}
        // onClick={() => navigate("/courseDetails")}
        onClick={() =>
          navigate(`/courseDetails/${encodeURIComponent(title.trim())}`)
        }
      >
        {/* Content shown when not hovered */}
        <div className='group-hover:hidden block transition-opacity duration-500 ease-in-out'>
          <div className='relative bg-black'>
            <img
              src={image}
              alt='picture'
              className='w-full rounded-t-[20px] max-h-[296px] transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover '
            />
            <div className='w-[60px] h-[60px] md:w-[102px] md:h-[102px] rounded-full bg-[#FAB70A] absolute bottom-0 flex items-center justify-center right-[35px] translate-y-1/2 font-bold text-black font-gucina text-[20px] md:text-[35px]'>
              {price}
            </div>
          </div>
          <div className='px-[14px] md:px-[25px] mt-10 md:mt-[68px]'>
            <div>
              <div className='lg:flex items-center justify-between gap-[10px] sm:gap-[30px] '>
                <button className='bg-[#FAB70A] text-[14px] py-2 px-5 font-medium text-black rounded-[50px] mb-2 lg:mb-auto'>
                  {category}
                </button>
                <div className='flex items-center gap-[4px] sm:gap-[8px]'>
                  <FaStar fill='#FF8A00' className='h-[16px] w-[16px]' />
                  <FaStar fill='#FF8A00' className='h-[16px] w-[16px]' />
                  <FaStar fill='#FF8A00' className='h-[16px] w-[16px]' />
                  <FaStar fill='#FF8A00' className='h-[16px] w-[16px]' />
                  <FaStar fill='#FF8A00' className='h-[16px] w-[16px]' />
                </div>
              </div>
            </div>
            <div className='mt-5 md:mt-[25px]'>
              <h3 className='font-gucina text-[20px] md:text-[30px] text-[#010101] font-bold'>
                {title}
              </h3>
              <p className='joinClanSubPara text-black mt-[6px] md:mt-[15px] font-lexend'>
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Content shown on hover */}
        <div className='px-[14px] md:px-[25px]  pt-[30px] group-hover:block hidden transition-opacity duration-500 ease-in-out'>
          <div>
            <div className='md:flex items-center gap-[10px] sm:gap-[30px]'>
              <p className='w-[170px] h-[36px] flex justify-center items-center bg-[#010101]  text-[14px]  leading-[16px] font-bold text-white rounded-[50px] mb-2 md:mb-auto'>
                {category}
              </p>
              <div className='flex items-center gap-[4px] sm:gap-[8px]'>
                <FaStar color='#010101' className='h-[16px] w-[16px]' />
                <FaStar fill='#010101' className='h-[16px] w-[16px]' />
                <FaStar fill='#010101' className='h-[16px] w-[16px]' />
                <FaStar fill='#010101' className='h-[16px] w-[16px]' />
                <FaStar fill='#010101' className='h-[16px] w-[16px]' />
              </div>
            </div>
            <h2 className='font-bold md:text-[30px] text-[20px] mt-[35px] font-gucina leading-[34.5px] text-black'>
              {title}
            </h2>
            <p className='mt-[14px] text-[14px]  text-black leading-[21px] font-lexend'>
              {crsDetails}
            </p>
          </div>
        </div>

        <div className='px-[15px] md:px-[25px] '>
          <div className={`${slider && ' md:pb-[20px]'}`}>
            <div className='group-hover:opacity-100 flex opacity-0 transition-all ease-linear duration-300  items-center gap-[20px] justify-between h-full'>
              <TitleContainer
                title={'Enroll Now'}
                className={
                  'md:px-[18px] md:py-2 py-2 px-3 bg-[#010101]  text-white rounded-[50px] text-nowrap cursor-pointer hover:scale-105 text-[14px] md:text-[20px]'
                }
                handler={() => {}}
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 200 60'
                className='w-[30px] shrink-0 md:w-12 h-12  text-[#010101] transition-transform duration-500 ease-in-out hover:scale-125'
              >
                <line
                  x1='0'
                  y1='30'
                  x2='170'
                  y2='30'
                  stroke='#000'
                  strokeWidth='3'
                />
                <polygon points='170,30 150,20 150,40' fill='#000' />
              </svg>
              <TitleContainer
                title={price}
                className={
                  'px-4 py-2 md:px-[25px] md:py-[13px]  rounded-[50px] bg-[#010101]  text-white text-[16px] font-gucina font-bold '
                }
              />{' '}
            </div>
          </div>
          {slider && <div className='h-[1px] bg-[#010101] mb-[15px]'></div>}
          <div
            className={`mt-[22px] ${
              slider
                ? 'my-[15px]'
                : 'py-[15px] border-t-[1px]  border-t-[#010101] '
            }`}
          >
            <CardFotter />
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
