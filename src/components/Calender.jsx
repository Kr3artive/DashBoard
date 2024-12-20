import { useState } from "react";
import Calender from "react-calendar";

const CalenderWidget = () => {
  const [date, setDate] = useState(new Date());
  const onChangeDate = (selectedDate) => {
    setDate(selectedDate);
  };
  return (
    <div className="p-6 max-w-[370px]">
      <div className="border-2 bg-white rounded-lg border-gray-300">
        <h1 className="p-4 border-b-2 border-gray-300 font-bold text-md">
          Calendar
        </h1>
        <div className="p-4">
          <Calender
            onChange={onChangeDate}
            value={date}
            className="w-full"
          ></Calender>
        </div>
      </div>
    </div>
  );
};

export default CalenderWidget;
