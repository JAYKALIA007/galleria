import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Galleria | React Snippets",
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
    <div className="italic flex flex-col justify-start m-10 gap-2 w-fit p-4">
      <Link href={"/react-snippets/slideshow"}>Slide show on hover</Link>
    </div>
  );
};

export default ReactSnippets;
