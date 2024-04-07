import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Galleria | Design System",
  description:
    "A collection of reusable coded components, which can be used in your projects.",
  keywords: ["frontend", "components", "design-system", "button"],
};

const DesignSystem: React.FC = () => (
  <div className="flex flex-col">
    <Link href={"/design-system/button"} className="hover:underline">
      Button component
    </Link>
  </div>
);

export default DesignSystem;
