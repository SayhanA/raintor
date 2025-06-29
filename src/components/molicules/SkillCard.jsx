import { twMerge } from "tailwind-merge";
import AtomSvg from "@/assets/SVGs/AtomSvg";
import React from "react";

const SkillCard = ({
  className = "",
  skill = "",
  description = "",
  ...props
}) => {
  return (
    <div
      className={twMerge(
        "bg-[rgba(255,255,255,0.08)] rounded-2xl px-9 py-12 hover:bg-[#ffffff20] transition-colors",
        className
      )}
      {...props}
    >
      <div className="mb-9">
        <AtomSvg />
      </div>
      <h3 className="text-white text-2xl font-bold mb-4">{skill}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default SkillCard;
