"use client";
import Link from "next/link";
import {features} from "process";
import React from "react";

const footerLink = [
  {
    left: [
      {
        name: "Home",
        href: "/",
      },
      {
        name: "Trade",
        href: "/",
      },
      {
        name: "Swap",
        href: "/",
      },
      {
        name: "Farm",
        href: "/",
      },
      {
        name: "Stake",
        href: "/",
      },
      {
        name: "FAQ",
        href: "/",
      },
    ],
    right: [
      {
        name: "Privacy Policy and Terms of Service",
        href: "/",
      },
      {
        name: "UNIDOGE Privacy Policy",
        href: "/",
      },
      {
        name: "UNIDOGE Biometrics Privacy Policy",
        href: "/",
      },
      {
        name: "UNIDOGE Financial Privacy Notice",
        href: "/",
      },
      {
        name: "UNIDOGE Terms of Service",
        href: "/",
      },
      {
        name: "UNIDOGE Trade Desk Terms of Service",
        href: "/",
      },
    ],
  },
];

function Footer() {
  return (
    <footer className="relative z-0">
      <img
        className="absolute top-0 bottom-0 h-full w-full left-0 right-0 -z-10"
        src="/picture/footer.png"
        alt=""
      />
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 lg:pb-28 pb-8 text-white/40">
          <div className="mb-10 lg:mb-0">
            <div className="mb-9" data-aos="fade-down">
              <img src="/picture/UniDoge full 4.svg" alt="" />
            </div>
            <div data-aos="fade-up" className="text-sm mb-9">
              UniDOGE, Trading App{" "}
            </div>
            <div
              data-aos="fade-up"
              className="flex flex-row-reverse mb-7 lg:w-4/5 w-full"
            >
              <label
                htmlFor="search"
                className="lg:p-5 py-3 px-5 flex-shrink-0 border-[2px] border-fuchsia-600 border-l-0 rounded-r-full"
              >
                <img
                  className="w-7 h-7 -rotate-90 cursor-pointer"
                  src="/picture/bi_arrow-down-square-fill.png"
                  alt=""
                />
              </label>
              <input
                id="search"
                className="placeholder:text-md bg-black placeholder:text-neutral-600 text-white px-6  focus:outline-none w-full border-[2px] border-fuchsia-600 border-r-0 rounded-l-full"
                type="text"
                placeholder="Email Address"
                autoComplete="off"
              />
            </div>
            <div data-aos="fade-up" className="text-sm">
              © 2022 UniDOGE
            </div>
          </div>
          <div>
            {footerLink.map((item, index) => (
              <div className="flex justify-between gap-6">
                <div
                  data-aos="fade-right"
                  className="flex flex-col gap-7 mb-10 lg:mb-0"
                >
                  {item.left.map((items, index) => (
                    <div key={index}>
                      <Link
                        href={items.href}
                        className="lg:text-md text-sm first:font-semibold"
                      >
                        {items.name}
                      </Link>
                    </div>
                  ))}
                </div>
                <div data-aos="fade-left" className="flex flex-col gap-7">
                  {item.right.map((feature, index) => (
                    <div key={index}>
                      <Link
                        href={feature.href}
                        className="lg:text-md text-sm first:font-semibold"
                      >
                        {feature.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
