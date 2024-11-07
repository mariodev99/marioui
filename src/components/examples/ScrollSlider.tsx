import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const ScrollSlider = () => {
  const { scrollY } = useScroll();

  const toRight: MotionValue = useTransform(scrollY, [0, 2000], [0, 250]);
  const toLeft: MotionValue = useTransform(scrollY, [0, 2000], [0, -250]);

  return (
    <motion.div className="">
      <div className="mb-0 md:mb-10 overflow-hidden relative flex justify-end">
        <motion.div
          style={{ x: toRight }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className=" w-50 flex flex-row-reverse justify-end gap-10 "
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="bg-red-500 h-80 w-80 rounded-2xl"></div>
          ))}
        </motion.div>
      </div>
      <div className="overflow-hidden relative w-full h-96 ">
        <div className="flex absolute left-0 ">
          <motion.div
            style={{ x: toLeft }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-50 flex gap-10 "
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="bg-blue-500 h-80 w-80 rounded-2xl"
              ></div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollSlider;
