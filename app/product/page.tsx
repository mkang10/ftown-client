"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BestSeller from "@/components/BestSeller/BestSeller";
const products = [
  { id: 1, name: "Bandana", image: "https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837", price: 390000, tags: ["Collab"], size: "M", color: "Black" },
  { id: 2, name: "Black T-shirt", image: "https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837", price: 739000, tags: ["Pre order"], size: "L", color: "Black" },
  { id: 3, name: "Hoodie", image: "https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837", price: 669000, tags: ["New arrival"], size: "S", color: "White" },
  { id: 4, name: "Keychain", image: "https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837", price: 739000, tags: ["Collab"], size: "One Size", color: "Silver" },
  { id: 5, name: "Cap", image: "https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837", price: 450000, tags: ["New arrival"], size: "One Size", color: "Black" },
  { id: 6, name: "Sweater", image: "https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837", price: 820000, tags: ["Bestseller"], size: "XL", color: "White" },
];

const itemsPerPage = 4;
export default function ProductPage() {
  const router = useRouter();
  const [sort, setSort] = useState("");
  const [filterSize, setFilterSize] = useState("");
  const [filterColor, setFilterColor] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const filteredProducts = products.filter((product) => 
    (filterSize ? product.size === filterSize : true) &&
    (filterColor ? product.color === filterColor : true)
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "asc") return a.price - b.price;
    if (sort === "desc") return b.price - a.price;
    return 0;
  });

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="w-full">
        <img src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="DIRTYCOINS COLLECTION" className="w-full" />
      </div>
      <main className="flex-1 px-6 pt-20 lg:px-20">
        <div className="flex justify-between items-center border-b pb-3 mb-6">
          <div className="flex space-x-6">
            <select className="border px-4 py-2" onChange={(e) => setSort(e.target.value)}>
              <option value="">Lọc giá</option>
              <option value="asc">Giá tăng dần</option>
              <option value="desc">Giá giảm dần</option>
            </select>
            <select className="border px-4 py-2" onChange={(e) => setFilterSize(e.target.value)}>
              <option value="">Kích thước</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <select className="border px-4 py-2" onChange={(e) => setFilterColor(e.target.value)}>
              <option value="">Màu sắc</option>
              <option value="Black">Đen</option>
              <option value="White">Trắng</option>
              <option value="Silver">Bạc</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="text-center cursor-pointer" onClick={() => router.push(`/product/${product.id}`)}>
              <img src={product.image} alt={product.name} className="w-full mb-2" />
              <p className="font-semibold">{product.name}</p>
              <p className="text-red-500 font-bold">{product.price.toLocaleString()}₫</p>
            </div>
          ))}
        </div>
        <BestSeller></BestSeller>
      </main>
      <Footer />
    </div>
  );
}
