
import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in">
      <div className="text-6xl mb-4 animate-bounce">🎉</div>
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center mx-auto animate-spin-slow">
          <span className="text-4xl">🪙</span>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-2">Your order has been placed successfully!</h2>
      <p className="mb-6 text-gray-600">Thank you for shopping with us.</p>
      <button
        onClick={() => navigate("/track-shipment")}
        className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition"
      >
        Track My Shipment
      </button>
    </div>
  );
}