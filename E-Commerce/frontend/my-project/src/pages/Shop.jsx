import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';
import all_product from '../../public/all_product.js';
import { useCart } from '../context/CartContext';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [view, setView] = useState('grid');
  const [filters, setFilters] = useState({ brand: '', size: '', price: '' });
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    setProducts(all_product);
    setFilteredProducts(all_product);
  }, []);

  useEffect(() => {
    let filtered = products.filter(product => {
      return (
        (!filters.brand || product.brand === filters.brand) &&
        (!filters.size || product.size === filters.size) &&
        (!filters.price || product.new_price <= parseFloat(filters.price)) &&
        (product.name.toLowerCase().includes(search.toLowerCase()))
      );
    });
    setFilteredProducts(filtered);
  }, [filters, search, products]);

  const filterByCategory = (category) => navigate(`/category/${category}`);
  const trackShipment = () => navigate('/shipment');

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Shop All Products</h1>
          <p className="text-xl text-gray-600">Discover our amazing collection of premium fashion</p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            onClick={() => filterByCategory('men')} 
            className="px-8 py-3 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full font-semibold hover:from-blue-200 hover:to-cyan-200 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            👔 Men's Collection
          </button>
          <button 
            onClick={() => filterByCategory('women')} 
            className="px-8 py-3 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 rounded-full font-semibold hover:from-pink-200 hover:to-rose-200 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            👗 Women's Collection
          </button>
          <button 
            onClick={() => filterByCategory('kid')} 
            className="px-8 py-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full font-semibold hover:from-green-200 hover:to-emerald-200 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            👶 Kids Collection
          </button>
          <button 
            onClick={trackShipment} 
            className="px-8 py-3 bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 rounded-full font-semibold hover:from-gray-200 hover:to-slate-200 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            📦 Track Shipment
          </button>
        </div>

        {/* Search and Filters */}
        <div className="card mb-8 animate-slide-in">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex-1 min-w-64">
              <input
                type="text"
                id="shop-search"
                name="search"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-300"
              />
            </div>
            
            <select
              id="shop-brand"
              name="brand"
              onChange={e => setFilters(f => ({ ...f, brand: e.target.value }))}
              className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 transition-all duration-300 bg-white"
            >
              <option value="">All Brands</option>
              <option value="Nike">Nike</option>
              <option value="Adidas">Adidas</option>
              <option value="Puma">Puma</option>
            </select>
            
            <select
              id="shop-size"
              name="size"
              onChange={e => setFilters(f => ({ ...f, size: e.target.value }))}
              className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 transition-all duration-300 bg-white"
            >
              <option value="">All Sizes</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
            </select>
            
            <select
              id="shop-price"
              name="price"
              onChange={e => setFilters(f => ({ ...f, price: e.target.value }))}
              className="px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 transition-all duration-300 bg-white"
            >
              <option value="">Max Price</option>
              <option value="50">Under ₹50</option>
              <option value="100">Under ₹100</option>
              <option value="200">Under ₹200</option>
            </select>
            
            <button 
              onClick={() => setView(view === 'grid' ? 'list' : 'grid')} 
              className="px-6 py-3 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 rounded-xl font-semibold hover:from-amber-200 hover:to-yellow-200 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {view === 'grid' ? '📋 List View' : '🔲 Grid View'}
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center animate-fade-in">
          <p className="text-gray-600 text-lg">
            Showing <span className="font-semibold text-indigo-600">{filteredProducts.length}</span> products
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
            <div className="w-24 h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">No products found</h3>
            <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setSearch('');
                setFilters({ brand: '', size: '', price: '' });
              }}
              className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;