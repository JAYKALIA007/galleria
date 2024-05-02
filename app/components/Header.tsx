"use client";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export const Header: React.FC = () => {
  return (
    <div className="m-2 p-2 relative flex justify-between items-center">
      <div className="w-full gap-28 sm:gap-20 md:gap-96 lg:gap-40 xl:gap-96 flex items-baseline mx-2 md:mx-10">
        <Link href="/" className="underline underline-offset-4 text-lg">
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-blue-500 hover:underline underline-offset-4 "
        >
          @jay_prakash07
        </Link>
      </div>
      <div className="">
        <ModeToggle />
      </div>
    </div>
  );
};
