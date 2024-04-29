import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { ReactNode, forwardRef } from "react";
import "./styles.css";

// export enum AccordionType {
//   SINGLE = "single",
//   MULTIPLE = "multiple",
// }

export const Accordion = forwardRef(
  ({
    children,
    className = "",
    type = "single",
  }: {
    children: ReactNode;
    className?: string;
    type?: "single" | "multiple";
  }) => (
    <AccordionPrimitive.Root
      type={type}
      collapsible
      className={`w-[320px] flex flex-col rounded-lg border border-gray-300 divide-gray-300 dark:border-gray-800 text-sm divide-y dark:divide-gray-800 ${className}`}
    >
      {children}
    </AccordionPrimitive.Root>
  )
);

export const AccordionItem = forwardRef(
  ({
    children,
    value,
    className = "",
  }: {
    children: ReactNode;
    value: string;
    className?: string;
  }) => {
    return (
      <AccordionPrimitive.Item
        value={value}
        className={`p-4 flex flex-col gap-4 AccordionItem ${className}`}
      >
        {children}
      </AccordionPrimitive.Item>
    );
  }
);

export const AccordionTrigger = forwardRef(
  ({
    children,
    className = "",
  }: {
    children: ReactNode;
    className?: string;
  }) => {
    return (
      <AccordionPrimitive.Trigger
        className={`flex justify-between items-center hover:cursor-pointer w-full AccordionTrigger ${className} `}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </AccordionPrimitive.Trigger>
    );
  }
);

export const AccordionContent = forwardRef(
  ({
    children,
    className = "",
  }: {
    children: ReactNode;
    className?: string;
  }) => {
    return (
      <AccordionPrimitive.Content
        className={`max-h-16 AccordionContent ${className}`}
      >
        {children}
      </AccordionPrimitive.Content>
    );
  }
);

Accordion.displayName = "Accordion";
AccordionItem.displayName = "AccordionItem";
AccordionTrigger.displayName = "AccordionTrigger";
AccordionContent.displayName = "AccordionContent";
