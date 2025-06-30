import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { Popover } from "antd";
import { handleSuccess } from "../utils/Utils";
import axios from "axios";
import { assets } from "../assets/assets";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    handleSuccess("Logout Successfully");
    localStorage.removeItem("token");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const handleLoginUser = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/user/login-data`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleLoginUser();
  }, []);

  const content = (
    <div className="w-[150px] ">
      <li
        onClick={() => navigate("/service")}
        style={{ color: "black" }}
        className="dash-link hover:bg-[#ccc] p-2 cursor-pointer text-black flex gap-2 items-center text-[18px] font-semibold rounded "
      >
        Services
      </li>
      <li
        className="hover:bg-[#ccc] p-2 cursor-pointer flex gap-2 items-center text-[18px] font-semibold rounded "
        onClick={() => navigate("/portfolio")}
      >
        Portfolio
      </li>
      <li
        className="hover:bg-[#ccc] p-2 cursor-pointer flex gap-2 items-center text-[18px] font-semibold rounded "
        onClick={() => navigate("/career")}
      >
        Careers
      </li>
    </div>
  );

  const content1 = (
    <div className="w-[150px] ">
      {user.role === 1 && (
        <li
          style={{ color: "black" }}
          className="dash-link hover:bg-[#ccc] p-2 cursor-pointer text-black flex gap-2 items-center text-[18px] font-semibold rounded "
          onClick={() => navigate("/dashboard")}
        >
          <MdDashboard /> Dashboard
        </li>
      )}
      <li
        className="hover:bg-[#ccc] p-2 cursor-pointer flex gap-2 items-center text-[18px] font-semibold rounded "
        onClick={handleLogout}
      >
        <MdLogout /> Logout
      </li>
    </div>
  );

  return (
    <nav className="fixed top-0 w-full p-2 header shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-1">
            {/* Logo */}
            <img src={assets.logo} className="h-[50px] w-[50px] " />
            <Link
              to="/"
              className="flex text-decoration-none items-center gap-2 text-xl font-bold text-white"
            >
              Archlink Technology
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className="text-decoration-none text-white hover:text-[#d3e2e1]"
            >
              Home
            </Link>
            <Popover content={content} trigger="hover" placement="bottom">
              <Link
                to={"/about"}
                className="cursor-pointer text-white hover:text-[#d3e2e1]"
              >
                About
              </Link>
            </Popover>

            <Link
              to="/contact"
              className="text-decoration-none text-white hover:text-[#d3e2e1]"
            >
              Contact
            </Link>
            <Link
              to="/quote"
              className="text-decoration-none text-white hover:text-[#d3e2e1]"
            >
              Quote
            </Link>
            <Link
              to="/meetings"
              className="text-decoration-none text-white hover:text-[#d3e2e1]"
            >
              Meetings
            </Link>
            {!token ? (
              <>
                <Link
                  to="/login"
                  className="text-decoration-none text-white hover:text-[#d3e2e1]"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-decoration-none bg-white text-[#2b61ee] p-2 rounded px-4 hover:text-white hover:bg-[transparent] hover:border hover:border-white "
                >
                  Signup
                </Link>
              </>
            ) : (
              <Popover
                content={content1}
                trigger="click"
                className="cursor-pointer text-white text-[22px] bg-[#7caadb] border border-white rounded-full p-2 h-[60px] w-[60px] flex items-center justify-center "
              >
                {user?.name?.charAt(0)}
              </Popover>
            )}
          </div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
              {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-4">
          <Link
            to="/"
            onClick={toggleMobileMenu}
            className="text-decoration-none block text-[#1976D2]"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMobileMenu}
            className="text-decoration-none block text-[#1976D2]"
          >
            About Us
          </Link>
          <Link
            to="/service"
            onClick={toggleMobileMenu}
            className="text-decoration-none block text-[#1976D2]"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            onClick={toggleMobileMenu}
            className="text-decoration-none block text-[#1976D2]"
          >
            Portfolio
          </Link>
          <Link
            to="/career"
            onClick={toggleMobileMenu}
            className="text-decoration-none block text-[#1976D2]"
          >
            Careers
          </Link>
          <Link
            to="/contact"
            onClick={toggleMobileMenu}
            className="text-decoration-none block text-[#1976D2]"
          >
            Contact Us
          </Link>
          <Link
            to="/quote"
            onClick={toggleMobileMenu}
            className="text-decoration-none block text-[#1976D2]"
          >
            Quote
          </Link>
          <Link
            to="/meetings"
            onClick={toggleMobileMenu}
            className="text-decoration-none block text-[#1976D2]"
          >
            Meetings
          </Link>
          {!token ? (
            <>
              <Link
                to="/login"
                onClick={toggleMobileMenu}
                className="text-decoration-none block text-[#1976D2] hover:text-gray-800"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={toggleMobileMenu}
                className="text-decoration-none block bg-[#1976D2] text-[#ffffff] p-2 rounded px-4 hover:text-[#055746] hover:bg-[transparent] hover:border hover:border-[#1976D2] flex justify-center items-center "
              >
                Signup
              </Link>
            </>
          ) : (
            <Popover
              content={content1}
              trigger="click"
              className="cursor-pointer text-white text-[22px] bg-[#7caadb] border border-white rounded-full p-2 h-[60px] w-[60px] flex items-center justify-center "
            >
              {user?.name?.charAt(0)}
            </Popover>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
