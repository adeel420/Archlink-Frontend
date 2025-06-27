import React from "react";
import Company_Overview from "../components/about-subsections/Company_Overview";
import Mission_Vision from "../components/about-subsections/Mission_&_Vision";
import Meet_The_Team from "../components/about-subsections/Meet_The_Team";
import Why_Choose from "../components/about-subsections/Why_Choose";

const About = () => {
  return (
    <div className="mt-24 mb-24 ml-6 mr-6 flex flex-col gap-12">
      <Company_Overview />
      <Mission_Vision />
      <Why_Choose />
      <Meet_The_Team />
    </div>
  );
};

export default About;
