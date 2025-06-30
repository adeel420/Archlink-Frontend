import React, { useState } from "react";
import { portfolioData, servicesData } from "../../data/data";
import { ScaleLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";

const Portfolio = () => {
  const [showProjects, setShowProjects] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleShowMore = () => {
    setLoading(true);
    setTimeout(() => {
      setShowProjects(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-2 py-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-wide">
          Portfolio <span className="text-[#2c61ed]">Preview</span>
        </h1>
        <div className="h-[4px] w-[80px] bg-[#2c61ed] "></div>
        <p className="text-lg sm:text-xl text-gray-700 mt-1">
          Check out some for our recent work:
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {portfolioData.slice(0, 4).map((data, index) => (
          <Link to={data.projectLink} target="_blank">
            <div
              className="flex flex-col  p-6 rounded-xl border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white cursor-pointer"
              key={index}
            >
              <img src={data.img} className="w-full h-[150px] rounded " />

              <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-4">
                {data.title}
              </h3>
              <h2 className="bg-[#dceaff] text-[#2c61ed] rounded-full w-fit px-4 py-1 text-sm font-semibold mb-4">
                {data.service}
              </h2>
            </div>
          </Link>
        ))}

        {showProjects === true &&
          portfolioData.slice(4, 8).map((data, index) => (
            <Link to={data.projectLink} target="_blank">
              <div
                className="flex flex-col  p-6 rounded-xl border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-white cursor-pointer"
                key={index}
              >
                <img src={data.img} className="w-full h-[150px] rounded " />
                <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-4">
                  {data.title}
                </h3>
                <h2 className="bg-[#dceaff] text-[#2c61ed] rounded-full w-fit px-4 py-1 text-sm font-semibold mb-4">
                  {data.service}
                </h2>
              </div>
            </Link>
          ))}
      </div>

      {loading && (
        <div className="mt-12 flex flex-col items-center justify-center">
          <ScaleLoader color="#275ce7" />
        </div>
      )}

      {!showProjects && !loading && (
        <div className="mt-12 flex flex-col items-center justify-center">
          <button
            className="button p-2 pl-6 pr-6 rounded-full"
            onClick={handleShowMore}
          >
            Show More Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
