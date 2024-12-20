import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import IO from "../images/io.png";

const Header = () => {
  return (
    <header className="bg-white shadow-black shadow-2xl">
      <div className="px-4 sm:px-8 py-1 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center bg-gray-200 rounded-lg px-4 py-2 w-full sm:w-[500px]">
          <AiOutlineSearch className="text-gray-500 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent outline-none flex-grow text-sm"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-gray-200 p-2 rounded-full">
            <IoIosNotificationsOutline size={20} />
          </div>
          <img
            src={IO}
            alt="User Avatar"
            className="rounded-full h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
