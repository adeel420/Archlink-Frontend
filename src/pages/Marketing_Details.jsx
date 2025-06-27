import React, { useEffect, useState } from "react";
import { servicePageData } from "../data/data";

const Marketing_Details = () => {
  const [detail, setDetail] = useState("");

  useEffect(() => {
    setDetail(servicePageData[3]);
  }, []);

  const Logo = detail.logo;
  return (
    <div className="mt-16 mb-24 px-4 sm:px-6 lg:px-12 flex flex-col gap-10">
      {/* Main Image */}
      <img
        src={detail.mainImg}
        alt={detail.title}
        className="w-full h-auto rounded-2xl shadow-md object-cover"
      />

      {/* Header Section */}
      <div className="flex items-center gap-4 mb-2">
        <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl bg-[#dceaff] flex items-center justify-center shadow-inner">
          {Logo && <Logo className="w-8 h-8 sm:w-12 sm:h-12 text-[#2c61ed]" />}
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          {detail.title}
        </h3>
      </div>

      {/* Key Features */}
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          Key Features:
        </h2>
        <ul className="space-y-2 pl-1">
          {detail?.keyFeatures?.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-gray-700 text-sm sm:text-base"
            >
              <span className="text-green-500 text-lg font-bold">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          Technologies:
        </h2>
        <div className="flex flex-wrap gap-2">
          {detail?.technologies?.map((tech, i) => (
            <span
              key={i}
              className="bg-[#dceaff] text-[#2c61ed] rounded-full px-4 py-1 text-sm font-semibold shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          Description:
        </h2>
        <p
          className="text-gray-600 text-sm sm:text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: detail.desc }}
        />
      </div>
    </div>
  );
};

export default Marketing_Details;
