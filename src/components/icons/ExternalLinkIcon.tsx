import React from 'react';

function ExternalLinkIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      className={className}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 2.75H2.75A1.75 1.75 0 001 4.5v8.75A1.75 1.75 0 002.75 15h8.75a1.75 1.75 0 001.75-1.75V8m-6.125.875L15 1m0 0h-4.375M15 1v4.375"
      />
    </svg>
  );
}

export default ExternalLinkIcon;
