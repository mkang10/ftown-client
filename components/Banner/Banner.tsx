import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full h-[500px] md:h-screen">
      <Image
        src="https://theme.hstatic.net/1000344185/1001270599/14/slideshow_2.jpg?v=280" 
        alt="Banner"
        layout="fill"
        objectFit="contain"
        priority
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        
        <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-300">
          Xem sản phẩm
        </button>
      </div>
    </div>
  );
}
