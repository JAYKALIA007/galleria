import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cross2Icon } from "@radix-ui/react-icons";
import { createPortal } from "react-dom";
import { ButtonComponent } from "../button/ButtonComponent";
import { ButtonSizeVariantType, ButtonThemeVariantType } from "../button/types";

export enum ToastVariantThemeType {
  DEFAULT = "default",
  DANGER = "danger",
}

export enum ToastPostionType {
  TOP_RIGHT = "top-right",
  BOTTOM_RIGHT = "bottom-right",
}

const toastVariants = {
  variant: {
    default: "border-gray-200 bg-white dark:bg-gray-950 dark:border-gray-800",
    danger:
      "border-red-800 bg-red-800 text-gray-50 hover:bg-red-800/85 dark:border-red-900 dark:bg-red-900",
  },
};

type ToastPropsType = {
  placement?: ToastPostionType;
  heading?: string;
  message?: string;
  duration?: number;
  onClose?: () => void;
  className?: string;
  theme?: ToastVariantThemeType;
  actionMessage?: string;
};

export const ToastComponent: React.FC<ToastPropsType> = ({
  heading = "",
  message = "Your message has been sent",
  duration = 3 * 1000,
  onClose,
  placement = ToastPostionType.BOTTOM_RIGHT,
  theme = ToastVariantThemeType.DEFAULT,
  actionMessage = "",
  className = "",
}) => {
  const [showToast, setShowToast] = useState(true);
  const [showCloseToastButton, setShowCloseToastButton] = useState(false);
  const [removeToast, setRemoveToast] = useState(false);

  const themeVariantClasses = toastVariants.variant[theme];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowToast(false);
      onClose && onClose();
    }, duration);
    return () => clearTimeout(timeout);
  }, [duration, onClose]);

  const placementClasses =
    placement === ToastPostionType.TOP_RIGHT ? "top-16 " : "bottom-5";
  const INITIAL_Y_AXIS_POSITION =
    placement === ToastPostionType.TOP_RIGHT ? "0%" : "30%";
  const FINAL_Y_AXIS_POSITION =
    placement === ToastPostionType.TOP_RIGHT ? "10%" : "0%";

  const handleRemoveToast = () => {
    setRemoveToast(true);
    setTimeout(() => {
      setShowToast(false);
      onClose && onClose();
    }, 80);
  };

  return (
    showToast &&
    createPortal(
      <motion.div
        className={`p-4 border rounded-lg w-96 fixed right-5 md:right-10 shadow-md ${themeVariantClasses} ${placementClasses} ${className}`}
        initial={{ y: INITIAL_Y_AXIS_POSITION, x: "0%" }}
        animate={{ y: FINAL_Y_AXIS_POSITION, x: removeToast ? "100%" : "0%" }}
        transition={{ duration: removeToast ? 0.1 : 0.2 }}
        onMouseEnter={() => setShowCloseToastButton(true)}
        onMouseLeave={() => setShowCloseToastButton(false)}
      >
        <Cross2Icon
          onClick={handleRemoveToast}
          className={`absolute top-1.5 right-1.5 cursor-pointer text-gray-500 ${
            showCloseToastButton ? "inline-block" : "hidden"
          } `}
        />
        <div className="flex justify-between items-center mr-4">
          <div className="flex flex-col gap-1">
            {heading && <div className="text-xs"> {heading}</div>}
            <div className={`${heading ? "text-[11px]" : "text-xs"}`}>
              {message}
            </div>
          </div>
          {actionMessage && (
            <ButtonComponent
              onClick={handleRemoveToast}
              size={ButtonSizeVariantType.XS}
              theme={ButtonThemeVariantType.GHOST}
            >
              {actionMessage}
            </ButtonComponent>
          )}
        </div>
      </motion.div>,
      document.body
    )
  );
};
