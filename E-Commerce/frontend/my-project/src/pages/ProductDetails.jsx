import React from "react";
import { useParams } from "react-router-dom";
import all_product from "../../public/all_product.js";

export default function ProductDetails() {
  const { id } = useParams();
  const product = all_product.find(p => p.id === Number(id));

  if (!product) return <div className="text-center mt-20">Product not found.</div>;

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <img src={product.image} alt={product.name} className="w-80 h-96 object-cover rounded mb-6 mx-auto" />
      <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
      <p className="text-xl mb-2 font-semibold">₹{product.new_price} <span className="text-gray-400 line-through ml-2">{product.old_price && `₹${product.old_price}`}</span></p>
      <p className="mb-4">Category: {product.category}</p>
      {/* Add more product details here if available */}
    </div>
  );
}