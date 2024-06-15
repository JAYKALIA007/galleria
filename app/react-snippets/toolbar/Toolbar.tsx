"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { MENU_OPTIONS } from "./constants";

const ACTIVE_BUTTON_CLASSES = "text-black dark:text-white";
const BUTTON_CLASSES =
  "h-10 px-3.5 py-1.5 text-xs md:text-sm relative dark:text-white";
const SPRING_ANIMATION_TRANSITION = {
  type: "spring",
  stiffness: 300,
  damping: 35,
};

export const Toolbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative flex gap-2">
      {MENU_OPTIONS.map((item, index) => (
        <motion.button
          key={item}
          className={classNames(
            BUTTON_CLASSES,
            "relative z-10",
            activeIndex === index ? ACTIVE_BUTTON_CLASSES : ""
          )}
          onClick={() => setActiveIndex(index)}
        >
          {item}
          {activeIndex === index && (
            <motion.div
              layoutId="activeBackground"
              className="absolute inset-0 bg-gray-800/10 dark:bg-white/10 rounded-md z-0"
              initial={false}
              transition={SPRING_ANIMATION_TRANSITION}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};
