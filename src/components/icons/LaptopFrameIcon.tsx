import React from 'react';

function LaptopFrameIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 540 309"
      className={className}
      {...props}
    >
      <rect
        width="539"
        height="308"
        x="0.5"
        y="0.5"
        fill="#282828"
        stroke="url(#paint0_linear_148_34)"
        rx="15.5"
      />
      <rect
        width="521"
        height="282"
        x="9.5"
        y="10.5"
        stroke="url(#paint1_linear_148_34)"
        rx="4.5"
      />
      <mask id="path-3-inside-1_148_34" fill="#fff">
        <path d="M242 10h56v7a3 3 0 01-3 3h-50a3 3 0 01-3-3v-7z" />
      </mask>
      <path fill="#282828" d="M242 10h56v7a3 3 0 01-3 3h-50a3 3 0 01-3-3v-7z" />
      <path
        fill="#7A7A7A"
        d="M242 10h56-56zm57 7a4 4 0 01-4 4h-50a4 4 0 01-4-4h2a2 2 0 002 2h50a2 2 0 002-2h2zm-54 4a4 4 0 01-4-4v-7h2v7a2 2 0 002 2v2zm54-11v7a4 4 0 01-4 4v-2a2 2 0 002-2v-7h2z"
        mask="url(#path-3-inside-1_148_34)"
      />
      <circle cx="270" cy="10" r="1.5" stroke="#7A7A7A" />
      <defs>
        <linearGradient
          id="paint0_linear_148_34"
          x1="270"
          x2="270"
          y1="0"
          y2="309"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7A7A7A" />
          <stop offset="1" stopColor="#666" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_148_34"
          x1="270"
          x2="270"
          y1="10"
          y2="293"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7A7A7A" />
          <stop offset="1" stopColor="#666" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default LaptopFrameIcon;
