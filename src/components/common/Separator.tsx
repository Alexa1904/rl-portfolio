import React from 'react';

interface SeparatorProps {
  text: string;
  className?: string;
}

export default function Separator({ text, className }: SeparatorProps) {
  return (
    <div
      className={`w-full h-32 flex flex-row items-center relative ${className}`}
    >
      <div className="w-full h-[2px] bg-white" />
      <div className="absolute w-full h-full flex justify-center items-center">
        <p className="px-11 font-sairaStencilOne text-2xl text-white bg-background">
          {text}
        </p>
      </div>
    </div>
  );
}
