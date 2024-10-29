'use client';
import React from 'react';
import { motion } from 'framer-motion';
import BackGround from '../introCard/Background';
import ExternalLinkIcon from '../../icons/ExternalLinkIcon';
import CircledArrowIcon from '../../icons/CircledArrowIcon';
import PageCard from '@/components/common/PageCard';
import useMousePosition from '@/hooks/useMousePosition';
import { ILanguage } from '@/models';

interface IntroCardProps {
  innerWidth: number;
  language: ILanguage;
}

export default function IntroCard({ innerWidth, language }: IntroCardProps) {
  const [introCardText, setIntroCardText] = React.useState(
    language.experiences?.introCard
  );
  const mousePosition = useMousePosition();
  const [moveX, setMoveX] = React.useState(0);
  const [moveX2, setMoveX2] = React.useState(0);

  React.useEffect(() => {
    if (language) {
      setIntroCardText(language.experiences?.introCard);
    }
  }, [language]);

  React.useEffect(() => {
    const percentage = Math.round(
      ((mousePosition?.x ?? 0 * 100) / innerWidth) * 100
    );

    let x = 0;
    let x2 = 0;

    if (percentage < 50) {
      x = 50 / (percentage === 0 ? 1 : percentage);
      x = 20 / (percentage === 0 ? 1 : percentage);
    } else {
      x = -(percentage * 40) / 100;
      x2 = -(percentage * 20) / 100;
    }

    setMoveX(x);
    setMoveX2(x2);
  }, [innerWidth, mousePosition?.x]);

  return (
    <PageCard>
      <BackGround />
      <motion.div
        animate={{
          x: moveX2,
        }}
        transition={{ duration: 1 }}
        className="triangle absolute top-6 left-3"
      />
      <motion.div className="w-full absolute flex justify-center top-[150px]">
        <motion.p
          animate={{
            x: -moveX2,
          }}
          transition={{ duration: 2 }}
          className="text-6xl font-sairaStencilOne text-white font-bold"
        >
          FULL-STACK
        </motion.p>
      </motion.div>
      <motion.div className="absolute w-full h-full flex flex-row items-end justify-center">
        <motion.div
          animate={{
            x: moveX,
          }}
          transition={{ duration: 2 }}
          className="triangle-middle"
        />
      </motion.div>
      <motion.div className="w-full absolute flex flex-col items-center top-[230px]">
        <motion.p
          animate={{
            x: -moveX,
          }}
          transition={{ duration: 2 }}
          className="font-sairaStencilOne text-7xl text-color font-bold"
        >
          {String(introCardText?.role).toLocaleUpperCase()}
        </motion.p>
        <motion.a
          whileHover={{
            scale: 1.03,
            color: '#111111',
          }}
          type="button"
          href={introCardText?.urlLocation}
          target="_blank"
          className="flex flex-row mt-6 items-center space-x-2 text-white"
        >
          <p className="text-xl font-roboto">{introCardText?.location}</p>
          <ExternalLinkIcon className="w-4 h-4" />
        </motion.a>
      </motion.div>
      <motion.div
        animate={{
          x: moveX,
        }}
        transition={{ duration: 2 }}
        className="absolute triangle-right bottom-28 -right-14"
      />
      <motion.div className="w-full flex flex-col items-center absolute bottom-4 font-roboto">
        <p className="text-lg text-white">{introCardText?.text1}</p>
        <p className="text-xl text-primary-600">{introCardText?.text2}</p>
        <div className="text-primary-500 mt-2">
          <CircledArrowIcon className="w-7 h-7" />
        </div>
      </motion.div>
    </PageCard>
  );
}
