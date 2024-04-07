import React from "react";
import { ButtonVariantType, ButtonComponent } from "./ButtonComponent";
import {
  PlayIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import {
  BUTTON_COMPONENT_GITHUB_URL,
  DANGER_BUTTON_CODE_LINES,
  GHOST_BUTTON_CODE_LINES,
  ICON_IN_BUTTON_CODE_LINES,
  LOADING_BUTTON_CODE_LINES,
  OUTLINE_BUTTON_CODE_LINES,
  PRIMARY_BUTTON_CODE_LINES,
  SECONDARY_BUTTON_CODE_LINES,
} from "./constants";
import { ButtonCard } from "@/app/components/ButtonCard";

export const metadata = {
  title: "Galleria | Design | Button",
  description: "A reusable button component with multiple variants.",
  keywords: ["frontend", "components", "design-system", "button"],
};

const Button: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 mb-10 p-4 md:w-4/5 lg:w-full mx-auto">
      <div className="my-5">
        Display a button using one of the button variants.
      </div>

      <div className="flex justify-between items-center">
        <ButtonComponent />
        <Link href={BUTTON_COMPONENT_GITHUB_URL} target="_blank">
          <ButtonComponent
            buttonVariant={ButtonVariantType.SECONDARY}
            className="gap-2 text-xs px-2"
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

      <hr className="border border-opacity-30 border-gray-300 dark:border-gray-800 dark:border-opacity-50" />

      <div className="flex flex-col gap-6">
        <div className="text-lg">Examples</div>

        {/* primary */}
        <div className="text-base">Primary</div>
        <ButtonCard key="Primary" codeLines={PRIMARY_BUTTON_CODE_LINES}>
          <ButtonComponent />
        </ButtonCard>

        {/* secondary */}
        <div className="text-base">Secondary</div>
        <ButtonCard key="Secondary" codeLines={SECONDARY_BUTTON_CODE_LINES}>
          <ButtonComponent buttonVariant={ButtonVariantType.SECONDARY}>
            {ButtonVariantType.SECONDARY}
          </ButtonComponent>
        </ButtonCard>

        {/* destructive */}
        <div className="text-base">Danger</div>
        <ButtonCard key="Danger" codeLines={DANGER_BUTTON_CODE_LINES}>
          <ButtonComponent buttonVariant={ButtonVariantType.DANGER}>
            {ButtonVariantType.DANGER}
          </ButtonComponent>
        </ButtonCard>

        {/* outline */}
        <div className="text-base">Outline</div>
        <ButtonCard key="Outline" codeLines={OUTLINE_BUTTON_CODE_LINES}>
          <ButtonComponent buttonVariant={ButtonVariantType.OUTLINE}>
            {ButtonVariantType.OUTLINE}
          </ButtonComponent>
        </ButtonCard>

        {/* ghost */}
        <div className="text-base">Ghost</div>
        <ButtonCard key="Ghost" codeLines={GHOST_BUTTON_CODE_LINES}>
          <ButtonComponent buttonVariant={ButtonVariantType.GHOST}>
            {ButtonVariantType.GHOST}
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

      <hr className="border border-opacity-30 border-gray-300 dark:border-gray-800 dark:border-opacity-50" />
      <div className="">
        For creating these system design components, I was inspired by{" "}
        <Link
          href="https://ui.shadcn.com/"
          target="_blank"
          className="text-blue-600"
        >
          shadcn/ui
        </Link>
        . Please check them out.
      </div>
      <div className="text-xs">
        P.S. - I&apos;m planning on adding documentation and code samples soon.
        Meanwhile you can see the{" "}
        <Link
          href={BUTTON_COMPONENT_GITHUB_URL}
          target="_blank"
          className="text-blue-600"
        >
          code on github.
        </Link>
      </div>
      <hr className="border border-opacity-30 border-gray-300 dark:border-gray-800 dark:border-opacity-50" />
    </div>
  );
};

export default Button;
