import React from "react";
import { assets } from "../../assets/assets";

const Company_Overview = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 mt-12 px-4 md:px-8">
      {/* Text */}
      <div className="w-full lg:w-1/2">
        <h2 className="bg-[#dceaff] text-[#2c61ed] rounded-full w-fit px-4 py-1 text-sm font-semibold mb-4">
          Who We Are
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 ">
          We are a team of passionate designers, developers, and marketers
          building powerful digital products for startups and enterprises alike.
          Our diverse expertise and collaborative approach enable us to deliver
          innovative solutions that drive business growth and create meaningful
          user experiences.
        </p>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={assets.about}
          alt="About Us"
          className="rounded-xl w-full object-cover shadow-md"
        />
      </div>
    </div>
  );
};

export default Company_Overview;
