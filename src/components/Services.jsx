import IO from "../images/io.png";
import { HiOutlineTicket } from "react-icons/hi2";
import { PiFootprintsBold } from "react-icons/pi";
import { CgPoll } from "react-icons/cg";
import { PiNotepadLight } from "react-icons/pi";
import { LuGamepad2 } from "react-icons/lu";
import { GrChatOption } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { GrStatusGood } from "react-icons/gr";

const Services = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-bold mb-8">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col gap-4 bg-green-100 shadow-md rounded-lg p-6 text-center">
          <HiOutlineTicket size={30} />
          <p className="font-bold">Ticket</p>
        </div>
        <div className="flex flex-col gap-4 bg-blue-100 shadow-md rounded-lg p-6 text-center">
        <GrStatusGood size={30} />
          <p className="font-bold">Check ins</p>
        </div>
        <div className="flex flex-col gap-4 bg-orange-100 shadow-md rounded-lg p-6 text-center">
        <CgProfile size={30} />
          <p className="font-bold">Speakers</p>
        </div>
        <div className="flex flex-col gap-4 bg-red-100 shadow-md rounded-lg p-6 text-center">
        <GrChatOption size={30} />
          <p className="font-bold">Chat Room</p>
          <img className="w-[50px] h-[50px] rounded-full" src={IO} alt="" />
        </div>
        <div className="flex flex-col gap-4 bg-orange-200 shadow-md rounded-lg p-6 text-center">
        <LuGamepad2 size={30} />
          <p className="font-bold">Games</p>
        </div>
        <div className="flex flex-col gap-4 bg-red-200 shadow-md rounded-lg p-6 text-center">
        <PiNotepadLight size={30}/>
          <p className="font-bold">Analytics</p>
        </div>
        <div className="flex flex-col gap-4 bg-green-100 shadow-md rounded-lg p-6 text-center">
          <CgPoll size={30} />
          <p className="font-bold">Polls</p>
        </div>
        <div className=" grid gap-2 bg-blue-100 shadow-md rounded-lg p-6 text-center">
          <PiFootprintsBold size={30} />
          <p className="font-bold">Matchmaking</p>
          <img className="w-[50px] h-[50px] rounded-full" src={IO} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
