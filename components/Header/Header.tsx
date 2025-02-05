"use client"
import { Input, Menu, Dropdown } from "antd";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  DownOutlined,
} from "@ant-design/icons";
import Link from "next/link";  // Thêm Link từ Next.js

export default function Header() {
  const shopMenu = (
    <Menu>
      <Menu.Item key="tops">Tops</Menu.Item>
      <Menu.Item key="bottoms">Bottoms</Menu.Item>
      <Menu.Item key="accessories">Accessories</Menu.Item>
      <Menu.Item key="bags">Bags</Menu.Item>
      <Menu.Item key="womenswear">Womenswear</Menu.Item>
      <Menu.Item key="restocks">Restocks</Menu.Item>
    </Menu>
  );

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1 className="text-xl font-bold">FUNKYTOWN GALLERY</h1>

        {/* Navigation */}
        <Menu mode="horizontal" className="border-none space-x-6 hidden md:flex">
          <Menu.Item key="home" className="font-medium border-b-2 border-black">
            <Link href="/">Home</Link>
          </Menu.Item>
          <Dropdown overlay={shopMenu} trigger={["hover"]}>
            <Menu.Item key="shop" className="font-medium flex items-center">
              Shop <DownOutlined className="ml-1 text-xs" />
            </Menu.Item>
          </Dropdown>
          <Menu.Item key="contact">Contact</Menu.Item>
          <Menu.Item key="about">About Us</Menu.Item>
          {/* Link tới trang đăng ký */}
          <Menu.Item key="signup">
            <Link href="/signup">Sign Up</Link>
          </Menu.Item>
        </Menu>

        {/* Search Bar & Icons */}
        <div className="flex items-center space-x-4">
          <Input
            placeholder="What are you looking for?"
            prefix={<SearchOutlined />}
            className="w-60 rounded-full"
          />
          <HeartOutlined className="text-xl cursor-pointer hover:text-black" />
          <ShoppingCartOutlined className="text-xl cursor-pointer hover:text-black" />
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden flex items-center justify-between px-4 py-2">
        <h1 className="text-xl font-bold">FUNKYTOWN GALLERY</h1>
        <div className="flex space-x-4">
          <HeartOutlined className="text-xl cursor-pointer hover:text-black" />
          <ShoppingCartOutlined className="text-xl cursor-pointer hover:text-black" />
        </div>
      </div>
    </header>
  );
}
