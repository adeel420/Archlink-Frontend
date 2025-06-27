import axios from "axios";
import React, { useEffect, useState } from "react";
import { handleSuccess } from "../../utils/Utils";

const Tab1 = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);

  const handleGetUsers = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_API}/user/`
      );
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (id, role) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_SERVER_API}/user/update/${id}`,
        { role }
      );
      handleSuccess("Status updated sucessfull");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  const filteredItems = users.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-6">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-wide text-center">
            All <span className="text-[#2c61ed]">Users</span>
          </h1>
          <div className="h-[4px] w-[80px] bg-[#2c61ed]" />
        </div>

        {/* Search */}
        <form className="w-full max-w-[300px] md:ml-auto">
          <input
            type="search"
            placeholder="Search user..."
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
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredItems && filteredItems.length > 0 ? (
              filteredItems.map((user, i) => (
                <tr className="hover:bg-[#f3f6ff] transition" key={user._id}>
                  <td className="px-6 py-4 font-bold">{i + 1}</td>
                  <td className="px-6 py-4">{user?.name}</td>
                  <td className="px-6 py-4">{user?.email}</td>
                  <td className="px-6 py-4">
                    <select
                      className="inline-block px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full outline-0"
                      defaultValue={user.role}
                      onChange={(e) => handleUpdate(user._id, e.target.value)}
                    >
                      <option value={0}>User</option>
                      <option value={1}>Admin</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="hover:bg-[#f3f6ff] transition">
                <td className="px-6 py-4 text-center" colSpan={4}>
                  No user found...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tab1;
