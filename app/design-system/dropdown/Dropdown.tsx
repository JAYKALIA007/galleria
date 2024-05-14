"use client";

import React, { ReactNode } from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export const Dropdown = DropdownPrimitive.Root;

export const DropdownTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <DropdownPrimitive.Trigger
      {...props}
      className={`${styles.dropdownTrigger} ${className}`}
      ref={ref}
    >
      {children}
    </DropdownPrimitive.Trigger>
  );
});

export const DropdownContent = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Content>
>(({ className, sideOffset = 10, children, ...props }, ref) => {
  return (
    <DropdownPrimitive.Portal>
      <DropdownPrimitive.Content
        side="bottom"
        align="start"
        sideOffset={sideOffset}
        {...props}
        ref={ref}
      >
        <motion.div
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          className={`${styles.dropdownContent} ${className}`}
        >
          {children}
        </motion.div>
      </DropdownPrimitive.Content>
    </DropdownPrimitive.Portal>
  );
});

export const DropdownItem = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  const disabledClass = props.disabled
    ? "cursor-not-allowed hover:bg-white hover:dark:bg-gray-950"
    : "";
  return (
    <DropdownPrimitive.Item
      className={`${styles.dropdownItem} ${className} ${disabledClass}`}
      disabled={props.disabled}
      {...props}
      ref={ref}
    >
      {children}
    </DropdownPrimitive.Item>
  );
});

export const DropdownHeader = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${styles.dropdownHeader} ${className}`}>{children}</div>
  );
};

export const DropdownSubGroup = DropdownPrimitive.Sub;

export const DropdownSubGroupTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubTrigger>
>(({ className, children, ...props }, ref) => {
  return (
    <DropdownPrimitive.SubTrigger
      className={`${styles.dropdownItem}
        flex justify-between items-center ${className}`}
      {...props}
      ref={ref}
    >
      <div>{children}</div>
      <ChevronRightIcon height={16} />
    </DropdownPrimitive.SubTrigger>
  );
});

export const DropdownSubGroupContent = React.forwardRef<
  React.ElementRef<typeof DropdownPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownPrimitive.SubContent>
>(({ className, children, ...props }, ref) => {
  return (
    <DropdownPrimitive.Portal>
      <DropdownPrimitive.SubContent {...props}>
        <motion.div
          initial={{ y: 5 }}
          animate={{ y: 0 }}
          className={`${styles.dropdownContent} ${className}`}
          ref={ref}
        >
          {children}
        </motion.div>
      </DropdownPrimitive.SubContent>
    </DropdownPrimitive.Portal>
  );
});

Dropdown.displayName = "Dropdown";
DropdownTrigger.displayName = "DropdownTrigger";
DropdownContent.displayName = "DropdownContent";
DropdownItem.displayName = "DropdownItem";
DropdownHeader.displayName = "DropdownHeader";

DropdownSubGroup.displayName = "DropdownSubGroup";
DropdownSubGroupTrigger.displayName = "DropdownSubGroupTrigger";
DropdownSubGroupContent.displayName = "DropdownSubGroupContent";

const styles = {
  dropdownContent: `p-1.5 border flex flex-col gap-1 shadow-lg rounded-md min-w-32 md:min-w-40 border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950`,
  dropdownHeader: `text-sm font-semibold border-b dark:border-gray-800 p-2`,
  dropdownItem: `text-xs p-2 cursor-pointer rounded-md hover:bg-gray-200 hover:dark:bg-gray-800 disabled:cursor-not-allowed`,
  dropdownTrigger: `h-9 px-3 text-xs border rounded-md flex justify-center items-center cursor-pointer w-20 disabled:cursor-not-allowed disabled:opacity-50 border-gray-200 bg-white hover:bg-gray-200 dark:border-gray-800  dark:bg-gray-950 dark:text-white dark:hover:bg-gray-800`,
};
