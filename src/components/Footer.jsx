import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#111827] text-white px-6 py-10 sm:px-12 lg:px-20">
      <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-6 sm:gap-0 pb-8">
        <h1 className="text-2xl font-semibold text-center sm:text-left">
          Archlink Technology
        </h1>

        <ul className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm sm:text-base text-gray-300">
          <a
            href="/career"
            className="cursor-pointer hover:text-[#dde9ff] transition"
          >
            Careers
          </a>
          <a
            href="/contact"
            className="cursor-pointer hover:text-[#dde9ff] transition"
          >
            Contact Us
          </a>
          <a
            href="/about"
            className="cursor-pointer hover:text-[#dde9ff] transition"
          >
            About Us
          </a>
        </ul>
      </div>

      <div className="h-[1px] bg-gray-600 opacity-30 mb-6"></div>
      <p className="text-center text-sm text-gray-400">
        &copy; 2025 Archlink Technology. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
