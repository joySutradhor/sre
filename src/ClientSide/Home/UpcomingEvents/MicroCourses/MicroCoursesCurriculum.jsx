import React, { useState } from 'react'
import * as SiIcons from 'react-icons/si'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'

function MicroCoursesCurriculum ({ course }) {
  const [itemsToShow, setItemsToShow] = useState(8)

  // Toggle between "View All" and "View Less"
  const handleToggleView = () => {
    if (itemsToShow === 8) {
      setItemsToShow(course.curriculum.length) // Show all items
    } else {
      setItemsToShow(8) // Show limited items
    }
  }

  return (
    <div className='bg-black text-white sectionGap'>
      {/* Title Section */}
      <div className='text-center mb-[50px]'>
        <h2 className='popularCategoryHead text-white font-gucina pb-[10px]'>
          Course curriculum & tools
        </h2>
        <p className='text-[#FFFFFF]/[.80] text-[18px] leading-[27px] font-normal pb-[10px]'>
          {course.title}
        </p>

        <div className='flex justify-center items-center w-full gap-x-5 mt-5'>
        {course?.tools.map(tool => {
          const Icon = tool.icon
          return (
            <div key={tool.cid} className='bg-white py-1 px-4 rounded'>
              <Icon className='text-5xl text-black mt-1' />{' '}
            </div>
          )
        })}
      </div>

      </div>
     

      {/* Grid Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-[40px]'>
        {course.curriculum.slice(0, itemsToShow).map(item => (
          <div
            key={item.cid}
            className='flex items-center gap-[24px] rounded-[8px] bg-[#FFD300] text-black p-[20px]'
          >
            <span className='h-[60px] rounded-[8px] w-[60px] text-black flex justify-center items-center text-[24px] leading-[36px] font-bold font-lexend bg-white'>
              {item.cid}
            </span>
            <p className='text-[24px] leading-[36px] font-bold font-lexend text-black'>
              {item.c}
            </p>
          </div>
        ))}
      </div>

      {course.curriculum.length > 8 && (
        <div className='text-center mt-[76px]'>
          <button
            onClick={handleToggleView}
            className='border border-[#FFD300] text-[14px] leading-[18px] font-medium font-lexend text-[#FFD300] hover:bg-[#FFD300] hover:text-black transition-all duration-300 px-[46px] py-[16px] rounded-[50px]'
          >
            {itemsToShow === 8 ? 'View All' : 'View Less'}
          </button>
        </div>
      )}

    </div>
  )
}

export default MicroCoursesCurriculum
