import React from "react";

let visionCard = [
  {
    pic: "/picture/img (3).png",
    date: "Q3 2022",
    list1: "Beta testing",
    list2: "Launch of Unidoge swap tokens",
    list3: "Release of swap",
    list4: "Release of Farming pool",
    list5: "Release of Staking pool",
    list6: "Cross 5 million in volume",
    list7: "Achieve 50k community members in telegram and twitter",
    list8: "No 1 Dex on Dogechain",
  },
  {
    pic: "/picture/img (3).png",
    date: "Q4 2022",
    list1: "NFT airdrop for token holders",
    list2: "Multi-chain swaps",
    list3: "IFO ( Initial farming offering )",
    list4: "INO ( Initial NFT Offering )",
    list5: "Lottery",
    list6: "Launchpads",
    list7: "AMM Dex",
  },
];

function Vision() {
  return (
    <div className="container">
      <div className="lg:mb-32 mb-16">
        <div className="lg:text-4xl text-2xl text-fuchsia-600 font-extrabold mb-12 m-auto text-center">
          OUR VISION
        </div>
        <div className="lg:flex justify-between grid gap-8">
          {visionCard.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-8 lg:w-[406px] w-full m-auto justify-center border-[2px] border-fuchsia-600 py-8 px-6 rounded-3xl bg-[rgba(255,_255,_255,_0.06)]"
            >
              <div className="m-auto text-center">
                <div className="mb-4">
                  <img className="text-center m-auto" src={item.pic} alt="" />
                </div>
                <div className="text-gray-50 lg:text-2xl text-xl font-extrabold">
                  {item.date}
                </div>
              </div>
              <div className="">
                <li className="text-gray-50 lg:text-lg text-md">
                  {item.list1}
                </li>
                <li className="text-gray-50 lg:text-lg text-md">
                  {item.list2}
                </li>
                <li className="text-gray-50 lg:text-lg text-md">
                  {item.list3}
                </li>
                <li className="text-gray-50 lg:text-lg text-md">
                  {item.list4}
                </li>
                <li className="text-gray-50 lg:text-lg text-md">
                  {item.list5}
                </li>
                <li className="text-gray-50 lg:text-lg text-md">
                  {item.list6}
                </li>
                <li className="text-gray-50 lg:text-lg text-md">
                  {item.list7}
                </li>
                <li className="text-gray-50 lg:text-lg text-md">
                  {item.list8}
                </li>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vision;
