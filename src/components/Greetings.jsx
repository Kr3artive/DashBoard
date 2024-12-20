import { IoCalendarClearOutline } from "react-icons/io5";

const Greetings = () => {
  return (
    <div>
      <div className="flex gap-[400px] p-4">
        <div className="w-[500px]">
          <h2 className="ml-3 font-bold text-2xl">Welcome David</h2>
          <p className="ml-3">Its a sunny day today, we hope youre preparing for the big day!</p>
        </div>
        <div className="flex items-center gap-2 bg-white border-2 border-gray-200 p-4 rounded-lg w-[175px]">
            <div className="flex items-center justify-center rounded-full p-2 bg-gray-300">
            <IoCalendarClearOutline />
            </div>
          <div className="w-full">
          <h1 className="text-xs">Today's Date</h1>
          <p className="font-bold text-sm">1st July, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greetings;
