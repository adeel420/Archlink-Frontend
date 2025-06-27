import axios from "axios";
import React, { useState } from "react";
import { handleError, handleSuccess } from "../utils/Utils";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";

const Reset_Password = () => {
  const [loading, setLoading] = useState(false);
  const [signupInfo, setSignupInfo] = useState({
    email: "",
    newPassword: "",
    otp: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { otp, email, newPassword } = signupInfo;
    if (!otp || !email || !newPassword) {
      return handleError("All fields are required");
    }
    if (otp.length !== 6 || isNaN(otp)) {
      return handleError("OTP must be 6-digit numeric");
    }

    if (newPassword.length < 5) {
      return handleError("Length of password must be 5 characters long");
    }

    setLoading(true);
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_API}/user/reset-password`,
        signupInfo
      );

      if (response.status === 200 || response.status === 201) {
        handleSuccess(response.data?.message || "Success");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (response.data?.error) {
        handleError(response.data.error);
      }
    } catch (err) {
      console.log("Reset password error:", err);

      const errorMessage =
        err.response?.data?.error || "Something went wrong. Please try again.";
      handleError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#dde9ff] min-h-screen flex items-center justify-center px-4">
      {loading && (
        <div className="fixed inset-0 bg-[#0000005a] z-50 flex items-center justify-center">
          <ScaleLoader color="#275ce7" />
        </div>
      )}
      <div className="bg-white w-full max-w-md p-6 sm:p-8 rounded-xl shadow-2xl">
        <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-800">
          Reset Password
        </h1>
        <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="flex flex-col">
            <label className="font-semibold text-sm text-gray-700 mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={signupInfo.email}
              placeholder="example@gmail.com"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#2c61ed] transition"
            />
          </div>

          {/* Name */}
          <div className="flex flex-col">
            <label className="font-semibold text-sm text-gray-700 mb-1">
              OTP:
            </label>
            <input
              type="text"
              name="otp"
              onChange={handleChange}
              value={signupInfo.otp}
              placeholder="your full name..."
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#2c61ed] transition"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="font-semibold text-sm text-gray-700 mb-1">
              New password:
            </label>
            <input
              type="password"
              placeholder="********"
              name="newPassword"
              onChange={handleChange}
              value={signupInfo.newPassword}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#2c61ed] transition"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-[#2c61ed] hover:bg-[#204bcc] text-white font-semibold py-3 rounded-md shadow transition duration-300 cursor-pointer"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reset_Password;
