import React, { useState } from "react";
import { contactData } from "../data/data";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { handleError, handleSuccess } from "../utils/Utils";
import { ScaleLoader } from "react-spinners";
import axios from "axios";
import { TiSocialFacebook } from "react-icons/ti";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone1, setPhone1] = useState("");
  const [message1, setMessage1] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone1 || !message1) {
      return handleError("please fill all fields");
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/contact/`,
        { name: name, email: email, phone: phone1, message: message1 }
      );
      handleSuccess("Form submit successfully");
      setName("");
      setEmail("");
      setPhone1("");
      setMessage1("");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const phone = "923287831517";
  const message = encodeURIComponent("Hello! I'm interested in your services");
  const url = `https://wa.me/${phone}?text=${message}`;
  return (
    <div className="container mx-auto px-4 py-24 space-y-16">
      {loading && (
        <div className="fixed h-[100%] inset-0 bg-[#0000005a] z-50 flex items-center justify-center">
          <ScaleLoader color="#275ce7" />
        </div>
      )}

      {/* Heading */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          Let's Work <span className="text-[#2c61ed]">Together</span>
        </h1>
        <div className="h-1 w-20 mx-auto bg-[#2c61ed] rounded" />
        <p className="text-lg sm:text-xl text-gray-600">
          Fill out the form below or contact us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Contact Form
          </h2>
          <p className="text-gray-600 mb-6">
            Send us a message and we'll get back to you soon.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                name="name"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#2c61ed]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                name="email"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#2c61ed]"
              />
            </div>

            {/* Phone No */}
            <div>
              <label className="block font-semibold mb-1">Phone No</label>
              <input
                type="text"
                placeholder="+92-XXXXXXX"
                onChange={(e) => setPhone1(e.target.value)}
                value={phone1}
                name="phone"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#2c61ed]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                placeholder="Tell us about your project or inquiry..."
                rows={5}
                onChange={(e) => setMessage1(e.target.value)}
                value={message1}
                name="message"
                className="w-full border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#2c61ed]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#2c61ed] hover:bg-[#204bcc] text-white font-medium px-6 py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info, Socials & Map */}
        <div className="space-y-6">
          {/* Other Details */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Other Details
            </h2>
            {contactData.map((data, index) => (
              <div key={index} className="flex items-center space-x-4 mb-4">
                <div className="w-14 h-14 rounded-lg bg-[#dceaff] flex items-center justify-center">
                  <data.logo className="w-6 h-6 text-[#2c61ed]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {data.title}
                  </h3>
                  <p className="text-[#2c61ed] font-medium">{data.val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Connect With Us
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                to={url}
                target="_blank"
                className="bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow"
              >
                <IoChatbubbleEllipsesOutline size={20} />
                WhatsApp
              </Link>
              <Link
                to={
                  "https://www.facebook.com/story.php?story_fbid=122110521050815886&id=61574476603878&rdid=uqtzJZRKgxRxNfuv#"
                }
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 shadow"
              >
                Facebook
              </Link>
              <Link
                to={"https://www.instagram.com/archlink_technology/"}
                target="_blank"
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg shadow"
              >
                Instagram
              </Link>
              <Link
                to={"https://www.linkedin.com/in/saliha-ilyas-3527a2288/"}
                target="_blank"
                className="bg-[#0b66c3] hover:bg-[#085099] text-white px-6 py-3 rounded-lg shadow"
              >
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white p-4 rounded-2xl shadow-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.508651021954!2d74.30691007423522!3d31.592519343576395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191c82d18c2ced%3A0x1aa4688a984fdde1!2sMinar-e-Pakistan!5e0!3m2!1sen!2s!4v1750616459345!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
