import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const CartContext = createContext();
export function useCart() { return useContext(CartContext); }

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    setCart(stored ? JSON.parse(stored) : []);
  }, []);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        const cartRef = doc(db, "carts", firebaseUser.uid);
        const snap = await getDoc(cartRef);
        let firestoreCart = snap.exists() ? snap.data().items : [];
        let merged = [...cart];
        firestoreCart.forEach(fItem => {
          const localItem = merged.find(i => i.id === fItem.id);
          if (localItem) {
            localItem.quantity += fItem.quantity;
          } else {
            merged.push(fItem);
          }
        });
        setCart(merged);
        localStorage.setItem("cart", JSON.stringify(merged));
        await setDoc(cartRef, { items: merged });
      }
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    if (user) {
      setDoc(doc(db, "carts", user.uid), { items: cart });
    }
  }, [cart, user]);

  const addToCart = (product) => {
    toast.dismiss(); // Dismiss any existing toast
    setCart(prev => {
      const found = prev.find(item => item.id === product.id);
      if (found) {
        toast.success("Item added to cart successfully!");
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      const price = product.new_price ?? product.price;
      toast.success("Item added to cart successfully!");
      return [...prev, { ...product, quantity: 1, new_price: price }];
    });
  };
  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));
  const updateQuantity = (id, qty) => setCart(prev =>
    prev.map(item => item.id === id ? { ...item, quantity: Math.max(1, qty) } : item)
  );
  const clearCart = () => setCart([]);

  const total = cart.reduce((sum, item) => sum + (item.new_price ?? item.price) * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}