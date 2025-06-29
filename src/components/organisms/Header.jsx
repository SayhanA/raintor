import Link from "next/link";
import React from "react";
import { Button } from "../atoms/Button";
import ArrowRight from "@/assets/SVGs/ArrowRight";

const Header = () => {
  return (
    <header className="px-9 py-7 absolute top-0 left-0 w-screen">
      <div className="mx-auto container flex flex-row flex-nowrap items-center justify-between lg:gap-16 gap-10">
        <div className="bwgradual text-2xl md:text-3xl font-extrabold text-[34px] text-black">
          DEVLOP.ME
        </div>

        <div className="flex flex-nowrap lg:gap-16 gap-10">
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className="text-black hover:text-gray-700 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-black hover:text-gray-700 transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-black hover:text-gray-700 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#"
              className="text-black hover:text-gray-700 transition-colors"
            >
              Blog
            </Link>
          </nav>

          <Button variant="outline">
            <div className="w-[38px] h-[38px] rounded-full border border-black flex justify-center items-center">
              <ArrowRight />
            </div>
            <p className="py-5 px-3">Start Project</p>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
