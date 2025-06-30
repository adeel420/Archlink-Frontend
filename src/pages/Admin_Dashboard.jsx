import React, { useState } from "react";
import { dashboardBtnData } from "../data/data";
import Tab1 from "../components/adminDashboard-subsections/Tab1";
import Tab2 from "../components/adminDashboard-subsections/Tab2";
import Tab3 from "../components/adminDashboard-subsections/Tab3";
import Tab4 from "../components/adminDashboard-subsections/Tab4";
import { useNavigate } from "react-router-dom";
import { handleSuccess } from "../utils/Utils";
import Tab5 from "../components/adminDashboard-subsections/Tab5";

const Admin_Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="overflow-x-auto scroll bg-[#1a7dda] flex md:flex-col md:justify-center flex-row items-center md:items-start gap-4 p-4 md:py-8 md:px-6 w-full md:max-w-[15%]">
        {dashboardBtnData.map((data) => (
          <button
            key={data.id}
            onClick={() => {
              setActiveTab(data.id);
              if (data.id === 5) {
                handleSuccess("Logout Successful");
                navigate("/");
              }
            }}
            className={`flex flex-col md:flex-col items-center gap-1 text-white transition-all duration-300 rounded-lg cursor-pointer p-2 md:w-full ${
              activeTab === data.id
                ? "bg-white shadow-md font-semibold"
                : "hover:bg-[#ffffff22]"
            }`}
          >
            <span
              className={`text-2xl ${
                activeTab === data.id ? "text-[#1a7dda]" : "text-white "
              }`}
            >
              <data.logo />
            </span>
            <span
              className={`text-sm text-center ${
                activeTab === data.id ? "text-[#1a7dda]" : "text-white "
              }`}
            >
              {data.text}
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 bg-[#f9f9f9] p-4">
        {activeTab === 0 && <Tab1 />}
        {activeTab === 1 && <Tab2 />}
        {activeTab === 2 && <Tab3 />}
        {activeTab === 3 && <Tab4 />}
        {activeTab === 4 && <Tab5 />}
      </div>
    </div>
  );
};

export default Admin_Dashboard;
