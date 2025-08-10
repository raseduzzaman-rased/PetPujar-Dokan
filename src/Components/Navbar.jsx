import React from "react";
import { IoFastFood } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="w-full h-[100%] p-8 flex justify-between items-center">
      {/* logo icon left  */}
      <div className="w-[60px] h-[60px] bg-white rounded-md shadow-xl flex justify-center items-center">
        <IoFastFood className="w-[30px] h-[30px] text-green-500" />
      </div>

      {/* middle search section */}
      <form className="bg-white w-[70%] h-[60px] px-5 rounded-md shadow-md flex justify-center items-center gap-3">
        <FaSearch className="text-green-500 w-[20px] h-[20px]" />
        <input
          placeholder="Search here....."
          type="text"
          name=""
          id=""
          className="w-full outline-none text-[20px]"
        />
      </form>

      {/* cart icon right  */}
      <div className="w-[60px] h-[60px] bg-white rounded-md shadow-xl flex justify-center items-center">
        <RiShoppingBag3Line className="w-[30px] h-[30px] text-green-500" />
      </div>
    </div>
  );
};

export default Navbar;
