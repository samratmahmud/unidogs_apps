import {list} from "postcss";
import React from "react";

let visionCard = [
  {
    pic: "/picture/img (3).png",
    date: "Q3 2022",
    list: [
      "Beta testing",
      "Launch of Unidoge swap tokens",
      "Release of swap",
      "Release of Farming pool",
      "Release of Staking pool",
      "Cross 5 million in volume",
      "Achieve 50k community members in telegram and twitter",
      "No 1 Dex on Dogechain",
    ],
  },
  {
    pic: "/picture/img (3).png",
    date: "Q4 2022",
    list: [
      "NFT airdrop for token holders",
      "Multi-chain swaps",
      "IFO ( Initial farming offering )",
      "INO ( Initial NFT Offering )",
      "Lottery",
      "Launchpads",
      "AMM Dex",
    ],
  },
];

function Vision() {
  return (
    <div className="container">
      <div className="lg:mb-32 mb-16">
        <div
          data-aos="fade-down"
          className="lg:text-4xl text-2xl text-fuchsia-600 font-extrabold mb-12 m-auto text-center"
        >
          OUR VISION
        </div>
        <div className="flex lg:flex-row flex-col justify-between gap-8">
          {visionCard.map((item, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="flex flex-col gap-8 lg:w-[406px] w-full m-auto justify-center border-[2px] border-fuchsia-600 py-8 px-6 rounded-3xl bg-[rgba(255,_255,_255,_0.06)] lg:min-h-[479px]"
            >
              <div className="m-auto text-cente">
                <div className="mb-4">
                  <img className="text-center m-auto" src={item.pic} alt="" />
                </div>
                <div className="text-gray-50 lg:text-2xl text-xl font-extrabold">
                  {item.date}
                </div>
              </div>
              <div className="">
                {item.list.map((items, index) => (
                  <div key={index}>
                    <li className="text-gray-50 lg:text-lg text-md">{items}</li>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vision;
