import Image from "next/image";

export default function PromotionCode() {
  return (
    <div className="flex items-center bg-gray-100 p-12 mt-12 rounded-xl">
      {/* Left Side (Text Content) */}
      <div className="flex-1 pr-8">
        <h2 className="text-4xl font-bold text-black">ƯU ĐÃI ĐẶC BIỆT THÁNG 12</h2>
        <p className="mt-4 text-lg text-gray-600">Và còn rất nhiều các khuyến mãi khác khi mua sắm tại FunkyTown Gallery.</p>
        <button className="mt-6 px-8 py-3 bg-black text-white font-semibold text-xl rounded-md hover:bg-gray-800">
          KHÁM PHÁ NGAY
        </button>
      </div>

      {/* Right Side (Image Content) */}
      <div className="relative w-[700px] h-[400px] ml-12">
        <Image
          src="https://levents.asia/cdn/shop/files/1200X600_VOUCHER.jpg?v=1734930669&width=750"
          alt="Promotion Image"
          layout="fill"
          objectFit="cover"
          
        />
      </div>
    </div>
  );
}
