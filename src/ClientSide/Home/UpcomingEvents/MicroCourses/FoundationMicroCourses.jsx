/* eslint-disable react/prop-types */
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

function FoundationMicroCourses ({ course }) {
  const [activeButton, setActiveButton] = useState('Admission')


  const handleToogleButton = updatedBtn => {
    setAdmission(updatedBtn === 'Admission')
    setActiveButton(updatedBtn)
  }



  const handleSubmit = async e => {
    e.preventDefault()
    console.log('Submitting form data:', formData)

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
    }).then(async result => {
      if (result.isConfirmed) {
        const loadingAlert = Swal.fire({
          title: 'Submitting...',
          text: 'Please wait while we submit your form.',
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading()
          }
        })

        try {
          const response = await axios.post(
            'https://eduden.mrshakil.com/api/enroll/',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          )
          setAdmission(false)
          console.log('Form submitted successfully:', response.data)

          loadingAlert.close()
          Swal.fire({
            title: 'Success!',
            text: 'Your form has been submitted successfully.',
            icon: 'success',
            confirmButtonText: 'Got it!',
            customClass: {
              confirmButton: 'custom-ok-btn'
            }
          })
        } catch (error) {
          console.error('Error submitting form message:', error)

          let errorMessage = 'Failed to submit the form.'

          loadingAlert.close()
          Swal.fire({
            title: 'Error!',
            text: errorMessage,
            icon: 'error'
          })
        }
      }
    })
  }

  return (
    <div className='sectionGap bg-[#010101] grid  xl:grid-cols-2 gap-[80px]'>
      <div className='order-2 xl:order-1'>
        <h1 className='text-[#FFFFFF] popularCategoryHead pb-[16px]'>
          {course.title}
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-[16px] pb-[20px]'>
          <div className='flex flex-col justify-center items-center py-[8px] border border-white rounded-[16px]'>
            <p className='text-[#FFFFFFCC] joinClanSubPara font-lexend'>
              Duration
            </p>
            <p className='text-[#FFFFFFCC] courseDetailsPara font-lexend'>
              {course.duration}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center py-[8px] border border-white rounded-[16px]'>
            <p className='text-[#FFFFFFCC] joinClanSubPara'>Lecture</p>
            <p className='text-[#FFFFFFCC] courseDetailsPara font-lexend'>
              {course.lecture}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center py-[8px] border border-white rounded-[16px]'>
            <p className='text-[#FFFFFFCC] joinClanSubPara font-lexend'>
              Projects
            </p>
            <p className='text-[#FFFFFFCC] courseDetailsPara font-lexend'>
              {course.projects}
            </p>
          </div>
        </div>
        <p className='text-[#FFFFFFCC] joinClanSubPara pb-[30px]'>
          {course.para}
        </p>

        {/* <div className='flex flex-row gap-[16px]'>
          <button
            onClick={() => handleToogleButton('Admission')}
            className={`px-[16px] py-[10px] md:px-[25px] md:py-[6px] rounded-[50px] CourseUi text-black ${
              activeButton === 'Admission'
                ? 'bg-[#FFD300] text-black'
                : 'bg-[#1A1A1A] text-white'
            }`}
          >
            Admission test
          </button>
          <button
            onClick={() => handleToogleButton('Seminar')}
            className={`px-[16px] py-[10px] rounded-[50px] CourseUi text-black ${
              activeButton === 'Seminar'
                ? 'bg-[#FFD300] text-[#010101]'
                : 'bg-[#1A1A1A] text-white'
            }`}
          >
            Join free seminar
          </button>
        </div> */}
      </div>

      {/* picture */}
      <div className='md:h-[496px] h-[168px] order-1'>
        <img
          className='w-full h-full rounded-[16px] object-cover'
          src='/enroll.jpg'
          alt=''
        />
      </div>

   
    </div>
  )
}

export default FoundationMicroCourses
