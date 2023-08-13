import "./App.css";
import Header from "./Components/Header";
import fetchAll from "./assets/fetchAll";
import CartContext from "./Contexts/CartContext";
import { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Items from "./Components/Items";

function App() {
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [categorie, setCategory] = useState("All Categories");
  const { data } = useQuery([categorie], () =>
    fetchAll(
      categorie === "All Categories"
        ? "/products"
        : "/products/category/" + categorie
    )
  );
  return (
    <CartContext.Provider value={[cartItems, setCartItems]}>
      <Header categorie={categorie} setCategory={setCategory} />
      <Items data={data} />
    </CartContext.Provider>
  );
}

export default App;
