import React from "react";

const ArrowRight = ({
  width = "23",
  height = "15",
  fillColor = "white",
  strokeColor = "black",
  strokeWidth = 1.5,
  className = "",
  ...props
}) => {
  const radius = Math.min(width, height) / 2 - strokeWidth / 2;
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M0 7.5H22M22 7.5C19.5905 7.04545 14.7714 4.90909 14.7714 0M22 7.5C19.5905 7.95455 14.7714 10.0909 14.7714 15"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
