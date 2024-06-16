import Link from "next/link";
import React from "react";
import { SlideInAnimationContainer } from "../components/SlideInAnimationContainer";

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
    <SlideInAnimationContainer>
      <div className="flex flex-col gap-2 text-xs md:text-sm">
        <Link
          href={"/react-snippets/toggle-group"}
          className="hover:underline underline-offset-4"
        >
          Toggle Group
        </Link>
        <Link
          href={"/react-snippets/toolbar"}
          className="hover:underline underline-offset-4"
        >
          Action Toolbar
        </Link>
        <Link
          href={"/react-snippets/nested-comments"}
          className="hover:underline underline-offset-4"
        >
          Nested comments
        </Link>
        <Link
          href={"/react-snippets/slideshow"}
          className="hover:underline underline-offset-4"
        >
          Slide show on hover
        </Link>
      </div>
    </SlideInAnimationContainer>
  );
};

export default ReactSnippets;
