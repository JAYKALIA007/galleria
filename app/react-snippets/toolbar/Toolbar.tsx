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

const TWEEN_ANIMATION_TRANSITION = {
  type: "tween",
  duration: 0.1,
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

export const Toolbar2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  return (
    <div className="relative flex gap-2">
      {MENU_OPTIONS.map((item, index) => (
        <motion.button
          key={index}
          className={classNames(
            BUTTON_CLASSES,
            "relative z-10",
            hoveredIndex === index ? ACTIVE_BUTTON_CLASSES : ""
          )}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(-1)}
          onClick={() => setActiveIndex(index)}
        >
          {item}
          {hoveredIndex === index && (
            <motion.div
              layoutId="hoveredBg"
              className="absolute inset-0 bg-gray-800/10 dark:bg-white/10 rounded-md z-0"
              initial={false}
              transition={SPRING_ANIMATION_TRANSITION}
            />
          )}
          {activeIndex === index && (
            <motion.div
              layoutId="activeBg"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-950 dark:bg-white rounded-md"
              initial={false}
              transition={TWEEN_ANIMATION_TRANSITION}
            ></motion.div>
          )}
        </motion.button>
      ))}
    </div>
  );
};
