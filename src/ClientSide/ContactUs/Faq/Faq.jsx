import { useState } from 'react'
import { BiMessageDetail } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = index => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 sectionGap md:gap-x-0 md:gap-y-[80px] text-[#FFFFFF] lg:gap-x-[80px] '>
      {/* FAQ Section */}
      <div className=''>
        <h2 className=' popularCategoryHead mb-[0px] md:mb-[40px] xl:mb-[80px] text-[#FFFFFF] '>
          {/* <span className="BorderGlobal border-[#35DFE6]"> */}
          Frequently {''} {''}
          {/* </span> */}
          <br />
          Asked Question
        </h2>

        <div className='mt-4 md:mt-8 space-y-4'>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-[#1A1A1A] rounded-lg overflow-hidden ${
                activeIndex === index ? 'bg-[#1A1A1A]' : ''
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className='w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none'
              >
                <span className='joinClanPara text-white'>{faq.question}</span>
                <span className='text-white'>
                  {activeIndex === index ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <div className='px-4 py-2 text-white'>
                  <p className='faqPara'>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className=' bg-[#1A1A1A] rounded-lg py-[50px] md:mt-[0px] mt-[60px] flex flex-col justify-center items-center'>
        <div className='mb-[20px] text-[80px] lg:text-[120px]'>
          <BiMessageDetail />
        </div>
        <div className=' text-center mb-[5px] md:mb-[25px]'>
          <h3 className='faqActionHead text-[#FFFFFF] max-w-[550px] leading-[50px] xl:0 lg:px-[50px]'>
            Do you have more questions?
          </h3>
        </div>
        <p className='FaqPara text-center max-w-[650px]  text-[#FFFFFF]  px-[30px]  mb-[35px]'>
          Learn more about our services, course offerings, or support.
          We&apos;re here to help.
        </p>

        <Link to='/contactUs'>
          <button className='homeLargeAppoinMent  bg-[#FFD300]  text-[#010101]   rounded-[50px]'>
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  )
}

const faqData = [
  {
    question: 'What is eduden ?',
    answer:
      'eduden is an EdTech platform offering innovative and accessible learning solutions.'
  },
  {
    question: 'How do I enroll in a course on eduden ?',
    answer:
      'Simply sign up, browse courses, and follow the easy registration process to get started.'
  },
  {
    question: 'Do eduden courses come with certificates?',
    answer:
      'Yes, eduden provides certificates upon successful course completion.'
  },
  {
    question: 'Is there tutor support available on eduden ?',
    answer:
      'Yes, expert tutors are available to guide and support you throughout your learning journey.'
  },
  {
    question: 'How do I make payments for eduden courses?',
    answer:
      'Payments can be made securely using credit/debit cards, digital wallets, or other online methods.'
  },
  {
    question: 'Are eduden courses suitable for beginners?',
    answer:
      'Absolutely, eduden offers beginner-friendly courses designed for learners with no prior experience.'
  }
]

export default Faq
