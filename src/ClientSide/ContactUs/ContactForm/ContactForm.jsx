import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_number: '',
    from_email: '',
    from_message: ''
  })

  const [isModalVisible, setModalVisible] = useState(false)
  const [isFormValid, setFormValid] = useState(false)
  // const form = useRef();

  // Function to handle input change
  const handleInputChange = e => {
    const { name, value } = e.target
    const updatedFormData = { ...formData, [name]: value }
    setFormData(updatedFormData)

    // Check if all fields are filled
    const isValid = Object.values(updatedFormData).every(
      field => field.trim() !== ''
    )
    setFormValid(isValid)
  }

  // Function to handle the "Got it" button click
  const handleGotItClick = () => {
    setModalVisible(false)
  }
  return (
    <div className='sectionGap'>
      <div className='lg:grid grid-cols-2 gap-x-[100px]   mx-0 justify-between items-center text-white'>
        <div className=' h-[530px]  w-full'>
          <img className='w-full h-full object-cover' src='/contactUsImg.jpg' alt='' />
        </div>
        <div className=' mt-[35px] text-[#FFFFFF]  w-full'>
          <button className='homeLargeAppoinMent pointer-events-none mb-[40px] px-[20px] py-[10px]  rounded-[30px] bg-[#1A1A1A]'>
            Contact Us
          </button>

          <h3 className=' mb-[30px] formTitle '>
            Have a Question? Contact Us Today
          </h3>

          <form className=' bg-[#010101]'>
            <div className=' mb-[30px] '>
              <input
                className='py-[10px] pl-[20px] rounded-[8px]  w-full bg-[#010101]  border border-[#FFFFFF33]/[.2]'
                type='text'
                placeholder='Name'
                name='from_name'
                id='full_name'
                required
                onChange={handleInputChange}
              />
            </div>

            <div className='mb-[30px]'>
              <input
                className='py-[10px] pl-[20px] rounded-[8px] bg-[#010101] w-full border border-[#FFFFFF33]/[.2]'
                type='email'
                placeholder='Email'
                name='from_email'
                id='email'
                required
                onChange={handleInputChange}
              />
            </div>

            <div className='mb-[30px]'>
              <input
                className='py-[10px] pl-[20px] rounded-[8px] bg-[#010101] w-full border border-[#FFFFFF33]/[.2]'
                type='text'
                placeholder='Subject'
                name='from_Subject'
                id='from_Subject'
                required
                onChange={handleInputChange}
              />
            </div>
            <div className='mb-[50px]'>
              <input
                className='pt-[10px] pl-[20px] pb-[70px] rounded-[8px] bg-[#010101] w-full border border-[#FFFFFF33]/[.2]'
                type='text'
                placeholder='Message'
                name='from_message'
                id='from_message'
                required
                onChange={handleInputChange}
              />
            </div>

            <div className=' '>
              <input
                className=' bg-[#FFD300] text-[#010101]  homeLargeAppoinMent  rounded-[50px] cursor-pointer   '
                type='submit'
                value='Send Message'
                disabled={!isFormValid}
              />
              {isModalVisible && (
                <div className='fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]'>
                  <div className='w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-3.5 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500 float-right'
                      viewBox='0 0 320.591 320.591'
                      onClick={handleGotItClick}
                    >
                      <path
                        d='M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z'
                        data-original='#000000'
                      ></path>
                      <path
                        d='M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z'
                        data-original='#000000'
                      ></path>
                    </svg>

                    <div className='my-8 text-center'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-14 shrink-0 fill-[#FFD300] inline'
                        viewBox='0 0 512 512'
                      >
                        <path
                          d='M383.841 171.838c-7.881-8.31-21.02-8.676-29.343-.775L221.987 296.732l-63.204-64.893c-7.965-8.18-21.105-8.481-29.285-.515-8.181 7.965-8.481 21.106-.515 29.285l78.021 80.129c3.94 4.046 9.367 6.305 15.041 6.314.015 0 .031 0 .046-.001 5.678-.013 11.115-2.297 15.045-6.351l144.702-141.528c8.318-7.899 8.674-21.038.775-29.343z'
                          data-original='#000000'
                        ></path>
                        <path
                          d='M256 0C114.848 0 0 114.852 0 256s114.848 256 256 256c141.153 0 256-114.852 256-256S397.152 0 256 0zm0 472.727c-119.387 0-216.727-97.34-216.727-216.727S136.613 39.273 256 39.273 472.727 136.613 472.727 256 375.387 472.727 256 472.727z'
                          data-original='#000000'
                        ></path>
                      </svg>
                      <h3 className='text-xl font-[700] leading-normal my-6'>
                        Success!
                      </h3>
                      <p className='text-sm leading-[1.5] text-gray-500 font-[500]'>
                        We have received your request and will get back to you
                        shortly.
                      </p>
                    </div>
                    <button
                      className='contactSendBtn'
                      onClick={handleGotItClick}
                    >
                      Got it
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
