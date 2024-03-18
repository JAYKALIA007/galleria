"use client";
import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="m-2 p-2 text-sm flex justify-center underline italic">
      <Link href="/">Home</Link>
    </div>
  );
};
