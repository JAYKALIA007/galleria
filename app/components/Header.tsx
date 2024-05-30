"use client";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import { usePathname } from "next/navigation";
import { ABOUT_PAGE } from "../constants";

export const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className="m-2 p-2 relative flex justify-between items-center">
      <div className="w-full gap-28 sm:gap-20 md:gap-96 lg:gap-40 xl:gap-96 flex items-baseline mx-2 md:mx-10">
        <Link href="/" className="underline underline-offset-4 text-lg">
          Home
        </Link>
        <Link
          href={ABOUT_PAGE}
          className={`hover:text-blue-700 hover:dark:text-blue-500 hover:underline underline-offset-4 ${
            pathname === ABOUT_PAGE &&
            "text-blue-700 dark:text-blue-500 underline"
          }`}
        >
          @jay_kalia07
        </Link>
      </div>
      <div className="">
        <ModeToggle />
      </div>
    </div>
  );
};
