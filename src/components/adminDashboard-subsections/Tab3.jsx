import axios from "axios";
import React, { useEffect, useState } from "react";

const Tab3 = () => {
  const [input, setInput] = useState("");
  const [activePopup, setActivePopup] = useState(null);
  const [quotes, setQuotes] = useState([]);

  const handleGet = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/quote/`
      );
      setQuotes(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  const filteredQuotes = quotes.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="px-4 py-6">
      {/* Heading & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-wide text-center">
            Quote <span className="text-[#2c61ed]">Users</span>
          </h1>
          <div className="h-[4px] w-[80px] bg-[#2c61ed]" />
        </div>

        <form className="w-full max-w-[300px] md:ml-auto">
          <input
            type="search"
            placeholder="Search users..."
            className="border p-2 border-gray-300 w-full rounded outline-none focus:ring-2 focus:ring-[#1a7dda] transition"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </form>
      </div>

      {/* Table */}
      <div className="overflow-auto max-h-[77vh] rounded-lg shadow-md">
        <table className="min-w-full text-sm text-left text-gray-700 bg-white">
          <thead className="bg-[#dbeaff] text-black uppercase tracking-wide">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Services</th>
              <th className="px-4 py-3">Budget</th>
              <th className="px-4 py-3">Deadline</th>
              <th className="px-4 py-3">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredQuotes.length > 0 ? (
              filteredQuotes.map((data, i) => (
                <React.Fragment key={data._id}>
                  <tr className="hover:bg-[#f3f6ff] transition">
                    <td className="px-4 py-3 font-bold">{i + 1}</td>
                    <td className="px-4 py-3">{data.name}</td>
                    <td className="px-4 py-3">{data.companyName}</td>
                    <td className="px-4 py-3">
                      {Array.isArray(data.requiredServices)
                        ? data.requiredServices.join(", ")
                        : data.requiredServices}
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
                        {data.estimatedBudget}
                      </span>
                    </td>
                    <td className="px-4 py-3">{data.deadline}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => setActivePopup(data._id)}
                        className="text-xs font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded-full hover:bg-blue-200 transition cursor-pointer"
                      >
                        View
                      </button>
                    </td>
                  </tr>

                  {/* Popup Modal */}
                  {activePopup === data._id && (
                    <div className="fixed inset-0 bg-[#1976d242] bg-opacity-30 z-50 flex items-center justify-center">
                      <div className="bg-white p-6 max-w-[500px] w-full rounded-lg shadow-xl relative">
                        <button
                          onClick={() => setActivePopup(null)}
                          className="absolute top-2 right-3 text-2xl font-bold text-gray-700 cursor-pointer"
                        >
                          &times;
                        </button>
                        <h2 className="text-xl font-semibold text-[#1a7dda] mb-4 text-center">
                          Additional Notes
                        </h2>
                        <p className="text-gray-700 whitespace-pre-line">
                          {data.additionalNotes || "No additional notes."}
                        </p>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr>
                <td className="px-6 py-4 text-center" colSpan={7}>
                  No quote forms found...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tab3;
