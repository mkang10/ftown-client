"use client"
import { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const products = [
  { id: 1, name: "Bandana", image: "https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837", price: 390000, tags: ["Collab"] },
  { id: 2, name: "Black T-shirt", image: "https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837", price: 739000, tags: ["Pre order"] },
  { id: 3, name: "Hoodie", image: "https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837", price: 669000, tags: ["New arrival"] },
  { id: 4, name: "Keychain", image: "https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837", price: 739000, tags: ["Collab"] },
  { id: 5, name: "Cap", image: "https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837", price: 450000, tags: ["New arrival"] },
  { id: 6, name: "Sweater", image: "https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837", price: 820000, tags: ["Bestseller"] },
];

const itemsPerPage = 4;

export default function ProductPage() {
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "asc") return a.price - b.price;
    if (sort === "desc") return b.price - a.price;
    return 0;
  });

  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      
      <div className="w-full">
        <img src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="DIRTYCOINS COLLECTION" className="w-full" />
      </div>
      
    <main className="flex-1 px-6 pt-20 lg:px-20">

        {/* Bộ lọc & Sắp xếp */}
        <div className="flex justify-between items-center border-b pb-3 mb-6">
          <div className="flex space-x-6">
            <button className="font-semibold">Lọc giá ▼</button>
            <button className="font-semibold">Loại ▼</button>
            <button className="font-semibold">Kích thước ▼</button>
            <button className="font-semibold">Màu sắc ▼</button>
          </div>
          <select
            className="border px-4 py-2"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Thứ tự</option>
            <option value="asc">Giá tăng dần</option>
            <option value="desc">Giá giảm dần</option>
          </select>
        </div>

        {/* Danh sách sản phẩm */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <div key={product.id} className="text-center">
              <img src={product.image} alt={product.name} className="w-full mb-2" />
              <p className="font-semibold">{product.name}</p>
              <p className="text-red-500 font-bold">{product.price.toLocaleString()}₫</p>
              <div className="flex space-x-2 justify-center">
                {product.tags.map((tag, index) => (
                  <span key={index} className="bg-black text-white px-2 py-1 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Phân trang */}
        <div className="flex justify-center items-center space-x-2 mt-6">
          <button
            className="border px-3 py-2"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            &laquo;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`border px-3 py-2 ${currentPage === index + 1 ? "bg-black text-white" : ""}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="border px-3 py-2"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          >
            &raquo;
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
