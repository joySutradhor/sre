import { HiOutlineMinusSmall } from 'react-icons/hi2'
import adobe from '../../../../public/assets/images/web logo/adobe.svg'
import aws from '../../../../public/assets/images/web logo/aws.svg'
import docker from '../../../../public/assets/images/web logo/docker.svg'
import linux from '../../../../public/assets/images/web logo/linux.png'
import nextjs from '../../../../public/assets/images/web logo/nextjs.svg'
import nmap from '../../../../public/assets/images/web logo/nmap.png'
import nodejs from '../../../../public/assets/images/web logo/nodejs.svg'
import phython from '../../../../public/assets/images/web logo/phython.png'
// import react from '../../../../public/assets/images/web logo/react.png'
import Marquee from 'react-fast-marquee'


const OurCollaboration = () => {

   

  return (
    <div className='text-[#FFFFFF] sectionGap group '>
      <h1 className='testimonialSub mb-[20px] md:mb-[25px]  flex items-center md:justify-center text-[#FFD300]'>
        <span>
          <HiOutlineMinusSmall />{' '}
        </span>
    Teachnology{' '}
        <span>
          <HiOutlineMinusSmall />{' '}
        </span>
      </h1>
      <h1 className='popularCategoryHead mb-8 md:mb-10  md:text-center block lg:hidden'>
        {' '}
        The Technology Behind  <span className='relative BorderGlobal  border-[#FFD300] text-white lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:h-[4px] lg:after:w-0 lg:after:bg-[#FFD300] lg:after:transition-all lg:after:duration-300 lg:group-hover:after:w-full'>Our Success </span>
      </h1>
      <h1 className='popularCategoryHead mb-8 md:mb-10  md:text-center lg:block hidden'>
        {' '}
        The Technology Behind  <span className='relative  text-white lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:h-[4px] lg:after:w-0 lg:after:bg-[#FFD300] lg:after:transition-all lg:after:duration-300 lg:group-hover:after:w-full'>Our Success </span>
      </h1>
      <p className='joinClanSubPara mb-10 lg:mb-20 md:text-center text-balance'>
      At eduden, we leverage cutting-edge technology to deliver seamless, interactive, and engaging learning experiences. From AI-powered learning tools to secure cloud-based platforms, our tech-driven approach ensures that students and educators stay ahead in the digital era. Explore how our innovation enhances education at eduden. 
      </p>

      <Marquee autoFill='true' pauseOnHover='true' gradient="true" gradientColor='black'>
        <div className='flex  gap-[32px] mr-8 cursor-pointer'>
          <div className='p-4 lg:p-7  size-20 lg:size-36  bg-[#FFFFFF0D] flex items-center justify-center'>
            <img className='w-16 lg:w-32 ' src={adobe} alt='' />
          </div>

          <div className='p-4 lg:p-7  size-20 lg:size-36  bg-[#FFFFFF0D] flex items-center justify-center'>
            <img className='w-16 lg:w-32 ' src={aws} alt='' />
          </div>

          <div className='p-4 lg:p-7  size-20 lg:size-36  bg-[#FFFFFF0D] flex items-center justify-center'>
            <img className='w-16 lg:w-32 ' src={docker} alt='' />
          </div>

          <div className='p-4 lg:p-7  size-20 lg:size-36  bg-[#FFFFFF0D] flex items-center justify-center'>
            <img className='w-16 lg:w-32 ' src={linux} alt='' />
          </div>

          <div className='p-4 lg:p-7  size-20 lg:size-36  bg-[#FFFFFF0D] flex items-center justify-center'>
            <img className='w-16 lg:w-32 ' src={nextjs} alt='' />
          </div>

          <div className='p-4 lg:p-7  size-20 lg:size-36  bg-[#FFFFFF0D] flex items-center justify-center'>
            <img className='w-16 lg:w-32 ' src={nmap} alt='' />
          </div>

          <div className='p-4 lg:p-7  size-20 lg:size-36  bg-[#FFFFFF0D] flex items-center justify-center'>
            <img className='w-16 lg:w-32 ' src={nodejs} alt='' />
          </div>

          <div className='p-4 lg:p-7  size-20 lg:size-36  bg-[#FFFFFF0D] flex items-center justify-center'>
            <img className='w-16 lg:w-32 ' src={phython} alt='' />
          </div>
        </div>
      </Marquee>
    </div>
  )
}

export default OurCollaboration
