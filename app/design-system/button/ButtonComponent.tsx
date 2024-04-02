import React from "react";

export enum ButtonVariantType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
}

type ButtonComponentPropsType = {
  content?: string;
  className?: string;
  children?: React.ReactNode;
  buttonVariant?: ButtonVariantType;
};

const buttonVariants = {
  variant: {
    primary: `bg-gray-900 text-gray-50 border-gray-800 dark:border-gray-100 dark:bg-gray-50 dark:text-gray-900`,
    secondary: `bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-gray-100 border-none`,
    danger:
      "text-gray-50 bg-red-800 border-red-800 dark:bg-red-900 dark:border-red-900",
  },
};

export const ButtonComponent: React.FC<ButtonComponentPropsType> = ({
  content = "Button",
  className = "",
  children,
  buttonVariant = ButtonVariantType.PRIMARY,
}) => {
  const variantClasses = buttonVariants.variant[buttonVariant];
  return (
    <div
      className={`border rounded flex gap-1 justify-center items-center px-3 py-1.5 cursor-pointer w-fit ${variantClasses} ${className}`}
    >
      {children ?? content}
    </div>
  );
};

/**

    1. Requirements
        - a basic button which has 
        - some text
        - padding
        - margin 
        - border radius
        - variants of small, medium, large based on which you decide the width of the button
        - border color
        - background color

        - add dark mode and light mode to buttons
        - add hover state to buttons - bg color
        - add all button events type
 */
