"use client";
import Link from "next/link";
import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Button from "../common/Button";

let navLink = [
  {
    name: "Trade",
    url: "/",
  },
  {
    name: "Swap",
    url: "/",
  },
  {
    name: "Farm",
    url: "/",
  },
  {
    name: "Stake",
    url: "/",
  },
  {
    name: "FAQ",
    url: "/",
  },
];

function Navbar() {
  let [open, setOpen] = React.useState(false);
  const toggle = () => setOpen((prev) => !prev);
  return (
    <div className="container">
      <div className="flex justify-between gap-12 items-center lg:mb-48 mb-16">
        <div>
          <button data-aos="fade-right" className="py-3">
            <img src="/picture/Group 303.svg" alt="" />
          </button>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center xl:gap-[75px] gap-12">
            {navLink.map((item, index) => (
              <div
                data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right"}`}
                key={index}
              >
                <Link
                  className="text-gray-50 hover:text-gray-400 duration-300 text-base font-medium py-1.5"
                  href={item.url}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div data-aos="fade-left">
              <Button name="Launch app" padding="2" />
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div onClick={toggle}>
            <img
              className="w-14 rounded-xl cursor-pointer py-1 px-2"
              src="/picture/icons8-menu.svg"
              alt=""
            />
          </div>
          <div className="">
            <Drawer onClose={toggle} open={open} direction="left">
              <div className="bg-gray-950 h-screen p-10 flex flex-col justify-between">
                <div>
                  <div className="mb-5">
                    <button className="py-3">
                      <img src="/picture/Group 303.svg" alt="" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-6 text-center">
                    {navLink.map((item, index) => (
                      <div key={index}>
                        <Link
                          className="text-gray-50 text-base font-medium"
                          href={item.url}
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))}
                    <Link className="flex-shrink-0" href={"/"}>
                      <button className="text-gray-50 text-sm font-medium py-2 px-3.5 border border-fuchsia-500 rounded-3xl bg-100">
                        Launch app
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="text-gray-50 text-sm text-center">
                  © 2022 UniDOGE
                </div>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
