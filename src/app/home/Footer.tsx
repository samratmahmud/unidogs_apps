"use client";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="relative z-0">
      <img
        className="absolute top-0 bottom-0 h-full w-full left-0 right-0 -z-10"
        src="/picture/footer.png"
        alt=""
      />
      <div className="container">
        <div className="gap-6 grid lg:grid-cols-2 lg:pb-28 pb-8 text-white/40">
          <div className="mb-10 lg:mb-0">
            <div className="mb-9">
              <img src="/picture/UniDoge full 4.svg" alt="" />
            </div>
            <div className="text-sm mb-9">UniDOGE, Trading App </div>
            <div className="flex flex-row-reverse mb-7 lg:w-4/5 w-full">
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
            <div className="text-sm">© 2022 UniDOGE</div>
          </div>
          <div className="flex justify-between gap-6">
            <div className="flex flex-col gap-7 mb-10 lg:mb-0">
              <Link className="lg:text-md text-sm font-semibold" href={"/"}>
                Home
              </Link>
              <Link className="lg:text-md text-sm" href={"/"}>
                Trade
              </Link>
              <Link className="lg:text-md text-sm" href={"/"}>
                Swap{" "}
              </Link>
              <Link className="lg:text-md text-sm" href={"/"}>
                Farm{" "}
              </Link>
              <Link className="lg:text-md text-sm" href={"/"}>
                Stake{" "}
              </Link>
              <Link className="lg:text-md text-sm" href={"/"}>
                FAQ{" "}
              </Link>
            </div>
            <div className="flex flex-col gap-7">
              <Link className="lg:text-md text-sm font-semibold" href={"/"}>
                Privacy Policy and Terms of Service
              </Link>
              <Link className="lg:text-md text-sm" href={"/"}>
                UNIDOGE Privacy Policy
              </Link>
              <Link className="lg:text-md text-sm" href={"/"}>
                UNIDOGE Biometrics Privacy Policy{" "}
              </Link>
              <Link className="lg:text-md text-sm" href={"/"}>
                UNIDOGE Financial Privacy Notice{" "}
              </Link>
              <Link className="lg:text-md text-sm" href={"/"}>
                UNIDOGE Terms of Service{" "}
              </Link>
              <Link className="lg:text-md text-sm" href={"/"}>
                UNIDOGE Trade Desk Terms of Service{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
