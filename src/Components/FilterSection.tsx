import React, { useState, useContext } from "react";
import { BiSolidChevronLeft } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import CartContext from "../Contexts/CartContext";
import { useQuery } from "@tanstack/react-query";
import fetchAll from "../assets/fetchAll";

interface FilterProps {
    setDisplayCart: React.Dispatch<React.SetStateAction<boolean>>,
    setSearch : React.Dispatch<React.SetStateAction<boolean>>,
    categorie: string,
    setCategory: React.Dispatch<React.SetStateAction<string>>
}

const FilterSection:React.FC<FilterProps> = (props) => {
  const [filter, setFilter] = useState(false);
  const [cartItems] = useContext(CartContext);
  const { data: categories } = useQuery<string[]>(["categories"], () =>
    fetchAll("/products/categories")
  );

    return<> <div
    className={`flex top-20 sticky z-10  bg-white justify-between items-center px-[5%] h-16 text-xs`}
  >
    <span className="cursor-pointer">{props.categorie}</span>
    <div className="flex items-center gap-4">
      <div
        onClick={() => {
          setFilter(true);
          document.body.style.overflowY = "hidden";
        }}
        className="hover:bg-[#f6f5f3] cursor-pointer flex items-center gap-2 h-8 px-3 rounded-3xl border border-black"
      >
        <span>Filter</span>
        <CiFilter className="" />
      </div>
      <div
        className="relative w-8 h-8 flex justify-center items-center cursor-pointer"
        onClick={() => {
          cartItems.length ? props.setDisplayCart(true) : "";
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
  
  {filter ? (
    <div className="fixed z-40 top-0 left-0 h-screen w-screen font-normal">
      <div className="w-full flex flex-col items-center md:w-[600px] md:max-w-[30%] z-20 absolute top-0 right-0 h-screen bg-white p-20">
        <div className="w-full flex items-center justify-center gap-1 sm:gap-6">
          <div className="p-2 -ml-2">
            <BiSolidChevronLeft
              className="block w-7 h-7 cursor-pointer"
              onClick={() => {
                props.setSearch(false);
                setFilter(false);
                document.body.style.overflowY = "scroll";
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
                  if (props.categorie === category) {
                    props.setCategory("All Categories");
                    return;
                  }
                  props.setCategory(category);
                }}
                key={category}
              >
                <div className="w-5 h-5 border">
                  {props.categorie === category ? <AiOutlineCheck /> : ""}
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
          document.body.style.overflowY = "scroll";
        }}
      >
        {" "}
      </div>
    </div>
  ) : (
    ""
  )}
  </>
}

export default FilterSection;