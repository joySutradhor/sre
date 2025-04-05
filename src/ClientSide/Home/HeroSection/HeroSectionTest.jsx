import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { LiaLinkedinIn } from 'react-icons/lia'
import { MdArrowDownward, MdArrowOutward } from 'react-icons/md'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './hero.css'
import { IoHomeOutline } from 'react-icons/io5'
import { GoArrowDownRight } from 'react-icons/go'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function CustomSlider () {
  const [activeSlide, setActiveSlide] = useState(0)
  const [mobileActiveSlide, setMobileActiveSlide] = useState(0)

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true
    // centerPadding: '10%'
  }
  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
    // centerMode: true
    // centerPadding: '10%'
  }

  const slides = [
    {
      image: '/assets/images/new-changes/home-hero-1.png',
      title: 'Where Learning Meets Imagination & Innovation!',
      paragraph:
        "We're your one-stop destination for unlocking your potential and conquering the digital realm with confidence.",
      button: 'Discover More'
    },
    {
      image: '/assets/images/new-changes/home-hero-3.png',
      title: 'Where Learning Meets Imagination & Innovation!',
      paragraph:
        "e're your one-stop destination for unlocking your potential and conquering the digital realm with confidence.",
      button: 'Discover More'
    },
    {
      image: '/assets/images/HomeBanner.png',
      title: 'Where Learning Meets Imagination & Innovation!',
      paragraph:
        "We're your one-stop destination for unlocking your potential and conquering the digital realm with confidence.",
      button: 'Discover More'
    }
  ]

  // Callback to track the active slide
  const handleAfterChange = current => {
    setActiveSlide(current)
  }

  // for mobile
  const handleAfterChangeMobile = current => {
    setMobileActiveSlide(current)
  }

  return (
    <>
      {/* mobile screen */}
      <div className='w-full bg-black text-white pt-3 pb-[15px] lg:pt-10 lg:pb-16 block xl:hidden'>
        <Slider {...mobileSettings} afterChange={handleAfterChangeMobile}>
          {slides.map((slide, index) => {
            const isMobileActive = index === mobileActiveSlide
            return (
              <div
                key={index}
                className='overflow-hidden flex justify-center items-center md:px-5 lg:px-5'
              >
                <div
                  className={`flex flex-col bg-cover bg-no-repeat bg-center justify-center rounded-lg lg:h-[60vh] w-full py-2 px-8 sm:px-[30px] lg:px-16`}
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  {/* Only display content of the active slide */}
                  <div
                    className={`${
                      isMobileActive ? 'opacity-100' : 'opacity-0'
                    } transition-opacity ease-in-out duration-700`}
                  >
                    <button className='py-2 px-5 font-lexend bg-[#FFD300] flex items-center gap-x-2   cursor-default text-black  text-sm font-medium rounded-full  my-2  '>
                      Welcome to eduden
                    </button>
                    <h1 className='heroHead text-[#FFFFFF]   mb-3'>
                      {slide.title}
                    </h1>
                    <p className='w-[220px] sm:w-full HomeBannerPara text-[#FFFFFF]'>
                      {slide.paragraph}
                    </p>
                    <button className='homeLargeAppoinMent flex gap-x-2 py-2 mb-2 px-5 text-black font-medium mt-4 font-lexend bg-[#FFD300] '>
                      {slide.button} <span><GoArrowDownRight  className='text-xl' /></span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>

      <div className='w-full text-white pt-24 pb-5 hidden xl:block'>
        <Slider {...settings} afterChange={handleAfterChange}>
          {slides.map((slide, index) => {
            const isActive = index === activeSlide

            return (
              <div key={index} className='h-[80vh] 2xl:h-[70vh]'>
                <div
                  className={`bg-cover bg-center rounded-lg px-10 h-full  ${
                    isActive
                      ? 'mx-20 transition-all ease-in-out duration-1000'
                      : ''
                  }`} // Add extra padding to active slide only
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className='flex justify-between items-center h-full'>
                    {/* Only render text for the active slide  */}
                    <div
                      className={`${
                        isActive ? 'opacity-100' : 'opacity-0'
                      } transition-opacity ease-in-out duration-700`}
                    >
                      <button className='py-3 px-10 font-lexend bg-[#FFD300] flex items-center gap-x-2 rounded-full heroSecSubHead my-10 cursor-default text-black'>
                        <span>
                          <IoHomeOutline />
                        </span>{' '}
                        Welcome to eduden
                      </button>
                      <h1 className='heroHead max-w-screen-lg pb-2'>
                        {slide.title}
                      </h1>
                      <p className='md:max-w-md lg:max-w-screen-sm HomeBannerPara text-[#FFFFFF] mt-5'>
                        {slide.paragraph}
                      </p>
                      <Link to="/about">
                        <button className='homeLargeAppoinMent text-black font-lexend my-10 px-[16px] py-[5px] flex items-center justify-between bg-[#FFD300]   '>
                          {slide.button}{' '}
                          <span className='text-2xl animate-pulse'>
                            <GoArrowDownRight />
                          </span>
                        </button>
                      </Link>
                    </div>

                    {/* Rotated section */}
                    <div
                      className={`${
                        isActive ? 'opacity-100' : 'opacity-0'
                      } transition-opacity ease-in-out duration-1000`}
                    >
                      <div className='bg-[#FFD300] px-[30px] pt-[60px] pb-[20px] max-w-[46px] flex flex-col items-center space-y-[14px] rounded-full'>
                        {/* Text */}
                        <span className='transform rotate-90 heroSecSubHead text-black mb-[30px] whitespace-nowrap'>
                          follow now
                        </span>

                        {/* Arrow */}
                        <span className='transform rotate-[-90] text-black'>
                          <MdArrowDownward size={20} />
                        </span>

                        {/* Social Icons */}
                        <div className='flex flex-col space-y-[10px] items-center'>
                          <div className='bg-black p-2 rounded-full text-white cursor-pointer'>
                            <FaFacebook size={20} />
                          </div>
                          <div className='bg-black p-2 rounded-full text-white cursor-pointer'>
                            <FaInstagram size={20} />
                          </div>
                          <div className='bg-black p-2 rounded-full text-white cursor-pointer'>
                            <LiaLinkedinIn size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End of rotated section */}
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default CustomSlider
