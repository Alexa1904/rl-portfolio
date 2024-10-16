'use client';
import React from 'react';
import LogoIcon from '../icons/LogoIcon';
import { useLanguage } from '@/hooks/useLanguage';
import AnimatedNavBar from './AnimatedNavBar';
import ExternalLinks from './ExternalLinks';
import { AnimatePresence } from 'framer-motion';

export default function MainHeader() {
  const [language] = useLanguage();
  const [pathName, setPathName] = React.useState('/experience');
  return (
    <AnimatePresence>
      <div className="w-full flex flex-row justify-between text-white font-roboto mt-6">
        <div className="flex flex-row space-x-2 items-center justify-start w-[250px]">
          <LogoIcon className="w-14" />
          <div className="flex flex-col">
            <p className="text-xl font-bold">Reichel Larez</p>
            <p className="text-sm text-primary-200">
              {language?.header?.role ?? ''}
            </p>
          </div>
        </div>
        <AnimatedNavBar
          language={language}
          pathName={pathName}
          setPathName={setPathName}
          scrolled={false}
        />
        <ExternalLinks />
      </div>
    </AnimatePresence>
  );
}
