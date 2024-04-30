import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Design System | Galleria",
  description:
    "A collection of boilerplate code for most commonly used frontend components, along with examples.",
  keywords: ["frontend", "components", "design-system", "button", "toast"],
};

//TODO: Create a common Link component that has the following classnames
const DesignSystem: React.FC = () => (
  <div className="flex flex-col gap-2">
    <Link href={"/design-system/switch"} className="hover:underline">
      Switch
    </Link>
    <Link href={"/design-system/accordion"} className="hover:underline">
      Accordion
    </Link>
    <Link href={"/design-system/toast"} className="hover:underline">
      Toast
    </Link>
    <Link href={"/design-system/button"} className="hover:underline">
      Button
    </Link>
  </div>
);

export default DesignSystem;
