import { AnimatePresence } from 'framer-motion';
import React from 'react';

export default function PageCard({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <AnimatePresence>
      <div
        className={`w-full h-[600px] border border-primary-900 rounded-xl bg-opacity-30 bg-gradient-to-br from-[#737373] to-[#FCF8F4] flex justify-center items-center ${className}`}
      >
        <div className="w-[98%] h-[97%] rounded-xl border border-secondary-[#717171] bg-secondary-400 overflow-hidden opacity-100 relative">
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
}
