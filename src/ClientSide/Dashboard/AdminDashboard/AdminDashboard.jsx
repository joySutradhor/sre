// import AdminSidebar from "./AdminSidebar";

// const AdminDashboard = () => {
//   return (
//     <div className="flex h-screen">
//       <AdminSidebar />

//       <div className="flex-1 p-6 bg-white text-black dark:bg-black  dark:text-white">
//         <h1>View and manage Details</h1>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import { useState } from "react";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("view");

  const renderContent = () => {
    switch (activeSection) {
      case "view":
        return <h1>Viewing Details</h1>;
      case "manage":
        return <h1>Managing Details</h1>;
      default:
        return <h1>View and manage Details</h1>;
    }
  };

  return (
    <div className="flex h-screen">
      <AdminSidebar setActiveSection={setActiveSection} />
      <div className="flex-1 p-6 bg-white text-black dark:bg-black dark:text-white">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
