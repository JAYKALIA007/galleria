import React from "react";
import { ButtonVariantType, ButtonComponent } from "./ButtonComponent";
import { PlayIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { BUTTON_COMPONENT_GITHUB_URL } from "./constants";

export const metadata = {
  title: "Galleria | Design | Button",
  description: "A reusable button component with multiple variants.",
  keywords: ["frontend", "components", "design-system", "button"],
};

const Button: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 mb-10 w-2/3 lg:w-full mx-auto">
      <div className="my-5 md:text-base">
        Display a button using one of the button variants.
      </div>
      <ButtonComponent />

      <hr className="border border-opacity-30 border-gray-300 dark:border-gray-800 dark:border-opacity-50" />

      <div className="flex flex-col gap-6">
        <div className="text-lg">Examples</div>

        {/* primary */}
        <ButtonCard title="Primary">
          <ButtonComponent />
        </ButtonCard>

        {/* secondary */}
        <ButtonCard title="Secondary">
          <ButtonComponent buttonVariant={ButtonVariantType.SECONDARY}>
            {ButtonVariantType.SECONDARY}
          </ButtonComponent>
        </ButtonCard>

        {/* destructive */}
        <ButtonCard title="Danger">
          <ButtonComponent buttonVariant={ButtonVariantType.DANGER}>
            {ButtonVariantType.DANGER}
          </ButtonComponent>
        </ButtonCard>

        {/* outline */}
        <ButtonCard title="Outline">
          <ButtonComponent buttonVariant={ButtonVariantType.OUTLINE}>
            {ButtonVariantType.OUTLINE}
          </ButtonComponent>
        </ButtonCard>

        {/* ghost */}
        <ButtonCard title="Ghost">
          <ButtonComponent buttonVariant={ButtonVariantType.GHOST}>
            {ButtonVariantType.GHOST}
          </ButtonComponent>
        </ButtonCard>

        {/* button with icons */}
        <ButtonCard title="Button with icon">
          <ButtonComponent>
            <PlayIcon />
            <span>Play</span>
          </ButtonComponent>
        </ButtonCard>

        {/* button with a loading state */}
        <ButtonCard title="Button with a loading state">
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

const ButtonCard = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) => (
  <div className="border border-gray-300 dark:border-gray-800 flex flex-col gap-4 p-4 rounded-md h-60 justify-center items-center relative">
    <div className="text-xs absolute top-4 left-4">{title}</div>
    {children}
  </div>
);
