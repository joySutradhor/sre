/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const FreeWebinarCard = ({ category, time, title, img , duration }) => {
  return (
    <div className='p-[15px] grid lg:grid-cols-2 items-center gap-10  bg-white   rounded-[16px]'>
      <div className='relative w-full h-[120px]  sm:w-[300px] sm:h-[150px] lg:w-[200px] lg:h-[100px] xl:w-[180px] xl:h-[100px] 2xl:w-[250px] 2xl:h-[150px] flex items-center overflow-hidden'>
        <img
          src={img}
          alt='webinar'
          className='rounded-[8px] object-cover w-full h-full'
        />
        <div className='absolute 2xl:top-[10px] 2xl:left-[10px] xl:top-[10px] xl:left-[10px] top-[6px] left-[6px] '>
          <p className='2xl:px-[12px] 2xl:py-[6px] px-[8px] py-[2px] text-[#010101] text-[12px] leading-[18px]  bg-[#FFD300] rounded-[50px]'>
            {' '}
            {category}
          </p>
        </div>
      </div>
      <div>
        <div>
          <p className='text-black font-lexend text-[12px]'>{time}</p>
        </div>
        <div className='mt-1'>
          <h4 className='text-[#1A1A1A] text-[14px] md:text-[16px] font-semibold font-sans'>
            {title}
          </h4>
        </div>
        <div className='mt-4'>
          <button className='max-w-[180px] bg-[#FFD3001A]/[.1] text-[#010101] font-medium text-[12px] px-2 py-1 border border-[#FFD300] rounded-[50px] w-full cursor-pointer hover:bg-[#FFD300] '>
            See Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default FreeWebinarCard
