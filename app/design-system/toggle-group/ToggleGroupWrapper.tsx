"use client";
import Link from "next/link";
import { TOGGLE_GROUP_TYPE, ToggleGroup, ToggleItem } from "./ToggleGroup";
import { ButtonComponent } from "../button/ButtonComponent";
import { ButtonSizeVariantType, ButtonThemeVariantType } from "../button/types";
import {
  FontBoldIcon,
  FontItalicIcon,
  GitHubLogoIcon,
  UnderlineIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import { Divider } from "@/app/components/Divider";
import { Card } from "@/app/components/Card";
import { DesignSystemWrapperPageFooter } from "@/app/components/DesignSystemWrapperPageFooter";
import {
  DEFAULT_TOGGLE_GROUP_CODE_LINES,
  MUTLI_SELECT_TOGGLE_GROUP_CODE_LINES,
  MUTLI_SELECT_TOGGLE_GROUP_WITH_ICON_CODE_LINES,
  TOGGLE_GROUP_COMPONENT_GITHUB_URL,
} from "./constants";

export const ToggleGroupPageWrapper = () => {
  return (
    <div className="flex flex-col gap-12 mb-10 p-4 md:w-4/5 lg:w-full mx-auto">
      <div className="my-2 text-xs md:text-sm leading-6">
        Display a set of two-state buttons that can be toggled on or off.
      </div>

      <div className="flex justify-between items-center">
        <ToggleGroup
          type={TOGGLE_GROUP_TYPE.MULTIPLE}
          className="px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-md"
        >
          <ToggleItem value="bold">
            <FontBoldIcon />
          </ToggleItem>
          <ToggleItem value="italic">
            <FontItalicIcon />
          </ToggleItem>
          <ToggleItem value="underline">
            <UnderlineIcon className="h-4 w-4" />
          </ToggleItem>
        </ToggleGroup>
        <Link href={TOGGLE_GROUP_COMPONENT_GITHUB_URL} target="_blank">
          <ButtonComponent
            theme={ButtonThemeVariantType.SECONDARY}
            size={ButtonSizeVariantType.SM}
          >
            <GitHubLogoIcon />
            <span>
              Code{" "}
              <span className="hidden md:inline-block">
                of the Toggle Group Component
              </span>
            </span>
            <ExternalLinkIcon />
          </ButtonComponent>
        </Link>
      </div>

      <Divider />

      <div className="flex flex-col gap-6">
        <div className="text-lg">Examples of Toggle Group variants</div>

        <div className="text-base">Default</div>
        <Card codeLines={DEFAULT_TOGGLE_GROUP_CODE_LINES}>
          <ToggleGroup>
            <ToggleItem value="A">A</ToggleItem>
            <ToggleItem value="B">B</ToggleItem>
            <ToggleItem value="C">C</ToggleItem>
          </ToggleGroup>
        </Card>

        <div className="text-base">Multi select</div>
        <Card codeLines={MUTLI_SELECT_TOGGLE_GROUP_CODE_LINES}>
          <ToggleGroup type={TOGGLE_GROUP_TYPE.MULTIPLE}>
            <ToggleItem value="A">A</ToggleItem>
            <ToggleItem value="B">B</ToggleItem>
            <ToggleItem value="C">C</ToggleItem>
          </ToggleGroup>
        </Card>

        <div className="text-base">With icons</div>
        <Card codeLines={MUTLI_SELECT_TOGGLE_GROUP_WITH_ICON_CODE_LINES}>
          <ToggleGroup type={TOGGLE_GROUP_TYPE.MULTIPLE}>
            <ToggleItem value="bold">
              <FontBoldIcon />
            </ToggleItem>
            <ToggleItem value="italic">
              <FontItalicIcon />
            </ToggleItem>
            <ToggleItem value="underline">
              <UnderlineIcon className="h-4 w-4" />
            </ToggleItem>
          </ToggleGroup>
        </Card>
      </div>

      <Divider />
      <DesignSystemWrapperPageFooter url={TOGGLE_GROUP_COMPONENT_GITHUB_URL} />
      <Divider />
    </div>
  );
};
