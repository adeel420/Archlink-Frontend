import React from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

const Call_To_Action = () => {
  const navigate = useNavigate();

  const phone = "923287831517";
  const message = encodeURIComponent("Hello! I'm interested in your services");
  const url = `https://wa.me/${phone}?text=${message}`;
  return (
    <div>
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-2 py-8 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 tracking-tight leading-snug">
          Call To <span className="text-[#2c61ed]">Action</span>
        </h1>
        <div className="h-[4px] w-[60px] sm:w-[80px] bg-[#2c61ed] rounded-full mt-2"></div>
      </div>

      <div className="bg-[#f3f3f3] border border-gray-300 py-16 px-4 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-gray-800">
            Ready to start your project?
          </h1>
          <p className="mt-4 text-[#878394] text-lg sm:text-xl">Let’s talk!</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Link
              to={url}
              target="_blank"
              className="bg-[#26d26b] hover:bg-[#1bb15a] transition text-white flex items-center gap-2 px-6 py-3 rounded-full shadow-md cursor-pointer"
            >
              <IoChatbubbleEllipsesOutline size={20} />
              <span className="font-medium">WhatsApp Us</span>
            </Link>
            <Link
              to={"/contact"}
              className="bg-white border border-[#2c61ed] text-[#2c61ed] hover:bg-[#2c61ed] hover:text-white transition flex items-center gap-2 px-6 py-3 rounded-full shadow-md cursor-pointer"
            >
              <FaWpforms size={20} />
              <span className="font-medium">Fill the Contact Form</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call_To_Action;
