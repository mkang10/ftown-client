import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 flex justify-center items-center pt-20">
        <img
          src="https://cdn.shopify.com/s/files/1/0681/2821/1221/files/layout_ab_us_2_1.jpg?v=1721821378"
          alt="About Us"
          className="max-w-full max-h-full"
        />
      </main>
      <Footer />
    </div>
  );
}
