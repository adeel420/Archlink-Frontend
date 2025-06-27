import React from "react";
import { servicePageData } from "../data/data";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-24 mb-24 ml-6 mr-6 flex flex-col gap-12">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-2 py-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-wide">
          Our <span className="text-[#2c61ed]">Services</span>
        </h1>
        <div className="h-[4px] w-[80px] bg-[#2c61ed] "></div>
      </div>

      {/* Containers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {servicePageData.map((data) => (
          <div
            key={data.id}
            className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
          >
            {/* Head */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#dceaff] flex items-center justify-center">
                <data.logo className="w-10 h-10 sm:w-12 sm:h-12 text-[#2c61ed]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                {data.title}
              </h3>
            </div>

            {/* Description */}
            <p
              className="text-base sm:text-lg text-gray-600 mb-4"
              dangerouslySetInnerHTML={{
                __html: data.desc.slice(0, 70) + "...",
              }}
            />

            {/* Key Features */}
            <h1 className="font-bold text-lg sm:text-xl text-gray-800 mb-2">
              Key Features:
            </h1>
            <ul className="list-none space-y-1 mb-4">
              {data.keyFeatures.map((feature, i) => (
                <li key={i} className="text-gray-700 flex items-start gap-2">
                  <span className="text-green-500 text-xl font-bold">✓</span>{" "}
                  {feature}
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <h1 className="font-bold text-lg sm:text-xl text-gray-800 mb-2">
              Technologies:
            </h1>
            <div className="flex flex-wrap gap-2">
              {data.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-[#dceaff] text-[#2c61ed] rounded-full px-4 py-1 text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <button
              className="button p-2 w-full mt-5"
              onClick={() => navigate(data.link)}
            >
              Learn More &rarr;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
