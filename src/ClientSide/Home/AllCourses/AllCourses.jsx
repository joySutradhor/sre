import { useState } from 'react'
import { HiOutlineMinusSmall } from 'react-icons/hi2'
import categories from '../../../constant/stateDummyData'
import useFilterCategory from '../../../hooks/useFilterCategory'
import Course from './Course'
import AllcourseHeader from '../../../components/AllcourseHeader/AllcourseHeader'

const AllCourses = ({ sectionGap }) => {
  const [categoriesList, setCategoriesList] = useState({ ...categories })

  // const initialCategories = {
  //   'Show All': true,
  //   'Cyber Security': false,
  //   'Graphics Design': false,
  //   'UI/UX Design': false,
  //   'Networking': false,
  //   'Mobile App Development': false,
  //   Programming: false,
  //   'Ethical Hacking': false,
  //   'Cloud Computing': false
  // }
  const { category: currentCategory } = useFilterCategory(categoriesList)
  const handleCategories = category => {
    if (category === currentCategory) {
      setCategoriesList({ ...categories })
      return
    }
    const updateCategory = { ...categoriesList }
    console.log(updateCategory)

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
      <AllcourseHeader
        header='Popular Categories'
        title='All'
        underline='Courses'
      />

      <div className=' flex flex-wrap  items-center flex-row lg:gap-x-[20px] lg:space-x-1 gap-x-[5px] space-x-4 gap-y-2 lg:gap-y-0 lg:space-y-4 text-white group lg:mb-[50px]'>
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
            categoriesList['Machine Learning'] ? 'bg-[#FFD300] text-[#010101]' : ''
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

export default AllCourses
