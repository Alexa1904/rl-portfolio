import React from 'react';

function FolderIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 67 55"
      className={className}
      {...props}
    >
      <path
        fill="#EFE1CB"
        stroke="#E4CAA5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M33.5 8.571h28.889c1.986 0 3.611 1.704 3.611 3.786v37.857C66 52.296 64.375 54 62.389 54H4.61C2.625 54 1 52.296 1 50.214V8.571h32.5z"
      />
      <path
        fill="#E4CAA5"
        stroke="#E4CAA5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M33.5 8.571H1V4.786C1 2.704 2.625 1 4.611 1h21.667L33.5 8.571z"
      />
    </svg>
  );
}

export default FolderIcon;
