import React, { useEffect, useState } from "react";
import Search from "./Search";
import Nav from "./Nav";
import FilterSection from "./FilterSection";
import { IoMdClose } from "react-icons/io";
import { BsBag, BsHeart } from "react-icons/bs";
import CartContext from "../Contexts/CartContext";
import { useContext } from "react";
import Items from "./Items";

interface HeaderProps {
  categorie: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<HeaderProps> = (props) => {
  const [search, setSearch] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);
  const [cartItems, setCartItems] = useContext(CartContext);

  useEffect(() => {
    const locatlItems = JSON.parse(
      window.localStorage.getItem("CART_ITEMS") || "{}"
    );
    setCartItems(locatlItems);
  }, []);
  useEffect(() => {
    if (cartItems.length)
      window.localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
    else window.localStorage.setItem("CART_ITEMS", JSON.stringify([]));
  }, [cartItems]);
  return (
    <div className="sticky top-0 z-50 font-vitton font-semibold w-screen">
      {search ? (
        <Search setSearch={setSearch} />
      ) : (
        <Nav setSearch={setSearch} />
      )}
      <FilterSection
        setDisplayCart={setDisplayCart}
        setSearch={setSearch}
        setCategory={props.setCategory}
        categorie={props.categorie}
      />
      {displayCart ? (
        <div className="z-40 fixed top-0 left-0 right-0 bottom-0 font-normal">
          <div className="flex flex-col z-50 absolute top-0 bottom-0 md:top-5 md:bottom-5  right-0 w-screen md:w-[400px]  font-normal bg-white text-xs">
            <div className="flex w-full h-[7%] md:h-[5%]  ">
              <div className="w-[42.5%] border-b-2 border-black flex justify-center items-center gap-2">
                <BsBag className="text-lg" />
                <span>SHOPPING BAG ({cartItems.length})</span>
              </div>
              <div className="w-[42.5%]  shadow shadow-black opacity-20 flex justify-center items-center gap-2">
                <BsHeart className="text-lg" />
                <span>WISHLIST (0)</span>
              </div>
              <div
                className="w-[15%] shadow"
                onClick={() => setDisplayCart(false)}
              >
                <IoMdClose className="w-full h-full p-4" />
              </div>
            </div>
            <div className="flex flex-col w-full m-2">
              {cartItems.map((item) => (
                <div className="flex bg-gray-500 w-full m-2 relative">
                  <div className="h-32 min-w-[100px] w-[100px] p-2 flex items-center justify-center bg-[#eee]">
                    <img
                      src={item.image}
                      className="min-h-[50%] rounded"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col w-full  md:w-[300px] pr-8 mt-2 ">
                    <div className="w-full flex justify-left gap-5">
                      <div className="flex flex-col md:w-[70%] w-[50%] ml-2">
                        <span className="truncate font-bold text-base">{item.title}</span>
                        <span className="truncate">{item.title}</span>
                      </div>
                      <div className="flex gap-2 absolute top-0 right-10 mt-2">
                        <span>del</span>
                        <span>del</span>
                      </div>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="z-40 absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40"
            onClick={() => setDisplayCart(false)}
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

export default Header;
