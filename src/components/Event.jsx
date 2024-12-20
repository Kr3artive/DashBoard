import IO from "../images/io.png";
import { IoCalendarClearOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";

const Event = () => {
  return (
    <div className="p-6 max-w-[370px]">
      <div className=" border-2 bg-white rounded-lg border-gray-300">
        <h1 className="p-4 border-b-2 border-gray-300 font-bold text-md">
          Event day
        </h1>
        <div className="p-4">
          <h1 className="text-lg mb-2 font-bold">Friday, 6 July</h1>
          <div className="flex gap-2 items-center mb-2">
          <CiClock2 />
          <p className="text-sm">11:30 - 3:00 (4:30 min)</p>
          </div>

          <div className="flex gap-1">
          <IoCalendarClearOutline size={25} />
          <p className="text-sm">Cottage Medicare Hospital, 18 Iwaya Rd, Yaba 101245, Lagos</p>
          </div>
        </div>
        <div>
          <div className="flex gap-1 p-4 border-b-2 border-gray-300">
            <img className="h-[50px] w-[50px] rounded-full" src={IO} alt="" />
            <div className="grid">
              <h1 className=" text-center font-bold text-sm">
                Dr. Richard Edem
              </h1>
              <h3 className="text-xs">Event Organizer</h3>
            </div>
          </div>
          <div className="p-4 flex justify-center gap-2 ">
            <button className="p-1 border-2 border-gray-300 rounded-xl text-sm font-bold">
              Edit Event Details
            </button>
            <button className="p-2 rounded-xl text-sm text-white bg-orange-600">
              Copy Event Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
