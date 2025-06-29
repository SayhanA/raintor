import React from "react";
import { Button } from "../atoms/Button";
import ArrowDown from "@/assets/SVGs/ArrowDown";

const About = () => {
  return (
    <section className="min-h-screen py-32 relative overflow-hidden border border-red-500">
      <div className="mx-auto container">
        {/* About button */}
        <div className="flex mb-10 justify-end">
          <div className="w-10 h-10 border-2 rounded-full flex justify-center items-center border-black">
            <ArrowDown className="text-black" />
          </div>
          <Button
            variant="outline"
            className="mb-8 bg-transparent border-2 border-black text-black hover:bg-black hover:text-black rounded-full px-6 py-2"
          >
            About
          </Button>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-8 pt-32 pb-16">
          {/* Hero heading */}
          <div className="max-w-6xl mx-auto text-center mb-12 h-full">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
              <span className="text-black">I've </span>
              <div className="inline-flex items-center relative">
                <span className="text-black">been </span>
              </div>
              <span className="bg-black text-white px-6 py-2 mb-5 rounded-2xl inline-block mx-4">
                Developing
              </span>
              <br />
              <div className="inline-flex items-center relative">
                <span className="text-black">Websites </span>
                {/* Profile badge for Anik Sikdar */}
                <span className="text-black">since </span>
              </div>
              <span className="bg-black text-white px-6 py-2 rounded-2xl inline-block ml-4">
                2013
              </span>
            </h1>

            {/* Description */}
            <p className="text-black text-lg md:text-xl max-w-5xl mx-auto leading-relaxed mt-7">
              We start every new client interaction with an in-depth discovery
              call where we get to know each other and recommend the best course
              of action.
            </p>
          </div>

          {/* Previously worked on section */}
          <div className="absolute bottom-0 start-1/2 -translate-1/2 mx-auto container">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="text-left">
                <h3 className="text-black font-bold text-3xl text-nowrap">
                  PREVIOUSLY
                  <br />
                  WORKED ON
                </h3>
              </div>

              {/* Company logos */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="bg-black text-white px-6 py-3 rounded-full font-medium">
                  awwwards
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded ml-2">
                    1440 x 900
                  </span>
                </div>

                <div className="bg-white/80 backdrop-blur-sm text-black px-6 py-3 rounded-full font-medium border border-black/10">
                  CSS WINNER
                </div>

                <div className="bg-white/80 backdrop-blur-sm text-black px-6 py-3 rounded-full font-medium border border-black/10">
                  /thoughtworks
                </div>

                <div className="bg-white/80 backdrop-blur-sm text-black px-6 py-3 rounded-full font-medium border border-black/10">
                  facebook
                </div>

                <div className="bg-white/80 backdrop-blur-sm text-black px-6 py-3 rounded-full font-medium border border-black/10">
                  ⚡ AUTODESK
                </div>

                <div className="bg-white/80 backdrop-blur-sm text-black px-6 py-3 rounded-full font-medium border border-black/10">
                  🏆 CSS Design Awards
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
