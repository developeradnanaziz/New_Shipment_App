
import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import all_product from "../../public/all_product.js";
import { useCart } from "../context/CartContext";

export default function Kids() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [view, setView] = useState('grid');
  const [filters, setFilters] = useState({ brand: '', size: '', price: '' });
  const { addToCart } = useCart();

  useEffect(() => {
    setProducts(all_product.filter(p => p.category === "kid"));
  }, []);

  const filteredProducts = products.filter(product =>
    (!filters.brand || product.brand === filters.brand) &&
    (!filters.size || product.size === filters.size) &&
    (!filters.price || product.new_price <= parseFloat(filters.price)) &&
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Kids Collection</h1>
          <p className="text-xl text-gray-600">Fun and comfortable clothing for little ones</p>
        </div>

        {/* Search and Filters */}
        <div className="card mb-8 animate-slide-in">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex-1 min-w-64">
              <label htmlFor="kids-search" className="sr-only">Search</label>
              <input
                type="text"
                id="kids-search"
                name="search"
                placeholder="Search kids products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
              />
            </div>
            
            <label htmlFor="kids-brand" className="sr-only">Brand</label>
            <select
              id="kids-brand"
              name="brand"
              onChange={e => setFilters(f => ({ ...f, brand: e.target.value }))}
              className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 transition-all duration-300 bg-white"
            >
              <option value="">All Brands</option>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="Puma">Puma</option>
            </select>
            
            <label htmlFor="kids-size" className="sr-only">Size</label>
            <select
              id="kids-size"
              name="size"
              onChange={e => setFilters(f => ({ ...f, size: e.target.value }))}
              className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 transition-all duration-300 bg-white"
            >
              <option value="">All Sizes</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
            </select>
            
            <label htmlFor="kids-price" className="sr-only">Max Price</label>
            <select
              id="kids-price"
              name="price"
              onChange={e => setFilters(f => ({ ...f, price: e.target.value }))}
              className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 transition-all duration-300 bg-white"
            >
              <option value="">Max Price</option>
              <option value="50">Under ₹50</option>
              <option value="100">Under ₹100</option>
              <option value="200">Under ₹200</option>
            </select>
            
            <button 
              onClick={() => setView(view === 'grid' ? 'list' : 'grid')} 
              className="px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-xl font-semibold hover:from-green-200 hover:to-emerald-200 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {view === 'grid' ? '📋 List View' : '🔲 Grid View'}
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center animate-fade-in">
          <p className="text-gray-600 text-lg">
            Showing <span className="font-semibold text-green-600">{filteredProducts.length}</span> kids products
          </p>
        </div>

        {/* Products Grid */}
        <div className={view === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8' 
          : 'space-y-6'
        }>
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <ProductCard 
                product={product} 
                view={view} 
                addToCart={() => addToCart(product)} 
              />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="w-24 h-24 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">No kids products found</h3>
            <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setSearch('');
                setFilters({ brand: '', size: '', price: '' });
              }}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-emerald-600 hover:to-green-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}