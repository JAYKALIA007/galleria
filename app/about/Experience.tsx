"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import {
  DRIVE_RESUME_LINK,
  RIZZLE_ABOUT,
  TCS_ABOUT,
  TOPLYNE_ABOUT,
} from "./constants";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

const SPRING_ANIMATION = { duration: 1, type: "spring" };
const FINAL_STYLES = { opacity: 1, x: 0 };
const SEE_MORE_LESS_BUTTON_STYLES =
  "text-xs cursor-pointer hover:underline decoration-blue-500 underline-offset-4 flex justify-start";

export const Experience: React.FC = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="flex flex-col gap-10">
      <motion.section
        initial={{ opacity: 0, x: "40vw" }}
        animate={FINAL_STYLES}
        transition={{ ...SPRING_ANIMATION, delay: 1 }}
      >
        <ExperienceCard experience={RIZZLE_ABOUT} />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, x: "-40vw" }}
        animate={FINAL_STYLES}
        transition={{ ...SPRING_ANIMATION, delay: 1.5 }}
      >
        <ExperienceCard experience={TOPLYNE_ABOUT} />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, x: "40vw" }}
        animate={FINAL_STYLES}
        transition={{ ...SPRING_ANIMATION, delay: 2 }}
      >
        <ExperienceCard experience={TCS_ABOUT} />
      </motion.section>
      <Link
        href={DRIVE_RESUME_LINK}
        target="_blank"
        className="hover:underline decoration-blue-700 dark:decoration-blue-500 underline-offset-4 flex gap-1 items-center hover:text-inherit"
      >
        <div
          className="flex gap-1 items-center"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          View Full Résumé
          <motion.button animate={isHover ? { y: -3, x: 3 } : { y: 0, x: 0 }}>
            <ExternalLinkIcon height={"16px"} width={"16px"} />
          </motion.button>
        </div>
      </Link>
    </div>
  );
};

type ExperienceCardPropsType = {
  experience: {
    start: string;
    end: string;
    designation: string;
    type: string;
    companyName: string;
    skills: string[];
    description: string;
    companyUrl: string;
  };
};

const ExperienceCard: React.FC<ExperienceCardPropsType> = ({ experience }) => {
  const {
    start,
    end,
    designation,
    type,
    companyName,
    skills,
    description,
    companyUrl,
  } = experience;

  const [showSeeMore, setShowSeeMore] = useState(description.length > 150);

  return (
    <div className="flex gap-10 rounded-lg">
      <div className="font-light dark:font-thin mt-1 text-xs">
        {`${start} - ${end}`}
      </div>
      <div className="flex flex-col gap-4 w-[450px]">
        <Link href={companyUrl} target="_blank" className="cursor-pointer">
          <div className="flex flex-col gap-1">
            <div className="md:text-base font-semibold">
              {designation} - {companyName}
            </div>
            <div className="font-light dark:font-thin text-xs">{type}</div>
          </div>
        </Link>
        {showSeeMore && (
          <>
            <div className="leading-6">{description.slice(0, 100)}...</div>
            <div className="flex flex-wrap gap-3">
              <Skills skills={skills} />
            </div>
          </>
        )}
        <AnimatePresence>
          {showSeeMore ? (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={SEE_MORE_LESS_BUTTON_STYLES}
              onClick={() => setShowSeeMore(false)}
              aria-label="See more"
            >
              See more...
            </motion.button>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="w-full overflow-hidden leading-6"
              >
                {description}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-100vh" }}
                className="flex flex-wrap gap-3"
              >
                <Skills skills={skills} />
              </motion.div>
              <motion.button
                className={SEE_MORE_LESS_BUTTON_STYLES}
                onClick={() => setShowSeeMore(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                aria-label="See less"
              >
                See less...
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Skills = ({ skills }: { skills: string[] }) => {
  return (
    <>
      {skills.map((skill) => (
        <div
          key={skill}
          className="border px-3 py-1 rounded-full border-gray-300 dark:border-gray-800 text-[10px] md:text-xs"
        >
          {skill}
        </div>
      ))}
    </>
  );
};
