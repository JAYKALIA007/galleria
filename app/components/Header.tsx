"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";
import { ABOUT_PAGE } from "../constants";
import { AnimatePresence, motion } from "framer-motion";
import {
  FigmaLogoIcon,
  MagicWandIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

const TWITTER_USERNAME = `@jay_kalia07`;
const HEADER_CYCLE_INTERVAL = 2 * 1000;
const HEADER_TEXTS_WITH_ICON = [
  {
    label: TWITTER_USERNAME,
    icon: <PersonIcon />,
  },
  {
    label: `Frontend`,
    icon: <MagicWandIcon />,
  },
  {
    label: `0 --> 1 Product`,
    icon: <RocketIcon />,
  },
  {
    label: `Design Systems`,
    icon: <FigmaLogoIcon />,
  },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isNameHovered, setIsNameHovered] = useState(false);

  const hoverTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsNameHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsNameHovered(false);
    }, 1000);
  };

  return (
    <div className="m-2 p-2 relative flex justify-between items-center">
      <div
        className="w-full gap-28 sm:gap-20 md:gap-96 lg:gap-40 xl:gap-96 flex items-baseline mx-2 md:mx-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href="/" className="underline underline-offset-4 text-lg">
          Home
        </Link>
        <div id="animated-header">
          {isNameHovered ? (
            <TwitterUrlHeader pathname={pathname} />
          ) : (
            <AnimatedHeader />
          )}
        </div>
      </div>
      <div className="">
        <ModeToggle />
      </div>
    </div>
  );
};

const AnimatedHeader: React.FC = React.memo(() => {
  const [currentHeaderIndex, setCurrentHeaderIndex] = useState(0);

  useEffect(() => {
    const isShowingUsername =
      typeof window !== "undefined" &&
      document
        .getElementById("animated-header")
        ?.textContent?.includes(TWITTER_USERNAME);

    setCurrentHeaderIndex(isShowingUsername ? 1 : 0);

    const interval = setInterval(() => {
      setCurrentHeaderIndex(
        (prev) => (prev + 1) % HEADER_TEXTS_WITH_ICON.length
      );
    }, HEADER_CYCLE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={HEADER_TEXTS_WITH_ICON[currentHeaderIndex].label}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.3,
        }}
        className={`flex gap-1 items-center text-sm`}
      >
        <div id="animated-header" className="animated-header">
          {HEADER_TEXTS_WITH_ICON[currentHeaderIndex].label}
        </div>
        {HEADER_TEXTS_WITH_ICON[currentHeaderIndex].icon}
      </motion.div>
    </AnimatePresence>
  );
});

AnimatedHeader.displayName = "AnimatedHeader";

const TwitterUrlHeader = ({ pathname }: { pathname: string }) => {
  return (
    <Link
      href={ABOUT_PAGE}
      className={`hover:text-blue-700 hover:dark:text-blue-500 hover:underline underline-offset-4 text-sm flex gap-1 items-center ${
        pathname === ABOUT_PAGE && "text-blue-700 dark:text-blue-500 underline"
      }`}
    >
      {TWITTER_USERNAME} <PersonIcon />
    </Link>
  );
};
