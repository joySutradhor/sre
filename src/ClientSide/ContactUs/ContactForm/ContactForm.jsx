import { useState } from 'react'
import Swal from 'sweetalert2'

const ContactForm = () => {
  const [result, setResult] = useState('')
  // const [formData, setFormData] = useState({
  //   from_name: '',
  //   from_number: '',
  //   from_email: '',
  //   from_subject: '',
  //   from_message: ''
  // });

  // const [isFormValid, setFormValid] = useState(false);

  // Handle input change
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   const updatedFormData = { ...formData, [name]: value };
  //   setFormData(updatedFormData);

  //   const isValid = Object.values(updatedFormData).every(
  //     field => field.trim() !== ''
  //   );
  //   setFormValid(isValid);
  // };

  // Handle form submit
  const handleSubmit = async e => {
    e.preventDefault()
    setResult('Sending....')
    const formData = new FormData(e.target)

    formData.append('access_key', '1ae3fc21-a163-4ada-a316-40d8e92d5262')


    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      setResult('Form Submitted Successfully')
      Swal.fire({
        title: 'Your Message Submit Successfully!!',
        icon: 'success',
        draggable: true
      })

      e.target.reset()
    } else {
      console.log('Error', data)
      setResult(data.message)
      Swal.fire({
        title: 'Error! Something went wrong!',
        icon: 'error',
        draggable: false
      })
    }
  }

  console.log(result)

  return (
    <div className='sectionGap'>
      <div className='lg:grid grid-cols-2 gap-x-[100px] mx-0 justify-between items-center text-white'>
        <div className='h-[530px] w-full'>
          <img
            className='w-full h-full object-cover'
            src='/contactUsImg.jpg'
            alt=''
          />
        </div>

        <div className='mt-[35px] text-[#FFFFFF] w-full'>
          <button className='homeLargeAppoinMent pointer-events-none mb-[40px] px-[20px] py-[10px] rounded-[30px] bg-[#1A1A1A]'>
            Contact Us
          </button>

          <h3 className='mb-[30px] formTitle'>
            Have a Question? Contact Us Today
          </h3>

          <form className='bg-[#010101]' onSubmit={handleSubmit}>
            <div className='mb-[30px]'>
              <input
                className='py-[10px] pl-[20px] rounded-[8px] w-full bg-[#010101] border border-[#FFFFFF33]/[.2]'
                type='text'
                placeholder='Name'
                name='name'
                required
              />
            </div>

            <div className='mb-[30px]'>
              <input
                className='py-[10px] pl-[20px] rounded-[8px] w-full bg-[#010101] border border-[#FFFFFF33]/[.2]'
                type='email'
                placeholder='Email'
                name='email'
                required
              />
            </div>

            <div className='mb-[30px]'>
              <input
                className='py-[10px] pl-[20px] rounded-[8px] w-full bg-[#010101] border border-[#FFFFFF33]/[.2]'
                type='text'
                placeholder='Subject'
                name='subject'
                required
              />
            </div>

            <div className='mb-[30px]'>
              <input
                className='py-[10px] pl-[20px] rounded-[8px] w-full bg-[#010101] border border-[#FFFFFF33]/[.2]'
                type='text'
                placeholder='Phone Number'
                name='number'
                required
              />
            </div>

            <div className='mb-[50px]'>
              <input
                className='pt-[10px] pl-[20px] pb-[70px] rounded-[8px] w-full bg-[#010101] border border-[#FFFFFF33]/[.2]'
                type='text'
                placeholder='Message'
                name='message'
                required
              />
            </div>

            <div>
              <input
                className='bg-[#FFD300] text-[#010101] homeLargeAppoinMent rounded-[50px] cursor-pointer'
                type='submit'
                value='Send Message'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
