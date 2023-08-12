import './App.css'
import Nav from './Components/Nav';
import fetchAll from './assets/fetchAll'
import CartContext from './Contexts/CartContext';
import { useContext, useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      staleTime: Infinity,
    },
  },
});

function App() {
  const [cartItems, setCartItems] = useState<Item[]>([]);
  return (
    <QueryClientProvider client={client}>
      <CartContext.Provider value={[cartItems, setCartItems]}>
      <Nav />
      hoho
      </CartContext.Provider>
    </QueryClientProvider>
  )
}

export default App
