"use client";

import React, { useState } from "react";
import { CodeSample } from "./CodeSample";

type ButtonCardPropsType = {
  children: React.ReactNode;
  codeLines?: string[];
};

export const ButtonCard: React.FC<ButtonCardPropsType> = ({
  children,
  codeLines = [],
}) => {
  const [showCode, setShowCode] = useState(false);
  return (
    <div className="border border-gray-300 dark:border-gray-800 flex flex-col gap-4 p-4 rounded-md h-60 justify-center items-center relative text-xs">
      <div className="absolute top-4 bg-white dark:bg-gray-950 w-full pb-2">
        <div className="mx-4 flex gap-2 underline-offset-4">
          <button
            className={`hover:underline ${!showCode && "underline"} `}
            onClick={() => setShowCode(false)}
          >
            Preview
          </button>
          <button
            className={`hover:underline ${showCode && "underline"} `}
            onClick={() => setShowCode(true)}
          >
            Code
          </button>
        </div>
      </div>
      {showCode ? <CodeSample codeLines={codeLines} /> : children}
    </div>
  );
};
