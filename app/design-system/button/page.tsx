import React from "react";
import { ButtonComponent } from "./ButtonComponent";
import { PlayIcon } from "@radix-ui/react-icons";
const Button: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="my-5 text-base">
        Displays a button or a component that looks like a button.
      </div>
      <ButtonCard>
        <ButtonComponent />
      </ButtonCard>

      <hr className="border border-opacity-20 border-gray-300" />

      <div className="flex flex-col gap-6">
        <div className="text-lg">Examples</div>

        {/* primary */}
        <ButtonCard>
          <div className="text-xs absolute top-4 left-4">Primary</div>
          <ButtonComponent>Primary</ButtonComponent>
        </ButtonCard>

        {/* secondary */}
        <ButtonCard title="Secondary">
          <ButtonComponent className="bg-zinc-900 hover:border-zinc-700 text-white border-none">
            Secondary
          </ButtonComponent>
        </ButtonCard>

        {/* destructive */}
        <ButtonCard title="Destructive">
          <ButtonComponent className="bg-red-900 border-red-900">
            Button
          </ButtonComponent>
        </ButtonCard>

        {/* button with icons */}
        <ButtonCard title="Button with icon">
          <ButtonComponent>
            <PlayIcon />
            <span>Play</span>
          </ButtonComponent>
        </ButtonCard>
      </div>
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
  <div className="border border-gray-300 flex flex-col gap-4 p-4 rounded-md h-60 justify-center items-center relative">
    <div className="text-xs absolute top-4 left-4">{title}</div>
    {children}
  </div>
);
