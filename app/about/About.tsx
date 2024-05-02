"use client";

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";
import { SlideInAnimationContainer } from "../components/SlideInAnimationContainer";
import {
  GITHUB_PROFILE_URL,
  GMAIL_ID_URL,
  LINKED_IN_PROFILE_URL,
  TWITTER_PROFILE_URL,
} from "./contants";

const About: React.FC = () => {
  return (
    <SlideInAnimationContainer>
      <div className="flex flex-col gap-4 text-xs md:text-sm">
        <div className="text-base md:text-lg font-semibold">
          Hey there, I&apos;m Jay - your friendly neighborhood web wizard!
        </div>
        <div className="leading-6">
          You can find me inspecting elements on random websites, crafting
          intuitive seamless interfaces, and preaching the good word of design
          systems. Oh, and you can also track me down on these socials...
        </div>
        <div className="flex w-full justify-end gap-4 items-center m">
          <AnimatedLink
            url={GITHUB_PROFILE_URL}
            icon={<GitHubLogoIcon height={"20px"} width={"20px"} />}
            label="GitHub Profile"
          />
          <AnimatedLink
            url={LINKED_IN_PROFILE_URL}
            icon={<LinkedInLogoIcon height={"20px"} width={"20px"} />}
            label="LinkedIn Profile"
          />
          <AnimatedLink
            url={TWITTER_PROFILE_URL}
            icon={<TwitterLogoIcon height={"20px"} width={"20px"} />}
            label="Twitter Profile"
          />
          <AnimatedLink
            url={`mailto:${GMAIL_ID_URL}`}
            icon={<Mail height={"20px"} width={"20px"} />}
            label="Send Email"
          />
        </div>
      </div>
    </SlideInAnimationContainer>
  );
};

export default About;

const AnimatedLink = ({
  url,
  icon,
  label,
}: {
  url: string;
  icon: ReactNode;
  label: string;
}) => (
  <Link href={url} target="_blank" className="">
    <motion.button
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.7 }}
      aria-label={label}
    >
      {icon}
    </motion.button>
  </Link>
);
