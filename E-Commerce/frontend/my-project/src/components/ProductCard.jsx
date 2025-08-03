import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, view, addToCart }) {
  return (
    <div className={`group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 animate-fade-in ${
      view === "list" ? "flex flex-row" : "flex flex-col"
    }`}>
      <div className={`relative overflow-hidden ${view === "list" ? "w-48 flex-shrink-0" : "w-full"}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
            view === "list" ? "w-full h-48" : "w-full h-64"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className={`p-6 flex flex-col justify-between flex-1 ${view === "list" ? "min-h-48" : ""}`}>
        <div>
          <h3 className="font-bold text-xl mb-3 text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-2xl font-bold text-indigo-600">
              ₹{product.new_price ?? product.price}
            </span>
            {product.old_price && (
              <span className="text-lg text-gray-400 line-through">
                ₹{product.old_price}
              </span>
            )}
            {product.old_price && (
              <span className="px-2 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full">
                {Math.round(((product.old_price - product.new_price) / product.old_price) * 100)}% OFF
              </span>
            )}
          </div>
        </div>
        
        <div className="flex gap-3 mt-4">
          <Link 
            to={`/product/${product.id}`} 
            className="flex-1 px-4 py-3 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-xl font-semibold text-center hover:from-slate-200 hover:to-slate-300 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View Details
          </Link>
          <button
            onClick={addToCart}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-xl font-semibold hover:from-blue-200 hover:to-cyan-200 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}