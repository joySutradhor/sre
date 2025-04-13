/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Card from '../../../components/Card/Card'
import { filterCourse } from '../../../constant/dummyJson'

const Course = ({ currentCategory }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(8)

  // ✅ Reset current page when category changes
  useEffect(() => {
    setCurrentPage(1)
  }, [currentCategory])

  // Responsive itemsPerPage based on screen size
  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 1024 ? 4 : 8)
    }

    updateItemsPerPage() // Initial set
    window.addEventListener('resize', updateItemsPerPage)
    return () => window.removeEventListener('resize', updateItemsPerPage)
  }, [])

  // Filter data by current category
  const filteredCat = filterCourse.filter(category =>
    currentCategory === 'Show All'
      ? true
      : currentCategory === category.category
  )

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredCat.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(filteredCat.length / itemsPerPage)

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1)
  }

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1)
  }

  return (
    <div className=''>
      {/* Cards Grid */}
      <div
        className='flex flex-col md:grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 
        grid-cols-1 gap-x-[24px] gap-y-8 mt-4 lg:gap-y-[50px] items-center'
      >
        {currentItems.length > 0 ? (
          currentItems.map((cat, index) => <Card key={index} {...cat} />)
        ) : (
          <div className='col-span-full text-center text-gray-400 text-lg'>
            No courses found.
          </div>
        )}
      </div>

      <div className='mt-10 lg:mt-20 md:flex items-center justify-between'>
        {/* Showing result count */}
        <div className='text-sm text-gray-500 font-medium text-center mb-3 md:mb-0 '>
          Showing {Math.min(indexOfLastItem, filteredCat.length)} of{' '}
          {filteredCat.length} Courses
        </div>
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className='flex justify-center gap-4 '>
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`border border-[#FFD300] text-[14px] leading-[18px] font-medium font-lexend rounded-[50px] px-[36px] py-[12px] transition-all duration-300 ${
                currentPage === 1
                  ? 'text-gray-400 border-gray-400 cursor-not-allowed'
                  : 'text-[#FFD300] hover:bg-[#FFD300] hover:text-black'
              }`}
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`border border-[#FFD300] text-[14px] leading-[18px] font-medium font-lexend rounded-[50px] px-[36px] py-[12px] transition-all duration-300 ${
                currentPage === totalPages
                  ? 'text-gray-400 border-gray-400 cursor-not-allowed'
                  : 'text-[#FFD300] hover:bg-[#FFD300] hover:text-black'
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Course
