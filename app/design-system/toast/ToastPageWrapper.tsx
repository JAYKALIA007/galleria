"use client";
import React, { useState } from "react";
import { ButtonComponent } from "../button/ButtonComponent";
import { ButtonSizeVariantType, ButtonThemeVariantType } from "../button/types";
import {
  ToastComponent,
  ToastPostionType,
  ToastVariantThemeType,
} from "./ToastComponent";
import { Divider } from "@/app/components/Divider";
import Link from "next/link";
import { ToastCard } from "@/app/components/ToastCard";
import { TOAST_COMPONENT_GITHUB_URL } from "./constants";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export const ToastPageWrapper = () => {
  const [showDefaultToast, setShowDefaultToast] = useState(false);
  const [showToastWithHeading, setShowToastWithHeading] = useState(false);
  const [showDestructiveToast, setShowDestructiveToast] = useState(false);
  const [showToastWithCTA, setShowToastWithCTA] = useState(false);
  const [showToastAtTop, setShowToastAtTop] = useState(false);

  return (
    <div className="flex flex-col gap-12 mb-10 p-4 md:w-4/5 lg:w-full mx-auto">
      <div className="my-5">
        A toast provides simple feedback about an operation in a small popup,
        created using React Portal.
      </div>

      {/* default state */}

      <div className="flex justify-between items-center">
        <ButtonComponent
          theme={ButtonThemeVariantType.OUTLINE}
          size={ButtonSizeVariantType.SM}
          onClick={() => {
            setShowDestructiveToast(false);
            setShowToastWithHeading(false);
            setShowToastWithCTA(false);
            setShowToastAtTop(false);
            setShowDefaultToast(true);
          }}
        >
          Show Toast
        </ButtonComponent>

        {showDefaultToast && (
          <ToastComponent onClose={() => setShowDefaultToast(false)} />
        )}

        <Link href={TOAST_COMPONENT_GITHUB_URL} target="_blank">
          <ButtonComponent
            theme={ButtonThemeVariantType.SECONDARY}
            size={ButtonSizeVariantType.SM}
          >
            <GitHubLogoIcon />
            <span>
              Code{" "}
              <span className="hidden md:inline-block">
                of the Toast Component
              </span>
            </span>
            <ExternalLinkIcon />
          </ButtonComponent>
        </Link>
      </div>

      <Divider />

      <div className="flex flex-col gap-6">
        <div className="text-lg">Examples of Toast variants</div>

        {/*  toast with heading */}
        <div className="text-base">Toast With Heading</div>
        <ToastCard>
          <ButtonComponent
            theme={ButtonThemeVariantType.OUTLINE}
            size={ButtonSizeVariantType.SM}
            onClick={() => {
              setShowDestructiveToast(false);
              setShowDefaultToast(false);
              setShowToastWithCTA(false);
              setShowToastAtTop(false);
              setShowToastWithHeading(true);
            }}
          >
            Show Toast
          </ButtonComponent>

          {showToastWithHeading && (
            <ToastComponent
              heading="Uh oh! Something went wrong"
              onClose={() => setShowToastWithHeading(false)}
            />
          )}
        </ToastCard>

        {/* destructive toast*/}
        <div className="text-base">Destructive Toast</div>
        <ToastCard>
          <ButtonComponent
            theme={ButtonThemeVariantType.OUTLINE}
            size={ButtonSizeVariantType.SM}
            onClick={() => {
              setShowDefaultToast(false);
              setShowToastWithHeading(false);
              setShowToastWithCTA(false);
              setShowToastAtTop(false);
              setShowDestructiveToast(true);
            }}
          >
            Show toast
          </ButtonComponent>

          {showDestructiveToast && (
            <ToastComponent
              heading="Uh oh! Something went wrong"
              onClose={() => setShowDestructiveToast(false)}
              theme={ToastVariantThemeType.DANGER}
            />
          )}
        </ToastCard>

        {/*toast with CTA*/}
        <div className="text-base">Toast with CTA</div>
        <ToastCard>
          <ButtonComponent
            theme={ButtonThemeVariantType.OUTLINE}
            size={ButtonSizeVariantType.SM}
            onClick={() => {
              setShowDefaultToast(false);
              setShowToastWithHeading(false);
              setShowDestructiveToast(false);
              setShowToastAtTop(false);
              setShowToastWithCTA(true);
            }}
          >
            Show toast
          </ButtonComponent>

          {showToastWithCTA && (
            <ToastComponent
              heading="Uh oh! Something went wrong"
              onClose={() => setShowToastWithCTA(false)}
              actionMessage="Undo"
            />
          )}
        </ToastCard>

        {/*toast at top right*/}
        <div className="text-base">Toast at top right</div>
        <ToastCard>
          <ButtonComponent
            theme={ButtonThemeVariantType.OUTLINE}
            size={ButtonSizeVariantType.SM}
            onClick={() => {
              setShowDefaultToast(false);
              setShowToastWithHeading(false);
              setShowDestructiveToast(false);
              setShowToastWithCTA(false);
              setShowToastAtTop(true);
            }}
          >
            Show toast
          </ButtonComponent>

          {showToastAtTop && (
            <ToastComponent
              heading="Uh oh! Something went wrong"
              onClose={() => setShowToastAtTop(false)}
              placement={ToastPostionType.TOP_RIGHT}
            />
          )}
        </ToastCard>
      </div>

      <Divider />

      <div>
        For creating these system design components, I was inspired by{" "}
        <Link
          href="https://ui.shadcn.com/"
          target="_blank"
          className="text-blue-600"
        >
          shadcn/ui
        </Link>
        . Please check them out.
      </div>

      <div className="text-xs">
        P.S. - I&apos;m planning on adding documentation and code samples soon.
        Meanwhile you can see the{" "}
        <Link
          href={TOAST_COMPONENT_GITHUB_URL}
          target="_blank"
          className="text-blue-600"
        >
          code on github.
        </Link>
      </div>
      <Divider />
    </div>
  );
};
