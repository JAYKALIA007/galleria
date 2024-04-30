import Link from "next/link";
import React from "react";
import { SHADCN_UI_URL } from "../constants";

type DesignSystemWrapperPageFooterPropsType = {
  url: string;
};

export const DesignSystemWrapperPageFooter: React.FC<
  DesignSystemWrapperPageFooterPropsType
> = ({ url }) => {
  return (
    <div className="flex flex-col gap-10">
      <div>
        For creating these system design components, I was inspired by{" "}
        <Link href={SHADCN_UI_URL} target="_blank" className="text-blue-600">
          shadcn/ui
        </Link>
        . Please check them out.
      </div>

      <div className="text-xs">
        P.S. - I&apos;m planning on adding documentation and code samples soon.
        Meanwhile you can see the{" "}
        <Link href={url} target="_blank" className="text-blue-600">
          code on github.
        </Link>
      </div>
    </div>
  );
};
