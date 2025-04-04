/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import { verifyImg } from '../../constant/images'

const VerifyForm = ({ setIsOkay, setIsErro }) => {
  const [formInput, setFormInput] = useState({ name: '', certificate: '' })
  const handleFrom = e => {
    e.preventDefault()
    setIsOkay(true)
  }
  return (
    <div
      className='flex    flex-col md:flex-row justify-center  items-center 2xl:gap-[118px]
    gap-[70px]'
    >
      <div className='md:max-w-[60%] w-full'>
        <img
          src={verifyImg}
          alt='verify image'
          width={625}
          className=' w-full h-auto '
        />
      </div>
      <div className='md:max-w-[40%] w-full'>
        <form className='flex flex-col w-full gap-[30px]' onSubmit={handleFrom}>
          <input
            type='text'
            placeholder='Enter your name'
            name='name'
            className='p-5
                        border border-[rgba(255, 255, 255, 0.20)]
                        outline-none
                        w-full
                        rounded-[8px]
                        placeholder:text-[18px] text-white placeholder:text-white
                        bg-[#1A1A1A]
                        '
            value={formInput.name}
            onChange={e =>
              setFormInput(value => {
                return {
                  ...value,
                  name: e.target.value
                }
              })
            }
          />
          <input
            type='text'
            placeholder='Enter Certificate/ID Here'
            name='certificate'
            className='p-5 outline-none border border-[rgba(255, 255, 255, 0.20)]
                        w-full rounded-[8px]
                         placeholder:text-[18px] text-white placeholder:text-white
                         bg-[#1A1A1A]'
            value={formInput.certificate}
            onChange={e =>
              setFormInput(value => {
                return {
                  ...value,
                  certificate: e.target.value
                }
              })
            }
          />
          <button className='homeLargeAppoinMent bg-[#FFD300]  text-[#010101] md:max-w-[130px]  max-w-[100px] '>
            Verify
          </button>
        </form>
      </div>
    </div>
  )
}

export default VerifyForm
