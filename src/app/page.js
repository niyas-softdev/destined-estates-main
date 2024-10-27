'use client'

import MainPage from "@/components/pages/MainPage";
import Menu from "@/components/molecules/Menu";
import Footer from "@/components/molecules/Footer";


export default function Home() {
  return (
    <>
      <div className="relative">
        <Menu />
        <MainPage />
        <Footer />
      </div>

    </>

  );
}
