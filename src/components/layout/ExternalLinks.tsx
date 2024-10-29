'use client';
import { externalLinks } from '@/lib/externalLinks';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { LanguageIcon } from '../icons';
import { IAvailableLanguages } from '@/models';

interface ExternalLinksProps {
  availableLanguages: IAvailableLanguages;
  setLanguageId: React.Dispatch<React.SetStateAction<string>>;
}

export default function ExternalLinks({
  availableLanguages,
  setLanguageId,
}: ExternalLinksProps) {
  const [openList, setOpenList] = React.useState(false);

  return (
    <motion.div className="h-[70px] w-[250px] flex flex-row items-center justify-end transition-all space-x-3 text-sm">
      {externalLinks.map((link) => (
        <motion.button className="flex flex-col items-center group relative">
          <div className="w-12 h-12 flex items-center justify-center rounded-full group-hover:-translate-y-7 group-hover:bg-secondary-500 duration-700 text-primary-500">
            <div className="w-6 h-6">{link.icon}</div>
          </div>
          <div className="absolute w-12 h-11 flex items-end justify-center opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 duration-700">
            {link.name}
          </div>
        </motion.button>
      ))}
      <div className="relative">
        <motion.button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setOpenList(!openList);
          }}
          className="flex flex-col items-center group relative"
        >
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full text-primary-500 ${
              openList
                ? '-translate-y-7 bg-secondary-500'
                : 'group-hover:-translate-y-7 group-hover:bg-secondary-500 duration-700'
            }`}
          >
            <LanguageIcon className="w-6 h-6" />
          </div>
          <div
            className={`absolute w-12 h-11 flex items-end justify-center opacity-0  ${
              openList
                ? 'opacity-100 translate-y-0'
                : 'group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 duration-700'
            }`}
          >
            Language
          </div>
        </motion.button>
        <div
          className={`absolute z-50 w-52 bg-secondary-500 py-5 flex flex-col items-center border border-white rounded-xl right-0 duration-700 ${
            openList
              ? 'opacity-100 translate-y-4'
              : 'translate-y-[3.5rem] opacity-0 rotate-180'
          }`}
        >
          <p className="w-full text-center border-b border-white shadow-md pb-2">
            {availableLanguages?.title}
          </p>
          <div className="w-11/12 flex flex-col mt-3 space-y-5">
            {availableLanguages?.list?.map((item) => (
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                type="button"
                key={item?.id}
                className="w-full flex flex-col"
                onClick={(e) => {
                  e.preventDefault();
                  setLanguageId(item.id);
                  setOpenList(false);
                }}
              >
                <div className="w-full flex flex-row justify-between items-center">
                  <p>{item?.name}</p>
                  <p className="text-xs">{item?.level}</p>
                </div>
                <div className="w-full h-2 bg-white rounded-full mt-1">
                  <div
                    className={`duration-[1500ms] h-2 bg-primary-700 transition-all rounded-full ${
                      openList ? `${item?.width} delay-[800ms]` : 'w-1'
                    }`}
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
