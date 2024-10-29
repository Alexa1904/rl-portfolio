import React from 'react';

function ExecutableIcon({
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
        fill="#EFE1CB"
        fillRule="evenodd"
        d="M18.75 15.75L24 19.5l-5.25 3.75v-7.5z"
        clipRule="evenodd"
      />
      <path
        fill="#EFE1CB"
        d="M15.127 14.25l-1.942 1.942 1.065 1.058 3-3-3-3-1.065 1.057 1.942 1.943zm-6.255 0l1.943-1.943L9.75 11.25l-3 3 3 3 1.065-1.058-1.942-1.942zM6.75 6.75a.75.75 0 100-1.5.75.75 0 000 1.5zM4.5 6.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
      />
      <path
        fill="#EFE1CB"
        d="M15.75 19.5H3V9h18v5.25h1.5V4.5c0-.826-.673-1.5-1.5-1.5H3c-.827 0-1.5.674-1.5 1.5v15c0 .827.673 1.5 1.5 1.5h12.75v-1.5zM3 4.5h18v3H3v-3z"
      />
    </svg>
  );
}

export default ExecutableIcon;
