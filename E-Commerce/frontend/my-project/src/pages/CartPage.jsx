import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + (item.new_price ?? item.price) * item.quantity, 0);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Shopping Cart</h2>
          <p className="text-gray-600 text-lg">Review your items before checkout</p>
        </div>
        
        {cart.length === 0 ? (
          <div className="card text-center py-16 animate-fade-in">
            <div className="w-24 h-24 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.6 17h8.8a1 1 0 00.95-.68L21 9M7 13V6a1 1 0 011-1h3m4 0h2a1 1 0 011 1v7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty</h3>
            <p className="text-gray-600 mb-8">Add some products to get started</p>
            <Link 
              to="/shop" 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6 mb-8">
              {cart.map((item, index) => (
                <div key={item.id} className="card flex flex-col md:flex-row items-center gap-6 hover-lift animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                    <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                      <span className="text-2xl font-bold text-indigo-600">
                        ₹{item.new_price ?? item.price}
                      </span>
                      <span className="text-gray-500">× {item.quantity}</span>
                      <span className="text-lg font-semibold text-gray-800">
                        = ₹{(item.new_price ?? item.price) * item.quantity}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-4 py-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                        className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 rounded-full hover:from-orange-200 hover:to-red-200 hover:scale-110 transition-all duration-300 font-bold"
                      >
                        −
                      </button>
                      <span className="text-lg font-semibold w-8 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                        className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-green-100 to-emerald-100 text-green-600 rounded-full hover:from-green-200 hover:to-emerald-200 hover:scale-110 transition-all duration-300 font-bold"
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)} 
                      className="p-2 bg-gradient-to-r from-red-100 to-rose-100 text-red-600 rounded-full hover:from-red-200 hover:to-rose-200 hover:scale-110 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="card bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-100 animate-scale-in">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <p className="text-gray-600 text-lg mb-2">Total Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
                  <div className="text-3xl font-bold text-gray-800">
                    Total: <span className="text-indigo-600">₹{total}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/shop"
                    className="px-8 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full font-semibold hover:from-gray-200 hover:to-gray-300 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg text-center"
                  >
                    Continue Shopping
                  </Link>
                  <button
                    onClick={() => navigate("/checkout")}
                    className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold hover:from-emerald-600 hover:to-green-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        <ToastContainer />
      </div>
    </div>
  );
}