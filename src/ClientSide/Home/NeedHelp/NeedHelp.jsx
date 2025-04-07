import { Link } from 'react-router-dom'

const NeedHelp = () => {
  return (
    <div className='section'>
      <div className=' relative'>
        {/* Background image section */}
        <div
          style={{
            backgroundImage: `url(${'https://i.ibb.co.com/bbJV794/group-1045-66f4e2ba50515.webp'})`
          }}
          className='bg-no-repeat bg-center bg-cover w-[100%] h-[50vh] flex justify-center items-center'
        ></div>

        {/* Text Section */}
        <div className='absolute inset-0 flex flex-col items-center justify-center     '>
          <div>
            <h1 className='NeedHelpHead pt-[50px] mb-[15px] text-center  text-[#FFFFFF]'>
              Need Help?
            </h1>
            <p
              className='joinClanSubPara text-[#FFFFFF] px-7 md:px-[10%] mb-[20px] text-center '
            >
              Join the Learning Party Now – No Boring Stuff Allowed. Join the
              Learning Party Now – No Boring Stuff Allowed. Join the Learning
              Party Now – No Boring Stuff Allowed.
            </p>
          </div>

          <Link to='/contactUs'>
            <button className='homeLargeAppoinMent bg-[#FFD300]     flex items-center justify-center rounded-[50px]  gap-x-[10px] text-[#010101] mb-[60px] md:mb-[60px]'>
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NeedHelp
