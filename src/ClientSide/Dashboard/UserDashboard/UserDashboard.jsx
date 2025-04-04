import { useState } from "react";
import UserSidebar from "./UserSidebar";

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState("view");

  const renderContent = () => {
    switch (activeSection) {
      case "view":
        return <h1>Viewing Details</h1>;
      case "home":
        return <h1>manage Details</h1>;
      default:
        return <h1>View manage Details</h1>;
    }
  };
  return (
    <div className="flex h-screen">
      <UserSidebar setActiveSection={setActiveSection} />
      <div className="flex-1 p-6 bg-white text-black dark:bg-black dark:text-white">
        {renderContent()}
      </div>
    </div>
  );
};

export default UserDashboard;
