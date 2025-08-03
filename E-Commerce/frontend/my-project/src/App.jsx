import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Products from "./pages/Products";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Shipments from "./pages/Shipments";
import TrackShipment from "./pages/TrackShipment";
import OrderSuccess from "./pages/OrderSuccess";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from "./components/UserProfile";
import CategoryPage from './pages/CategoryPage';
import Dashboard from './pages/Dashboard';
import ProductDetails from "./pages/ProductDetails";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Latest from "./pages/Latest";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/shipment" element={<Shipments />} />
          <Route path="/track-shipment" element={<TrackShipment />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/latest" element={<Latest />} />
          {/* <RouterProvider router={router} /> */}
          
        </Routes>
        <ToastContainer position="top-right" autoClose={2000} limit={1} newestOnTop />
      </div>
    </Router>
  );
}

export default App;