import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Galleria | Design System",
  description:
    "A collection of reusable coded components, which can be used in your projects.",
  keywords: ["frontend", "components", "design-system", "button"],
};

const DesignSystem: React.FC = () => (
  <div className="italic underline flex flex-col justify-start m-10 gap-20 w-fit p-4">
    <Link href={"/design-system/button"}>Button component</Link>
  </div>
);

export default DesignSystem;
