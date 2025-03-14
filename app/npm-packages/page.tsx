import React from "react";
import { SlideInAnimationContainer } from "../components/SlideInAnimationContainer";
import Link from "next/link";
import {
  HINDI_DATES_NPM_PACKAGE_LINK,
  OPEN_SOURCE_WRITEUP,
  USE_TEXT_SELECTIONS_NPM_PACKAGE_LINK,
} from "./constants";

export const metadata = {
  title: "Packages | Galleria",
  description:
    "A collection of npm packages for small code snippets which can be used in your personal projects",
  keywords: [
    "npm-packages",
    "npm",
    "web development",
    "frontend",
    "javascript",
    "react.js",
    "use text selections",
    "hindi dates",
    "day.js",
  ],
};

const ReactSnippets: React.FC = () => {
  return (
    <div className="main-container">
      <SlideInAnimationContainer>
        <div className="flex flex-col gap-8 text-xs md:text-sm">
          <div className="leading-6">{OPEN_SOURCE_WRITEUP}</div>
          <div className="flex flex-col gap-2 text-xs md:text-sm">
            <Link
              href={USE_TEXT_SELECTIONS_NPM_PACKAGE_LINK}
              target="_blank"
              className="hover:underline underline-offset-4"
            >
              use-text-selections
            </Link>

            <Link
              href={HINDI_DATES_NPM_PACKAGE_LINK}
              target="_blank"
              className="hover:underline underline-offset-4"
            >
              hindi-dates
            </Link>
          </div>
        </div>
      </SlideInAnimationContainer>
    </div>
  );
};

export default ReactSnippets;
