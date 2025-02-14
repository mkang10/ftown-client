import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function SignUpPage() {
  return (
    <div>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="grid max-w-4xl grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg bg-white shadow-lg">
          {/* Hình ảnh bên trái */}
          <div className="hidden md:flex items-center justify-center bg-blue-50 p-6">
            <Image
              src="https://images.pexels.com/photos/5325589/pexels-photo-5325589.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Shopping Illustration"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Form đăng ký bên phải */}
          <div className="w-full p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-center">Tạo tài khoản</h2>
            <p className="text-gray-500 text-center mt-2">Đăng ký tài khoản mới để tiếp tục</p>

            <form className="space-y-4 mt-6">
              <input type="text" placeholder="Tên của bạn" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-gray-300" />
              <input type="email" placeholder="Email hoặc số điện thoại" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-gray-300" />
              <input type="password" placeholder="Mật khẩu" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-gray-300" />

              <button className="w-full bg-black text-white py-2 rounded-md hover:opacity-90">
                Đăng Ký
              </button>
            </form>

            <div className="mt-4 text-center">
              <button className="flex w-full items-center justify-center border py-2 rounded-md hover:bg-gray-100">
                <FcGoogle className="mr-2 text-2xl" /> Đăng ký bằng Google
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              Đã có tài khoản?{" "}
              <Link href="/login" className="text-blue-500 hover:underline">
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
