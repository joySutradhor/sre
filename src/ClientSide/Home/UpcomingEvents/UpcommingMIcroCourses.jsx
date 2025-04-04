import React, { useEffect } from 'react'
import Navbar from '../../Shared/Navbar/Navbar'

import { useParams } from 'react-router-dom'
import { filterMicroCourses } from "../../../constant/dummyJson";
import Footer from '../../Shared/Footer/Footer';
import MicroCoursesHero from './MicroCourses/MicroCoursesHero';
import FoundationMicroCourses from './MicroCourses/FoundationMicroCourses';
import MicroCoursesClan from './MicroCourses/MicroCoursesClan';
import MicroCoursesCurriculum from './MicroCourses/MicroCoursesCurriculum';
import MicroCoursesBenefits from './MicroCourses/MicroCoursesBenefits';

function UpcommingMIcroCourses () {
  const { slug } = useParams()
  console.log(slug)
  const course = filterMicroCourses.find(
    (course) => course.slug === decodeURIComponent(slug)
  );
  console.log(course)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section>
      <Navbar />

      {course ? (
        <>
          <MicroCoursesHero course={course} />
          <FoundationMicroCourses course={course} />
          <MicroCoursesClan course={course} />
          <MicroCoursesCurriculum course={course} />
          <MicroCoursesBenefits course={course} />
        </>
      ) : (
        <p>Course not found!</p>
      )}
      <Footer></Footer>

    </section>
  )
}

export default UpcommingMIcroCourses
