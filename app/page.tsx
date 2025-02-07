import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Banner/Banner";
import BestSeller from "@/components/BestSeller/BestSeller";
import Styling from "@/components/Styling/Styling";
import PromotionCode from "@/components/PromotionCode/PromotionCode";


export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <Banner />
        {/* Nội dung khác */}
        <BestSeller></BestSeller>
        <Styling />
        <PromotionCode></PromotionCode>
      </main>
      <Footer />
    </div>
  );
}
