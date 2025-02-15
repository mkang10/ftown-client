"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Use "next/navigation" instead of "next/router"
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function CartPage() {
  const router = useRouter(); // Ensure it's used inside a client component

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "'Maswe' Play To Win Hoodie - Grey",
      size: "M",
      price: 720000,
      quantity: 2,
      variantId: 101,
      image:
        "https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837",
    },
  ]);

  const handleCheckout = () => {
    const variantIds = cart.map((item) => item.variantId);
    router.push(`/cart/checkout?variants=${JSON.stringify(variantIds)}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex flex-1 justify-center pt-24 px-6">
        <div className="container mx-auto flex flex-col md:flex-row gap-6">
          {/* Cart Content */}
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
                        <p className="text-gray-700 font-semibold">{item.price.toLocaleString("vi-VN")}₫
                        ₫</p>
                      </div>
                    </td>
                    <td className="p-3 font-semibold">{(item.price * item.quantity).toLocaleString("vi-VN")}₫
                    ₫</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link href="/product">
              <button className="mt-6 px-6 py-2 bg-black text-white font-semibold">TIẾP TỤC MUA SẮM</button>
            </Link>
          </div>

          {/* Checkout Button */}
          <div className="w-full md:w-1/3 bg-white shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Tổng tiền</h3>
            <button onClick={handleCheckout} className="mt-6 w-full px-6 py-3 bg-black text-white font-semibold text-lg">
              THANH TOÁN
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
