/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { ok } from '../../constant/images'
import { FaDownload } from 'react-icons/fa'

const Ok = ({
  setIsOkay,
  userId = 'USR12345678',
  courseName = 'Digital Marketing'
}) => {
  const currentDate = new Date(Date.now())

  const options = { year: 'numeric', month: 'long' }
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
    currentDate
  )
  useEffect(() => {
    // Disable scrolling when the component is mounted
    document.body.style.overflow = 'hidden'
    return () => {
      // Enable scrolling when the component is unmounted
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      {/* Background overlay */}
      <div className='absolute px-3 inset-0 bg-black bg-opacity-50'></div>

      {/* Dialog box */}
      <div className='relative z-10 bg-white p-10 md:p-[50px] flex flex-col gap-[35px] items-center justify-center max-w-[920px] rounded-lg'>
        <img
          src={ok}
          width={100}
          height={100}
          className='max-w-[60px] md;max-w-[100px]'
        />
        <div>
          <h2 className='text-[20px] md:text-[35px] leading-[26px] font-gucina font-bold md:leading-[45.5px] text-[#141414]'>
            Verification Successful!
          </h2>

          <div className='text-[12px] md:text-[20px] font-semibold leading-[30px] text-[rgba(20,20,20,0.80)] mt-5'>
            <p>User ID: {userId}</p>
            <p className='mt-3'>Course Name: {courseName}</p>
            <p>Completion Date:{formattedDate}</p>
          </div>
        </div>
        <div className='flex gap-3 md:gap-5 flex-col md:flex-row'>
          <button
            onClick={() => setIsOkay(false)}
            className='px-[50px] py-[6px] bg-[#FFD300] font-gucina text-[rgba(1, 1, 1, 0.80)] rounded-[50px] hover:border-[#FFD300]'
          >
            Not Now
          </button>
          <button
            onClick={() => setIsOkay(false)}
            className='px-[50px] py-[6px] bg-[#FFD300] font-gucina text-[rgba(1, 1, 1, 0.80)] flex items-center gap-3 rounded-[50px] hover:border-[#FFD300]'
          >
            <FaDownload />{' '}
            <span className='text-nowrap'>Download Certificate</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Ok
