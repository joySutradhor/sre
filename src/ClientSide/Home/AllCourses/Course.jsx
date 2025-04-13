

// export default Course;

/* eslint-disable react/prop-types */
import Card from "../../../components/Card/Card";
import { filterCourse } from "../../../constant/dummyJson";

const Course = ({ currentCategory }) => {
  const filteredCat = filterCourse.filter((category) => {
    if (currentCategory === "Show All") {
      return category;
    }
    if (currentCategory === category.category) {
      return category;
    }
  });
  console.log(filteredCat)
  //   grid grid-cols-[repeat(auto-fit,minmax(385px,1fr))]
  return (
    <div className="">
      <div
        className="flex flex-col   md:grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 
      grid-cols-1 gap-x-[24px] gap-y-8 mt-16 lg:gap-y-[50px] items-center "
      >
        {filteredCat.map((cat, index) => (
          <Card key={index} {...cat} />
        ))}
      </div>
    </div>
  );
};

export default Course;
