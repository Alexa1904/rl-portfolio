import React from 'react';

function CloseIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      className={className}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 1a9 9 0 1 1-.001 18.001A9 9 0 0 1 10 1M10 10l4 4m-4-4L6 6m4 4-4 4m4-4 4-4"
      />
    </svg>
  );
}

export default CloseIcon;
