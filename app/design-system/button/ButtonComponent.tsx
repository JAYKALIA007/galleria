import React from "react";

type ButtonComponentPropsType = {
  content?: string;
  className?: string;
  children?: React.ReactNode;
};

export const ButtonComponent: React.FC<ButtonComponentPropsType> = ({
  content = "Button",
  className,
  children,
}) => {
  return (
    <div
      className={`border border-gray-800 rounded flex gap-1 justify-center items-center px-3 py-1.5 cursor-pointer w-fit ${className}`}
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
 */
