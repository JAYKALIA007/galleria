"use client";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export const Header: React.FC = () => {
  return (
    <div className="m-2 p-2  underline italic relative">
      <div className="w-full text-center">
        <Link href="/" className="text-center">
          Home
        </Link>
      </div>
      <div className="absolute top-0 right-10">
        <ModeToggle />
      </div>
    </div>
  );
};
