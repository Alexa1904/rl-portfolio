import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ResponsibilitiesCard() {
  const [flip, setFlip] = useState(true);

  return (
    <div className="w-1/3 h-20 hover:shadow-shinningCard">
      <div className="w-11/12 h-full">
        <motion.div
          transition={{ duration: 0.7 }}
          animate={{ rotateY: flip ? 0 : 180 }}
          className="w-full h-full"
        >
          <motion.div
            transition={{ duration: 0.7 }}
            animate={{ rotateY: flip ? 0 : 180 }}
            className="w-full h-full rounded-lg bg-secondary-300"
          >
            <motion.div
              transition={{ duration: 0.7 }}
              animate={{ rotateY: flip ? 0 : 180 }}
              style={{ backfaceVisibility: 'hidden' }}
              className=""
            ></motion.div>
            <motion.div
              initial={{ rotateY: 180 }}
              animate={{ rotateY: flip ? 180 : 0 }}
              // style={{ display: flip ? "none" : "block" }}
              transition={{ duration: 0.7 }}
              style={{ backfaceVisibility: 'hidden' }}
            >
              Back Side
            </motion.div>
            <button onClick={() => setFlip((prevState) => !prevState)}>
              Click me
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
