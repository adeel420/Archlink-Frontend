import axios from "axios";
import React, { useEffect, useState } from "react";

const Tab5 = () => {
  const [input, setInput] = useState("");
  const [popup, setPopup] = useState(false);
  const [meetings, setMeetings] = useState([]);

  const handleGet = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/meeting/`
      );
      setMeetings(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  const filteredItems = meetings.filter((item) =>
    item.name?.toLowerCase()?.includes(input?.toLowerCase())
  );
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-6">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-wide text-center">
            All <span className="text-[#2c61ed]">Meetings</span>
          </h1>
          <div className="h-[4px] w-[80px] bg-[#2c61ed]" />
        </div>

        {/* Search */}
        <form className="w-full max-w-[300px] md:ml-auto">
          <input
            type="search"
            placeholder="Search users for meetings..."
            className="border p-2 border-gray-300 w-full rounded outline-none focus:ring-2 focus:ring-[#1a7dda] transition"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </form>
      </div>

      <div className="overflow-auto max-h-[77vh] w-full rounded-lg shadow-md">
        <table className="min-w-full text-sm text-left text-gray-700 bg-white">
          <thead className="bg-[#dbeaff] text-black uppercase tracking-wide">
            <tr>
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Phone No</th>
              <th className="px-6 py-3">Timing</th>
              <th className="px-6 py-3">Subject & Purpose</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredItems.length > 0 ? (
              filteredItems.map((contact, i) => (
                <React.Fragment key={contact._id}>
                  <tr className="hover:bg-[#f3f6ff] transition">
                    <td className="px-6 py-4 font-bold">{i + 1}</td>
                    <td className="px-6 py-4">{contact.name}</td>
                    <td className="px-6 py-4">{contact.email}</td>
                    <td className="px-6 py-4">{contact.contact}</td>
                    <td className="px-6 py-4">{contact.timing}</td>

                    <td className="px-6 py-4">
                      <span
                        className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100
               text-blue-700 rounded-full outline-0 cursor-pointer"
                        onClick={() => setPopup(contact._id)}
                      >
                        Click for Details
                      </span>
                    </td>
                  </tr>
                  {/* Popup */}
                  {popup === contact._id && (
                    <div className="bg-[#1976d242] fixed top-[0] left-[0] h-[100%] w-[100%] ">
                      <div
                        className={`bg-[white] p-5 max-w-[400px] w-full fixed top-[50%] left-[50%] shadow shadow-xl rounded`}
                        style={{ transform: "translate(-50%, -50%)" }}
                      >
                        <button
                          className="absolute right-[10px] top-[10px] cursor-pointer text-xl "
                          onClick={() => setPopup(false)}
                        >
                          &times;
                        </button>
                        <h1 className="text-center text-[#1a7dda] text-2xl font-semibold ">
                          Subject & Purpose
                        </h1>
                        <h3 className="flex items-center gap-2 ">
                          <p className="mt-4 min-h-[50px] font-bold text-base ">
                            Subject:
                          </p>
                          <p className="mt-4 min-h-[50px] text-base ">
                            {contact.subject}
                          </p>
                        </h3>
                        <h3 className=" ">
                          <p className=" font-bold text-base ">
                            Purpose of meeting:
                          </p>
                          <p className="min-h-[50px] text-base ">
                            {contact.purpose}
                          </p>
                        </h3>
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))
            ) : (
              <tr className="hover:bg-[#f3f6ff] transition">
                <td className="px-6 py-4 text-center" colSpan={6}>
                  No meetings found...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tab5;
