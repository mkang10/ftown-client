import { notFound } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import BestSeller from "@/components/BestSeller/BestSeller";
const products = [
  { id: 1, name: "DC x The Underdogs T-shirt Black", image: "https://cdn.shopify.com/s/files/1/0681/2821/1221/files/White_LTSSOCOA201UW0101SS25_1_533x.jpg?v=1737370837", price: 399000, sizes: ["S", "M", "L", "XL"], tags: ["Collab", "Pre order"], description: "Chất liệu: Cotton.\nRelaxed Fit.\nToàn bộ artwork trên áo được áp dụng kĩ thuật in lụa." },
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) return notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 px-6 pt-20 lg:px-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Hình ảnh sản phẩm */}
          <div className="flex-1">
            <img src={product.image} alt={product.name} className="w-full" />
            <div className="flex mt-4 space-x-2">
              {[...Array(5)].map((_, index) => (
                <img key={index} src={product.image} alt={`Thumb ${index}`} className="w-16 h-16 border" />
              ))}
            </div>
          </div>

          {/* Thông tin sản phẩm */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-red-500 text-lg font-bold mt-2">{product.price.toLocaleString()}₫</p>
            <div className="flex space-x-2 mt-2">
              {product.tags.map((tag, index) => (
                <span key={index} className="bg-black text-white px-2 py-1 text-xs">{tag}</span>
              ))}
            </div>
            {/* Chọn size */}
            <div className="mt-4">
              <p className="font-semibold mb-2">Chọn size:</p>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button key={size} className="px-4 py-2 border font-semibold hover:bg-gray-200">{size}</button>
                ))}
              </div>
            </div>
            {/* Nút thêm vào giỏ hàng */}
            <button className="mt-6 w-full px-6 py-3 bg-black text-white font-semibold text-lg">THÊM VÀO GIỎ</button>
            <button className="mt-2 w-full px-6 py-3 border font-semibold text-lg">MUA NGAY</button>
            {/* Thông tin giao hàng */}
            <div className="mt-6 bg-gray-100 p-4">
              <p className="font-semibold">Khu vực giao hàng</p>
              <p className="text-gray-600">Giao tại Hồ Chí Minh - Chọn lại</p>
              <ul className="mt-2">
                {[...Array(5)].map((_, index) => (
                  <li key={index} className="text-red-500">Quận {index + 1}: Hết hàng</li>
                ))}
              </ul>
            </div>
            {/* Mô tả sản phẩm */}
            <div className="mt-6">
              <h3 className="font-semibold">Chi tiết sản phẩm:</h3>
              <p className="text-gray-600 whitespace-pre-line">{product.description}</p>
            </div>
          </div>
        </div>
        <BestSeller></BestSeller>
      </main>
      <Footer />
    </div>
  );
}
