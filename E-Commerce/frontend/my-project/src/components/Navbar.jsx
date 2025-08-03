import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const navigate = useNavigate();

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3 group animate-slide-in">
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Shopper Logo" 
                className="w-10 h-10 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105" 
              />
            </div>
            <span className="font-bold text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
              SHOPPER
            </span>
          </Link>

          {/* Centered Links */}
          <div className="hidden md:flex space-x-8 animate-fade-in">
            <Link 
              to="/shop" 
              className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-full hover:bg-indigo-50 transition-all duration-300 hover:scale-105"
            >
              Shop
            </Link>
            <Link 
              to="/men" 
              className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-full hover:bg-indigo-50 transition-all duration-300 hover:scale-105"
            >
              Men
            </Link>
            <Link 
              to="/women" 
              className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-full hover:bg-indigo-50 transition-all duration-300 hover:scale-105"
            >
              Women
            </Link>
            <Link 
              to="/kids" 
              className="text-gray-700 hover:text-indigo-600 font-medium px-4 py-2 rounded-full hover:bg-indigo-50 transition-all duration-300 hover:scale-105"
            >
              Kids
            </Link>
          </div>

          {/* Right Side: Auth and Cart */}
          <div className="flex items-center space-x-4 animate-slide-in">
            {user ? (
              <>
                <span className="text-gray-700 font-medium bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full">
                  👋 {user.displayName || user.email?.split('@')[0]}
                </span>
                <button
                  onClick={() => { logout(); navigate("/"); }}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-rose-100 to-orange-100 text-rose-700 font-medium hover:from-rose-200 hover:to-orange-200 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/register" 
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 font-medium hover:from-blue-200 hover:to-cyan-200 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Register
                </Link>
                <Link 
                  to="/login" 
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-green-100 to-teal-100 text-green-700 font-medium hover:from-green-200 hover:to-teal-200 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Login
                </Link>
              </>
            )}
            
            {/* Cart Icon */}
            <Link to="/cart" className="relative group">
              <div className="p-3 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:from-amber-200 group-hover:to-yellow-200">
                <svg 
                  className="w-6 h-6 text-amber-700 group-hover:text-amber-800 transition-colors duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth={2} 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 17h8.8a1 1 0 00.95-.68L21 9M7 13V6a1 1 0 011-1h3m4 0h2a1 1 0 011 1v7"></path>
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Menu (optional enhancement) */}
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-center space-x-6">
            <Link to="/shop" className="text-gray-700 hover:text-indigo-600 font-medium">Shop</Link>
            <Link to="/men" className="text-gray-700 hover:text-indigo-600 font-medium">Men</Link>
            <Link to="/women" className="text-gray-700 hover:text-indigo-600 font-medium">Women</Link>
            <Link to="/kids" className="text-gray-700 hover:text-indigo-600 font-medium">Kids</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}