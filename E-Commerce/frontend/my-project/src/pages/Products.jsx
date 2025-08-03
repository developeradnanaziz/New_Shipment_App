import React from "react";
import ProductList from "../components/ProductList";

export default function Products() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ProductList />
    </div>
  );
}