import React from 'react'

function MicroCoursesHero ({course}) {
  return (
    <div className='relative xl:mt-[25px] lg:mt-[20px] mt-[10px] '>
      <div
        style={{
          backgroundImage: `url("/EduBg.png")`
        }}
        className='bg-no-repeat bg-center bg-cover w-full  md:h-[400px] 2xl:h-[600px]
      h-[300px] flex justify-center items-center'
      ></div>

      <div className='absolute inset-0 flex flex-col items-center justify-center mx-auto max-w-[1000px]'>
        <h1 className='BannerHead text-black pb-[25px] text-center'>
         {course?.title} 
        </h1>
      </div>
    </div>
  )
}

export default MicroCoursesHero
