/* eslint-disable no-unused-vars */

import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import TitleContainer from '../../ClientSide/Shared/TitleContainer/TitleContainer'
import CardFotter from '../WhatsNew/CardFotter'
import Swal from 'sweetalert2'
import axios from 'axios'

/* eslint-disable react/prop-types */
const Card = ({
  category,
  title,
  image,
  description,
  crsDetails,
  img,
  slider,
  off
}) => {
  const [hover, setHover] = useState(false)
  const [selectedCourse , setSelectedCourse] = useState("")
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    candidate_type: '',
    selected_course: selectedCourse || '',
    query: ''
  })

  const navigate = useNavigate()

  const [inquiryData, setInquiryData] = useState(false)
  const handleInquiry = title => {
    setInquiryData(true)
    setSelectedCourse(title)
  }

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form data:', formData);
  
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FFD300',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, submit it!',
      customClass: {
        confirmButton: 'custom-confirm-btn'
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        const loadingAlert = Swal.fire({
          title: 'Submitting...',
          text: 'Please wait while we submit your form.',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading();
          }
        });
  
        try {
          const response = await axios.post(
            'https://eduden.mrshakil.com/api/enroll/',
            formData,
            {
              headers: {
                
                'Content-Type': 'multipart/form-data',
              }
            }
          );
          setInquiryData(false);
          console.log('Form submitted successfully:', response.data);
  
          loadingAlert.close();
          Swal.fire({
            title: 'Success!',
            text: 'Your form has been submitted successfully.',
            icon: 'success',
            confirmButtonText: 'Got it!',
            customClass: {
              confirmButton: 'custom-ok-btn'
            }
          });
        } catch (error) {
          console.error('Error submitting form message:', error);
  
          let errorMessage = 'Failed to submit the form.';

  
          loadingAlert.close();
          Swal.fire({
            title: 'Error!',
            text: errorMessage,
            icon: 'error',
          });
        }
      }
    });
  };

  return (
    <>
      <div
        className={` cursor-pointer w-full h-full bg-white rounded-[20px] flex flex-col gap-1  justify-between group  hover:bg-gradient-to-b from-[#FFD300]  to-[#FAB70A]  flex-grow-0 flex-shrink-0 transition-colors ease-in-out duration-500  box-borders  ${
          slider && 'h-full  '
        }`}
        // onClick={() => navigate("/courseDetails")}
      >
        {/* Content shown when not hovered */}
        <div className='group-hover:hidden block transition-opacity duration-500 ease-in-out  '>
          <div className='relative bg-black'>
            <img
              src={image}
              alt='picture'
              className='w-full rounded-t-[20px] max-h-[296px] transition-transform duration-500 ease-in-out group-hover:scale-110 object-cover '
            />
            <div className='w-[80px] h-[80px] md:w-[102px] md:h-[102px] rounded-full bg-[#FAB70A] absolute bottom-0 flex items-center justify-center right-[35px] translate-y-1/2    '>
              <div className='flex flex-col w-full justify-center items-center '>
                <p className='text-3xl font-bold font-gucina text-[#111]'>
                  {off}
                </p>{' '}
                <span className='text-base font-light text-[#111] -mt-2 '>
                  OFF
                </span>
              </div>
            </div>
          </div>
          <div className='px-[14px] md:px-[25px] mt-10 md:mt-[68px]'>
            <div>
              <div className='lg:flex items-center justify-between gap-[10px] sm:gap-[30px] '>
                <button className='bg-[#FAB70A] text-[14px] py-2 px-5 font-medium text-black rounded-[50px] mb-2 lg:mb-auto'>
                  {category}
                </button>
                <div className='flex items-center gap-[4px] sm:gap-[8px]'>
                  <FaStar fill='#FF8A00' className='h-[16px] w-[16px]' />
                  <FaStar fill='#FF8A00' className='h-[16px] w-[16px]' />
                  <FaStar fill='#FF8A00' className='h-[16px] w-[16px]' />
                  <FaStar fill='#FF8A00' className='h-[16px] w-[16px]' />
                  <FaStar fill='#FF8A00' className='h-[16px] w-[16px]' />
                </div>
              </div>
            </div>
            <div className='mt-5 md:mt-[25px]'>
              <h3 className='font-gucina text-[20px] md:text-[30px] text-[#010101] font-bold'>
                {title}
              </h3>
              <p className='joinClanSubPara text-black mt-[6px] md:mt-[15px] font-lexend line-clamp-3'>
                {crsDetails}
              </p>
            </div>
          </div>
        </div>

        {/* Content shown on hover */}
        <div className='h-full px-[14px] md:px-[25px]  pt-[30px] group-hover:block hidden transition-opacity duration-500 ease-in-out'>
          <div>
            <div className='md:flex items-center gap-[10px] sm:gap-[30px]'>
              <p className='w-[170px] h-[36px] flex justify-center items-center bg-[#010101]  text-[14px]  leading-[16px] font-bold text-white rounded-[50px] mb-2 md:mb-auto'>
                {category}
              </p>
              <div className='flex items-center gap-[4px] sm:gap-[8px]'>
                <FaStar color='#010101' className='h-[16px] w-[16px]' />
                <FaStar fill='#010101' className='h-[16px] w-[16px]' />
                <FaStar fill='#010101' className='h-[16px] w-[16px]' />
                <FaStar fill='#010101' className='h-[16px] w-[16px]' />
                <FaStar fill='#010101' className='h-[16px] w-[16px]' />
              </div>
            </div>
            <h2 className='font-bold md:text-[30px] text-[20px] mt-[35px] font-gucina leading-[34.5px] text-black'>
              {title}
            </h2>
            <p className='mt-[14px] text-[14px]  text-black leading-[21px] font-lexend'>
              {crsDetails}
            </p>
          </div>
        </div>

        <div className='px-[15px] md:px-[25px] '>
          <div className={`${slider && ' md:pb-[20px]'}`}>
            <div className='group-hover:opacity-100 flex opacity-0 transition-all ease-linear duration-300  items-center gap-[20px] justify-between h-full'>
              {/* <TitleContainer
                title={'Enroll Now'}
                onClick={() =>
                  navigate(`/courseDetails/${encodeURIComponent(title.trim())}`)
                }
                className={
                  
                }
                handler={() => {}}
              /> */}
              <div>
                <button
                  onClick={() =>
                    navigate(
                      `/courseDetails/${encodeURIComponent(title.trim())}`
                    )
                  }
                  className='md:px-[18px] md:py-2 py-2 px-3 bg-[#010101]  text-white rounded-[50px] text-nowrap cursor-pointer hover:scale-105 text-[14px] md:text-[20px]'
                >
                  Enroll Now
                </button>
              </div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 200 60'
                className='w-[30px] shrink-0 md:w-12 h-12  text-[#010101] transition-transform duration-500 ease-in-out hover:scale-125'
              >
                <line
                  x1='0'
                  y1='30'
                  x2='170'
                  y2='30'
                  stroke='#000'
                  strokeWidth='3'
                />
                <polygon points='170,30 150,20 150,40' fill='#000' />
              </svg>
              <div>
                <button
                  onClick={() => handleInquiry(title)}
                  className='px-4 py-2 md:px-[25px] md:py-[13px]  rounded-[50px] bg-[#010101]  text-white text-[16px] font-gucina font-bold '
                >
                  inquiry
                </button>
              </div>
            </div>
          </div>
          {slider && <div className='h-[1px] bg-[#010101] mb-[15px]'></div>}
          <div
            className={`mt-[22px] ${
              slider
                ? 'my-[15px]'
                : 'py-[15px] border-t-[1px]  border-t-[#010101] '
            }`}
          >
            <CardFotter />
          </div>
        </div>
      </div>

      {/* students inquiry data form  */}
      {inquiryData && (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 '>
          <form
            onSubmit={handleSubmit}
            className='p-6 bg-[#1A1A1A] rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg w-[90%] xl:w-[40%] mx-auto '
          >
            {/* Close Button */}
            <button
              onClick={() => setInquiryData(false)}
              className='absolute top-2 right-4 text-white text-2xl font-bold hover:text-gray-400'
            >
              &times;
            </button>

            <div className='flex justify-center items-center'>
              <div>
                <h2 className='text-xl font-bold text-white mb-4 text-center'>
                  Admission Inquiry
                </h2>

                <input
                  type='text'
                  name='full_name'
                  placeholder='Full Name'
                  value={formData.full_name}
                  onChange={handleChange}
                  className='w-full p-2 mb-3 lg:mb-5 rounded bg-[#222] text-white'
                  required
                />

                <input
                  type='tel'
                  name='phone'
                  placeholder='Phone Number'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full p-2 mb-3 lg:mb-5 rounded bg-[#222] text-white'
                  required
                />

                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full p-2 mb-3 lg:mb-5 rounded bg-[#222] text-white'
                  required
                />

                <select
                  name='candidate_type'
                  value={formData.candidate_type}
                  onChange={handleChange}
                  className='w-full p-2 mb-3 lg:mb-5 rounded bg-[#222] text-white'
                  required
                >
                  <option value=''>Select Candidate Type</option>
                  <option value='Student'>Student</option>
                  <option value='Job Holder'>Job Holder</option>
                  <option value='Other'>Other</option>
                </select>

                {/* Select Course */}
                <select
                  name='selected_course'
                  value={formData.selected_course}
                  onChange={handleChange}
                  className='w-full p-2 mb-3 lg:mb-5  rounded bg-[#222] text-white'
                  required
                >
                  <option value={selectedCourse}>{selectedCourse}</option>
                  {/* <option value='' className='text-white/80'>
                    Select Course
                  </option>
                  <option value='Data Science and Machine Learning'>
                    Data Science and Machine Learning
                  </option>
                  <option value='Graphic Design'>Graphic Design</option>
                  <option value='Introduction to Python Programming'>
                    Introduction to Python Programming
                  </option>
                  <option value='UI/UX Design'>UI/UX Design</option>
                  <option value='Ethical Hacking and Penetration Testing'>
                    Ethical Hacking and Penetration Testing
                  </option>
                  <option value='Network Administration (CCNA)'>
                    Network Administration (CCNA)
                  </option>
                  <option value='Mastering Web Development'>
                    Mastering Web Development
                  </option>
                  <option value='DevOps and Continuous Integration'>
                    DevOps and Continuous Integration
                  </option> */}
                </select>

                <textarea
                  name='query'
                  placeholder='Your Query'
                  value={formData.query}
                  onChange={handleChange}
                  className='w-full p-2 mb-3 lg:mb-5 rounded bg-[#222] text-white'
                ></textarea>

                <button
                  type='submit'
                  className='w-full py-2 my-5 bg-[#FFD300] text-black rounded font-bold hover:bg-yellow-500'
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default Card
