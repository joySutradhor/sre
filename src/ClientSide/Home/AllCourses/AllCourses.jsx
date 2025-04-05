import { useState } from 'react'
import { HiOutlineMinusSmall } from 'react-icons/hi2'
import categories from '../../../constant/stateDummyData'
import useFilterCategory from '../../../hooks/useFilterCategory'
import Course from './Course'

const AllCourses = () => {
  const [categoriesList, setCategoriesList] = useState({ ...categories })
  const initialCategories = {
    'Show All': true,
    'Cyber Security': false,
    'Graphics Design': false,
    'UI/UX Design': false,
    'Web Development': false,
    'Mobile App Development': false,
    Programming: false,
    'Ethical Hacking': false,
    'Data Science and AI': false
  }
  const { category: currentCategory } = useFilterCategory(categoriesList)
  const handleCategories = category => {
    if (category === currentCategory) {
      setCategoriesList({ ...categories })
      return
    }
    const updateCategory = { ...categoriesList }

    for (let cat in updateCategory) {
      if (cat === category) {
        updateCategory[cat] = true
      } else {
        updateCategory[cat] = false
      }
    }
    setCategoriesList(updateCategory)
  }
  return (
    <div className='sectionGap text-[#FFFFFF] '>
      <div>
        <h1 className='testimonialSub mb-[20px]  flex items-center md:justify-center text-[#FFD300]'>
          <span>
            <HiOutlineMinusSmall />{' '}
          </span>
          Popular Categories{' '}
          <span>
            <HiOutlineMinusSmall />{' '}
          </span>
        </h1>
        <h1 className='popularCategoryHead mb-[35px] md:text-center '>
          All{' '}
          <span className='BorderGlobal  border-[#FFD300]'>
            Courses
          </span>
        </h1>
      </div>

      <div className='hidden lg:block flex  items-center flex-row lg:gap-x-[20px] lg:space-x-1 gap-x-[5px] space-x-4 space-y-4 text-white group lg:mb-[50px]'>
        <button
          onClick={() => handleCategories('Show All')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Show All'] ? 'bg-[#FFD300] text-[#010101]' : ''
          }`}
        >
          Show All
        </button>

        <button
          onClick={() => handleCategories('Data Science and AI')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Data Science and AI']
              ? 'bg-[#FFD300] text-[#010101]'
              : ''
          }`}
        >
          Data Science and AI
        </button>
        <button
          onClick={() => handleCategories('Cyber Security')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300]  hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Cyber Security']
              ? 'bg-[#FFD300] text-[#010101]'
              : ''
          }`}
        >
          Cyber Security
        </button>
        <button
          onClick={() => handleCategories('Graphics Design')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Graphics Design']
              ? 'bg-[#FFD300] text-[#010101]'
              : ''
          }`}
        >
          Graphics Design
        </button>
        <button
          onClick={() => handleCategories('UI/UX Design')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['UI/UX Design'] ? 'bg-[#FFD300] text-[#010101]' : ''
          }`}
        >
          UI/UX Design
        </button>
        <button
          onClick={() => handleCategories('Web Development')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Web Development']
              ? 'bg-[#FFD300] text-[#010101]'
              : ''
          }`}
        >
          Web Development
        </button>
        <button
          onClick={() => handleCategories('Mobile App Development')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Mobile App Development']
              ? 'bg-[#FFD300] text-[#010101]'
              : ''
          }`}
        >
          Mobile App Development
        </button>
        <button
          onClick={() => handleCategories('Programming')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Programming'] ? 'bg-[#FFD300] text-[#010101]' : ''
          }`}
        >
          Programming
        </button>
  
      </div>
      <div className='mt-[35px]'>
        <Course currentCategory={currentCategory} />
      </div>
    </div>
  )
}

export default AllCourses
