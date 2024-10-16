'use client';
import { ILanguage } from '@/models';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { ExperienceIcon } from '../icons';

interface AnimatedNavBar {
  language: ILanguage;
  pathName: string;
  setPathName: React.Dispatch<React.SetStateAction<string>>;
  scrolled: boolean;
}

export default function AnimatedNavBar({
  language,
  pathName,
  setPathName,
  scrolled,
}: AnimatedNavBar) {
  const [dis, setDis] = React.useState(0);

  return (
    <AnimatePresence>
      <motion.div
        className={`h-[70px] w-[400px] rounded-full bg-secondary-500 flex items-center justify-center`}
      >
        <motion.div className="w-[350px] flex flex-row h-full relative transition-all">
          <motion.span
            animate={{
              x: dis,
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`absolute bg-secondary-500 border-4 border-background w-[70px] h-[70px]  -top-10 rounded-full -z-0`}
          />
          {language.routes.map((route, index) => (
            <motion.button
              whileHover={{
                scale: pathName.includes(route.href) ? 1 : 1.15,
              }}
              onClick={(e) => {
                e.preventDefault();
                setPathName(route.href);
                setDis(index * 70);
              }}
              className="w-[70px] h-full flex justify-center items-center text-white"
            >
              <motion.div
                className={`w-7 h-7 z-50 text-primary-500 ${
                  pathName.includes(route.href)
                    ? '-translate-y-10 duration-700'
                    : 'translate-y-0 hover:text-primary-200'
                }`}
              >
                <div className="w-7 h-7">{route.icon}</div>
              </motion.div>
              <div className="absolute h-10 flex items-end">
                <span
                  className={`${
                    pathName.includes(route.href)
                      ? 'translate-y-0 duration-700 opacity-100'
                      : 'translate-y-11 opacity-0'
                  }`}
                >
                  {route.text}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
        {/* <ul className="flex relative transition-all">
          <motion.span
            animate={{
              x: dis,
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`indicator bg-secondary-500 border-4 border-background h-16 w-16 absolute -top-7 rounded-full ml-2`}
          />
          {language?.routes?.map((route, index) => (
            <li
              onClick={(e) => {
                e.preventDefault();
                setDis(index * 80);
                setPathName(route.href);
              }}
              key={`${route?.id}-routes-${index}`}
              className="w-20 z-20"
            >
              <div className="link flex flex-col text-center items-center pt-3">
                <span className="w-7 h-7 flex justify-center items-center">
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      dur: 0.5,
                    }}
                    className={`duration-500 hover:text-primary-700 ${
                      pathName.includes(route?.href) && '-mt-[50px]'
                    }`}
                  >
                    {route?.icon}
                  </motion.div>
                </span>
                <span
                  className={`${
                    pathName.includes(route?.href)
                      ? 'translate-y-0 duration-700 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                >
                  {route?.text}
                </span>
              </div>
            </li>
          ))}
        </ul> */}
      </motion.div>
    </AnimatePresence>
  );
}
