import Link from "next/link";
import React from "react";

export const metadata = {
  title: "React Snippets | Galleria",
  description:
    "A collection of react implementations for small code snippets which can be used in your personal projects",
  keywords: [
    "react-snippets",
    "web development",
    "frontend",
    "snippets",
    "react.js",
  ],
};

const ReactSnippets: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <Link href={"/react-snippets/slideshow"} className="hover:underline">
        Slide show on hover
      </Link>
    </div>
  );
};

export default ReactSnippets;
