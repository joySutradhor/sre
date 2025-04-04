// import { useState } from "react"
// import { FaArrowRightLong } from "react-icons/fa6"

// const CoursesPagination = () => {
//     const [pageNo, setPageNo] = useState(0)
//     return (
//         <div className="flex justify-center items-center relative">
//             {[0, 1, 2, 3].map((page) =>
//                 page < 3 ? (
//                     <div
//                         key={page}
//                         onClick={() => setPageNo(page)}
//                         className={`${
//                             page === pageNo
//                                 ? "bg-[#FFD300] text-[#000]"
//                                 : "text-[#fff]"
//                         } w-[60px] h-[60px] rounded-full text-[20px] font-semibold flex items-center justify-center mt-[75px]`}
//                     >
//                         <h4>{page}</h4>
//                     </div>
//                 ) : (
//                     <FaArrowRightLong
//                         key={page}
//                         color="white"
//                         className="mt-[70px] ml-5"
//                     />
//                 )
//             )}
//         </div>
//     )
// }

// export default CoursesPagination

import { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const CoursesPagination = () => {
  const [pageNo, setPageNo] = useState(0)
  return (
    <div className='flex justify-center items-center relative'>
      {[0, 1, 2, 3].map(page =>
        page < 3 ? (
          <div
            key={page}
            onClick={() => setPageNo(page)}
            className={`${
              page === pageNo ? 'bg-[#FFD300] text-[#000]' : 'text-[#fff]'
            } w-[60px] h-[60px] rounded-full text-[20px] font-semibold flex items-center justify-center mt-[75px]`}
          >
            <h4>{page}</h4>
          </div>
        ) : (
          <FaArrowRightLong
            key={page}
            color='white'
            className='mt-[70px] ml-5'
          />
        )
      )}
    </div>
  )
}

export default CoursesPagination
