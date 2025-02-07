import { FcGoogle } from "react-icons/fc"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"

export default function SignUpPage() {
  return (
    <div>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="grid max-w-4xl grid-cols-1 overflow-hidden rounded-lg bg-white shadow-lg md:grid-cols-2">
          {/* Hình ảnh bên trái */}
          <div className="hidden items-center justify-center bg-blue-50 p-6 md:flex">
            <Image
              src="https://images.pexels.com/photos/5325589/pexels-photo-5325589.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Shopping Illustration"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>

          {/* Form đăng ký bên phải */}
          <div className="w-full p-8">
            <h2 className="mb-2 text-2xl font-semibold text-gray-800">Create an account</h2>

            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full rounded-md border border-gray-300 p-3" />
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full rounded-md border border-gray-300 p-3"
              />
              <input type="password" placeholder="Password" className="w-full rounded-md border border-gray-300 p-3" />

              <button className="w-full rounded-md bg-red-500 py-3 font-medium text-white hover:bg-red-600">
                Create Account
              </button>
            </form>

            <div className="mt-4 text-center">
              <button className="flex w-full items-center justify-center rounded-md border py-3 font-medium hover:bg-gray-100">
                <FcGoogle className="mr-2 text-2xl" /> Sign up with Google
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
