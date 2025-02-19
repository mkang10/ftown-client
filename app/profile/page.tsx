"use client"
import Link from "next/link"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <Header />
      <main className="flex flex-1 justify-center pt-20">
        <div className="container mx-auto flex gap-8 p-6">
          
          {/* Sidebar */}
          <aside className="w-1/4 bg-white p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quản lí tài khoản</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="text-gray-500 font-semibold cursor-pointer">Hồ sơ</li>
            </ul>
            <h3 className="text-lg font-semibold mt-6 mb-4 text-gray-800">Đơn hàng </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-red-500 cursor-pointer">Trả hàng</li>
              <li className="hover:text-red-500 cursor-pointer">Hủy đơn</li>
            </ul>

            <h3 className="text-lg font-semibold mt-6 mb-4 text-gray-800">Yêu thích</h3>
          </aside>

          {/* Profile Form */}
          <section className="w-3/4 bg-white p-8 shadow-md">
            <h2 className="text-xl font-semibold text-gray-500 mb-6">Chỉnh sửa hồ sơ</h2>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Họ tên</label>
                <input type="text" value="Rimel" className="mt-1 block w-full p-3 bg-gray-100 focus:ring-2 focus:ring-red-400" readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" value="rimell11@gmail.com" className="mt-1 block w-full p-3 bg-gray-100 focus:ring-2 focus:ring-red-400" readOnly />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Địa chỉ</label>
                <input type="text" value="Kingston, 5236, United State" className="mt-1 block w-full p-3 bg-gray-100 focus:ring-2 focus:ring-red-400" readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
                <input type="text" value="Kingston, 5236, United State" className="mt-1 block w-full p-3 bg-gray-100 focus:ring-2 focus:ring-red-400" readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Tuổi</label>
                <input type="text" value="Kingston, 5236, United State" className="mt-1 block w-full p-3 bg-gray-100 focus:ring-2 focus:ring-red-400" readOnly />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phong cách</label>
                <input type="text" value="Kingston, 5236, United State" className="mt-1 block w-full p-3 bg-gray-100 focus:ring-2 focus:ring-red-400" readOnly />
              </div>
            </div>

            

            {/* Buttons */}
            <div className="mt-6 flex justify-between">
              <Link href="/">
              <button className="text-gray-500 hover:text-gray-700">Hủy thay đổi</button>
              </Link>
              <button className="bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600 transition">Lưu</button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
