import React, { useEffect, useState } from "react";
import axios from "axios";

const Tab2 = () => {
  const [input, setInput] = useState("");
  const [activePopup, setActivePopup] = useState(null);
  const [applications, setApplications] = useState([]);

  const handleGet = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/job/`
      );
      setApplications(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  const filteredApps = applications.filter((a) =>
    a.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Heading + Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
        <div className="flex flex-col items-center gap-2 w-full md:w-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center">
            Job <span className="text-[#2c61ed]">Applications</span>
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
      <div className="overflow-auto max-h-[75vh] rounded-lg shadow-md">
        <table className="min-w-full text-sm text-left text-gray-700 bg-white">
          <thead className="bg-[#dbeaff] text-black uppercase tracking-wide">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Cover Letter</th>
              <th className="px-4 py-3">Resume</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredApps.length > 0 ? (
              filteredApps.map((app, i) => (
                <tr key={app._id} className="hover:bg-[#f3f6ff] transition">
                  <td className="px-4 py-3 font-bold">{i + 1}</td>
                  <td className="px-4 py-3">{app.name}</td>
                  <td className="px-4 py-3">{app.email}</td>
                  <td className="px-4 py-3 capitalize">{app.rolesApplied}</td>
                  <td className="px-4 py-3">
                    <button
                      className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition cursor-pointer"
                      onClick={() => setActivePopup(app._id)}
                    >
                      View
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={app.resume}
                      className="text-blue-600 text-sm underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>

                  {/* Cover Letter Popup */}
                  {activePopup === app._id && (
                    <div className="fixed top-0 left-0 w-full h-full bg-[#1976d242] bg-opacity-30 flex items-center justify-center z-50">
                      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                        <button
                          className="absolute top-2 right-3 text-lg font-bold cursor-pointer"
                          onClick={() => setActivePopup(null)}
                        >
                          &times;
                        </button>
                        <h2 className="text-xl font-semibold text-[#1a7dda] text-center mb-4">
                          Cover Letter
                        </h2>
                        <p className="text-gray-700 whitespace-pre-wrap">
                          {app.coverLetter || "N/A"}
                        </p>
                      </div>
                    </div>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-6 text-center" colSpan={6}>
                  No applications found...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tab2;
