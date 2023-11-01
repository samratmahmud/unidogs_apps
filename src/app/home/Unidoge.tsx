import React from "react";

let govt = [
  {
    num: "1.",
    title:
      "Governance of the Unidoge swap platform via voting on new features such as new pools, promotions,...",
  },
  {
    num: "2.",
    title:
      "Staking for more Unidoge swap token and Staking to get non- uni doge swap tokens in the Farming Pools.",
  },
  {
    num: "3.",
    title:
      "Farming to get rewards in Pools. Used in Lottery, Team Battle, IFO, NFT products.",
  },
  {
    num: "4.",
    title: "The main means of payment on the Unidoge swap platform",
  },
];

function Unidoge() {
  return (
    <div className="container">
      <div className="lg:flex justify-between gap-16 lg:mb-32 mb-20">
        <div className="mb-5 animate-pulse" data-aos="fade-left">
          <img src="/picture/coins 1.svg" alt="" />
        </div>
        <div data-aos="fade-right">
          <div className="lg:text-4xl text-2xl text-fuchsia-600 font-extrabold mb-5">
            UTILITY OF UNIDOGE TOKEN
          </div>
          {govt.map((item, index) => (
            <div key={index} className="flex gap-3 lg:max-w-[717px]">
              <div className="text-gray-50 lg:text-xl text-lg font-medium">
                {item.num}
              </div>
              <div className="text-gray-50 lg:text-xl text-lg font-medium">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Unidoge;
