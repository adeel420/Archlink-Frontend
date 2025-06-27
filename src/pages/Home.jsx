import React from "react";
import Hero_Section from "../components/home-subsections/Hero_Section";
import Testimonals from "../components/home-subsections/Testimonals";
import Call_To_Action from "../components/home-subsections/Call_To_Action";
import Our_Services from "../components/home-subsections/Our_Services";
import Portfolio from "../components/home-subsections/Portfolio";

const Home = () => {
  return (
    <div className="mt-24 mb-24 ml-6 mr-6 flex flex-col gap-12">
      <Hero_Section />
      <Our_Services />
      <Portfolio />
      <Testimonals />
      <Call_To_Action />
    </div>
  );
};

export default Home;
