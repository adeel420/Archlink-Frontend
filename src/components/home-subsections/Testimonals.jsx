import React from "react";
import { assets } from "../../assets/assets";
import { testimonalsData } from "../../data/data";

const Testimonals = () => {
  return (
    <div>
      {" "}
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-2 py-8 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 tracking-tight leading-snug">
          Client <span className="text-[#2c61ed]">Testimonials</span>
        </h1>
        <div className="h-[4px] w-[60px] sm:w-[80px] bg-[#2c61ed] rounded-full mt-2"></div>
      </div>
      {/* Testimonals */}
      <div className="bg-[#f9f9fa] py-12 px-4 md:px-12">
        <div className="flex flex-wrap justify-center gap-6">
          {testimonalsData.map((data, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:shadow-2xl transition duration-300 ease-in-out p-6 rounded-2xl flex flex-col items-center text-center w-full max-w-[300px]"
            >
              <img
                src={assets.ratings}
                alt="Rating"
                className="h-[80px] mb-4"
              />
              <h2 className="text-gray-600 italic mb-3">"{data.title}"</h2>
              <p className="text-lg font-semibold text-[#2c61ed]">
                {data.name}
              </p>
              <p className="text-sm text-gray-500">{data.designation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
