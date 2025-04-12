import React from 'react'
import { HiOutlineMinusSmall } from 'react-icons/hi2'

function AllcourseHeader ({header , title="" , underline=""}) {
  return (
    <div>
      <h1 className='testimonialSub mb-[20px]  flex items-center md:justify-center text-[#FFD300]'>
        <span>
          <HiOutlineMinusSmall />{' '}
        </span>
       {header}{' '}
        <span>
          <HiOutlineMinusSmall />{' '}
        </span>
      </h1>
      <h1 className='popularCategoryHead mb-[35px] md:text-center '>
        {title} <span className='BorderGlobal  border-[#FFD300]'>{underline}</span>
      </h1>
    </div>
  )
}

export default AllcourseHeader
