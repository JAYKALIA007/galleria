"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SPRING_ANIMATION } from "./constants";

type SwitchPropsType = {
  disabled?: boolean;
  isChecked?: boolean;
  className?: string;
  label?: string;
  labelPosition?: string;
  fillColor?: string;
};
export const Switch: React.FC<SwitchPropsType> = ({
  className = "",
  label = "",
  disabled = false,
  isChecked = false,
  labelPosition = "left",
  fillColor = "bg-blue-500",
}) => {
  const [isOn, setIsOn] = useState(isChecked);
  let flexDirection;

  switch (labelPosition) {
    case "top":
      flexDirection = "flex-col justify-center";
      break;
    case "bottom":
      flexDirection = "flex-col-reverse justify-center";
      break;
    case "left":
      flexDirection = "flex-row items-center";
      break;
    case "right":
      flexDirection = "flex-row-reverse items-center";
      break;
    default:
      flexDirection = "flex-row items-center";
  }

  return (
    <div className={`flex gap-3 ${flexDirection}`}>
      {label && <div>{label}</div>}
      <button
        className={`w-12 h-7 p-1.5 flex items-center  cursor-pointer rounded-full disabled:cursor-not-allowed justify-start
      [&[data-isOn='true']]:justify-end
      ${isOn ? fillColor : "bg-gray-300 dark:bg-gray-800"}
      ${className}
      `}
        onClick={() => setIsOn(!isOn)}
        data-isOn={isOn}
        disabled={disabled}
      >
        <motion.div
          className={`w-4 h-4 bg-white rounded-full`}
          layout
          transition={SPRING_ANIMATION}
        />
      </button>
    </div>
  );
};
