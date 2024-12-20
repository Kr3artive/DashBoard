import { MdLogout } from "react-icons/md";
import IO from "../images/io.png";
import { GrHomeRounded } from "react-icons/gr";
import { BsChatSquareText } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { PiNotepadLight } from "react-icons/pi";
import { LuCross } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="flex flex-col min-h-screen p-4 w-[250px] bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 p-2">Eventeev</h1>
      <nav>
        <ul className="space-y-2 text-sm">
          <div className="flex items-center gap-2 rounded-lg hover:bg-orange-200 p-2"><GrHomeRounded size={20} className="text-orange-600" /><li>Dashboard</li></div>
          <div className="flex items-center gap-2 rounded-lg hover:bg-orange-200 p-2"><BsChatSquareText size={20} className="text-orange-600" /><li>Attendees</li></div>
          <div className="flex items-center gap-2 rounded-lg  hover:bg-orange-200 p-2"><CiCalendar size={20} className="text-orange-600" /><li>Speaker List</li></div>
          <div className="flex items-center gap-2 rounded-lg  hover:bg-orange-200 p-2"><PiNotepadLight size={20} className="text-orange-600" /><li>Chat Room</li></div>
          <div className="flex items-center gap-2 rounded-lg  hover:bg-orange-200 p-2"><LuCross size={20} className="text-orange-600" /><li>Analytics</li></div>
        </ul>
      </nav>
      <div className="mt-auto space-y-4">
        <ul className="space-y-2 text-sm">
          <li className="hover:bg-orange-200 p-2">Settings</li>
          <li className="hover:bg-orange-200 p-2">Help Center</li>
          <li className="hover:bg-orange-200 p-2">Refer Family & Friends</li>
        </ul>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              className="w-[50px] h-[50px] rounded-full border"
              src={IO}
              alt="User Avatar"
            />
            <div>
              <h1 className="text-xs font-bold">Abiye Omiete</h1>
              <p className="text-xs">abiyerowland@gmail.com</p>
            </div>
          </div>
          <MdLogout
            size={24}
            className="ml-4 cursor-pointer text-gray-600 hover:text-red-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
