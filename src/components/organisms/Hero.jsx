import React from "react";
import bg from "@/assets/images/hero-background.png";
import Link from "next/link";
import { Button } from "../atoms/Button";
import PhoneSvg from "@/assets/SVGs/PhoneSvg";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="bg-center bg-cover w-screen h-screen flex flex-col justify-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="mx-auto container mt-8 md:mt-16">
        {/* Hero Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-black">Trusted </span>
            <span className="bg-black text-white px-4 py-2 rounded-lg inline-block">
              Partner
            </span>
            <span className="text-black"> for</span>
            <br />
            <span className="text-black mt-8 inline-block">Your Website </span>
            <span className="bg-black text-white px-4 py-2 rounded-lg inline-block">
              Develop.
            </span>
          </h1>
        </div>
        <div className="flex gap-28 mt-28">
          {/* Social Media Sidebar */}
          <div className="w-fit ml-[50px]">
            <div className="inline-block -translate-x-[100px] font-bold translate-y-[130px] -rotate-90">
              @williamney
            </div>
            <div className="flex flex-col gap-4">
              <Link
                href="#"
                className="text-black hover:text-gray-700 transition-colors"
              >
                <GrInstagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-black hover:text-gray-700 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-black hover:text-gray-700 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </Link>
            </div>
            <div className="w-px h-16 bg-black mt-4"></div>
          </div>

          {/* Description and CTA */}
          <div className="">
            <div className="">
              <p className="text-lg md:text-xl text-black mb-8 leading-relaxed">
                Building the worlds best marketing websites for over a decade.
                <br />
                Your trusted partner for strategy, design, and dev.
              </p>

              <Button variant="outline" className='mt-5'>
                <div className="w-[58px] h-[58px] rounded-full border border-black flex justify-center items-center">
                  <PhoneSvg />
                </div>
                <p className="py-8 px-5 text-lg">Schedule a Call</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
