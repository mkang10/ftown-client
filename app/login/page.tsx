"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle } from "@/utils/firebaseConfig";
import { User } from "firebase/auth";

export default function LogInPage() {
  const [user, setUser] = useState<User | null>(null);

  const handleGoogleLogin = async () => {
    const userData = await signInWithGoogle();
    if (userData) {
      setUser(userData);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="grid max-w-4xl grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg bg-white shadow-lg">
          {/* Hình ảnh bên trái */}
          <div className="hidden md:flex items-center justify-center bg-blue-50 p-6">
            <Image
              src="https://levents.asia/cdn/shop/files/L1240512-min.jpg?v=1730359132&width=500"
              alt="Shopping Illustration"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Form đăng nhập bên phải */}
          <div className="w-full p-10 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-center">Đăng nhập</h2>
            <p className="text-gray-500 text-center mt-2">Đăng nhập vào tài khoản của bạn</p>

            <form className="space-y-4 mt-6">
              <input type="email" placeholder="Email hoặc số điện thoại" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-gray-300" />
              <input type="password" placeholder="Mật khẩu" className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-gray-300" />

              <button className="w-full bg-black text-white py-2 rounded-md hover:opacity-90">
                Đăng nhập
              </button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={handleGoogleLogin}
                className="flex w-full items-center justify-center border py-2 rounded-md hover:bg-gray-100"
              >
                <FcGoogle className="mr-2 text-2xl" /> Đăng nhập bằng Google
              </button>
            </div>

            <div className="mt-4 text-center">
              <Link href="/forgot-password" className="text-blue-600 hover:underline">
                Quên mật khẩu?
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
