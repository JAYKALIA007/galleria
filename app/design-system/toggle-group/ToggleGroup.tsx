import React, { ReactElement, ReactNode, useState } from "react";

const ACTIVE_OPTION_CLASSES = "bg-gray-200 dark:bg-gray-800";
const BUTTON_CLASSES = "px-3.5 py-2.5 rounded-md";

export enum TOGGLE_GROUP_TYPE {
  SINGLE = "SINGLE",
  MULTIPLE = "MULTIPLE",
}

export const ToggleGroup = ({
  children,
  type = TOGGLE_GROUP_TYPE.SINGLE,
  className,
}: {
  children: Array<ReactElement>;
  type?: TOGGLE_GROUP_TYPE;
  className?: string;
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Array<string>>([]);

  const handleChangeSelectedOptions = (option: string) => {
    if (type === TOGGLE_GROUP_TYPE.SINGLE) {
      setSelectedOptions([option]);
    } else {
      setSelectedOptions((prev) =>
        prev?.includes(option)
          ? prev.filter((item) => option !== item)
          : prev?.concat(option)
      );
    }
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      {children.map((child) =>
        React.cloneElement(child, {
          isSelected: selectedOptions?.includes(child.props.value),
          onToggle: () => handleChangeSelectedOptions(child.props.value),
        })
      )}
    </div>
  );
};

export const ToggleItem = ({
  children,
  value,
  isSelected,
  onToggle,
  className,
}: {
  children: ReactNode;
  value: string;
  isSelected?: boolean;
  onToggle?: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onToggle}
      className={`${BUTTON_CLASSES} ${
        isSelected && ACTIVE_OPTION_CLASSES
      } ${className}`}
    >
      {children}
    </button>
  );
};
