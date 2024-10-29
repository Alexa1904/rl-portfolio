import React from 'react';

export default function Background() {
  return (
    <div className="w-full h-full absolute bg-transparent flex justify-around">
      <div className="line ml-[30%] delay-1000" />
      <div className="line -ml-[30%]" />
      <div className="line delay-[2000ms]" />
    </div>
  );
}
