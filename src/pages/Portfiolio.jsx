import React, { useState } from "react";
import { IoMdOpen } from "react-icons/io";
import { portfolioPageData } from "../data/data";
import { Checkbox } from "antd";

const Portfiolio = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (checkedValue, category) => {
    if (checkedValue) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((item) => item !== category)
      );
    }
  };

  const uniqueCategories = [
    ...new Set(portfolioPageData.map((data) => data.category)),
  ];

  const filteredData =
    selectedCategories.length === 0
      ? portfolioPageData
      : portfolioPageData.filter((data) =>
          selectedCategories.includes(data.category)
        );

  return (
    <div className="mt-24 mb-24 px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-2 py-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-wide">
          My <span className="text-[#2c61ed]">Portfolio</span>
        </h1>
        <div className="h-[4px] w-[80px] bg-[#2c61ed] "></div>
        <p className="text-lg sm:text-xl text-gray-700 mt-1">
          Check out some of our recent work:
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filtered */}
        <div className="w-full lg:w-[20%] bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Filtered By Category
          </h2>
          <div className="flex flex-col gap-2">
            {uniqueCategories.map((category) => (
              <Checkbox
                key={category}
                onChange={(e) =>
                  handleCategoryChange(e.target.checked, category)
                }
                checked={selectedCategories.includes(category)}
              >
                {category}
              </Checkbox>
            ))}
          </div>
        </div>

        {/* Portfolio Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((data) => (
            <div
              className="bg-white rounded-2xl shadow-xl overflow-hidden w-full transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              key={data.id}
            >
              <div className="relative">
                <img
                  src={data.img}
                  alt="Card"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-2 right-2 bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 rounded-full shadow-sm">
                  {data.category}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {data.title}
                </h2>

                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-semibold text-gray-800">
                    Description:
                  </span>{" "}
                  {data.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                  <a
                    href={data.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#2c61ed] hover:bg-[#1f4edb] transition-all text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2 shadow cursor-pointer"
                  >
                    <IoMdOpen />
                    Live Project
                  </a>

                  <a
                    href={data.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-black transition-all text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2 shadow cursor-pointer"
                  >
                    <IoMdOpen />
                    GitHub Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfiolio;
