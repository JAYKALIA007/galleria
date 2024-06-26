"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import Link from "next/link";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

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
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.7 }}
          aria-label={label}
        >
          <Link href={url} target="_blank">
            {icon}
          </Link>
        </motion.button>
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
