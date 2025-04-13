import { useState } from 'react'
import { HiOutlineMinusSmall } from 'react-icons/hi2'
import categories from '../../../constant/stateDummyData'
import useFilterCategory from '../../../hooks/useFilterCategory'
import Course from './Course'

const AllCoursesPage = ({ sectionGap }) => {
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
    <div className={`${sectionGap} text-white`}>
      <div>
        {/* <h1 className='testimonialSub mb-[20px]  flex items-center md:justify-center text-[#FFD300]'>
          <span>
            <HiOutlineMinusSmall />{' '}
          </span>
          {header}{' '}
          <span>
            <HiOutlineMinusSmall />{' '}
          </span>
        </h1> */}
        <h1 className='popularCategoryHead mb-[35px] md:text-center '>
          Popular{' '}
          <span className='BorderGlobal  border-[#FFD300]'>Categories</span>
        </h1>
      </div>

      <div className=' flex  items-center flex-row overflow-x-scroll lg:overflow-x-hidden lg:flex-wrap  lg:gap-x-[20px] lg:space-x-1 gap-x-[5px] space-x-4 lg:space-y-4 text-white group  lg:mb-[50px]'>
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
          onClick={() => handleCategories('Programming')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Programming'] ? 'bg-[#FFD300] text-[#010101]' : ''
          }`}
        >
          Programming
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
          onClick={() => handleCategories('Application Development')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Application Development']
              ? 'bg-[#FFD300] text-[#010101]'
              : ''
          }`}
        >
          Application Development
        </button>
        <button
          onClick={() => handleCategories('Digital Marketing')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Digital Marketing']
              ? 'bg-[#FFD300] text-[#010101]'
              : ''
          }`}
        >
          Digital Marketing
        </button>

        <button
          onClick={() => handleCategories('Networking')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Networking'] ? 'bg-[#FFD300] text-[#010101]' : ''
          }`}
        >
          Networking
        </button>

        <button
          onClick={() => handleCategories('Cloud Computing')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Cloud Computing']
              ? 'bg-[#FFD300] text-[#010101]'
              : ''
          }`}
        >
          Cloud Computing
        </button>

        <button
          onClick={() => handleCategories('DevOps')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['DevOps'] ? 'bg-[#FFD300] text-[#010101]' : ''
          }`}
        >
          DevOps
        </button>
        <button
          onClick={() => handleCategories('Linux')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Linux'] ? 'bg-[#FFD300] text-[#010101]' : ''
          }`}
        >
          Linux
        </button>
        <button
          onClick={() => handleCategories('IOT')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['IOT'] ? 'bg-[#FFD300] text-[#010101]' : ''
          }`}
        >
          IOT
        </button>
        <button
          onClick={() => handleCategories('Blockchain')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Blockchain'] ? 'bg-[#FFD300] text-[#010101]' : ''
          }`}
        >
          Blockchain
        </button>
        <button
          onClick={() => handleCategories('Big Data')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Big Data'] ? 'bg-[#FFD300] text-[#010101]' : ''
          }`}
        >
          Big Data
        </button>
        <button
          onClick={() => handleCategories('Machine Learning')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Machine Learning']
              ? 'bg-[#FFD300] text-[#010101]'
              : ''
          }`}
        >
          Machine Learning
        </button>
        <button
          onClick={() => handleCategories('Generative AI')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Generative AI'] ? 'bg-[#FFD300] text-[#010101]' : ''
          }`}
        >
          Generative AI
        </button>
        <button
          onClick={() => handleCategories('Data Science')}
          // className="allCoursesBtn rounded-[50px] hover:bg-[#FFD300] hover:text-[#010101]"
          className={`allCoursesBtn  hover:bg-[#FFD300] hover:text-[#010101] ${
            categoriesList['Data Science'] ? 'bg-[#FFD300] text-[#010101]' : ''
          }`}
        >
          Data Science
        </button>
      </div>
      <div className='mt-[35px]'>
        <Course currentCategory={currentCategory} />
      </div>
    </div>
  )
}

export default AllCoursesPage
