import React from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";



const Search:React.FC<NavProps> = (props) => {
    return <div className="fixed top-0 z-50 h-screen w-screen">
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
        onClick={() => {
          props.setSearch(false);
          document.body.style.overflowY = "scroll";
        }}
      />
    </div>
    <div
      className="z-10 absolute top-20 left-0 right-0 bottom-0 bg-black bg-opacity-40"
      onClick={() => {
        props.setSearch(false);
        document.body.style.overflowY = "scroll";
      }}
    >
      {" "}
    </div>
  </div>
}

export default Search;