import React from "react";

const ArrowDown = ({ className = "text-white", ...props }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#clip0_90_261)">
        <path
          d="M0.790039 6.39205L1.80141 5.36932L5.35254 8.92045V0L6.82982 6.4574e-08V8.92045L10.3753 5.36932L11.3923 6.39205L6.09118 11.6932L0.790039 6.39205Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_90_261">
          <rect width="12" height="12" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowDown;
