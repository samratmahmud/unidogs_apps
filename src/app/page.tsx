import Navbar from "@/components/global/Navbar";
import React from "react";
import Header from "./home/Header";
import TradeSection from "./home/TradeSection";
import Unidoge from "./home/Unidoge";
import Vision from "./home/Vision";
import Footer from "./home/Footer";

export default function Homepage() {
  return (
    <div className="bg-black relative z-0 overflow-hidden">
      <div className="container relative -z-10">
        <img
          className="absolute -z-10 max-w-none left-[-2510px] top-[-1880px]"
          src="/picture/Background Gen.png"
          alt=""
        />
      </div>
      <Navbar />
      <Header />
      <TradeSection />
      <Unidoge />
      <Vision />
      <div className="h-[1px] w-full bg-gray-900 lg:mb-28 mb-16"></div>
      <Footer />
    </div>
  );
}
