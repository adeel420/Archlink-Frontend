import React from "react";
import { missionData } from "../../data/data";

const Mission_Vision = () => {
  return (
    <div className="">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-2 py-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-wide">
          <span className="text-[#2c61ed]">Mission</span> & Vision
        </h1>
        <div className="h-[4px] w-[80px] bg-[#2c61ed] "></div>
      </div>

      {/* Containers */}
      <div className="bg-[#f9f9fa] py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
          {missionData.map((data, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center w-full sm:w-[48%]"
            >
              <div className="w-16 h-16 rounded-full bg-[#dceaff] flex items-center justify-center mb-4">
                <data.logo className="h-8 w-8 text-[#2c61ed]" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {data.title}
              </h2>
              <p className="text-sm text-gray-600">{data.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mission_Vision;
