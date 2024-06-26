import React from "react";
import { ReloadIcon } from "@radix-ui/react-icons";
import { ButtonSizeVariantType, ButtonThemeVariantType } from "./types";

const buttonVariants = {
  variant: {
    primary: `border-gray-800 bg-gray-900 text-gray-50 hover:bg-gray-900/85 dark:border-gray-100 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/85`,
    secondary: `border-none bg-zinc-100 text-zinc-900 hover:bg-zinc-100/85 dark:bg-zinc-800 dark:text-gray-100 dark:hover:bg-zinc-800/85`,
    danger:
      "border-red-800 bg-red-800 text-gray-50 hover:bg-red-800/85 dark:border-red-900 dark:bg-red-900 dark:hover:bg-red-900/85",
    outline:
      "border-gray-200 bg-white hover:bg-gray-200 dark:border-gray-800  dark:bg-gray-950 dark:text-white dark:hover:bg-gray-800",
    ghost: "border-none hover:bg-gray-200 dark:hover:bg-gray-800",
  },
  size: {
    default: "h-10 px-3.5 py-1.5 text-sm",
    xs: "h-8 px-2 text-[10px]",
    sm: "h-9 px-3 text-xs",
    lg: "h-11 px-8 text-base",
  },
};

type ButtonComponentPropsType = {
  content?: string;
  className?: string;
  children?: React.ReactNode;
  theme?: ButtonThemeVariantType;
  size?: ButtonSizeVariantType;
  isLoading?: boolean;
  loadingStateMessage?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonComponent: React.FC<ButtonComponentPropsType> = ({
  content = "Button",
  className = "",
  children,
  theme = ButtonThemeVariantType.PRIMARY,
  size = ButtonSizeVariantType.DEFAULT,
  isLoading = false,
  loadingStateMessage = "Loading",
  ...props
}) => {
  const themeVariantClasses = buttonVariants.variant[theme];
  const sizeVariantClasses = buttonVariants.size[size];

  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          <span>{loadingStateMessage}</span>
        </>
      );
    } else {
      return children || content;
    }
  };

  return (
    <button
      className={`border rounded-md flex gap-1 justify-center items-center cursor-pointer w-fit disabled:cursor-not-allowed disabled:opacity-50 ${sizeVariantClasses} ${themeVariantClasses} ${className}`}
      {...props}
    >
      {renderContent()}
    </button>
  );
};
