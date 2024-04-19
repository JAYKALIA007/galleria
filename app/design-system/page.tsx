import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Galleria | Design System",
  description:
    "A collection of reusable coded components, which can be used in your projects.",
  keywords: ["frontend", "components", "design-system", "button"],
};

//TODO: Create a common Link component that has the following classnames
const DesignSystem: React.FC = () => (
  <div className="flex flex-col gap-2">
    <Link href={"/design-system/button"} className="hover:underline">
      Button
    </Link>
    <Link href={"/design-system/toast"} className="hover:underline">
      Toast
    </Link>
  </div>
);

export default DesignSystem;
