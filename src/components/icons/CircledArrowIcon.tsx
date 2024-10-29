import React from 'react';

function CircledArrowIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 0c6.635 0 12 5.365 12 12s-5.365 12-12 12S0 18.635 0 12 5.365 0 12 0zm0 22.588c5.859 0 10.588-4.73 10.588-10.588 0-5.859-4.73-10.588-10.588-10.588A10.574 10.574 0 001.412 12c0 5.859 4.73 10.588 10.588 10.588z"
      />
      <path
        fill="currentColor"
        d="M6.141 10.8L12 16.659l5.859-5.859.988.988L12 18.635l-6.847-6.847.988-.988z"
      />
      <path fill="currentColor" d="M12.706 17.647h-1.412v-12h1.412v12z" />
    </svg>
  );
}

export default CircledArrowIcon;
