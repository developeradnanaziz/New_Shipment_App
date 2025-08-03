
import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase/firebaseConfig";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { toast } from "react-toastify";

const statusColors = {
  Pending: "bg-yellow-400 text-yellow-900",
  Shipped: "bg-blue-400 text-blue-900",
  Delivered: "bg-green-400 text-green-900"
};

export default function TrackShipment() {
  const [orders, setOrders] = useState([]);
  const [userId, setUserId] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [view, setView] = useState("card");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUserId(user ? user.uid : "");
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    if (!userId) return;
    const q = query(
      collection(db, "orders"),
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(q, (snap) => {
      const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setOrders(data);
    });
    return () => unsub();
  }, [userId]);

  const filtered = statusFilter === "All" ? orders : orders.filter(o => o.status === statusFilter);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">My Shipments</h2>
      <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
        <div className="flex gap-2">
          {["All", "Pending", "Shipped", "Delivered"].map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1 rounded-full border ${statusFilter === s ? "bg-indigo-600 text-white" : "bg-white text-gray-700"}`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setView("card")}
            className={`px-3 py-1 rounded border ${view === "card" ? "bg-indigo-500 text-white" : "bg-white text-gray-700"}`}
          >Card</button>
          <button
            onClick={() => setView("table")}
            className={`px-3 py-1 rounded border ${view === "table" ? "bg-indigo-500 text-white" : "bg-white text-gray-700"}`}
          >Table</button>
        </div>
      </div>
      {filtered.length === 0 ? (
        <div className="text-center text-gray-500 py-12">No orders found</div>
      ) : view === "card" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(order => (
            <div key={order.id} className="bg-white rounded shadow p-6 flex flex-col gap-2 animate-fade-in">
              <div className="flex justify-between items-center mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status] || "bg-gray-300 text-gray-700"}`}>{order.status}</span>
                <span className="text-xs text-gray-400">{order.createdAt?.toDate().toLocaleString()}</span>
              </div>
              <div className="font-semibold">Sender: <span className="font-normal">{order.sender}</span></div>
              <div className="font-semibold">Receiver: <span className="font-normal">{order.receiver}</span></div>
              <div className="font-semibold">Delivery Address: <span className="font-normal">{order.address}</span></div>
              <div className="font-semibold">Package Size: <span className="font-normal">{order.packageSize}</span></div>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className={`h-2 rounded-full transition-all duration-700 ${order.status === "Pending" ? "bg-yellow-400 w-1/4" : order.status === "Shipped" ? "bg-blue-400 w-2/3" : order.status === "Delivered" ? "bg-green-400 w-full" : "bg-gray-300 w-1/6"}`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Sender</th>
                <th className="px-4 py-2">Receiver</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Package Size</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(order => (
                <tr key={order.id} className="animate-fade-in">
                  <td className="px-4 py-2 text-xs text-gray-500">{order.createdAt?.toDate().toLocaleString()}</td>
                  <td className="px-4 py-2">{order.sender}</td>
                  <td className="px-4 py-2">{order.receiver}</td>
                  <td className="px-4 py-2">{order.address}</td>
                  <td className="px-4 py-2">{order.packageSize}</td>
                  <td className="px-4 py-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[order.status] || "bg-gray-300 text-gray-700"}`}>{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}