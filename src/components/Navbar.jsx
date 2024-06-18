import React, { useState } from "react";

function Navbar() {
  const [category, setCategory] = useState("business");
  const [searchQuery, setSearchQuery] = useState("");

        


  return (
    <div>
      <div className="bg-red-300 p-4 flex items-center justify-center space-x-5">
        {/* <div>
        <button className="bg-gray-300 text-black  py-2 px-4 rounded-full">
          Button
        </button>
        <button className="bg-gray-300 text-black  py-2 px-4 rounded-full">
          Button
        </button>
        <button className="bg-gray-300 text-black  py-2 px-4 rounded-full">
          Button
        </button>
        <button className="bg-gray-300 text-black  py-2 px-4 rounded-full">
          Button
        </button>
        <button className="bg-gray-300 text-black  py-2 px-4 rounded-full">
          Button
        </button>
      </div> */}
        <div>
          <form className="flex space-x-2">
            <input
              className="p-2 rounded-md"
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
            />
            <button
              type="submit"
              className="bg-gray-300 text-black  py-2 px-4 rounded-md hover:bg-gray-400 transition-all ease-in-out duration-200 active:scale-95 "
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
