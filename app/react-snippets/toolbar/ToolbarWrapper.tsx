"use client";

import { SlideInAnimationContainer } from "@/app/components/SlideInAnimationContainer";
import Link from "next/link";
import { ButtonComponent } from "@/app/design-system/button/ButtonComponent";
import {
  ButtonSizeVariantType,
  ButtonThemeVariantType,
} from "@/app/design-system/button/types";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Toolbar } from "./Toolbar";
import { Divider } from "@/app/components/Divider";
import { TOOLBAR_GITHUB_URL } from "./constants";

export const ToolbarWrapper = () => (
  <SlideInAnimationContainer>
    <div className="text-xs md:text-sm flex flex-col gap-8">
      <div className="my-2 leading-6">
        Toolbar that changes state to notify the active option. Try clicking on
        the buttons to change the state of the toolbar.
      </div>
      <div className="flex justify-end">
        <Link href={TOOLBAR_GITHUB_URL} target="_blank">
          <ButtonComponent
            theme={ButtonThemeVariantType.SECONDARY}
            size={ButtonSizeVariantType.SM}
          >
            <GitHubLogoIcon />
            <span>Code</span>
          </ButtonComponent>
        </Link>
      </div>

      <Divider />

      <div className="h-40 w-full flex justify-center items-center">
        <Toolbar />
      </div>

      <Divider />
    </div>
  </SlideInAnimationContainer>
);
