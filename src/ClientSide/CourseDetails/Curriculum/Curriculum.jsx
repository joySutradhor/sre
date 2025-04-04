

import { BiCheckbox } from "react-icons/bi";

const Curriculum = () => {
  return (
    <div className="sectionGap grid  grid-cols-1  xl:grid-cols-2 gap-[80px]">
      {/* picture */}
      <div className="h-[496px]  2xl:max-w-2/3  ">
        <img
          className="w-full h-full  rounded-[16px]"
          // src="https://i.ibb.co.com/Qvbtmw7/image-3-66f065ea8e550.webp"
          src="/enroll.jpg"
          alt=""
        />
      </div>

      <div className="flex  flex-col gap-[16px] 2xl:max-w-[644px]">
        <div>
          <h1 className="popularCategoryHead  text-white  pb-[16px]">
            Course curriculum & tools
          </h1>

          <div className="xl:flex grid grid-cols-1 sm:grid sm:grid-cols-2 xl:flex-row gap-[10px]">
            <ul className="text-[#FFFFFFCC]">
              {[
                "Sketch Principles",
                "Storyboard Design",
                "Using AI For UX Audit",
                "UI Design Project",
                "Design Heuristics",
                "AI For UI Design ",
                "AI For Mid-fidelity",
                "Design Heuristics",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-[16px] mb-2"
                >
                  <BiCheckbox className="text-[#FFFFFF66] w-[16px] h-[16px] flex-shrink-0 leading-none" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ul className="text-[#FFFFFFCC]">
              {[
                "Wireframe",
                "Information Architecture",
                "App Design",
                "Dashboard Design",
                "Landing Page Design",
                "AI For Image (Playground & Leonardo)",
                "AI For Usability Testing (maze)",
                "Landing Page Design",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-[16px] mb-2"
                >
                  <BiCheckbox className="text-[#FFFFFF66] w-[16px] h-[16px] flex-shrink-0 leading-none" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h1 className="text-[#FFFFFFCC] pb-[16px]">Softwares You'll Learn</h1>
          <div className="flex items-center  gap-[34px]">
            <div className="flex items-center gap-[14px]">
              <img src="/xd.jpg" alt="" className="h-[30px] w-[30px]" />
              <p className="text-white">Adobe XD</p>
            </div>
            <div className="flex items-center  gap-[14px]">
              <img src="/xdA.jpg" alt="" className="h-[30px] w-[30px]" />
              <p className="text-white">Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
