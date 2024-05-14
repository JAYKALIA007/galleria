import React from "react";

type CodeSamplePropsType = {
  codeLines: string[];
};

export const CodeSample: React.FC<CodeSamplePropsType> = ({ codeLines }) => {
  return (
    <div className="w-full max-h-[100%] overflow-scroll">
      <pre
        className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border border-gray-900 p-4 bg-zinc-900 text-gray-300"
        data-language="tsx"
        data-theme="default"
      >
        <code
          className="rounded text-[10px] lg:text-xs flex flex-col gap-1 lg:gap-2"
          data-language="tsx"
          data-theme="default"
        >
          {codeLines.map((line, index) => (
            <div key={index}>
              <span>{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};
