import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

let treadText = [""];

function TradeSection() {
  return (
    <div className="container">
      <div className="lg:flex justify-between lg:mb-48 mb-20">
        <div>
          <div className="lg:mb-20 mb-12">
            <li className="text-gray-50 lg:text-3xl text-xl font-extrabold lg:max-w-[845px] lg:mb-12 mb-8">
              Trade Anything With NO KYC, NO registration, and NO hassle
            </li>
            <li className="text-gray-50 lg:text-3xl text-xl font-extrabold lg:max-w-[830px] lg:mb-12 mb-8">
              Trade Anything With <span className="text-fuchsia-600">NO</span>{" "}
              KYC,
              <span className="text-fuchsia-600">NO</span> registration and{" "}
              <span className="text-fuchsia-600">NO</span> hassle
            </li>
            <li className="text-gray-50 lg:text-3xl text-xl font-extrabold lg:max-w-[845px]">
              Trade Anything token on{" "}
              <span className="text-fuchsia-600">DOGECHAIN</span> in seconds
              just by connecting your wallet
            </li>
          </div>
          <div>
            <Link href={""}>
              <Button />
            </Link>
          </div>
        </div>
        <div className="lg:-mt-24 hidden lg:block">
          <img src="/picture/UniDoge big icon 3.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default TradeSection;
