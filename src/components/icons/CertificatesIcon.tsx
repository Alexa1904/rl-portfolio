import React from 'react';

function CertificatesIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 23 23"
      className={className}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.522 8a6.5 6.5 0 1013 0 6.5 6.5 0 00-13 0z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.501 14.915l3.955 6.585 1.859-3.614 4.185.26-3.955-6.585m-12.09 0L1.5 18.146l4.185-.26 1.859 3.613 3.955-6.584"
      />
    </svg>
  );
}

export default CertificatesIcon;
