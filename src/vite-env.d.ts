/// <reference types="vite/client" />

interface Item {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

interface NavProps {
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
