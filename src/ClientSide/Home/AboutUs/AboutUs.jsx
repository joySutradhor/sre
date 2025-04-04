import { MdArrowRightAlt } from 'react-icons/md'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className='text-[#FFFFFF] sectionGap group'>
      <div className='lg:hidden block'>
        <div className='flex  flex-col justify-between  '>
          <h1
            className='popularCategoryHead 
 mb-[30px]'
          >
            {' '}
            <span className=' relative text-white after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-0 after:bg-[#FFD300] after:transition-all after:duration-300 group-hover:after:w-full'>
            Inside {''} {''}
            </span>
            {''} {''}eduden
          </h1>
          <p className='joinClanSubPara 2xl:max-w-[1000px] xl:max-w-[800px] lg:max-w-[700px] '>
            Well, because we’re not your grandma’s boring old school! At eduden,
            we’re the rebels of education, the mavericks of learning, and the
            champions of fun-filled knowledge. We’ll teach you how to slay
            dragons and code websites, all while cracking jokes and sipping on
            virtual coffee. So, why settle for snooze-worthy lectures when you
            can join the eduden revolution? Let’s make learning epic together!
            Well, because we’re not your grandma’s boring old school! At eduden,
            we’re the rebels of education, the mavericks of learning, and the
            champions of fun-filled knowledge. We’ll teach you how to slay
            dragons and code websites, all while cracking jokes and sipping on
            virtual coffee.
          </p>
        </div>

        <Link to='/about'>
          <button
            className='mt-[30px] flex items-center justify-between gap-x-[5px] mb-[30px] homeLargeAppoinMent  hover:text-white
        
         text-white border-2 border-[#FFD300] hover:bg-[#FFD300]'
          >
            Read More <MdArrowRightAlt />
          </button>
        </Link>
      </div>

      <div className='hidden lg:block group'>
        <div className='flex lg:flex-row  flex-col gap-x-[50px]  justify-between items-start '>
          <h1
            className='popularCategoryHead 
 mb-[30px]'
          >
            {' '}
            <span className='relative text-white after:absolute after:left-0 after:bottom-0 after:h-[4px] after:w-0 after:bg-[#FFD300] after:transition-all after:duration-300 group-hover:after:w-full'>
              Inside {''} {''}
            </span>
            {''} {''}eduden
          </h1>
          <p className='joinClanSubPara 2xl:max-w-[1000px] xl:max-w-[800px] lg:max-w-[700px] '>
            Well, because we’re not your grandma’s boring old school! At eduden,
            we’re the rebels of education, the mavericks of learning, and the
            champions of fun-filled knowledge. We’ll teach you how to slay
            dragons and code websites, all while cracking jokes and sipping on
            virtual coffee. So, why settle for snooze-worthy lectures when you
            can join the eduden revolution? Let’s make learning epic together!
            Well, because we’re not your grandma’s boring old school! At eduden,
            we’re the rebels of education, the mavericks of learning, and the
            champions of fun-filled knowledge. We’ll teach you how to slay
            dragons and code websites, all while cracking jokes and sipping on
            virtual coffee.
          </p>
        </div>

        <div className='flex lg:flex-row flex-col justify-between items-start  mt-[30px] mb-[30px] '>
          <Link to='/about'>
            <button
              className='flex items-center mb-[30px] justify-between gap-x-[10px] homeLargeAppoinMent
        
          text-white border-2 border-[#FFD300] hover:bg-[#FFD300]'
            >
             Read More <MdArrowRightAlt />
            </button>
          </Link>

          <p className=' joinClanSubPara 2xl:max-w-[1000px] xl:max-w-[800px] lg:max-w-[700px]'>
            Well, because we’re not your grandma’s boring old school! At eduden,
            we’re the rebels of education, the mavericks of learning, and the
            champions of fun-filled knowledge. We’ll teach you how to slay
            dragons and code websites, all while cracking jokes and sipping on
            virtual coffee.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
