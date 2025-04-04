// import { MdArrowRightAlt } from "react-icons/md";

const OnlineCourses = () => {
  return (
    <div className='text-[#FFFFFF] '>
      <div className='sectionGap'>
        <div className='flex lg:flex-row  flex-col xl:gap-x-[68px] gap-x-[30px] justify-between items-start '>
          <div className="group">
            <h1 className='popularCategoryHead  mb-[35px] 2xl:max-w-[700px] xl:max-w-[506px] md:max-w-[400px]'>
              We Provide The{' '}
              <span className='relative text-white after:absolute after:right-0 after:bottom-0 after:h-[4px] after:w-0 after:bg-[#FFD300] after:transition-all after:duration-300 group-hover:after:w-full '>
                Best Quality Online Courses
              </span>
            </h1>
          </div>
          <div>
            <p className='joinClanSubPara 2xl:max-w-[800px] xl:max-w-[600px] lg:max-w-[600px] '>
              Well, because we’re not your grandma’s boring old school! At
              eduden, we’re the rebels of education, the mavericks of learning,
              and the champions of fun-filled knowledge. We’ll teach you how to
              slay dragons and code websites, all while cracking jokes and
              sipping on virtual coffee. So, why settle for snooze-worthy
              lectures when you can join the eduden revolution? Let’s make
              learning epic together!Well, because we’re not your grandma’s
              boring old school! At eduden, we’re the rebels of education, the
              mavericks of learning, and the champions of fun-filled knowledge.
              We’ll teach you how to slay dragons and code websites, all while
              cracking jokes and sipping on virtual coffee.
            </p>
          </div>
        </div>
      </div>

      <div className='sectionGap  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  2xl:grid-cols-4  items-center gap-[20px] '>
        <div
          className='hover:bg-gradient-to-b from-[#FFD300]  to-[#FAB70A] h-[320px] md:h-[400px]  lg:h-[400px] 
        2xl:h-[500px] xl:h-[450px] bg-[#141414] px-[30px] pt-[50px] group rounded-[20px] text-center  '
        >
          <div className='h-[60px] w-[60px] mx-auto xl:mb-[45px] lg:mb-[20px] mb-[20px] rounded-full bg-white group-hover:bg-[#000000] flex justify-center items-center'>
            <svg
              className='w-8 h-8 transition-colors duration-500 fill-current text-black group-hover:text-white'
              viewBox='0 0 41 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_71_1111)'>
                <path
                  d='M34.875 31.0547C35.7344 31.4844 36.5091 32.0117 37.1992 32.6367C37.8893 33.2617 38.4753 33.9583 38.957 34.7266C39.4388 35.4948 39.8164 36.3281 40.0898 37.2266C40.3633 38.125 40.5 39.0495 40.5 40H38C38 38.9714 37.8047 38.0013 37.4141 37.0898C37.0234 36.1784 36.4896 35.3841 35.8125 34.707C35.1354 34.0299 34.3346 33.4896 33.4102 33.0859C32.4857 32.6823 31.5156 32.487 30.5 32.5C29.4583 32.5 28.4883 32.6953 27.5898 33.0859C26.6914 33.4766 25.8971 34.0104 25.207 34.6875C24.5169 35.3646 23.9766 36.1654 23.5859 37.0898C23.1953 38.0143 23 38.9844 23 40H20.5C20.5 39.0495 20.6302 38.125 20.8906 37.2266C21.151 36.3281 21.5286 35.4948 22.0234 34.7266C22.5182 33.9583 23.1107 33.2617 23.8008 32.6367C24.4909 32.0117 25.2656 31.4844 26.125 31.0547C25.1484 30.3516 24.3867 29.4727 23.8398 28.418C23.293 27.3633 23.013 26.224 23 25C23 23.9714 23.1953 23.0013 23.5859 22.0898C23.9766 21.1784 24.5104 20.3841 25.1875 19.707C25.8646 19.0299 26.6589 18.4896 27.5703 18.0859C28.4818 17.6823 29.4583 17.487 30.5 17.5C31.5286 17.5 32.4987 17.6953 33.4102 18.0859C34.3216 18.4766 35.1159 19.0104 35.793 19.6875C36.4701 20.3646 37.0104 21.1654 37.4141 22.0898C37.8177 23.0143 38.013 23.9844 38 25C38 26.224 37.7266 27.3633 37.1797 28.418C36.6328 29.4727 35.8646 30.3516 34.875 31.0547ZM30.5 30C31.1901 30 31.8346 29.8698 32.4336 29.6094C33.0326 29.349 33.5664 28.9909 34.0352 28.5352C34.5039 28.0794 34.862 27.5521 35.1094 26.9531C35.3568 26.3542 35.487 25.7031 35.5 25C35.5 24.3099 35.3698 23.6654 35.1094 23.0664C34.849 22.4674 34.4909 21.9336 34.0352 21.4648C33.5794 20.9961 33.0521 20.638 32.4531 20.3906C31.8542 20.1432 31.2031 20.013 30.5 20C29.8099 20 29.1654 20.1302 28.5664 20.3906C27.9674 20.651 27.4336 21.0091 26.9648 21.4648C26.4961 21.9206 26.138 22.4479 25.8906 23.0469C25.6432 23.6458 25.513 24.2969 25.5 25C25.5 25.6901 25.6302 26.3346 25.8906 26.9336C26.151 27.5326 26.5091 28.0664 26.9648 28.5352C27.4206 29.0039 27.9479 29.362 28.5469 29.6094C29.1458 29.8568 29.7969 29.987 30.5 30ZM20.5 31.5625C20.0833 32.0443 19.7057 32.5456 19.3672 33.0664C19.0286 33.5872 18.7292 34.1471 18.4688 34.7461C17.7786 34.0299 16.9453 33.4766 15.9688 33.0859C14.9922 32.6953 14.0026 32.5 13 32.5H5.5V7.5H3V35H18.3711C18.1888 35.4036 18.0391 35.8138 17.9219 36.2305C17.8047 36.6471 17.707 37.0703 17.6289 37.5H0.5V5H5.5V2.5H13C14.1458 2.5 15.2461 2.67578 16.3008 3.02734C17.3555 3.37891 18.3385 3.90625 19.25 4.60938C20.1484 3.90625 21.125 3.37891 22.1797 3.02734C23.2344 2.67578 24.3411 2.5 25.5 2.5H33V5H38V17.5C37.2448 16.7578 36.4115 16.1393 35.5 15.6445V7.5H33V14.707C32.5833 14.5898 32.1667 14.5052 31.75 14.4531C31.3333 14.401 30.9167 14.375 30.5 14.375V5H25.5C24.5885 5 23.7031 5.15625 22.8438 5.46875C21.9844 5.78125 21.2031 6.24349 20.5 6.85547V31.5625ZM18 31.3086V6.85547C17.2969 6.25651 16.5156 5.80078 15.6562 5.48828C14.7969 5.17578 13.9115 5.01302 13 5H8V30H13C13.8724 30 14.7318 30.1107 15.5781 30.332C16.4245 30.5534 17.2318 30.8789 18 31.3086Z'
                  fill='currentColor'
                />
              </g>
              <defs>
                <clipPath id='clip0_71_1111'>
                  <rect
                    width='40'
                    height='40'
                    fill='currentColor'
                    transform='translate(0.5)  '
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h1 className='mb-[15px] aboutPageHero group-hover:text-[#000000] transition duration-500'>
            Course Certificate
          </h1>
          <p className='xl:mb-[20px] lg:mb-[20px] joinClanSubPara px-[10px]  group-hover:text-[#000000] transition duration-500'>
            Every assignment and the final exams with a minimum 50% mark will
            earn a course certificate.
          </p>
          <div className='flex items-center justify-center pb-[30px]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 200 60'
              className='w-12 h-12 fill-current  group-hover:text-[#000000] text-white'
            >
              <line
                x1='0'
                y1='30'
                x2='170'
                y2='30'
                stroke='currentColor'
                strokeWidth='3'
              />
              <polygon points='170,30 150,20 150,40' fill='currentColor' />
            </svg>
          </div>
        </div>

        <div className='hover:bg-gradient-to-bl from-[#FFD300] h-[320px] md:h-[400px] lg:h-[400px] 2xl:h-[500px] xl:h-[450px] to-[#FAB70A] bg-[#141414] px-[30px] pt-[50px] group rounded-[20px] text-center  '>
          <div className='h-[60px] w-[60px] mx-auto xl:mb-[45px] lg:mb-[20px] mb-[20px] rounded-full bg-white group-hover:bg-[#000000] flex justify-center items-center'>
            <svg
              className='w-8 h-8 transition-colors duration-500 fill-current text-black group-hover:text-white'
              viewBox='0 0 41 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.1667 11.6668H12.1817M22.1667 23.3335H32.1667C33.72 23.3335 34.4967 23.3335 35.1083 23.5868C35.513 23.7544 35.8807 24 36.1905 24.3097C36.5002 24.6194 36.7458 24.9871 36.9133 25.3918C37.1667 26.0035 37.1667 26.7802 37.1667 28.3335C37.1667 29.8868 37.1667 30.6635 36.9133 31.2752C36.7458 31.6799 36.5002 32.0476 36.1905 32.3573C35.8807 32.667 35.513 32.9126 35.1083 33.0802C34.4967 33.3335 33.72 33.3335 32.1667 33.3335H22.1667M25.5 8.3335H32.1667C33.72 8.3335 34.4967 8.3335 35.1083 8.58683C35.513 8.75435 35.8807 8.99999 36.1905 9.3097C36.5002 9.61942 36.7458 9.98713 36.9133 10.3918C37.1667 11.0035 37.1667 11.7802 37.1667 13.3335C37.1667 14.8868 37.1667 15.6635 36.9133 16.2752C36.7458 16.6799 36.5002 17.0476 36.1905 17.3573C35.8807 17.667 35.513 17.9126 35.1083 18.0802C34.4967 18.3335 33.72 18.3335 32.1667 18.3335H25.5M12.1667 3.3335C10.3318 3.33294 8.54795 3.93802 7.09206 5.05484C5.63616 6.17167 4.58958 7.73779 4.11471 9.51019C3.63984 11.2826 3.76324 13.1622 4.46575 14.8573C5.16825 16.5524 6.4106 17.9683 8 18.8852V29.7385C8 31.1018 8 31.7818 8.25334 32.3952C8.50667 33.0068 8.99 33.4885 9.95334 34.4535L12.1667 36.6668L15.68 33.1535C15.8417 32.9918 15.9233 32.9102 15.99 32.8218C16.1666 32.5911 16.2798 32.3182 16.3183 32.0302C16.3333 31.9202 16.3333 31.8052 16.3333 31.5768C16.3333 31.3918 16.3333 31.2985 16.3233 31.2085C16.2974 30.9723 16.2212 30.7445 16.1 30.5402C16.0345 30.4363 15.9633 30.3362 15.8867 30.2402L13.8333 27.5002L15 25.9452C15.66 25.0635 15.9917 24.6235 16.1617 24.1102C16.3333 23.5968 16.3333 23.0468 16.3333 21.9435V18.8852C17.9227 17.9683 19.1651 16.5524 19.8676 14.8573C20.5701 13.1622 20.6935 11.2826 20.2186 9.51019C19.7438 7.73779 18.6972 6.17167 17.2413 5.05484C15.7854 3.93802 14.0016 3.33294 12.1667 3.3335Z'
                strokeWidth='2.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <h1 className='mb-[15px] aboutPageHero group-hover:text-[#000000] transition duration-500'>
            100% Access
            {/* on Purchase Period */}
          </h1>
          <p className='xl:mb-[20px] lg:mb-[20px] joinClanSubPara px-[10px]  group-hover:text-[#000000] transition duration-500'>
            Buying the course entitles you to access to all course content for a
            certain period.
          </p>
          <div className='flex items-center justify-center pb-[30px]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 200 60'
              className='w-12 h-12 fill-current  group-hover:text-[#000000] text-white'
            >
              <line
                x1='0'
                y1='30'
                x2='170'
                y2='30'
                stroke='currentColor'
                strokeWidth='3'
              />
              <polygon points='170,30 150,20 150,40' fill='currentColor' />
            </svg>
          </div>
        </div>

        <div className='hover:bg-gradient-to-bl from-[#FFD300] h-[320px] md:h-[400px] lg:h-[400px] 2xl:h-[500px] xl:h-[450px] to-[#FAB70A] bg-[#141414] px-[30px] pt-[50px] group rounded-[20px] text-center  '>
          <div className='h-[60px] w-[60px] mx-auto xl:mb-[45px] lg:mb-[20px] mb-[20px] rounded-full bg-white group-hover:bg-[#000000] flex justify-center items-center'>
            <svg
              className='w-8 h-8 stroke-current text-black group-hover:text-white'
              viewBox='0 0 41 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_71_1127)'>
                <path
                  d='M13.8333 18.3332C16.0435 18.3332 18.1631 17.4552 19.7259 15.8924C21.2887 14.3296 22.1667 12.21 22.1667 9.99984C22.1667 7.7897 21.2887 5.67008 19.7259 4.10728C18.1631 2.54448 16.0435 1.6665 13.8333 1.6665C11.6232 1.6665 9.50357 2.54448 7.94077 4.10728C6.37796 5.67008 5.49999 7.7897 5.49999 9.99984C5.49999 12.21 6.37796 14.3296 7.94077 15.8924C9.50357 17.4552 11.6232 18.3332 13.8333 18.3332ZM13.8333 18.3332C17.1883 18.3332 20.12 19.5998 22.205 21.7048C23.4411 22.9581 24.3659 24.484 24.905 26.1598M13.8333 18.3332C7.16666 18.3332 2.16666 23.3332 2.16666 29.9998V38.3332H18.8333M20.5 31.3732L27.4833 36.6665L38.8333 21.6665'
                  strokeWidth='3.33333'
                />
              </g>
              <defs>
                <clipPath id='clip0_71_1127'>
                  <rect
                    width='40'
                    height='40'
                    fill='white'
                    transform='translate(0.5)'
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h1 className='mb-[15px] aboutPageHero group-hover:text-[#000000] transition duration-500'>
            Expert Instructors
          </h1>
          <p className='xl:mb-[20px] lg:mb-[20px] joinClanSubPara px-[10px]  group-hover:text-[#000000] transition duration-500'>
            Learn from expert instructors dedicated to guiding you toward
            success.
          </p>

          <div className='flex items-center justify-center pb-[30px]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 200 60'
              className='w-12 h-12 fill-current  group-hover:text-[#000000] text-white'
            >
              <line
                x1='0'
                y1='30'
                x2='170'
                y2='30'
                stroke='currentColor'
                strokeWidth='3'
              />
              <polygon points='170,30 150,20 150,40' fill='currentColor' />
            </svg>
          </div>
        </div>

        <div className='hover:bg-gradient-to-bl from-[#FFD300] h-[320px] md:h-[400px] lg:h-[400px] 2xl:h-[500px] xl:h-[450px] to-[#FAB70A] bg-[#141414] px-[30px] pt-[50px] group rounded-[20px] text-center  '>
          <div className='h-[60px] w-[60px] mx-auto xl:mb-[45px] lg:mb-[20px] mb-[20px] rounded-full bg-white group-hover:bg-[#000000] flex justify-center items-center'>
            <svg
              className='w-8 h-8 stroke-current text-black group-hover:text-white'
              viewBox='0 0 41 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_71_1135)'>
                <path
                  d='M32.007 2.5H22.4031C22.1046 2.49978 21.8181 2.61775 21.6063 2.82813L2.40625 22.0234C1.98595 22.4458 1.75 23.0174 1.75 23.6133C1.75 24.2091 1.98595 24.7808 2.40625 25.2031L11.5469 34.3438C11.9694 34.7641 12.5411 35.0001 13.1371 35.0001C13.7331 35.0001 14.3048 34.7641 14.7273 34.3438L33.9219 15.1563C34.1323 14.9444 34.2502 14.6579 34.25 14.3594V4.75C34.2514 4.45472 34.1945 4.16206 34.0823 3.88889C33.9702 3.61571 33.8052 3.36741 33.5967 3.15829C33.3882 2.94916 33.1404 2.78333 32.8676 2.67036C32.5948 2.55738 32.3023 2.49948 32.007 2.5Z'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M28 11.25C27.5055 11.25 27.0222 11.1034 26.6111 10.8287C26.2 10.554 25.8795 10.1635 25.6903 9.70671C25.5011 9.2499 25.4516 8.74723 25.548 8.26228C25.6445 7.77732 25.8826 7.33187 26.2322 6.98223C26.5819 6.6326 27.0273 6.3945 27.5123 6.29804C27.9972 6.20157 28.4999 6.25108 28.9567 6.4403C29.4135 6.62952 29.804 6.94995 30.0787 7.36108C30.3534 7.7722 30.5 8.25555 30.5 8.75C30.5 9.41304 30.2366 10.0489 29.7678 10.5178C29.2989 10.9866 28.663 11.25 28 11.25Z'
                  fill='currentColor'
                />
                <path
                  d='M18.4688 37.5L38.9375 17.0312C39.0393 16.9286 39.1194 16.8066 39.1731 16.6724C39.2268 16.5382 39.2529 16.3945 39.25 16.25V6.25'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_71_1135'>
                  <rect
                    width='40'
                    height='40'
                    fill='white'
                    transform='translate(0.5)'
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h1 className='mb-[15px] aboutPageHero group-hover:text-[#000000] transition duration-500'>
            Lowest Price
          </h1>
          <p className='xl:mb-[20px] lg:mb-[20px] joinClanSubPara px-[10px] group-hover:text-[#000000] transition duration-500'>
            Quality education at the Best Value, accessible to everyone.
          </p>

          <div className='flex items-center justify-center pb-[30px]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 200 60'
              className='w-12 h-12 fill-current  group-hover:text-[#000000] text-white'
            >
              <line
                x1='0'
                y1='30'
                x2='170'
                y2='30'
                stroke='currentColor'
                strokeWidth='3'
              />
              <polygon points='170,30 150,20 150,40' fill='currentColor' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnlineCourses
