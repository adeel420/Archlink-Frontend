import React, { useState } from "react";
import { ScaleLoader } from "react-spinners";
import { handleError, handleSuccess } from "../utils/Utils";
import axios from "axios";

const Quote = () => {
  const [loading, setLoading] = useState(false);
  const [quoteName, setQuoteName] = useState("");
  const [quoteCompanyName, setQuoteCompanyName] = useState("");
  const [quoteEstimatedBudget, setQuoteEstimatedBudget] = useState("");
  const [quoteDeadline, setQuoteDeadline] = useState("");
  const [quoteAdditionalNotes, setQuoteAdditionalNotes] = useState("");
  const [quoteRequiredServices, setQuoteRequiredServices] = useState([]);

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setQuoteRequiredServices((prev) =>
      e.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    if (
      !quoteName ||
      !quoteCompanyName ||
      !quoteRequiredServices.length ||
      !quoteEstimatedBudget ||
      !quoteDeadline ||
      !quoteAdditionalNotes
    ) {
      return handleError("please fill all fields");
    }
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_API}/quote/`,
        {
          name: quoteName,
          companyName: quoteCompanyName,
          requiredServices: quoteRequiredServices,
          estimatedBudget: quoteEstimatedBudget,
          deadline: quoteDeadline,
          additionalNotes: quoteAdditionalNotes,
        }
      );
      handleSuccess("Form submit successfully");
      setQuoteAdditionalNotes("");
      setQuoteCompanyName("");
      setQuoteDeadline("");
      setQuoteEstimatedBudget("");
      setQuoteName("");
      setQuoteRequiredServices("");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mx-auto px-4 py-24 space-y-16">
      {loading && (
        <div className="fixed h-[100%] inset-0 bg-[#0000005a] z-50 flex items-center justify-center">
          <ScaleLoader color="#275ce7" />
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 md:px-12 py-16 bg-gray-50">
        {/* Quote Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl transition-all duration-300">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
            Get a Quote
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Tell us about your project and we’ll get back to you as soon as
            possible.
          </p>

          <form className="space-y-6" onSubmit={handleQuoteSubmit}>
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
                onChange={(e) => setQuoteName(e.target.value)}
                name="name"
                value={quoteName}
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2c61ed] transition"
              />
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="company"
                className="block font-semibold mb-2 text-sm"
              >
                Company Name
              </label>
              <input
                id="company"
                type="text"
                onChange={(e) => setQuoteCompanyName(e.target.value)}
                name="companyName"
                value={quoteCompanyName}
                placeholder="Archlink Technology"
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2c61ed] transition"
              />
            </div>

            {/* Required Services */}
            <div>
              <label className="block font-semibold mb-2 text-sm">
                Required Services
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: "web", label: "Web Development" },
                  { id: "app", label: "App Development" },
                  { id: "design", label: "UI/UX Design" },
                  { id: "marketing", label: "Digital Marketing" },
                ].map((service) => (
                  <div key={service.id} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={service.id}
                      checked={quoteRequiredServices.includes(service.id)}
                      onChange={handleCheckboxChange}
                    />

                    <label htmlFor={service.id} className="text-sm">
                      {service.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Estimated Budget */}
            <div>
              <label
                htmlFor="budget"
                className="block font-semibold mb-2 text-sm"
              >
                Estimated Budget
              </label>
              <input
                id="budget"
                type="text"
                placeholder="$300"
                onChange={(e) => setQuoteEstimatedBudget(e.target.value)}
                name="estimatedBudget"
                value={quoteEstimatedBudget}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2c61ed] transition"
              />
            </div>

            {/* Deadline */}
            <div>
              <label
                htmlFor="deadline"
                className="block font-semibold mb-2 text-sm"
              >
                Deadline
              </label>
              <input
                id="deadline"
                type="date"
                onChange={(e) => setQuoteDeadline(e.target.value)}
                name="deadline"
                value={quoteDeadline}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#2c61ed] transition"
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label
                htmlFor="notes"
                className="block font-semibold mb-2 text-sm"
              >
                Additional Notes
              </label>
              <textarea
                id="notes"
                placeholder="Tell us about your project or inquiry..."
                rows={5}
                onChange={(e) => setQuoteAdditionalNotes(e.target.value)}
                name="additionalNotes"
                value={quoteAdditionalNotes}
                className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#2c61ed] transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-[#2c61ed] hover:bg-[#204bcc] text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="hidden lg:flex items-center justify-center">
          <img
            src="https://illustrations.popsy.co/gray/web-design.svg"
            alt="Get a Quote"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
