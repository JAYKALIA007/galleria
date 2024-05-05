"use client";

import { motion } from "framer-motion";
import React from "react";
import { AnimatedIconLink } from "../components/AnimatedIconLink";
import {
  DRIVE_RESUME_LINK,
  GITHUB_PROFILE_URL,
  GMAIL_ID_URL,
  LINKED_IN_PROFILE_URL,
  TWITTER_PROFILE_URL,
} from "./constants";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Mail, FileText } from "lucide-react";

type SocialsPropsType = {};

export const Socials: React.FC<SocialsPropsType> = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-40vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 1, type: "spring" }}
      className="flex w-full justify-end gap-4 items-center m"
    >
      <AnimatedIconLink
        url={GITHUB_PROFILE_URL}
        icon={<GitHubLogoIcon height={"20px"} width={"20px"} />}
        label="GitHub Profile"
      />
      <AnimatedIconLink
        url={LINKED_IN_PROFILE_URL}
        icon={<LinkedInLogoIcon height={"20px"} width={"20px"} />}
        label="LinkedIn Profile"
      />
      <AnimatedIconLink
        url={TWITTER_PROFILE_URL}
        icon={<TwitterLogoIcon height={"20px"} width={"20px"} />}
        label="Twitter Profile"
      />
      <AnimatedIconLink
        url={`mailto:${GMAIL_ID_URL}`}
        icon={<Mail height={"20px"} width={"20px"} />}
        label="Send Email"
      />
      <AnimatedIconLink
        url={DRIVE_RESUME_LINK}
        icon={<FileText height={"20px"} width={"20px"} />}
        label="View Full Résumé"
      />
    </motion.div>
  );
};
