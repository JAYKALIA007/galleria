import classNames from "classnames";
import React, { ReactElement, ReactNode, useState } from "react";

const ACTIVE_OPTION_CLASSES = "bg-gray-200 dark:bg-gray-800";
const BUTTON_CLASSES = "px-3.5 py-2.5 rounded-md";

export enum TOGGLE_GROUP_TYPE {
  SINGLE = "SINGLE",
  MULTIPLE = "MULTIPLE",
}

export const ToggleGroup = ({
  type = TOGGLE_GROUP_TYPE.SINGLE,
  isDisabled,
  children,
  className,
}: {
  type?: TOGGLE_GROUP_TYPE;
  isDisabled?: boolean;
  children: Array<ReactElement>;
  className?: string;
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Array<string>>([]);

  const handleChangeSelectedOptions = (option: string) => {
    if (type === TOGGLE_GROUP_TYPE.SINGLE) {
      setSelectedOptions([option]);
    } else {
      setSelectedOptions((prev) =>
        prev.includes(option)
          ? prev.filter((item) => option !== item)
          : prev.concat(option)
      );
    }
  };

  return (
    <div
      className={classNames(
        "flex gap-2",
        isDisabled && "cursor-not-allowed",
        className
      )}
    >
      {children.map((child) =>
        React.cloneElement(child, {
          isSelected: selectedOptions.includes(child.props.value),
          onToggle: () => handleChangeSelectedOptions(child.props.value),
          isDisabled: child.props.isDisabled || isDisabled,
        })
      )}
    </div>
  );
};

export const ToggleItem = ({
  value,
  isSelected,
  isDisabled,
  onToggle,
  children,
  className,
}: {
  value: string;
  isSelected?: boolean;
  isDisabled?: boolean;
  onToggle?: () => void;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <button
      onClick={onToggle}
      className={classNames(
        BUTTON_CLASSES,
        isSelected && ACTIVE_OPTION_CLASSES,
        isDisabled && `cursor-not-allowed opacity-50`,
        className
      )}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
