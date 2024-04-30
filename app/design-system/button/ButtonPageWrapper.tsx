import React from "react";
import { ButtonComponent } from "./ButtonComponent";
import {
  PlayIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import {
  BUTTON_COMPONENT_GITHUB_URL,
  DANGER_BUTTON_CODE_LINES,
  DEFAULT_SIZE_CODE_LINES,
  GHOST_BUTTON_CODE_LINES,
  ICON_IN_BUTTON_CODE_LINES,
  LG_SIZE_CODE_LINES,
  LOADING_BUTTON_CODE_LINES,
  OUTLINE_BUTTON_CODE_LINES,
  PRIMARY_BUTTON_CODE_LINES,
  SECONDARY_BUTTON_CODE_LINES,
  SM_SIZE_CODE_LINES,
  XS_SIZE_CODE_LINES,
} from "./constants";
import { ButtonCard } from "@/app/components/ButtonCard";
import { Divider } from "@/app/components/Divider";
import { ButtonSizeVariantType, ButtonThemeVariantType } from "./types";
import { DesignSystemWrapperPageFooter } from "@/app/components/DesignSystemWrapperPageFooter";

export const ButtonPageWrapper: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 mb-10 p-4 md:w-4/5 lg:w-full mx-auto">
      <div className="my-2 md:leading-6">
        Display a button using one of the available theme or size variants.
      </div>

      <div className="flex justify-between items-center">
        <ButtonComponent />
        <Link href={BUTTON_COMPONENT_GITHUB_URL} target="_blank">
          <ButtonComponent
            theme={ButtonThemeVariantType.SECONDARY}
            size={ButtonSizeVariantType.SM}
          >
            <GitHubLogoIcon />
            <span>
              Code{" "}
              <span className="hidden md:inline-block">
                of the Button Component
              </span>
            </span>
            <ExternalLinkIcon />
          </ButtonComponent>
        </Link>
      </div>

      <Divider />

      <div className="flex flex-col gap-6">
        <div className="text-lg">Examples of Theme variants</div>

        {/* primary */}
        <div className="text-base">Primary</div>
        <ButtonCard key="Primary" codeLines={PRIMARY_BUTTON_CODE_LINES}>
          <ButtonComponent />
        </ButtonCard>

        {/* secondary */}
        <div className="text-base">Secondary</div>
        <ButtonCard key="Secondary" codeLines={SECONDARY_BUTTON_CODE_LINES}>
          <ButtonComponent theme={ButtonThemeVariantType.SECONDARY}>
            {ButtonThemeVariantType.SECONDARY}
          </ButtonComponent>
        </ButtonCard>

        {/* destructive */}
        <div className="text-base">Danger</div>
        <ButtonCard key="Danger" codeLines={DANGER_BUTTON_CODE_LINES}>
          <ButtonComponent theme={ButtonThemeVariantType.DANGER}>
            {ButtonThemeVariantType.DANGER}
          </ButtonComponent>
        </ButtonCard>

        {/* outline */}
        <div className="text-base">Outline</div>
        <ButtonCard key="Outline" codeLines={OUTLINE_BUTTON_CODE_LINES}>
          <ButtonComponent theme={ButtonThemeVariantType.OUTLINE}>
            {ButtonThemeVariantType.OUTLINE}
          </ButtonComponent>
        </ButtonCard>

        {/* ghost */}
        <div className="text-base">Ghost</div>
        <ButtonCard key="Ghost" codeLines={GHOST_BUTTON_CODE_LINES}>
          <ButtonComponent theme={ButtonThemeVariantType.GHOST}>
            {ButtonThemeVariantType.GHOST}
          </ButtonComponent>
        </ButtonCard>

        {/* button with icon */}
        <div className="text-base">Button with icon</div>
        <ButtonCard
          key="Button with icon"
          codeLines={ICON_IN_BUTTON_CODE_LINES}
        >
          <ButtonComponent>
            <PlayIcon />
            <span>Play</span>
          </ButtonComponent>
        </ButtonCard>

        {/* button with a loading state */}
        <div className="text-base">Button with a loading state</div>
        <ButtonCard
          key="Button with a loading state"
          codeLines={LOADING_BUTTON_CODE_LINES}
        >
          <ButtonComponent
            isLoading
            disabled
            loadingStateMessage="Please wait"
          />
        </ButtonCard>
      </div>

      <Divider />

      <div className="flex flex-col gap-6">
        <div className="text-lg">Examples of Size variants</div>

        {/* primary button of default size */}
        <div className="text-base">Default</div>
        <ButtonCard key="Primary" codeLines={DEFAULT_SIZE_CODE_LINES}>
          <ButtonComponent />
        </ButtonCard>

        {/* primary button of extra small size */}
        <div className="text-base">Extra Small</div>
        <ButtonCard key="Primary" codeLines={XS_SIZE_CODE_LINES}>
          <ButtonComponent size={ButtonSizeVariantType.XS} />
        </ButtonCard>

        {/* primary button of small size */}
        <div className="text-base">Small</div>
        <ButtonCard key="Primary" codeLines={SM_SIZE_CODE_LINES}>
          <ButtonComponent size={ButtonSizeVariantType.SM} />
        </ButtonCard>

        {/* primary button of large size */}
        <div className="text-base">Large</div>
        <ButtonCard key="Primary" codeLines={LG_SIZE_CODE_LINES}>
          <ButtonComponent size={ButtonSizeVariantType.LG} />
        </ButtonCard>
      </div>

      <Divider />

      <DesignSystemWrapperPageFooter url={BUTTON_COMPONENT_GITHUB_URL} />
      <Divider />
    </div>
  );
};
