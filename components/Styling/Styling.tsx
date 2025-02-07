import Image from "next/image";

const stylingProducts = [
  {
    id: 1,
    name: "Funkytown® Flowers Window Tee/ Cream",
    image: "https://levents.asia/cdn/shop/articles/STYLING_LOOK_8.1.jpg?v=1711446614",
  },
  {
    id: 2,
    name: "Funkytown® Bichontour Tee/ White",
    image: "https://levents.asia/cdn/shop/articles/Famale_-_8_-_Front.png?v=1702022060&width=720",
  },
  {
    id: 3,
    name: "Funkytown® Sticker Raglan Boxy 2.0 Hoodie/ Black",
    image: "https://levents.asia/cdn/shop/articles/STYLING_LOOK_7.1.jpg?v=1711446717",
  },
  {
    id: 4,
    name: "Funkytown® 05 Jersey/ White",
    image: "https://levents.asia/cdn/shop/articles/STYLING_LOOK_1.1.jpg?v=1710481415",
  },
];

export default function Styling() {
  return (
    <div className="w-full px-6 mt-10">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2">
        <div className="flex space-x-6 text-xl font-semibold">
          <span className="border-b-2 border-black pb-1">STYLING</span>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md text-sm">Xem tất cả</button>
      </div>

      {/* Product List */}
      <div className="grid grid-cols-4 gap-6 mt-6">
        {stylingProducts.map((product) => (
          <div key={product.id} className="text-center">
            {/* Product Image */}
            <div className="w-full h-[300px] relative">
              <Image src={product.image} alt={product.name} layout="fill" objectFit="contain" />
            </div>
            {/* Product Name */}
            <p className="text-sm mt-2">{product.name}</p>
            {/* Button to view set */}
            <button className="mt-2 text-xs font-medium text-black">Xem bộ phối</button>
          </div>
        ))}
      </div>
    </div>
  );
}
