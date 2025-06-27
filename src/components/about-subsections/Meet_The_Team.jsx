import React from "react";
import { FaUser } from "react-icons/fa";
import { teamMembersData } from "../../data/data";

const Meet_The_Team = () => {
  return (
    <div className="bg-[#e3effe] mt-12 px-4 py-16 sm:px-8 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          Meet The <span className="text-[#2c61ed]">Team</span>
        </h1>
        <div className="h-1 w-20 bg-[#2c61ed] mx-auto mt-4 rounded"></div>
        <p className="mt-3 text-lg sm:text-xl text-gray-700">
          Get to know the talented individuals who make our success possible.
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {teamMembersData.map((member, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group"
          >
            <div className="text-[#275ce7] text-6xl mb-4 ">
              <FaUser />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">
              {member.name}
            </h2>
            <h3 className="text-[#275ce7] mt-1 font-medium">{member.role}</h3>
            <p className="mt-3 text-gray-600 text-sm">{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meet_The_Team;
