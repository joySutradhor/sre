import React from 'react'
import { HiOutlineMinusSmall } from 'react-icons/hi2'
import accenture from '../../../../public/assets/images/student/accenture.png'
import amazon from '../../../../public/assets/images/student/amazon.png'
import cisco from '../../../../public/assets/images/student/cisco.png'
import deloitte from '../../../../public/assets/images/student/deloitte.png'
import ethicalden from '../../../../public/assets/images/student/ethicalden.png'
import ey from '../../../../public/assets/images/student/ey.png'
import ibm from '../../../../public/assets/images/student/ibm.png'
import jio from '../../../../public/assets/images/student/jio.png'
import paloalto from '../../../../public/assets/images/student/paloalto.png'
import tcs from '../../../../public/assets/images/student/tcs.png'
import vmware from '../../../../public/assets/images/student/vmware.png'
import Marquee from 'react-fast-marquee'

function Placement () {
  // bg-[#FFFFFF0D]
  return (
    <section className='sectionGap'>
      <div className='grid lg:grid-cols-2 gap-[10vw] items-center relative group '>
        <div>
          <div className='flex '>
            {/* <h1 className='testimonialSub mb-[20px]  flex items-center text-left  text-[#FFD300]'>
              <span>
                <HiOutlineMinusSmall />{' '}
              </span>
              Placement{' '}
              <span>
                <HiOutlineMinusSmall />{' '}
              </span>
            </h1> */}
          </div>
          <div className='space-y-5'>
            <h1 className='popularCategoryHead mb-[35px]  text-white relative'>
              {' '}
              Our Students in Leading
              <span className='  text-white  after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-0 after:bg-[#FFD300] after:transition-all after:duration-300 group-hover:after:w-[50%]'>
                <br /> Global Roles
              </span>{' '}
            </h1>

            <p className='font-lexend text-white '>
              From creative design to cutting-edge technology, our students have
              secured prestigious roles in top multinational companies. As a
              Python <strong>Developer</strong> at <strong>Amazon</strong>  ,  <strong>UI/UX Designer</strong>  at <strong>VMware</strong> ,  <strong>Data
              Scientist</strong> at <strong>EY</strong>  , <strong>Graphic Designer</strong>  at  <strong>Adobe</strong>  - they are shaping the
              future with innovation and expertise. Their success reflects our
              commitment to industry-focused education and real-world skills. 
              <br/><br/>
              Be the next success story—start your journey with us today!
            </p>
       
          </div>
        </div>

        {/* student placement icons */}
        <div className='overflow-x-hidden max-w-[100vw]'>
          <Marquee
            autoFill='true'
            pauseOnHover='true'
            gradient='true'
            gradientColor='black'
            speed='15'
          >
            <div className='flex  gap-10 mr-8 cursor-pointer'>
              <div className='p-1 size-28  flex items-center justify-center'>
                <img className='w-32 ' src={amazon} alt='amazon' />
              </div>

              <div className='p-1 size-28  flex items-center justify-center'>
                <img className='w-32 ' src={vmware} alt='vmware' />
              </div>

              <div className='p-1 size-28  flex items-center justify-center'>
                <img className='w-10 lg:w-16  ' src={ey} alt='ey' />
              </div>
            </div>
          </Marquee>

          <Marquee
            autoFill='true'
            pauseOnHover='true'
            gradient='true'
            gradientColor='black'
            speed='15'
            direction='right'
          >
            <div className='flex  gap-10 mr-8 cursor-pointer'>
              <div className='p-1 size-28  flex items-center justify-center'>
                <img className='w-32 ' src={ibm} alt='ibm' />
              </div>

              <div className='p-1 size-28  flex items-center justify-center'>
                <img className='w-32 ' src={tcs} alt='tcs' />
              </div>

              <div className='p-1 size-28  flex items-center justify-center'>
                <img className='w-32 ' src={cisco} alt='cisco' />
              </div>
            </div>
          </Marquee>

          <Marquee
            autoFill='true'
            pauseOnHover='true'
            gradient='true'
            gradientColor='black'
            speed='15'
          >
            <div className='flex  gap-10 mr-8 cursor-pointer'>
              <div className='p-1 size-28  flex items-center justify-center'>
                <img className='w-32 ' src={ethicalden} alt='ethicalden' />
              </div>

              <div className='p-1 size-28  flex items-center justify-center'>
                <img className='w-32 ' src={accenture} alt='accenture' />
              </div>
            </div>
          </Marquee>

          <Marquee
            autoFill='true'
            pauseOnHover='true'
            gradient='true'
            gradientColor='black'
            speed='15'
            direction='right'
          >
            <div className='flex  gap-10 mr-8 cursor-pointer'>
              <div className='p-1 size-28  flex items-center justify-center'>
                <img className='w-32 ' src={paloalto} alt='paloalto' />
              </div>

              <div className='p-1 size-28  flex items-center justify-center'>
                <img className='w-10 lg:w-16' src={jio} alt='jio' />
              </div>

              <div className='p-1 size-28  flex items-center justify-center'>
                <img className='w-32 ' src={deloitte} alt='deloitte' />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default Placement
