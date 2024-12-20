import { CiTempHigh } from "react-icons/ci";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { TbCube3dSphere } from "react-icons/tb"
import { MdOutlineLightMode } from "react-icons/md";

const DashboardDetails = () => {
  return (
    <div className="grid grid-cols-3 gap-6 w-full mb-6 p-8">
      <div className=" grid border-2 border-gray-200 rounded-2xl p-4">
        <h1 className="text-sm text-gray-500">RVSP</h1>
        <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">0</h3>
        <div className="border-2 border-gray-400 rounded-full p-1" ><CiTempHigh size={20} /></div>
        </div>
        <div className="flex items-center gap-4 text-green-700">
        <div className="flex items-center gap-1 bg-green-200 rounded-lg text-sm p-1"><LuChartNoAxesCombined /><h3>0%</h3></div>
        <h3>Increase</h3>
        </div>
      </div>
      <div className=" grid border-2 border-gray-200 rounded-2xl p-4">
        <h1 className="text-sm text-gray-500">Check-ins</h1>
        <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">0</h3>
        <div className="border-2 border-gray-400 rounded-full p-1"><TbCube3dSphere size={20} /></div>
        
        </div>
        <div className="flex items-center gap-4 text-green-700">
        <div className="flex items-center gap-1 bg-green-200 rounded-lg text-sm p-1"><LuChartNoAxesCombined /><h3>0%</h3></div>
        <h3>Healthy</h3>
        </div>
      </div>
      <div className=" grid border-2 border-gray-200 rounded-2xl p-4">
        <h1 className="text-sm text-gray-500">Amount generated</h1>
        <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold">$0</h3>
        <div className="border-2 border-gray-400 rounded-full p-1"><MdOutlineLightMode size={20} /></div>
        </div>
        <div className="flex items-center gap-4 text-green-700">
        <div className="flex items-center gap-1 bg-green-200 rounded-lg text-sm p-1"><LuChartNoAxesCombined /><h3>0%</h3></div>
        <h3>$0</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardDetails;
