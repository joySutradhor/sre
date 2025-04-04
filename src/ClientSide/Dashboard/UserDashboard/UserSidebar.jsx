import DarkMode from "../../DarkMode/DarkMode";

const UserSidebar = ({ setActiveSection }) => {
  return (
    <div className="w-64 bg-gray-200 dark:bg-custom-gradient p-4 text-black ">
      <h2 className="text-2xl font-bold mb-6">User Dashboard</h2>
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

        <li className="mb-4">
          <a
            href="#"
            className="flex items-center"
            onClick={() => setActiveSection("home")}
          >
            <i className="fas fa-chart-line mr-3"></i> Home
          </a>
        </li>
      </ul>

      {/* Social Links */}
      {/* <div className="flex space-x-4 mt-10">
        <a href="https://facebook.com" className="text-blue-600">
          Facebook
        </a>
        <a href="https://twitter.com" className="text-blue-400">
          Twitter
        </a>
        <a href="https://youtube.com" className="text-red-500">
          YouTube
        </a>
      </div> */}
      <h1 className="flex flex-row gap-x-[5px]">
        Mode{" "}
        <span>
          <DarkMode />
        </span>
      </h1>
    </div>
  );
};

export default UserSidebar;
