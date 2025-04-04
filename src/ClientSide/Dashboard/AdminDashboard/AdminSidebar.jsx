// import { useState } from "react";
// import DarkMode from "../../DarkMode/DarkMode";

// const AdminSidebar = () => {
//   const [isToggled, setIsToggled] = useState(false);

//   const handleToggle = () => {
//     setIsToggled(!isToggled);
//   };
//   return (
//     <div className="w-64 bg-gray-200  dark:bg-custom-gradient p-4 dark:text-black  ">
//       <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
//       <ul>
//         <li className="mb-4">
//           <a href="#" className="flex items-center">
//             <i className="fas fa-chart-line mr-3"></i> View
//           </a>
//         </li>
//         <div className="flex flex-row gap-4 items-center">
//           <li className="mb-4 flex gap-x-[10px] flex-row items-center">
//             <a href="#" className="flex  items-center">
//               <i className="fas fa-shopping-cart mr-3"></i> Manage
//             </a>
//             {/* Toggle with Arrow */}
//             <div className="flex items-center space-x-2">
//               {/* Arrow Icon */}
//               <i
//                 className={`fas fa-chevron-down transform transition-transform duration-300 ${
//                   isToggled ? "rotate-180" : ""
//                 }`}
//               ></i>

//               {/* Toggle Switch */}
//               <label className="inline-flex relative items-center cursor-pointer">
//                 <input
//                   type="checkbox"
//                   className="sr-only peer"
//                   checked={isToggled}
//                   onChange={handleToggle}
//                 />
//                 {/* dark:peer-focus:ring-blue-800 */}
//                 <div className="w-11 h-6 bg-gray-500 dark:bg-blue-100 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-[.7]  peer-checked:bg-blue-500"></div>
//                 <div className="w-5 h-5 bg-white rounded-full absolute left-1 top-0.5 peer-checked:left-6 transition-all"></div>
//               </label>
//             </div>
//           </li>
//         </div>
//       </ul>

//       {/* Social Links */}
//       {/* <div className="flex space-x-4 mt-10">
//         <a href="https://facebook.com" className="text-blue-600">
//           Facebook
//         </a>
//         <a href="https://twitter.com" className="text-blue-400">
//           Twitter
//         </a>
//         <a href="https://youtube.com" className="text-red-500">
//           YouTube
//         </a>
//       </div> */}
//       <DarkMode />
//     </div>
//   );
// };

// export default AdminSidebar;

import { useState } from "react";
import DarkMode from "../../DarkMode/DarkMode";

const AdminSidebar = ({ setActiveSection }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="w-64 bg-gray-200 dark:bg-custom-gradient p-4 dark:text-black">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <ul>
        <li className="mb-4">
          <a
            href="#"
            className="flex items-center"
            onClick={() => setActiveSection("view")}
          >
            <i className="fas fa-chart-line mr-3"></i> View
          </a>
        </li>
        <div className="flex flex-row gap-4 items-center">
          <li className="mb-4 flex gap-x-[10px] flex-row items-center">
            <a
              href="#"
              className="flex items-center"
              onClick={() => setActiveSection("manage")}
            >
              <i className="fas fa-shopping-cart mr-3"></i> Manage
            </a>
            {/* Toggle with Arrow */}
            <div className="flex items-center space-x-2">
              <i
                className={`fas fa-chevron-down transform transition-transform duration-300 ${
                  isToggled ? "rotate-180" : ""
                }`}
              ></i>

              {/* Toggle Switch */}
              <label className="inline-flex relative items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={isToggled}
                  onChange={handleToggle}
                />
                <div className="w-11 h-6 bg-gray-500 dark:bg-blue-100 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-[.7] peer-checked:bg-blue-500"></div>
                <div className="w-5 h-5 bg-white rounded-full absolute left-1 top-0.5 peer-checked:left-6 transition-all"></div>
              </label>
            </div>
          </li>
        </div>
      </ul>
      <DarkMode />
    </div>
  );
};

export default AdminSidebar;
