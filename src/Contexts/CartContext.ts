import { createContext } from "react";

const CartContext = createContext<[Item[], (items: Item[]) => void]>([[], () =>{}]);

export default CartContext;