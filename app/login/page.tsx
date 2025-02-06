import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { FcGoogle } from "react-icons/fc";

export default function LogInPage() {
    return (
      <div>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl">
          {/* Hình ảnh bên trái */}
          <div className="hidden md:flex items-center justify-center bg-blue-50 p-6">
            <Image
              src="https://levents.asia/cdn/shop/files/L1240512-min.jpg?v=1730359132&width=500" // Cập nhật đường dẫn ảnh theo đúng file bạn có
              alt="Shopping Illustration"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Form đăng ký bên phải */}
          <div className="p-8 w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Đăng nhập</h2>
           
            
            <form className="space-y-4">
             
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              
              <button className="w-full bg-red-500 text-white py-3 rounded-md font-medium hover:bg-red-600">
                Đăng nhập
              </button>
            </form>
            <div className="mt-4 text-center">
              <button className="w-full flex items-center justify-center border py-3 rounded-md font-medium hover:bg-gray-100">
                <FcGoogle className="text-2xl mr-2" /> Log in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
  }
  