import { useState } from "react";

type AccordionCardPropsType = {
  children: React.ReactNode;
  className?: string;
};
export const AccordionCard: React.FC<AccordionCardPropsType> = ({
  children,
  className = "",
}) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div
      className={`border border-gray-300 dark:border-gray-800 flex flex-col gap-4 p-4 rounded-md h-96 justify-center items-center relative text-xs overflow-y-auto ${className}`}
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
            className={`hover:underline ${
              showCode && "underline"
            } disabled:cursor-not-allowed disabled:no-underline`}
            disabled
          >
            Code
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};
