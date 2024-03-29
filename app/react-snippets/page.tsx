import Link from "next/link";
import React from "react";

type ReactSnippetsPropsType = {};

const ReactSnippets: React.FC<ReactSnippetsPropsType> = () => {
  return (
    <div className="italic underline flex flex-col justify-start m-10 gap-20 w-fit p-4">
      <Link href={"/react-snippets/slideshow"}>Slide show on hover</Link>
    </div>
  );
};

export default ReactSnippets;
