// eslint-disable-next-line no-unused-vars
import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { MdOutlineArrowRight } from 'react-icons/md'
import { RiYoutubeFill } from 'react-icons/ri'
import { SlSocialFacebook } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className=''>
      {/* foooter content */}
      <div className=' relative md:hidden block  '>
        <div className='absolute inset-0  sectionGap text-white/[.8]'>
          <div className=' pb-[50px] grid grid-cols-1 px-0  gap-y-[50px]'>
            <div className=''>
              <div className='footerLogoparent mb-[25px]'>
                {/* <img className="h-full w-full object-cover" src="https://i.ibb.co.com/C5kSmh8/layer-1-1-66f24f9bd9b5b.webp" alt="brand logo" /> */}
                <img
                  className='h-full w-full object-cover'
                  src='/logo.png'
                  alt='brand logo'
                />
              </div>
              <p className='footerHeaderLogoText text-white'>
                Empowering learners with innovative technology to unlock their
                full potential in education and beyond.
              </p>

              <div className='flex  flex-row mt-[20px] gap-x-[10px]'>
                <a
                  href='https://www.facebook.com/profile.php?id=61557983775555'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-[#FFD300] text-[#030303] px-[8px] rounded-full py-[8px]'
                >
                  <SlSocialFacebook size={28} className='footerSocailIcon' />
                </a>
                <a
                  href='https://www.instagram.com/at_eduden/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-[#FFD300] text-[#030303] px-[8px] rounded-full py-[8px]'
                >
                  <FaInstagram size={28} className='footerSocailIcon' />
                </a>

                <a
                  href='https://www.linkedin.com/company/edu-den/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-[#FFD300] text-[#030303] px-[8px] rounded-full py-[8px]'
                >
                  <CiLinkedin size={28} className='footerSocailIcon' />
                </a>
              </div>
            </div>

            <div className=''>
              <h2 className='footerMenuTextTitle'>Quick Link</h2>
              <Link to='/'>
                <p className='footerMenuText text-[#FFD300] flex flex-row items-center gap-x-[10px] pb-1'>
                  <MdOutlineArrowRight size={28} />
                  Home
                </p>
              </Link>
              <Link to='/about'>
                <p className='footerMenuText text-[#FFD300] flex flex-row items-center gap-x-[10px] pb-1'>
                  <MdOutlineArrowRight size={28} />
                  About
                </p>
              </Link>
              <Link to='/courses'>
                <p className='footerMenuText text-[#FFD300] flex flex-row items-center gap-x-[10px] pb-1'>
                  <MdOutlineArrowRight size={28} />
                  Courses
                </p>
              </Link>
              <Link to='/contactus'>
                <p className='footerMenuText text-[#FFD300] flex flex-row items-center gap-x-[10px] pb-1'>
                  <MdOutlineArrowRight size={28} />
                  Contact
                </p>
              </Link>
            </div>

            <div className='text-white'>
              <h2 className='footerMenuTextTitle'>Learning platform</h2>

              <p className='footerMenuText  flex flex-row items-center gap-x-[10px] pb-2'>
                <div className='bg-[#FFD300] text-[#030303] w-[20px] h-[20px] rounded-full flex justify-center items-center'>
                  <RiYoutubeFill size={10} className='footerSocailIcon' />
                </div>
                YouTube
              </p>

              <p className='footerMenuText flex flex-row items-center gap-x-[10px] pb-2'>
                <div className='bg-[#FFD300] text-[#030303] w-[20px] h-[20px] rounded-full flex justify-center items-center'>
                  <FaFacebookF size={10} className='footerSocailIcon' />
                </div>
                Facebook
              </p>
              <p className='footerMenuText flex flex-row items-center gap-x-[10px] pb-2'>
                <div className='bg-[#FFD300] text-[#030303] w-[20px] h-[20px] rounded-full flex justify-center items-center'>
                  <FaInstagram size={10} className='footerSocailIcon' />
                </div>
                Instagram
              </p>
            </div>

            <div className='text-white'>
              <h2 className='footerMenuTextTitle'>Get In Touch</h2>
              <div className=' md:pb-[10px] lg:pb-[10px] xl:pb-[10px] 2xl:pb-[10px] pb-2'>
                <p
                  className=' text-[14px] leading-[21px]  md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[23px]   xl:text-[14px] xl:leading-[21px]  
     2xl:text-[14px] 2xl:leading-[21px] font-gucina font-bold text-white
     md:pb-[2px] lg:pb-[2px] xl:pb-[2px] 2xl:pb-[2px] '
                >
                  Phone:
                </p>
                <p
                  className=' text-[14px] leading-[21px]  md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[23px]   xl:text-[14px] xl:leading-[21px]  
     2xl:text-[14px] 2xl:leading-[21px] font-gucina font-bold text-white
    '
                >
                  +919239425164
                </p>
              </div>

              <div className=' pb-2 '>
                <p
                  className=' footerMenuText
     md:pb-[2px] lg:pb-[2px] xl:pb-[2px] 2xl:pb-[2px]'
                >
                  Email:
                </p>
                <p
                  className=' footerMenuText
    '
                >
                  learn@eduden.io
                </p>
              </div>
              <div className=' md:pb-[10px] lg:pb-[10px] xl:pb-[10px] 2xl:pb-[10px] pb-2'>
                <p
                  className=' text-[14px] leading-[21px]  md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[23px]   xl:text-[14px] xl:leading-[21px]  
     2xl:text-[14px] 2xl:leading-[21px] font-gucina font-bold text-white
     md:pb-[2px] lg:pb-[2px] xl:pb-[2px] 2xl:pb-[2px] '
                >
                  primary coaching centre:
                </p>
                <p
                  className=' text-[14px] leading-[21px]  md:text-[14px] md:leading-[21px] lg:text-[14px] lg:leading-[23px]   xl:text-[14px] xl:leading-[21px]  
     2xl:text-[14px] 2xl:leading-[21px] font-gucina font-bold text-white
    '
                >
                  Nokia Care Building, South Dumdum, Kolkata Housing,
                </p>
              </div>
            </div>
          </div>
          <hr className='border-1 border-[#FFFFFF]' />

          <div className='py-[25px] px-[30px] 2xl:py-[30px]  md:px-[50px]  lg:px-[60px] xl:px-[100px] text-center'>
            <div
              className='flex justify-center items-center space-x-[40px]
          '
            >
              <p
                className='copyWritePara
 '
              >
                Copyright © {year} eduden | Powered by{' '}
                <Link
                  to='https://www.ethicalden.com/'
                  target='_blank'
                  className='underline'
                >
                  Ethical Den
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* large */}
      <div className='relative hidden md:block  '>
        <div className='absolute inset-0   sectionGap text-white/[.8]'>
          <div className='xl:mb-[50px] lg:mb-[50px] md:mb-[50px] grid grid-cols-2 lg:grid-cols-4 justify-center  items-start gap-x-[100px] '>
            <div className='md:mb-[50px]'>
              <div className='footerLogoparent mb-[25px]'>
                {/* <img className="h-full w-full object-cover" src="https://i.ibb.co.com/C5kSmh8/layer-1-1-66f24f9bd9b5b.webp" alt="brand logo" /> */}
                <img
                  className='h-full w-full object-cover'
                  src='/logo.png'
                  alt='brand logo'
                />
              </div>
              <div className=''>
                <p className='footerHeaderLogoText text-white'>
                  Empowering learners with innovative technology to unlock their
                  full potential in education and beyond.
                </p>
                <div className='flex flex-row mt-[20px] gap-x-[10px]'>
                  <a
                    href='https://www.facebook.com/profile.php?id=61557983775555'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-[#FFD300] text-[#030303] px-[8px] rounded-full py-[8px] hover:scale-105 hover:bg-white hover:text-black transition-all duration-500 ease-in-out '
                  >
                    <SlSocialFacebook size={30} className='footerSocailIcon' />
                  </a>
                  <a
                    href='https://www.instagram.com/at_eduden/?hl=en'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-[#FFD300] text-[#030303] px-[8px] rounded-full py-[8px] hover:scale-105 hover:bg-white hover:text-black transition-all duration-500 ease-in-out'
                  >
                    <FaInstagram size={30} className='footerSocailIcon' />
                  </a>
                  {/* <a
                    href=""
                    className="bg-[#FFD300] text-[#030303] px-[8px] rounded-full py-[8px]"
                  >
                    <CiYoutube size={28} className="footerSocailIcon" />
                  </a> */}
                  <a
                    href='https://www.linkedin.com/company/edu-den/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-[#FFD300] text-[#030303] px-[8px] rounded-full py-[8px] hover:scale-105 hover:bg-white hover:text-black transition-all duration-500 ease-in-out'
                  >
                    <CiLinkedin size={30} className='footerSocailIcon' />
                  </a>
                </div>
              </div>
            </div>

            <div className='flex flex-col lg:justify-self-center'>
              <h2 className='footerMenuTextTitle'>Quick Link</h2>
              <Link to='/'>
                <p className='footerMenuText  flex flex-row items-center gap-x-[10px]'>
                  <MdOutlineArrowRight size={28} className='text-[#FFD300]' />
                  Home
                </p>
              </Link>
              <Link to='/about'>
                <p className='footerMenuText flex flex-row items-center gap-x-[10px]'>
                  <MdOutlineArrowRight size={28} className='text-[#FFD300]' />
                  About
                </p>
              </Link>
              <Link to='/courses'>
                <p className='footerMenuText flex flex-row items-center gap-x-[10px]'>
                  <MdOutlineArrowRight size={28} className='text-[#FFD300]' />
                  Courses
                </p>
              </Link>
              <Link to='/contactus'>
                <p className='footerMenuText flex flex-row items-center gap-x-[10px]'>
                  <MdOutlineArrowRight size={28} className='text-[#FFD300]' />
                  Contact
                </p>
              </Link>
            </div>

            <div className='text-white'>
              <h2 className='footerMenuTextTitle'>Learning platform</h2>

              <p className='footerMenuText flex flex-row items-center gap-x-[10px]'>
                <div className='bg-[#FFD300] text-[#030303] w-[20px] h-[20px] rounded-full flex justify-center items-center'>
                  <RiYoutubeFill size={10} className='footerSocailIcon' />
                </div>
                YouTube
              </p>

              <p className='footerMenuText flex flex-row items-center gap-x-[10px]'>
                <div className='bg-[#FFD300] text-[#030303] w-[20px] h-[20px] rounded-full flex justify-center items-center'>
                  <FaFacebookF size={10} className='footerSocailIcon' />
                </div>
                Facebook
              </p>
              <p className='footerMenuText flex flex-row items-center gap-x-[10px]'>
                <div className='bg-[#FFD300] text-[#030303] w-[20px] h-[20px] rounded-full flex justify-center items-center'>
                  <FaInstagram size={10} className='footerSocailIcon' />
                </div>
                Instagram
              </p>
            </div>

            <div className='text-white'>
              <h2 className='footerMenuTextTitle'>Get In Touch</h2>
              <div className='md:pb-[10px]'>
                <p className='text-[14px] leading-[21px] font-gucina font-bold text-white md:pb-[2px]'>
                  Phone:
                </p>
                <p className='text-[14px] leading-[21px] font-gucina font-bold text-white'>
                  +919239425164
                </p>
              </div>

              <div className=''>
                <p className='footerMenuText md:pb-[2px]'>Email:</p>
                <p className='footerMenuText'>learn@eduden.io</p>
              </div>

              <div className='md:pb-[10px]'>
                <p className='text-[14px] leading-[21px] font-gucina font-bold text-white md:pb-[2px]'>
                primary coaching centre:
                </p>
                <p className='text-[14px] leading-[21px] font-gucina font-bold text-white'>
                  Nokia Care Building, South Dumdum, Kolkata
                </p>
              </div>
            </div>
          </div>

          <hr className='absolute inset-x-0 border-1 border-[#cccccc]' />

          <div className='pt-[25px]   px-[30px] 2xl:pt-[30px]  md:px-[50px]  lg:px-[60px] xl:px-[100px] text-center'>
            <div className='flex justify-center items-center space-x-[40px]'>
              <p className='copyWritePara mb-5'>
                Copyright © {year} eduden | Powered by{' '}
                <Link
                  to='https://www.ethicalden.com/'
                  target='_blank'
                  className='underline'
                >
                  Ethical Den
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
