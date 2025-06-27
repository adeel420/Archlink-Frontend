import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { careerJobsData } from "../data/data";
import { Upload } from "antd";
import axios from "axios";
import { handleError } from "../utils/Utils";
import { ScaleLoader } from "react-spinners";

const Career = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rolesApplied, setRolesApplied] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !rolesApplied || !file) {
      return handleError("Please fill all fields");
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("rolesApplied", rolesApplied);
    formData.append("coverLetter", coverLetter);
    formData.append("resume", file);
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/job/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setName("");
      setEmail("");
      setRolesApplied("");
      setCoverLetter("");
      setFile("");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mt-24 mb-24 ml-6 mr-6 flex flex-col gap-12">
      {loading && (
        <div className="fixed inset-0 bg-[#0000005a] z-50 flex items-center justify-center">
          <ScaleLoader color="#275ce7" />
        </div>
      )}
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-2 py-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-wide">
          Join Our <span className="text-[#2c61ed]">Team</span>
        </h1>
        <div className="h-[4px] w-[80px] bg-[#2c61ed] "></div>
        <p className="text-xl lg:w-[60%] text-center ">
          We're always looking for passionate professionals to join our
          innovative team and help us deliver exceptional results.
        </p>
      </div>

      {/* Job Opening */}
      <div className="text-2xl sm:text-3xl font-medium text-gray-800 ">
        {/* Head */}
        <div className="flex flex-col items-center justify-center gap-2 py-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-wide">
            Job <span className="text-[#2c61ed]">Opening</span>
          </h1>
          <div className="h-[4px] w-[80px] bg-[#2c61ed] "></div>
        </div>

        {/* Containers */}
        <div className="flex flex-col items-center justify-center gap-6">
          {careerJobsData.map((data, index) => (
            <div
              className="w-full md:w-[60%] bg-white border border-gray-300 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300"
              key={index}
            >
              <h4 className="text-2xl font-extrabold text-gray-900 mb-2">
                {data.title}
              </h4>

              {/* Job details */}
              <div className="flex flex-wrap items-center gap-4 text-gray-700 mt-2">
                <p className="flex items-center gap-2 text-base">
                  <CiLocationOn className="text-xl text-[#2c61ed]" />
                  <span className="font-medium">{data.location}</span>
                </p>
                <p className="flex items-center gap-2 text-base">
                  <CiClock2 className="text-xl text-[#2c61ed]" />
                  <span className="font-medium">{data.time}</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg mt-4 leading-relaxed">
                {data.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Form */}
      <div className="flex items-center justify-center gap-12 px-4 md:px-12 py-16 bg-gray-50">
        {/* Apply Form */}
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl w-full max-w-3xl mx-auto transition-all duration-300">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-2 sm:mb-3">
            Apply Now
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Fill out the form below to submit your application
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block font-semibold mb-2 text-sm"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2c61ed] transition"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-semibold mb-2 text-sm"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="email@gmail.com"
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2c61ed] transition"
              />
            </div>

            {/* Role Applied For */}
            <div>
              <label className="block font-semibold mb-2 text-sm">
                Role Applied For
              </label>
              <select
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2c61ed] transition"
                onChange={(e) => setRolesApplied(e.target.value)}
                defaultValue={rolesApplied}
              >
                <option value="">Select an option</option>
                <option value="frontend">Frontend Developer (Onsite)</option>
                <option value="uiux">UI/UX Designer (Hybrid)</option>
                <option value="mobile">Mobile App Developer (Hybrid)</option>
                <option value="marketing">
                  Digital Marketing Intern (Internship)
                </option>
              </select>
            </div>

            {/* Cover Letter */}
            <div>
              <label
                htmlFor="cover"
                className="block font-semibold mb-2 text-sm"
              >
                Cover Letter (Optional)
              </label>
              <textarea
                id="cover"
                rows={5}
                onChange={(e) => setCoverLetter(e.target.value)}
                value={coverLetter}
                placeholder="Tell us why you are interested in this position..."
                className="w-full border border-gray-300 rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#2c61ed] transition"
              ></textarea>
            </div>

            {/* Upload Resume */}
            <div>
              <label className="block font-semibold mb-2 text-sm">
                Upload Resume
              </label>
              <label className="w-full flex items-center justify-center border border-dashed border-gray-400 rounded-lg p-4 cursor-pointer hover:bg-gray-50 text-sm text-gray-600">
                <input
                  type="file"
                  name="resume"
                  hidden
                  onChange={(e) => setFile(e.target.files[0])}
                  accept=".pdf,.doc,.docx"
                />
                {file ? file.name : "Click to upload your resume"}
              </label>
            </div>

            {file && (
              <div className="mt-2 text-sm text-gray-700">
                Selected file: <strong>{file.name}</strong>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="w-full md:w-auto bg-[#2c61ed] hover:bg-[#204bcc] text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Career;
