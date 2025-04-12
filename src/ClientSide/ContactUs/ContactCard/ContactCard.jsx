import { useEffect } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const ContactCard = () => {
  useEffect(() => {
    const handleCopy = e => e.preventDefault()
    const handleCut = e => e.preventDefault()
    const handlePaste = e => e.preventDefault()
    const handleContextMenu = e => e.preventDefault()
    // const handleSelectStart = e => e.preventDefault()

    document.addEventListener('copy', handleCopy)
    document.addEventListener('cut', handleCut)
    document.addEventListener('paste', handlePaste)
    document.addEventListener('contextmenu', handleContextMenu)
    // document.addEventListener('selectstart', handleSelectStart)

    return () => {
      document.removeEventListener('copy', handleCopy)
      document.removeEventListener('cut', handleCut)
      document.removeEventListener('paste', handlePaste)
      document.removeEventListener('contextmenu', handleContextMenu)
      // document.removeEventListener('selectstart', handleSelectStart)
    }
  }, [])

  return (
    <div className='sectionGap'>
      <div className=' text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[36px] '>
        {/* Title */}

        <div className='bg-[#1A1A1A] rounded-[16px] py-[40px] pl-[40px] pr-[57px]  h-auto '>
          <div className='h-[60px] w-[60px] mb-[16px] bg-[#FFD300] rounded-full flex items-center justify-center'>
            <FaPhoneAlt size={27} className='text-black ' />
          </div>

          <div>
            <h1 className='testimonialSub pb-4'>Our Phone Number</h1>
            <p className='joinClanSubPara pb-2'>+919547578920</p>
          </div>
        </div>

        <div className='bg-[#1A1A1A] rounded-[16px] py-[40px] pl-[40px]  pr-[57px] h-auto '>
          <div className='h-[60px] w-[60px] mb-[16px] bg-[#FFD300] rounded-full flex items-center justify-center'>
            <MdEmail size={27} className='text-black' />
          </div>

          <div>
            <h1 className='testimonialSub pb-4'>Our Email Address</h1>
            <p className='joinClanSubPara'>learn@eduden.io</p>
          </div>
        </div>

        <div className='bg-[#1A1A1A] rounded-[16px] py-[40px] pl-[40px] pr-[57px]  h-auto '>
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
