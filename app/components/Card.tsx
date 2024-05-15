"use client";

import React, { useState } from "react";
import { CodeSample } from "./CodeSample";

type CardPropsType = {
  children: React.ReactNode;
  codeLines?: string[];
  size?: string;
};

export const Card: React.FC<CardPropsType> = ({
  children,
  codeLines = [],
  size = "default",
}) => {
  const [showCode, setShowCode] = useState(false);
  const height = size === "large" ? "h-96" : "h-60";
  return (
    <div
      className={`border border-gray-300 dark:border-gray-800 flex flex-col gap-4 p-4 rounded-md justify-center items-center relative text-xs ${height} `}
    >
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
