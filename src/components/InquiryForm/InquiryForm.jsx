import React, { useState } from 'react'

function InquiryForm ({ selectedCourse }) {
  const [formHidden, setFormHidden] = useState(false)
  const [formData, setFormData] = useState({
    full_name: '',
    phone: '',
    email: '',
    candidate_type: '',
    selected_course: selectedCourse || '',
    query: ''
  })

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
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
          setFormHidden(false)
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
    <section className={`${formHidden? "hidden" :"block"}`}>
      <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 '>
        <form
          onSubmit={handleSubmit}
          className='p-6 bg-[#1A1A1A] rounded-lg fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg w-[90%] xl:w-[40%] mx-auto '
        >
          {/* Close Button */}
          <button
            onClick={() => setFormHidden(true)}
            className={`absolute top-2 right-4 text-white text-2xl font-bold hover:text-gray-400`}
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
    </section>
  )
}

export default InquiryForm
