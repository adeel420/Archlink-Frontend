import React from "react";
import { whyChooseData } from "../../data/data";

const Why_Choose = () => {
  return (
    <div>
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-2 py-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-wide">
          Why <span className="text-[#2c61ed]">Choose</span> Us
        </h1>
        <div className="h-[4px] w-[80px] bg-[#2c61ed] "></div>
        <p className="text-lg text-center sm:text-xl text-gray-700 mt-1">
          We combine expertise, innovation, and dedication to deliver
          exceptional results for every project
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {whyChooseData.map((data, index) => (
          <div
            className="flex flex-col items-center text-center p-6 rounded-xl border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white"
            key={index}
          >
            <div className="w-16 h-16 rounded-full bg-[#dceaff] flex items-center justify-center mb-4">
              <data.logo className="h-8 w-8 text-[#2c61ed]" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {data.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why_Choose;
