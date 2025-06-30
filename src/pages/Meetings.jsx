import React, { useState } from "react";
import { ScaleLoader } from "react-spinners";
import { handleError, handleSuccess } from "../utils/Utils";
import axios from "axios";

const Meetings = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState("");
  const [timing, setTiming] = useState("");
  const [purpose, setPurpose] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !subject || !timing || !purpose) {
      return handleError("Please fill all fields");
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/meeting/`,
        { name, email, contact, subject, timing, purpose },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      handleSuccess("Form submit successfully");
      setName("");
      setEmail("");
      setContact("");
      setSubject("");
      setTiming("");
      setPurpose("");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-30 space-y-16">
      {loading && (
        <div className="fixed h-[100%] inset-0 bg-[#0000005a] z-50 flex items-center justify-center">
          <ScaleLoader color="#275ce7" />
        </div>
      )}

      {/* Heading */}
      <div className="text-center space-y-4 px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          Schedule a Meeting with Our{" "}
          <span className="text-[#2c61ed]">CEO / Director</span>
        </h1>
        <div className="h-1 w-20 mx-auto bg-[#2c61ed] rounded" />
        <p className="text-lg sm:text-xl text-gray-600">
          We're happy to connect with you! Please fill out the form below to
          schedule a meeting. Our team will get back to you shortly with
          confirmation and available time slots.
        </p>
      </div>

      {/* Form + Guidelines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 md:px-12 py-12 bg-gray-50 rounded-xl">
        {/* Meeting Form */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl transition-all duration-300">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-3">
            Meeting Form
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Schedule your meeting and we'll get back to you soon.
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
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2c61ed]"
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
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="your.example@example.com"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2c61ed]"
              />
            </div>

            {/* Contact Number */}
            <div>
              <label
                htmlFor="contact"
                className="block font-semibold mb-2 text-sm"
              >
                Contact Number
              </label>
              <input
                id="contact"
                type="tel"
                placeholder="+92-XXX-XXXXXXX"
                onChange={(e) => setContact(e.target.value)}
                value={contact}
                name="contact"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2c61ed]"
              />
            </div>

            {/* Meeting Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block font-semibold mb-2 text-sm"
              >
                Meeting Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                placeholder="Subject of the meeting"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2c61ed]"
              />
            </div>

            {/* Preferred Timing */}
            <div>
              <label
                htmlFor="timing"
                className="block font-semibold mb-2 text-sm"
              >
                Preferred Timing
              </label>
              <input
                id="timing"
                type="datetime-local"
                name="timing"
                onChange={(e) => setTiming(e.target.value)}
                value={timing}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2c61ed]"
              />
            </div>

            {/* Purpose of Meeting */}
            <div>
              <label
                htmlFor="purpose"
                className="block font-semibold mb-2 text-sm"
              >
                Purpose of Meeting
              </label>
              <textarea
                id="purpose"
                placeholder="Describe the agenda..."
                rows={5}
                name="purpose"
                onChange={(e) => setPurpose(e.target.value)}
                value={purpose}
                className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#2c61ed]"
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-[#2c61ed] hover:bg-[#204bcc] text-white font-medium px-6 py-3 rounded-lg shadow-md transition cursor-pointer"
            >
              Schedule Meeting
            </button>
          </form>
        </div>

        {/* Guidelines */}
        <div className="flex items-start justify-start">
          <div className="w-full bg-blue-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">
              Meeting Guidelines
            </h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Meetings are typically 30-60 minutes</li>
              <li>• Please provide at least 24 hours notice</li>
              <li>• Virtual meetings available via Zoom/Teams</li>
              <li>• Confirmation will be sent within 2 business hours</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meetings;
