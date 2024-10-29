import { motion } from 'framer-motion';
import { useState } from 'react';

interface ResponsibilitiesCardProps {
  responsibility: {
    id: string;
    name: string;
    description: string;
  };
  flip: boolean;
  index: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  activeIndex: number;
}

export default function ResponsibilitiesCard({
  responsibility,
  flip,
  index,
  setActiveIndex,
  activeIndex,
}: ResponsibilitiesCardProps) {
  const cardVariants = {
    flipped: {
      height: '300px',
    },
    unflipped: {
      height: '80px',
    },
  };

  return (
    <motion.div
      animate={flip ? 'unflipped' : 'flipped'}
      transition={{ duration: 0.5 }}
      initial="unflipped"
      variants={cardVariants}
      className={`w-1/3 flex justify-center ${flip ? 'unflipped' : 'flipped'}`}
    >
      <motion.div className="w-11/12 h-full">
        <motion.div
          transition={{ duration: 0.7 }}
          animate={{ rotateY: flip ? 0 : 180 }}
          className="w-full h-full"
        >
          <motion.button
            onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
            transition={{ duration: 0.7 }}
            animate={{ rotateY: flip ? 0 : 180 }}
            className={`w-full h-full font-roboto rounded-lg relative overflow-hidden border border-secondary-50 ${
              flip
                ? 'before:absolute before:w-full before:h-full before:-left-[100%] before:bg-card before:transition-all before:duration-500 hover:before:left-[100%] hover:shadow-card'
                : 'shadow-card'
            }`}
          >
            <motion.div
              transition={{ duration: 0.7 }}
              animate={{ rotateY: flip ? 0 : 180 }}
              style={{ backfaceVisibility: 'hidden' }}
              className={`${
                flip
                  ? 'w-full h-full flex justify-center items-center opacity-100'
                  : 'opacity-0 w-0 h-0'
              }`}
            >
              <div className="w-11/12 flex justify-center">
                <p className="text-secondary-50 text-lg w-full text-center">
                  {responsibility.name}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ rotateY: 180 }}
              animate={{ rotateY: flip ? 180 : 0 }}
              // style={{ display: flip ? "none" : "block" }}
              transition={{ duration: 0.7 }}
              style={{ backfaceVisibility: 'hidden' }}
              className="w-full h-full flex justify-center items-center rounded-lg"
            >
              <p className="w-11/12 text-secondary-50 text-lg text-center">
                {responsibility.description}
              </p>
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
