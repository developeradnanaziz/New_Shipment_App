import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const dummyProducts = [
  { id: 1, name: "Product A", new_price: 100, old_price: 120, image: "https://via.placeholder.com/100" },
  { id: 2, name: "Product B", new_price: 200, old_price: 250, image: "https://via.placeholder.com/100" },
];

export default function ProductList() {
  const [view, setView] = useState("grid");
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    // No need to show toast here if CartContext already does it
  };

  return (
    <div>
      <div className="mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded ${view === "grid" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setView("grid")}
        >
          Grid
        </button>
        <button
          className={`px-4 py-2 rounded ${view === "list" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setView("list")}
        >
          List
        </button>
      </div>
      <div className={view === "grid" ? "grid grid-cols-2 gap-4" : "flex flex-col gap-4"}>
        {dummyProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            view={view}
            addToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}