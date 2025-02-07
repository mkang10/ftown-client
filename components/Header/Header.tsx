"use client"
import { useState, useEffect } from "react"
import { Input, Menu, Dropdown } from "antd"
import { SearchOutlined, ShoppingCartOutlined, HeartOutlined, DownOutlined, UserOutlined } from "@ant-design/icons"
import Link from "next/link"

export default function Header() {
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogo((prev) => !prev)
    }, 3000) // Chuyển đổi mỗi 3 giây

    return () => clearInterval(interval) // Dọn dẹp khi component unmount
  }, [])

  const shopMenu = (
    <Menu>
      <Menu.Item key="tops">Tops</Menu.Item>
      <Menu.Item key="bottoms">Bottoms</Menu.Item>
      <Menu.Item key="accessories">Accessories</Menu.Item>
      <Menu.Item key="bags">Bags</Menu.Item>
      <Menu.Item key="womenswear">Womenswear</Menu.Item>
      <Menu.Item key="restocks">Restocks</Menu.Item>
    </Menu>
  )

  const userMenu = (
    <Menu>
      <Menu.Item key="signup">
        <Link href="/signup">Sign Up</Link>
      </Menu.Item>
      <Menu.Item key="login">
        <Link href="/login">Login</Link>
      </Menu.Item>
    </Menu>
  )

  return (
    <header className="fixed left-0 top-0 z-10 w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo chuyển động */}
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
        <Menu mode="horizontal" className="hidden space-x-6 border-none md:flex">
          {/* <Menu.Item key="home" className="font-medium border-b-2">
            <Link href="/">Home</Link>
          </Menu.Item> */}

          {/* Dropdown cho Shop */}
          <Dropdown overlay={shopMenu} trigger={["hover"]}>
            <Menu.Item key="shop" className="flex items-center font-medium">
              Shop <DownOutlined className="ml-1 text-xs" />
            </Menu.Item>
          </Dropdown>

          <Menu.Item key="contact" className="font-medium">
            <Link href="/contact">Contact</Link>
          </Menu.Item>
          <Menu.Item key="about" className="font-medium">
            <Link href="/aboutus">About Us</Link>
          </Menu.Item>
          <Menu.Item key="aichat" className="font-medium">
            <Link href="/aichat">AI Chat</Link>
          </Menu.Item>
        </Menu>

        {/* Search Bar & Icons */}
        <div className="flex items-center space-x-4">
          <Input placeholder="What are you looking for?" prefix={<SearchOutlined />} className="w-60 rounded-full" />
          <HeartOutlined className="cursor-pointer text-xl hover:text-black" />
          <ShoppingCartOutlined className="cursor-pointer text-xl hover:text-black" />
          <Dropdown overlay={userMenu} trigger={["click"]}>
            <UserOutlined className="cursor-pointer text-xl hover:text-black" />
          </Dropdown>
        </div>
      </div>
    </header>
  )
}
