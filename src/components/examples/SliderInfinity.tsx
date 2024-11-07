"use client";

import React from "react";
import { motion } from "framer-motion";

// Define the array of slides with numbers

const SliderInfinity = () => {
  const slides = ["Hello", "Hola", "Ciao"];
  const duplicatedSlides = [...slides, ...slides];
  const widthSlider = `${100 / slides.length}%`;

  return (
    <motion.div
      className="relative w-full overflow-hidden bg-greenprimary py-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="flex"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: widthSlider }}
          >
            <div className="flex flex-col items-center justify-center h-full text-md md:text-5xl">
              {slide}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SliderInfinity;
