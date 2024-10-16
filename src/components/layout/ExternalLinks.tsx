import { externalLinks } from '@/lib/externalLinks';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { LanguageIcon } from '../icons';

export default function ExternalLinks() {
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
      <motion.button className="flex flex-col items-center group relative">
        <div className="w-12 h-12 flex items-center justify-center rounded-full group-hover:-translate-y-7 group-hover:bg-secondary-500 duration-700 text-primary-500">
          <LanguageIcon className="w-6 h-6" />
        </div>
        <div className="absolute w-12 h-11 flex items-end justify-center opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 duration-700">
          Language
        </div>
      </motion.button>
    </motion.div>
  );
}
