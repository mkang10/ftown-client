"use client";
import { useState, useEffect } from "react";
import { Input, Menu, Dropdown } from "antd";
import { SearchOutlined, ShoppingCartOutlined, HeartOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Header() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogo((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const shopMenu = (
    <div className="absolute left-0 top-full hidden w-44 rounded-md bg-black text-white shadow-lg group-hover:block">
      <Link href="/tops" className="block px-4 py-2 hover:bg-gray-700">Tops</Link>
      <Link href="/bottoms" className="block px-4 py-2 hover:bg-gray-700">Bottoms</Link>
      <Link href="/accessories" className="block px-4 py-2 hover:bg-gray-700">Accessories</Link>
      <Link href="/bags" className="block px-4 py-2 hover:bg-gray-700">Bags</Link>
      <Link href="/womenswear" className="block px-4 py-2 hover:bg-gray-700">Womenswear</Link>
      <Link href="/restocks" className="block px-4 py-2 hover:bg-gray-700">Restocks</Link>
    </div>
  );

  const userMenu = (
    <Menu>
      <Menu.Item key="signup">
        <Link href="/signup">Sign Up</Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link href="/login">Login</Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="relative flex h-12 w-48 items-center justify-center">
          <Link href="/" className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
            <div className={`absolute transition-opacity duration-700 ${showLogo ? "opacity-0" : "opacity-100"}`}>
              <h1 className="whitespace-nowrap text-xl font-bold">FUNKYTOWN GALLERY</h1>
            </div>
            <div className={`absolute transition-opacity duration-700 ${showLogo ? "opacity-100" : "opacity-0"}`}>
              <img
                src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/294967582_483877957073072_9134088128489220848_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SOfKMtednXUQ7kNvgH4Ii8q&_nc_oc=AdhGhAAlPRgOCS7Y1lIFo7-r8UGtcaiysDKSgYsqbylIFGU3pfsHszymBRsyDf3OQx0Fs3TEWGUthgUL4NVr6k5x&_nc_zt=23&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=A3ntB6ugd-V92hU2tzibAol&oh=00_AYBRzPp_jsJPCf8-m3JrQs0bB7GwMGOG3alsLA1WCj7O-Q&oe=67AA9921"
                alt="Logo"
                className="h-auto w-16 object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8">
            <li className="group relative">
              <Link href="/product" className="relative font-medium text-black">
                Shop
                <span className="absolute left-0 bottom-[-5px] block h-[2px] w-full bg-black scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              {shopMenu}
            </li>
            <li>
              <Link href="/contact" className="relative font-medium text-black hover:underline">Contact</Link>
            </li>
            <li>
              <Link href="/aboutus" className="relative font-medium text-black hover:underline">About Us</Link>
            </li>
            <li>
              <Link href="/aichat" className="relative font-medium text-black hover:underline">AI Chat</Link>
            </li>
          </ul>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          <Input placeholder="What are you looking for?" prefix={<SearchOutlined />} className="w-60 rounded-full" />
         <Link href="/favorite">
          <HeartOutlined className="cursor-pointer text-xl hover:text-black" />
          </Link>
          <Link href="/cart">
            <ShoppingCartOutlined className="cursor-pointer text-xl hover:text-black" />
          </Link>
          <Dropdown overlay={userMenu} trigger={["click"]}>
            <UserOutlined className="cursor-pointer text-xl hover:text-black" />
          </Dropdown>
        </div>
      </div>
    </header>
  );
}
