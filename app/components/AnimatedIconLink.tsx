"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import Link from "next/link";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export const AnimatedIconLink = ({
  url,
  icon,
  label,
}: {
  url: string;
  icon: ReactNode;
  label: string;
}) => (
  <TooltipPrimitive.Provider>
    <TooltipPrimitive.Root delayDuration={300}>
      <TooltipPrimitive.Trigger asChild>
        <Link href={url} target="_blank">
          <motion.button
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.7 }}
            aria-label={label}
          >
            {icon}
          </motion.button>
        </Link>
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          className="text-[10px] lg:text-xs border border-gray-300 dark:border-gray-800 p-1 rounded-md"
          sideOffset={10}
        >
          {label}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
);
