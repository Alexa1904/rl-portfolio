'use client';
import React from 'react';

interface TCSOverviewSectionProps {
  text: string;
}

export default function TCSOverviewSection({ text }: TCSOverviewSectionProps) {
  const [textData, setTextData] = React.useState('');

  React.useEffect(() => {
    setTextData(text);
    console.log(text);
  }, [text]);
  return (
    <div className="w-[92%] h-[92%] bg-tcs-background bg-cover border-[8px] border-white rounded-md shadow-md relative">
      <div className="absolute right-0 w-2/4 h-[12%] bg-pink-400 flex flex-row justify-end items-center px-3">
        <img
          className="invert"
          src="/images/TCS_logo.png"
          color="white"
          alt="TCS logo"
          width={120}
          height={60}
        />
      </div>
      <div className="absolute bottom-0 w-2/5 h-[12%] bg-secondary-700" />
      <div className="absolute w-full h-full flex justify-center items-center">
        <div className="h-[76%] w-[400px] backdrop-blur-sm  bg-purple-500/70 flex flex-col items-center justify-center">
          <p className="w-4/5 text-white font-roboto text-xl text-center font-bold">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
