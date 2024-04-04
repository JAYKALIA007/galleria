import React from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

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
  isLoading?: boolean;
  loadingStateMessage?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariants = {
  variant: {
    primary: `bg-gray-900 text-gray-50 hover:bg-gray-900/85 border-gray-800 dark:border-gray-100 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/85`,
    secondary: `bg-zinc-100 text-zinc-900 hover:bg-zinc-100/85 dark:bg-zinc-800 dark:text-gray-100 dark:hover:bg-zinc-800/85 border-none`,
    danger:
      "text-gray-50 bg-red-800 hover:bg-red-800/85 border-red-800 dark:bg-red-900 dark:border-red-900 dark:hover:bg-red-900/85",
  },
};

export const ButtonComponent: React.FC<ButtonComponentPropsType> = ({
  content = "Button",
  className = "",
  children,
  buttonVariant = ButtonVariantType.PRIMARY,
  isLoading = false,
  loadingStateMessage = "Loading",
  ...props
}) => {
  const variantClasses = buttonVariants.variant[buttonVariant];

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
      className={`border rounded flex gap-1 justify-center items-center px-3 py-1.5 cursor-pointer w-fit disabled:cursor-not-allowed disabled:opacity-50 ${variantClasses} ${className}`}
      {...props}
    >
      {renderContent()}
    </button>
  );
};
