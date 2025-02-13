"use client"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";

export default function FavoritePage() {
  const [favorites, setFavorites] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    try {
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        const parsedFavorites = JSON.parse(storedFavorites) as { id: string; name: string }[];
        setFavorites(Array.isArray(parsedFavorites) ? parsedFavorites : []);
      }
    } catch (error) {
      console.error("Error parsing favorites from localStorage:", error);
      setFavorites([]);
    }
  }, []);

  const removeFavorite = (id: string) => {
    const updatedFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center pt-20 px-4">
        <h1 className="text-2xl font-semibold mb-4">Danh sách yêu thích</h1>
        {favorites.length > 0 ? (
          <ul className="w-full max-w-md">
            {favorites.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-lg mb-2 shadow-md"
              >
                <span>{item.name}</span>
                <button
                  onClick={() => removeFavorite(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Xóa
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Không có mục yêu thích nào.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
