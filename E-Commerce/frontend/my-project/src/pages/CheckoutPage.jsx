
import React, { useRef } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { db, auth } from "../firebase/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";


export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + (item.new_price ?? item.price) * item.quantity, 0);
  const nameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const packageSizeRef = useRef();
  const [userId, setUserId] = React.useState("");

  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUserId(user ? user.uid : "");
    });
    return () => unsub();
  }, []);

  const loadRazorpay = (src) =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handlePayment = async () => {
    const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");
    if (!res) {
      toast.error("Razorpay SDK failed to load.");
      return;
    }
    const options = {
      key: "rzp_test_aVxO9WI5JZcrnd", // Replace with your Razorpay key
      amount: total * 100,
      currency: "INR",
      name: "E-Commerce Store",
      description: "Order Payment",
      handler: async function (response) {
        toast.success("Payment successful!");
        // Save order to Firestore
        try {
          await addDoc(collection(db, "orders"), {
            userId: userId,
            cartItems: cart,
            sender: nameRef.current.value,
            receiver: emailRef.current.value,
            address: addressRef.current.value,
            packageSize: packageSizeRef.current ? packageSizeRef.current.value : "Medium",
            status: "Pending",
            createdAt: Timestamp.now(),
          });
        } catch (err) {
          toast.error("Failed to save order!");
        }
        clearCart();
        navigate("/order-success");
      },
      prefill: {},
      theme: { color: "#22c55e" },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="max-w-xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <form className="mb-6 space-y-4" autoComplete="on">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border rounded px-3 py-2"
            autoComplete="name"
            required
            ref={nameRef}
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border rounded px-3 py-2"
            autoComplete="email"
            required
            ref={emailRef}
          />
        </div>
        <div>
          <label htmlFor="address" className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full border rounded px-3 py-2"
            autoComplete="street-address"
            required
            ref={addressRef}
          />
        </div>
        <div>
          <label htmlFor="packageSize" className="block mb-1 font-medium">Package Size</label>
          <select
            id="packageSize"
            name="packageSize"
            className="w-full border rounded px-3 py-2"
            ref={packageSizeRef}
            defaultValue="Medium"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
      </form>
      <div className="mb-4">Total Amount: <span className="font-bold">₹{total}</span></div>
      <button
        onClick={handlePayment}
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
      >
        Pay with Razorpay
      </button>
      <ToastContainer />
    </div>
  );
}