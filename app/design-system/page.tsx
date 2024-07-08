import Link from "next/link";
import React from "react";
import { WhyDesignSystem } from "../components/WhyDesignSystem";
import { SlideInAnimationContainer } from "../components/SlideInAnimationContainer";

export const metadata = {
  title: "Design System | Galleria",
  description:
    "A collection of boilerplate code for most commonly used frontend components, along with examples.",
  keywords: ["frontend", "components", "design-system", "button", "toast"],
};

//TODO: Create a common Link component that has the following classnames
const DesignSystem: React.FC = () => (
  <div className="main-container">
    <SlideInAnimationContainer>
      <div className="flex flex-col gap-6">
        <WhyDesignSystem />
        <div className="flex flex-col gap-2 text-xs md:text-sm">
          <div className="text-base md:text-lg font-medium">
            {`The Components`}
          </div>
          <Link
            href={"/design-system/toggle-group"}
            className="hover:underline underline-offset-4"
          >
            Toggle Group
          </Link>
          <Link
            href={"/design-system/dropdown"}
            className="hover:underline underline-offset-4"
          >
            Dropdown Menu
          </Link>
          <Link
            href={"/design-system/switch"}
            className="hover:underline underline-offset-4"
          >
            Switch
          </Link>
          <Link
            href={"/design-system/accordion"}
            className="hover:underline underline-offset-4"
          >
            Accordion
          </Link>
          <Link
            href={"/design-system/toast"}
            className="hover:underline underline-offset-4"
          >
            Toast
          </Link>
          <Link
            href={"/design-system/button"}
            className="hover:underline underline-offset-4"
          >
            Button
          </Link>
        </div>
      </div>
    </SlideInAnimationContainer>
  </div>
);

export default DesignSystem;
