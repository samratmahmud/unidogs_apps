import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

let infoBlock = [
  {
    pic: "/picture/img.png",
    title: "4 Millions DOGE holder",
  },
  {
    pic: "/picture/img (1).png",
    title: "25 Millions Trading Volume Everyday",
  },
  {
    pic: "/picture/img (2).png",
    title: "High Potential Blockchain",
  },
];

function Header() {
  return (
    <div className="container">
      <div className="lg:mb-52 mb-20">
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          <div>
            <div className="mb-5">
              <img src="/picture/UniDoge full 3.svg" alt="" />
            </div>
            <div className="text-gray-50 lg:text-3xl text-[22px] font-medium capitalize lg:mb-20 mb-10">
              <span className="text-fuchsia-600 font-black">
                TRADE , SWAP ,FARM, STAKE
              </span>
              <br />
              ON THE BEST DECENTRALISED PLATFORM ON DOGCHAIN
            </div>
            <div className="lg:mb-16 mb-12">
              <Link href={""}>
                <Button />
              </Link>
            </div>
            <div className="flex gap-7 lg:mb-48 mb-16">
              <Link href={"https://twitter.com/"}>
                <img src="/picture/akar-icons_twitter-fill.png" alt="" />
              </Link>
              <Link href={"https://web.telegram.org/"}>
                <img src="/picture/logos_telegram.png" alt="" />
              </Link>
            </div>
            <div className="lg:text-3xl text-xl font-black text-fuchsia-600 max-w-[758px] lg:mb-28 mb-12">
              JOIN THE HYPE OF DOGECHAIN WITH MILLIONS OF USERS ALL AROUND THE
              GLOBE
            </div>
          </div>
          <div>
            <img src="/picture/UniDoge big icon 3.png" alt="" />
          </div>
        </div>
        <div className="lg:flex justify-between grid lg:gap-20 gap-10">
          {infoBlock.map((item, index) => (
            <div
              key={index}
              className="py-8 px-6 bg-gray-900 flex flex-col gap-4 items-center rounded-3xl w-full"
            >
              <div>
                <img className="" src={item.pic} alt="" />
              </div>
              <div className="text-gray-50 lg:text-2xl text-xl font-extrabold text-center">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
