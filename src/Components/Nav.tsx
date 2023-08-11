import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { AiOutlineLeft } from "react-icons/ai";

const Nav = () => {
  const [categorie, setCategory] = useState("All Categories");
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <div className="relative font-vitton font-semibold w-screen">
      <nav className="flex justify-between items-center h-20 px-[5%] border-b">
        <div className="flex items-center gap-8 text-xs">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-5 h-5 flex flex-col justify-around">
              <div className="w-5 h-0.5 bg-black"></div>
              <div className="w-5 h-0.5 bg-black"></div>
              <div className="w-5 h-0.5 bg-black"></div>
            </div>
            <span className="hidden md:block">Menu</span>
          </div>
          <div
            className="absolute right-[5%] items-center gap-2 cursor-pointer md:flex md:relative"
            onClick={() => setSearch(true)}
          >
            <BiSearch className="w-5 h-5" />
            <span className="hidden md:block">Search</span>
          </div>
        </div>
        <div className="cursor-pointer text-xl md:text-3xl">LOUUISS VITTON</div>
        <div className="flex gap-8 text-xs">
          <span className="hidden md:block cursor-pointer">WishList</span>
          <span className="hidden md:block cursor-pointer ">My LVs</span>
        </div>
      </nav>
      <div className="flex justify-between justify-center items-center px-[5%] h-16 text-xs">
        <span className="cursor-pointer">{categorie}</span>
        <div
          onClick={() => {
            setFilter(true);
          }}
          className="hover:bg-[#f6f5f3] cursor-pointer flex items-center gap-2 h-8 px-3 rounded-3xl border border-black"
        >
          <span>Filter</span>
          <CiFilter className="" />
        </div>
      </div>
      {search ? (
        <div className="absolute top-0 left-0 h-screen w-screen">
          <div className="z-20 absolute top-20 md:top-0  w-screen flex justify-center items-center h-16 md:h-20 bg-white">
            <div className="bg-[#f6f5f3] flex items-center w-full md:w-[600px] mx-5 h-8 md:h-10 rounded ">
              <BiSearch className="w-5 h-5 ml-5 mr-2" />
              <input
                type="text"
                className="bg-transparent w-full outline-none text-sm"
                placeholder="Search For LV"
              />
            </div>
            <IoMdClose
              className="hidden md:block w-5 h-5 absolute right-[5%]"
              onClick={() => setSearch(false)}
            />
          </div>
          <div
            className="z-10 absolute top-20 left-0 right-0 bottom-0 bg-black bg-opacity-40"
            onClick={() => setSearch(false)}
          >
            {" "}
          </div>
        </div>
      ) : (
        ""
      )}
      {filter ? (
        <div className="absolute top-0 left-0 h-screen w-screen font-normal">
          <div className="w-[50%] z-20 absolute top-0 right-0 h-screen bg-white p-20">
            <div className="flex items-center gap-6">
              <AiOutlineLeft
                className="hidden md:block w-4 h-4"
                onClick={() => setSearch(false)}
              />
              <span>Show Filters</span>
            </div>
          </div>
          <div
            className="z-10 absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40"
            onClick={() => setFilter(false)}
          >
            {" "}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;