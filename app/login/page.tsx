import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import { FcGoogle } from "react-icons/fc"

export default function LogInPage() {
  return (
    <div>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="grid max-w-4xl grid-cols-1 overflow-hidden rounded-lg bg-white shadow-lg md:grid-cols-2">
          {/* Hình ảnh bên trái */}
          <div className="hidden items-center justify-center bg-blue-50 p-6 md:flex">
            <Image
              src="https://levents.asia/cdn/shop/files/L1240512-min.jpg?v=1730359132&width=500" // Cập nhật đường dẫn ảnh theo đúng file bạn có
              alt="Shopping Illustration"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Form đăng ký bên phải */}
          <div className="w-full p-8">
            <h2 className="mb-2 text-2xl font-semibold text-gray-800">Đăng nhập</h2>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full rounded-md border border-gray-300 p-3"
              />
              <input type="password" placeholder="Password" className="w-full rounded-md border border-gray-300 p-3" />

              <button className="w-full rounded-md bg-red-500 py-3 font-medium text-white hover:bg-red-600">
                Đăng nhập
              </button>
            </form>
            <div className="mt-4 text-center">
              <button className="flex w-full items-center justify-center rounded-md border py-3 font-medium hover:bg-gray-100">
                <FcGoogle className="mr-2 text-2xl" /> Log in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
