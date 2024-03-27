import Link from "next/link";
import React from "react";

type ReactSnippetsPropsType = {};

const ReactSnippets: React.FC<ReactSnippetsPropsType> = () => {
  return (
    <div className="italic underline">
      <Link href={"/react-snippets/slideshow"}>Slide show on hover</Link>
    </div>
  );
};

export default ReactSnippets;
