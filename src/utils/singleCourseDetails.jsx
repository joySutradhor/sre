import { filterCourse } from "../constant/dummyJson";

export const courseDetailsDestructor = (courseName) => {
  const [singleCourseDetails] = filterCourse.filter(
    (title) => title.title === courseName
  );
  return singleCourseDetails;
};
