import React from "react";
import all_product from "../../public/all_product.js";
import ProductCard from "../components/ProductCard";

export default function Latest() {
  const trending = all_product.filter((p) => p.trending);
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8">Trending Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {trending.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}