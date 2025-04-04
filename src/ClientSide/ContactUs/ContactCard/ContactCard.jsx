import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const ContactCard = () => {
  return (
    <div className='sectionGap'>
      <div className=' text-white grid grid-cols-1 lg:grid-cols-3 gap-[36px] items-center'>
        {/* Title */}

        <div className='bg-[#1A1A1A] rounded-[16px] py-[40px] pl-[40px] pr-[57px]  h-auto lg:h-[290px]'>
          <div className='h-[60px] w-[60px] mb-[16px] bg-[#FFD300] rounded-full flex items-center justify-center'>
            <FaPhoneAlt size={27} className='text-black ' />
          </div>

          <div>
            <h1 className='testimonialSub pb-4'>Our Phone Number</h1>
            <p className='joinClanSubPara pb-2'>+919547578920</p>
          </div>
        </div>

        <div className='bg-[#1A1A1A] rounded-[16px] py-[40px] pl-[40px]  pr-[57px] h-auto lg:h-[290px]'>
          <div className='h-[60px] w-[60px] mb-[16px] bg-[#FFD300] rounded-full flex items-center justify-center'>
            <MdEmail size={27} className='text-black' />
          </div>

          <div>
            <h1 className='testimonialSub pb-4'>Our Email Address</h1>
            <p className='joinClanSubPara'>learn@eduden.io</p>
          </div>
        </div>

        <div className='bg-[#1A1A1A] rounded-[16px] py-[40px] pl-[40px] pr-[57px]  h-auto lg:h-[290px]'>
          <div className='h-[60px] w-[60px] mb-[16px] bg-[#FFD300] rounded-full flex items-center justify-center'>
            <FaLocationDot size={27} className='text-black' />
          </div>

          <div>
            <h1 className='testimonialSub pb-4'>Our Location</h1>
            <p className='joinClanSubPara pb-2'>
              24/A Road-6, Nokia Care Building, South Dumdum, Kolkata .
            </p>
            <p className='joinClanSubPara'> Mohammadpur, Dhaka</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
