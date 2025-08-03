import React, { useState } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { getAuth } from 'firebase/auth';

const Shipments = () => {
  const [form, setForm] = useState({
    sender: '',
    receiver: '',
    address: '',
    packageSize: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();

  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    alert('You must be logged in to create a shipment.');
    return;
  }

  try {
    console.log("Starting to submit shipment...");
    setLoading(true);

    await addDoc(collection(db, 'shipments'), {
      ...form,
      userId: user.uid,
      status: 'Pending',
      createdAt: Timestamp.now(),
    });

    console.log("Shipment successfully added!");

    setSuccess('Shipment successfully created! 🎉');
    setForm({ sender: '', receiver: '', address: '', packageSize: '' });
  } catch (err) {
    console.error("Error submitting shipment:", err);  // ✅ Add this
    alert('Error: ' + err.message);  // Should trigger if something is wrong
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="max-w-3xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">📦 New Shipment</h2>

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sender */}
        <div className="col-span-1">
          <label className="block mb-1 font-semibold">Sender</label>
          <input
            type="text"
            id="sender"
            name="sender"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.sender}
            onChange={(e) => setForm({ ...form, sender: e.target.value })}
            required
          />
        </div>

        {/* Receiver */}
        <div className="col-span-1">
          <label className="block mb-1 font-semibold">Receiver</label>
          <input
            type="text"
            id="receiver"
            name="receiver"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.receiver}
            onChange={(e) => setForm({ ...form, receiver: e.target.value })}
            required
          />
        </div>

        {/* Address */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-semibold">Delivery Address</label>
          <textarea
            id="address"
            name="address"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            required
          ></textarea>
        </div>

        {/* Package Size */}
        <div className="col-span-1 md:col-span-2">
          <label className="block mb-1 font-semibold">Package Size</label>
          <select
            id="packageSize"
            name="packageSize"
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={form.packageSize}
            onChange={(e) => setForm({ ...form, packageSize: e.target.value })}
            required
          >
            <option value="">-- Select --</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div className="col-span-1 md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded text-lg transition"
            disabled={loading}
          >
            {loading ? 'Creating Shipment...' : 'Submit Shipment'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Shipments;
