/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { cancel } from '../../constant/images'

const Cancel = ({ setIsError }) => {
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
      <div className='absolute p-[10px] inset-0 bg-black bg-opacity-50'></div>

      {/* Dialog box */}
      <div className='relative z-10 bg-white p-10 md:p-[50px] flex flex-col gap-[35px] items-center justify-center max-w-[920px] rounded-lg'>
        <img
          src={cancel}
          width={100}
          height={100}
          className='max-w-[60px] md:max-w-[100px]'
        />
        <div>
          <h2 className='text-[20px] leading-[26px] md:text-[35px] font-gucina font-bold md:leading-[45.5px] text-[#141414]'>
            Verification Unsuccessful
          </h2>

          <div className='text-[20px] font-semibold leading-[30px] text-[rgba(20,20,20,0.80)] mt-5'>
            <p>The ID you entered is invalid</p>
            <p className='mt-3'>Please check the ID and try again</p>
          </div>
        </div>
        <div className='flex gap-5'>
          <button
            onClick={() => setIsError(false)}
            className='px-[35px] py-[5px] bg-[#FFD300] font-gucina text-[rgba(1, 1, 1, 0.80)] rounded-[50px] border hover:bg-white hover:border-[#FFD300]'
          >
            Cancel
          </button>
          <button
            onClick={() => setIsError(false)}
            className='px-[35px] py-[5px] bg-[#FFD300] font-gucina text-[rgba(1, 1, 1, 0.80)] rounded-[50px] border hover:bg-white hover:border-[#FFD300]'
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cancel
