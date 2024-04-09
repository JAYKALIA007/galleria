"use client";

import React, { useState } from "react";
import { ButtonComponent } from "../button/ButtonComponent";
import { ButtonSizeVariantType } from "../button/types";
import { motion } from "framer-motion";
import { Cross2Icon } from "@radix-ui/react-icons";
import { createPortal } from "react-dom";

const ToastPage = () => {
  const [showToast, setShowToast] = useState(false);
  return (
    <div className="flex flex-col gap-12 mb-10 p-4 md:w-4/5 lg:w-full mx-auto">
      <div className="my-5">Display a toast</div>

      <ButtonComponent
        size={ButtonSizeVariantType.SM}
        onClick={() => {
          setShowToast(true);
        }}
      >
        Show Toast
      </ButtonComponent>

      {showToast && (
        <Toast
          closeToast={() => setShowToast(false)}
          placement="bottom-right"
          heading="Uh oh! Something went wrong"
        />
      )}
    </div>
  );
};

export default ToastPage;

type ToastPropsType = {
  closeToast: () => void;
  placement?: "top-right" | "bottom-right";
  heading?: string;
  message?: string;
};

const Toast: React.FC<ToastPropsType> = ({
  closeToast,
  placement = "bottom-right",
  heading = "",
  message = "Your message has been sent",
}) => {
  const [showCloseToastButton, setShowCloseToastButton] = useState(false);
  const [removeToast, setRemoveToast] = useState(false);

  let placementClasses = "";

  if (placement === "bottom-right") {
    placementClasses = "bottom-5 right-10";
  } else {
    placementClasses = "top-10 right-10";
  }

  return createPortal(
    <motion.div
      className={`p-4 border border-gray-200 dark:border-gray-800 rounded-lg w-96 absolute ${placementClasses} `}
      initial={{ y: "30%", x: "0%" }}
      animate={{ y: "0%", x: removeToast ? "40%" : "0%" }}
      transition={{ duration: removeToast ? 0.1 : 0.2 }}
      onMouseEnter={() => setShowCloseToastButton(true)}
      onMouseLeave={() => setShowCloseToastButton(false)}
    >
      <Cross2Icon
        onClick={() => {
          setRemoveToast(true);
          setTimeout(() => {
            closeToast();
          }, 80);
        }}
        className={`absolute top-1.5 right-1.5 cursor-pointer text-gray-500 ${
          showCloseToastButton ? "inline-block" : "hidden"
        } `}
      />
      <div className="flex flex-col gap-1">
        {heading && <div className="text-xs"> {heading}</div>}
        <div className={`${heading ? "text-[11px]" : "text-xs"}`}>
          {message}
        </div>
      </div>
    </motion.div>,
    document.body
  );
};
