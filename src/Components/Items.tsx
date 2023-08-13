import React from "react";
import {BiChevronDown} from "react-icons/bi"
import { useContext } from "react";
import CartContext from "../Contexts/CartContext";
import { useEffect } from "react";


interface Prop {
  data: Item[];
}
const Items: React.FC<Prop> = (props) => {
  const [cartItems, setCartItems] = useContext(CartContext);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  const addHandler = (item : Item) => {
    if (!cartItems.some(p => p.id === item.id))
    {
      setCartItems([...cartItems, item]);
    }
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {props?.data?.map((item) => (
        <div
          key={item.id}
          className="relative max-h-[600px] min-h-[500px] flex flex-col bg-gradient-to-tl from-[#fff] via-[#fff] to-[#eee] justify-left group"
        >
          {" "}
          <img
            className="h-[50%] w-[80%] max-w-[250px] mx-auto mt-10"
            src={item.image}
            alt=""
          />
          <div className="flex jusify-center items-center sm:hidden w-full h-[8%] absolute bottom-0 group-hover:flex px-4 ">
            <div className="w-[50%] bg-[#eee] flex justify-between items-center group2 px-2 border border-black">
                <span>Size</span>
                <BiChevronDown />
            </div>
            <div className="w-[50%] text-center bg-black text-white border border-black"
            onClick={() => {addHandler(item)}}>ADD</div>
          </div>
          <div className="flex flex-col items-center w-full px-10">
            <span className="">{item.title}</span>
            <span>{item.price}$</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
