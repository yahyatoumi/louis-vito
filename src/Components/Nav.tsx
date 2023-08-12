import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { BiSolidChevronLeft } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import { BsBag } from "react-icons/bs";
import fetchAll from "../assets/fetchAll";
import Items from "./Items";
import { useContext } from "react";
import CartContext from "../Contexts/CartContext";

const Nav = () => {
  const [categorie, setCategory] = useState("All Categories");
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState(false);
  const [cartItems, setCartItems] = useContext(CartContext);
  const [displayCart, setDisplayCart] = useState(false);
  const { data: categories } = useQuery<string[]>(["categories"], () =>
    fetchAll("/products/categories")
  );
  const { data } = useQuery([categorie], () =>
    fetchAll(
      categorie === "All Categories"
        ? "/products"
        : "/products/category/" + categorie
    )
  );

  return (
    <div className="relative font-vitton font-semibold w-screen">
      {
        search ?
        <div className="sticky top-0 z-50 h-screen w-screen">
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
                setSearch(false);
                document.body.style.overflow = "scroll";
              }}
            />
          </div>
          <div
            className="z-10 absolute top-20 left-0 right-0 bottom-0 bg-black bg-opacity-40"
            onClick={() => {
              setSearch(false);
              document.body.style.overflow = "scroll";
            }}
          >
            {" "}
          </div>
        </div> : <nav
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
              setSearch(true);
              document.body.style.overflow = "hidden";
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
      
      <div
        className={`flex top-20  sticky z-10  bg-white justify-between justify-center items-center px-[5%] h-16 text-xs`}
      >
        <span className="cursor-pointer">{categorie}</span>
        <div className="flex items-center gap-4">
          <div
            onClick={() => {
              setFilter(true);
              document.body.style.overflow = "hidden";
            }}
            className="hover:bg-[#f6f5f3] cursor-pointer flex items-center gap-2 h-8 px-3 rounded-3xl border border-black"
          >
            <span>Filter</span>
            <CiFilter className="" />
          </div>
          <div
            className="relative w-8 h-8 flex justify-center items-center cursor-pointer"
            onClick={() => {
              cartItems.length ? setDisplayCart(true) : "";
            }}
          >
            {cartItems.length ? (
              <BsBag className="w-5 h-5 text-green-500" />
            ) : (
              <BsBag className="w-5 h-5" />
            )}
            {cartItems.length ? (
              <div className="text-green-500 absolute top-0 right-0">
                {cartItems.length}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {/* {search ? (
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
              onClick={() => {
                setSearch(false);
                document.body.style.overflow = "scroll";
              }}
            />
          </div>
          <div
            className="z-10 absolute top-20 left-0 right-0 bottom-0 bg-black bg-opacity-40"
            onClick={() => {
              setSearch(false);
              document.body.style.overflow = "scroll";
            }}
          >
            {" "}
          </div>
        </div>
      ) : (
        ""
      )} */}
      {filter ? (
        <div className="absolute top-0 left-0 h-screen w-screen font-normal">
          <div className="w-full flex flex-col items-center md:w-[600px] z-20 absolute top-0 right-0 h-screen bg-white p-20">
            <div className="w-full flex items-center justify-center gap-1 sm:gap-6">
              <div className="p-2 -ml-2">
                <BiSolidChevronLeft
                  className="block w-7 h-7 cursor-pointer"
                  onClick={() => {
                    setSearch(false);
                    setFilter(false);
                    document.body.style.overflow = "scroll";
                  }}
                />
              </div>
              <span>Show Filters</span>
            </div>
            <div className="flex flex-col items-left gap-4 mt-14">
              {categories?.map((category) => {
                return (
                  <div
                    className="flex items-center gap-2"
                    onClick={() => {
                      if (categorie === category) {
                        setCategory("All Categories");
                        return;
                      }
                      setCategory(category);
                    }}
                    key={category}
                  >
                    <div className="w-5 h-5 border">
                      {categorie === category ? <AiOutlineCheck /> : ""}
                    </div>
                    {category}
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="z-10 absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40"
            onClick={() => {
              setFilter(false);
              document.body.style.overflow = "scroll";
            }}
          >
            {" "}
          </div>
        </div>
      ) : (
        ""
      )}
      {displayCart ? (
        <div className="sticky top-0 left-0 h-screen w-screen font-normal">
          <div className="z-50 absolute top-5 bottom-5 right-0 w-screen sm:w-[500px] font-normal bg-white"></div>
          <div
            className="z-50 absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40"
            onClick={() => setDisplayCart(false)}
          >
            {" "}
          </div>
        </div>
      ) : (
        ""
      )}
      <Items data={data} />
    </div>
  );
};

export default Nav;
