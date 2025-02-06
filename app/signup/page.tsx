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
        <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl">
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
          <div className="p-8 w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Create an account</h2>
          
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
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
                Create Account
              </button>
            </form>
            
            <div className="mt-4 text-center">
              <button className="w-full flex items-center justify-center border py-3 rounded-md font-medium hover:bg-gray-100">
                <FcGoogle className="text-2xl mr-2" /> Sign up with Google
              </button>
            </div>

            <p className="text-sm text-gray-600 mt-6 text-center">
              Already have an account? <Link href="/login" className="text-blue-500">Log in</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
