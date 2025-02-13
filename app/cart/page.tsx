"use client";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([
    { id: 1, name: "T-shirt", price: 650, quantity: 1, image: "https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837" },
    { id: 2, name: "T-shirt", price: 550, quantity: 2, image: "https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837" },
  ]);

  const updateQuantity = (id: number, quantity: number) => {
    setCart(cart.map(item => (item.id === id ? { ...item, quantity } : item)));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header />
      <main className="flex flex-1 justify-center pt-20">
        <div className="container mx-auto p-6">
          <h2 className="text-lg text-gray-500 mb-4">Home / Cart</h2>

          {/* Cart Table */}
          <div className="bg-white p-6 shadow-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="p-3">Product</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="flex items-center gap-3 p-3">
                      <img src={item.image} alt={item.name} className="w-12 h-12" />
                      {item.name}
                    </td>
                    <td className="p-3">${item.price}</td>
                    <td className="p-3">
                      <select
                        className="p-2 border"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td className="p-3">${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button className="px-4 py-2 border rounded-lg">Return To Shop</button>
            <button className="px-4 py-2 border rounded-lg">Update Cart</button>
          </div>

          {/* Coupon & Cart Total */}
          <div className="grid grid-cols-2 gap-8 mt-6">
            {/* Coupon */}
            <div className="flex items-center space-x-4">
              <input type="text" placeholder="Coupon Code" className="p-3 w-full bg-gray-100 border" />
              <button className="bg-gray-500 text-white px-4 py-3 border rounded-lg">
                Apply Coupon
              </button>
            </div>

            {/* Cart Summary */}
            <div className="p-6 shadow-md bg-white">
              <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
              <p className="flex justify-between mb-2">
                <span>Subtotal:</span> <span>${subtotal}</span>
              </p>
              <p className="flex justify-between mb-2">
                <span>Shipping:</span> <span>Free</span>
              </p>
              <p className="flex justify-between font-semibold text-lg">
                <span>Total:</span> <span>${subtotal}</span>
              </p>
              <button className="bg-gray-500 text-white w-full mt-4 py-3 border rounded-lg">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
