import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Hero_Section = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
    setTimeout(() => {
      window.scrollTo(1200, 1200);
    }, 100);
  };
  return (
    <div
      className="relative flex items-center justify-center min-h-[80vh] px-4 sm:px-6 md:px-10"
      style={{
        backgroundImage: `url(${assets.heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 text-center max-w-3xl text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#ffffff] leading-snug">
          Empowering Your Business with Innovative Software Solutions
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-xl text-[#f0f0f0]">
          <i>From web development, we build solutions that grow your brand.</i>
        </p>

        <div className="mt-6 flex justify-center">
          <button
            className="button text-white font-medium py-2 px-6 rounded-full"
            onClick={handleNavigate}
          >
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero_Section;
