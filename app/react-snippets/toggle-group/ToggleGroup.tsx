"use client";
import {
  UnderlineIcon,
  FontBoldIcon,
  FontItalicIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import React, { useCallback, useState } from "react";
import {
  BUTTON_OPTIONS,
  OptionType,
  TOGGLE_GROUP_DESIGN_SYSTEM_URL,
  TOGGLE_GROUP_GITHUB_URL,
  ToggleType,
} from "./constants";
import { SlideInAnimationContainer } from "@/app/components/SlideInAnimationContainer";
import Link from "next/link";
import { ButtonComponent } from "@/app/design-system/button/ButtonComponent";
import {
  ButtonSizeVariantType,
  ButtonThemeVariantType,
} from "@/app/design-system/button/types";
import { Divider } from "@/app/components/Divider";

const options = [
  {
    icon: <FontBoldIcon />,
    label: BUTTON_OPTIONS.BOLD,
  },
  {
    icon: <FontItalicIcon />,
    label: BUTTON_OPTIONS.ITALIC,
  },
  {
    icon: <UnderlineIcon />,
    label: BUTTON_OPTIONS.UNDERLINE,
  },
];

const ACTIVE_OPTION_CLASSES = "bg-gray-200 dark:bg-gray-800";
const BUTTON_CLASSES = "px-3 py-2.5 rounded-md";

type TogglePropsType = {
  type: ToggleType;
};

export const Toggle: React.FC<TogglePropsType> = ({ type }) => {
  const [selectedOptions, setSelectedOptions] = useState<Array<OptionType>>([]);
  const [selectedOption, setSelectedOption] = useState<OptionType>();

  const handleAddItem = useCallback(
    (item: OptionType) => {
      if (type === ToggleType.MULTIPLE) {
        let updatedOptions: Array<OptionType> = [];
        if (!selectedOptions.length) {
          updatedOptions = [item];
        } else {
          if (selectedOptions.includes(item)) {
            updatedOptions = selectedOptions.filter(
              (opt) => opt.label !== item.label
            );
          } else {
            updatedOptions = [...selectedOptions, item];
          }
        }
        setSelectedOptions(updatedOptions);
      } else if (type === ToggleType.SINGLE) {
        setSelectedOption(item);
      }
    },
    [selectedOptions, type]
  );

  return (
    <div className="flex gap-1">
      {options.map((option) => {
        const isActive =
          type === ToggleType.MULTIPLE
            ? selectedOptions.includes(option)
            : selectedOption?.label === option.label;

        return (
          <button
            key={option.label}
            onClick={() => handleAddItem(option)}
            className={`${BUTTON_CLASSES} ${isActive && ACTIVE_OPTION_CLASSES}`}
          >
            {option.icon}
          </button>
        );
      })}
    </div>
  );
};

export const ToggleContainer = () => {
  return (
    <SlideInAnimationContainer>
      <div className="text-xs md:text-sm flex flex-col gap-8">
        <div className="my-2 leading-6">
          A set of two-state buttons that can be toggled on or off.
        </div>

        <div className="flex justify-end">
          <Link href={TOGGLE_GROUP_GITHUB_URL} target="_blank">
            <ButtonComponent
              theme={ButtonThemeVariantType.SECONDARY}
              size={ButtonSizeVariantType.SM}
            >
              <GitHubLogoIcon />
              <span>Code</span>
            </ButtonComponent>
          </Link>
        </div>

        <Divider />

        <div className="flex flex-col gap-6">
          <div className="text-base">Single select</div>
          <div className="h-20 w-full flex justify-center items-center border border-gray-200 dark:border-gray-800 rounded-lg">
            <Toggle type={ToggleType.SINGLE} />
          </div>

          <div className="text-base">Multi select</div>
          <div className="h-20 w-full flex justify-center items-center border border-gray-200 dark:border-gray-800 rounded-lg">
            <Toggle type={ToggleType.MULTIPLE} />
          </div>
        </div>

        <Divider />

        <div className="text-[10px] md:text-xs">
          Please check out the design system for this{" "}
          <Link
            href={TOGGLE_GROUP_DESIGN_SYSTEM_URL}
            target="_blank"
            className="text-blue-600"
          >
            here.
          </Link>
        </div>
      </div>
    </SlideInAnimationContainer>
  );
};
