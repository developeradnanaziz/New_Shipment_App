import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Shipment Dashboard</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </header>

      <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/manage-shipments">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">📦 Manage Shipments</h2>
            <p>View, edit and manage all your shipments.</p>
          </div>
        </Link>

        <Link to="/track-shipment">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">📍 Track Shipment</h2>
            <p>Track delivery status in real-time.</p>
          </div>
        </Link>

        <Link to="/new-shipment">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">📝 New Shipment</h2>
            <p>Initiate a new shipment with full details.</p>
          </div>
        </Link>
      </main>
    </div>
  );
};

export default Dashboard;
