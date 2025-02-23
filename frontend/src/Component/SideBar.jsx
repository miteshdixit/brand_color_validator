import React from "react";
import { FaRobot } from "react-icons/fa";

const SideBar = () => {
  return (
    <div className="flex flex-col bg-[#eed] text-black h-1/2 shadow-lg rounded-2xl overflow-hidden items-center w-[100px] gap-4 p-2 justify-center shadow-3xl">
      <button className="flex items-center  p-3 transition duration-300 focus:border-b-2 text-lg">
        Home
      </button>

      <button className="flex items-center p-4 rounded-xl transition duration-300 text-lg  hover:rounded-xl focus:border-b-2">
        Extracted
      </button>

      <button className="flex items-center  p-4  transition duration-300 focus:border-b-2 focus:border-blue-500 text-lg">
        Closest
      </button>

      <button className="flex items-center gap-2 p-4  transition duration-300 focus:border-b-2 text-lg">
        <FaRobot className="w-5 h-5" />
        Bot
      </button>
    </div>
  );
};

export default SideBar;
