import React from 'react';

function ExperienceIcon({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 21"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 20.5c-.55 0-1.02-.206-1.412-.618A2.086 2.086 0 010 18.395V6.815c0-.578.196-1.074.588-1.486.392-.411.863-.618 1.412-.618h4V2.605c0-.579.196-1.074.588-1.486C6.98.707 7.451.5 8 .5h4c.55 0 1.021.206 1.413.619.392.413.588.908.587 1.486v2.106h4c.55 0 1.021.206 1.413.618.392.413.588.909.587 1.487v11.579c0 .579-.196 1.075-.587 1.487-.391.413-.862.619-1.413.618H2zm0-2.105h16V6.815H2v11.58zM8 4.71h4V2.605H8v2.106z"
      />
    </svg>
  );
}

export default ExperienceIcon;
