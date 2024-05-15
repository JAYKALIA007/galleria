"use client";
import React, { useCallback, useEffect, useState } from "react";
import { ButtonComponent } from "../button/ButtonComponent";
import { ButtonSizeVariantType, ButtonThemeVariantType } from "../button/types";
import {
  ToastComponent,
  ToastPostionType,
  ToastVariantThemeType,
} from "./ToastComponent";
import { Divider } from "@/app/components/Divider";
import Link from "next/link";
import {
  DESTRUCTIVE_TOAST_CODE_LINES,
  TOAST_AT_TOP_CODE_LINES,
  TOAST_COMPONENT_GITHUB_URL,
  TOAST_WITH_CTA_CODE_LINES,
  TOAST_WITH_HEADING_CODE_LINES,
} from "./constants";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { DesignSystemWrapperPageFooter } from "@/app/components/DesignSystemWrapperPageFooter";
import { Card } from "@/app/components/Card";

export const ToastPageWrapper = () => {
  const [showDefaultToast, setShowDefaultToast] = useState(false);
  const [showToastWithHeading, setShowToastWithHeading] = useState(false);
  const [showDestructiveToast, setShowDestructiveToast] = useState(false);
  const [showToastWithCTA, setShowToastWithCTA] = useState(false);
  const [showToastAtTop, setShowToastAtTop] = useState(false);

  const resetAll = useCallback(() => {
    setShowDefaultToast(false);
    setShowToastWithHeading(false);
    setShowDestructiveToast(false);
    setShowToastWithCTA(false);
    setShowToastAtTop(false);
  }, []);

  useEffect(() => {
    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        resetAll();
      }
    };
    document.addEventListener("keydown", handleEscKeyPress);
    return () => document.removeEventListener("keydown", handleEscKeyPress);
  }, [resetAll]);

  return (
    <div className="flex flex-col gap-12 mb-10 p-4 md:w-4/5 lg:w-full mx-auto">
      <div className="my-2 md:leading-6">
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
        <Card codeLines={TOAST_WITH_HEADING_CODE_LINES}>
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
        </Card>

        {/* destructive toast*/}
        <div className="text-base">Destructive Toast</div>
        <Card codeLines={DESTRUCTIVE_TOAST_CODE_LINES}>
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
        </Card>

        {/*toast with CTA*/}
        <div className="text-base">Toast with CTA</div>
        <Card codeLines={TOAST_WITH_CTA_CODE_LINES}>
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
        </Card>

        {/*toast at top right*/}
        <div className="text-base">Toast at top right</div>
        <Card codeLines={TOAST_AT_TOP_CODE_LINES}>
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
        </Card>
      </div>

      <Divider />

      <DesignSystemWrapperPageFooter url={TOAST_COMPONENT_GITHUB_URL} />
      <Divider />
    </div>
  );
};
