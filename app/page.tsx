import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">{/* Nội dung trang chính */}</main>
      <Footer />
    </div>
  );
}
