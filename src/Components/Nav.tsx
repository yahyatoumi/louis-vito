import React from "react";
import { BiSearch } from "react-icons/bi";

const Nav:React.FC<NavProps> = (props) => {
    return <nav
    className={`flex sticky top-0 z-10 transition-top duration-200 ease-in-out justify-between items-center h-20 px-[5%] border-b bg-white`}
  >
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
        onClick={() => {
          props.setSearch(true);
          document.body.style.overflowY = "hidden";
        }}
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
}

export default React.memo(Nav);