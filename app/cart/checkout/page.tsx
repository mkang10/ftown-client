"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function CheckOutPage() {
  const router = useRouter();
  const searchParams = useSearchParams(); // ✅ Dùng useSearchParams để lấy query parameters
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  // Lấy danh sách variantIds từ URL
  const variantString = searchParams.get("variants");
  const variantIds: number[] = variantString ? JSON.parse(decodeURIComponent(variantString)) as number[] : [];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex flex-1 justify-center pt-20 px-6">
        <div className="container mx-auto flex flex-col md:flex-row gap-8 bg-white shadow-lg p-6 rounded-lg">
          
          {/* Product Summary */}
          <div className="w-full md:w-1/2 bg-gray-50 p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-4">Sản phẩm của bạn</h3>
            {variantIds.length > 0 ? (
              variantIds.map((variant, index) => (
                <div key={index} className="flex items-center gap-6 p-4 bg-white shadow rounded-lg mb-4">
                  <img 
                    src="https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837" 
                    alt="Sản phẩm" 
                    className="w-24 h-24 object-cover rounded-md border border-gray-300" 
                  />
                  <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-800">Lunar Tee - Red</p>
                    <p className="text-gray-500">Size: M</p>
                    <p className="text-gray-900 font-bold text-lg">450,000₫</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">Không có sản phẩm nào trong đơn hàng.</p>
            )}
          </div>

          {/* Checkout Form */}
          <div className="w-full md:w-1/2 bg-white p-6 shadow border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-center">CHECKOUT</h2>
            <h3 className="text-xl font-semibold mb-4">THÔNG TIN GIAO HÀNG</h3>
            
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Họ và tên</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Số điện thoại</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Địa chỉ</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Phương thức thanh toán</h3>
              <div className="mb-4">
                <label className="block">
                  <input 
                    type="radio" 
                    name="payment" 
                    className="mr-2" 
                    value="momo"
                    onChange={() => setPaymentMethod("momo")}
                  /> Ví MoMo
                </label>
                <label className="block">
                  <input 
                    type="radio" 
                    name="payment" 
                    className="mr-2" 
                    value="bank"
                    onChange={() => setPaymentMethod("bank")}
                  /> Thanh toán ngân hàng
                </label>
                <label className="block">
                  <input 
                    type="radio" 
                    name="payment" 
                    className="mr-2" 
                    value="visa"
                    onChange={() => setPaymentMethod("visa")}
                  /> Thanh toán Visa/MasterCard
                </label>
              </div>

             
             
               
                <h3 className="text-lg font-semibold mb-2">Thanh toán  ngân hànghàng</h3>
                  
            

              <h3 className="text-xl font-semibold mb-4">Tóm tắt đơn hàng</h3>
              <p className="flex justify-between text-lg font-semibold">
                <span>Tạm tính</span> <span></span>
              </p>
              <p className="flex justify-between text-lg font-semibold">
                <span>Phí vận chuyển</span> <span>-</span>
              </p>
              <p className="flex justify-between text-xl font-bold mt-4">
                <span>Tổng cộng</span> <span></span>
              </p>
              
              <button className="mt-6 w-full px-6 py-3 bg-black text-white font-semibold text-lg rounded">
                ĐẶT HÀNG
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
