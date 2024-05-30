"use client";
import { ConfettiAnimation } from "@/app/components/Confetti";
import { PaperIcon } from "@/icons/PaperIcon";
import { RockIcon } from "@/icons/RockIcon";
import { ScissorsIcon } from "@/icons/ScissorsIcon";
import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";

enum OPTIONS_ENUM {
  ROCK = "ROCK",
  PAPER = "PAPER",
  SCISSORS = "SCISSORS",
}

const USER_WIN_MESSAGE = "Wooohooo you win. LFG 🎉";
const ADMIN_WIN_MESSAGE = "PC wins. Hey, you can try again 😭";
const DRAW_MESSAGE = `Dang! It's a draw 🏳️`;

const ICON_CLASSES = "h-24 w-24 md:w-40 md:h-40 rotate-90 scale-x-[-1]";
const options = [
  {
    icon: <RockIcon className={"h-24 w-24 md:w-40 md:h-40 rotate-90"} />,
    label: OPTIONS_ENUM.ROCK,
  },
  {
    icon: <PaperIcon className={ICON_CLASSES} />,
    label: OPTIONS_ENUM.PAPER,
  },
  {
    icon: <ScissorsIcon className={ICON_CLASSES} />,
    label: OPTIONS_ENUM.SCISSORS,
  },
];

const outcomes = {
  ROCK: { ROCK: "draw", PAPER: "admin", SCISSORS: "user" },
  PAPER: { ROCK: "user", PAPER: "draw", SCISSORS: "admin" },
  SCISSORS: { ROCK: "admin", PAPER: "user", SCISSORS: "draw" },
};

export const RockPaperScissors = () => {
  const [userSelects, setUserSelects] = useState<OPTIONS_ENUM | null>(null);
  const [adminSelects, setAdminSelects] = useState<OPTIONS_ENUM | null>(null);

  const handleAdminSelect = () => {
    const updatedAdminSelection =
      options[Math.floor(Math.random() * options.length)].label;
    setAdminSelects(updatedAdminSelection);
  };

  const resetStates = () => {
    setUserSelects(null);
    setAdminSelects(null);
  };

  const handleUserSelect = (selection: OPTIONS_ENUM) => {
    resetStates();
    setTimeout(() => {
      setUserSelects(selection);
      handleAdminSelect();
    }, 100);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const tempEventKey = event.key.toLocaleUpperCase();
      if (tempEventKey === "R") {
        handleUserSelect(OPTIONS_ENUM.ROCK);
      } else if (tempEventKey === "P") {
        handleUserSelect(OPTIONS_ENUM.PAPER);
      } else if (tempEventKey === "S") {
        handleUserSelect(OPTIONS_ENUM.SCISSORS);
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const winningMessage = useMemo(() => {
    if (userSelects && adminSelects) {
      const result = outcomes[userSelects][adminSelects];
      if (result === "admin") {
        return ADMIN_WIN_MESSAGE;
      } else if (result === "user") {
        return USER_WIN_MESSAGE;
      } else {
        return DRAW_MESSAGE;
      }
    }
  }, [userSelects, adminSelects]);

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 2000);
  }, [winningMessage]);

  const userSelectedIcon = options.find(
    (option) => option.label === userSelects
  )?.icon;
  const adminSelectedIcon = options.find(
    (option) => option.label === adminSelects
  )?.icon;

  return (
    <div className="pb-10 overflow-scroll mt-20 md:mt-12 flex flex-col gap-20 items-center">
      <div className="flex">
        {options.map((item) => (
          <button key={item.label} onClick={() => handleUserSelect(item.label)}>
            <div>{item.icon}</div>
            {item.label === OPTIONS_ENUM.ROCK && (
              <div>
                Click <span className="hidden md:inline">or press R</span>
              </div>
            )}
            {item.label === OPTIONS_ENUM.PAPER && (
              <div>
                Click <span className="hidden md:inline">or press P</span>
              </div>
            )}
            {item.label === OPTIONS_ENUM.SCISSORS && (
              <div>
                Click <span className="hidden md:inline">or press S</span>
              </div>
            )}
          </button>
        ))}
      </div>
      <div className="flex">
        {userSelectedIcon && (
          <div className="flex flex-col gap-4 items-center">
            <div className="underline underline-offset-4">You selected</div>
            <motion.div
              animate={{
                y: [0, -10, 10, 0],
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            >
              {userSelectedIcon}
            </motion.div>
          </div>
        )}
        {adminSelectedIcon && (
          <div className="flex flex-col gap-4 items-center">
            <div className="underline underline-offset-4">PC selected</div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                y: [0, -10, 10, 0],
                opacity: 1,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.2,
              }}
            >
              <div className="rotate-180 scale-y-[-1]">{adminSelectedIcon}</div>
            </motion.div>
          </div>
        )}
      </div>
      {userSelects && adminSelects && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-semibold md:font-medium text-lg md:text-xl"
        >
          {winningMessage}
        </motion.div>
      )}
      {winningMessage === USER_WIN_MESSAGE && showConfetti && (
        <ConfettiAnimation />
      )}
    </div>
  );
};
