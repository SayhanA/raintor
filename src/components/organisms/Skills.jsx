import ArrowLeft from "@/assets/SVGs/ArrowLeft";
import React from "react";
import { Button } from "../atoms/Button";
import ArrowDown from "@/assets/SVGs/ArrowDown";
import ArrowRight from "@/assets/SVGs/ArrowRight";
import AtomSvg from "@/assets/SVGs/AtomSvg";
import SkillCard from "../molicules/SkillCard";

const skills = [
  {
    id: 1421,
    skill: "HTML & CSS",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    id: 1422,
    skill: "Javascript",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
    rotate: "-7deg",
  },
  {
    id: 1423,
    skill: "Webflow",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
];

const Skills = () => {
  return (
    <section className="h-fit w-screen px-10">
      <div className="bg-black rounded-[40px] w-[100%] h-full px-[65px] py-[90px]">
        {/* Gradient border container */}
        <div className="mx-auto container rounded-3xl">
          {/* Header section */}
          <div className="justify-between items-start mb-12">
            {/* Why Choose me button */}
            <div className="flex mb-10">
              <div className="w-10 h-10 border-2 rounded-full flex justify-center items-center border-white">
                <ArrowDown />
              </div>
              <Button
                variant="outline"
                className="mb-8 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black rounded-full px-6 py-2"
              >
                Why Choose me
              </Button>
            </div>

            <div className="flex justify-between w-full">
              {/* Main heading */}
              <h1 className="text-4xl md:text-6xl lg:text-[58px] leading-[86px] font-bold text-white">
                My Extensive
                <br />
                List of Skills
              </h1>

              <div className="flex flex-col items-end mt-8 md:mt-0 max-w-[600px]">
                {/* Description text */}
                <p className="text-white text-lg md:text-xl mb-8 text-right">
                  Building the worlds best marketing Your trusted partner for
                  strategy, design, and dev.
                </p>

                <hr className="border border-[#ffffff36] w-full mb-8" />

                {/* Navigation arrows */}
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-full w-[60px] h-[60px]"
                  >
                    <ArrowLeft className="w-5 h-5 hover:text-black" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-full w-[60px] h-[60px]"
                  >
                    <ArrowRight className="w-9 h-9 hover:text-black" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Skills cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard
                key={skill?.id}
                skill={skill?.skill}
                description={skill.description}
                className={skill.rotate && "-rotate-6"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
