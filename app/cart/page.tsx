"use client";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";
import Link from "next/link";


export default function CartPage() {
  const [cart, setCart] = useState<{
    id: number;
    name: string;
    size: string;
    price: number;
    quantity: number;
    image: string;
  }[]>(Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: "'Maswe' Play To Win Hoodie - Grey",
    size: "M",
    price: 720000,
    quantity: 2,
    image: "https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837",
  })));

  const updateQuantity = (id: number, quantity: number) => {
    setCart(cart.map(item => (item.id === id ? { ...item, quantity } : item)));
  };

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <Header />
      </div>
      <main className="flex flex-1 justify-center pt-24 px-6 overflow-y-auto">
        <div className="container mx-auto flex flex-col md:flex-row gap-6">
          {/* Cart Table */}
          <div className="w-full md:w-2/3 bg-white shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">GIỎ HÀNG</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b text-gray-700">
                  <th className="p-3">Sản phẩm</th>
                  <th className="p-3">Số lượng</th>
                  <th className="p-3">Tổng tiền</th>
                  <th className="p-3">Xóa</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b text-gray-800">
                    <td className="flex items-center gap-4 p-3">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                      <div>
                        <p>{item.name}</p>
                        <p className="text-gray-500">Size {item.size}</p>
                        <p className="text-gray-700 font-semibold">{item.price.toLocaleString()}₫</p>
                      </div>
                    </td>
                    <td className="p-3 flex items-center">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 border">-</button>
                      <span className="px-4">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 border">+</button>
                    </td>
                    <td className="p-3 font-semibold">{(item.price * item.quantity).toLocaleString()}₫</td>
                    <td className="p-3 cursor-pointer" onClick={() => removeItem(item.id)}>
                      <span className="text-gray-500 hover:text-red-600">🗑</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
           
            <Link href="/product"> <button className="mt-6 px-6 py-2 bg-black text-white font-semibold">TIẾP TỤC MUA SẮM</button></Link>

          </div>

          {/* Cart Summary */}
          <div className="w-full md:w-1/3 bg-white shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Tổng tiền</h3>
            <p className="flex justify-between text-lg font-semibold">
              <span>Tổng tiền</span> <span>{subtotal.toLocaleString()}₫</span>
            </p>
            <button className="mt-6 w-full px-6 py-3 bg-black text-white font-semibold text-lg">THANH TOÁN</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
