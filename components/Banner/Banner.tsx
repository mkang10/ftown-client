import Image from "next/image"

export default function Banner() {
  return (
    <div className="relative h-[500px] w-full md:h-screen">
      <Image
        src="https://theme.hstatic.net/1000344185/1001270599/14/slideshow_2.jpg?v=280"
        alt="Banner"
        layout="fill"
        objectFit="contain"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <button className="mt-4 rounded-lg bg-white px-6 py-2 font-semibold text-black shadow-md hover:bg-gray-300">
          Xem sản phẩm
        </button>
      </div>
    </div>
  )
}
