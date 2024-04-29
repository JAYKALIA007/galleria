"use client";
import { Divider } from "@/app/components/Divider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";
import { ButtonComponent } from "../button/ButtonComponent";
import { ButtonSizeVariantType, ButtonThemeVariantType } from "../button/types";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { AccordionCard } from "@/app/components/AccordionCard";
import { ACCORDION_COMPONENT_GITHUB_URL, accordionJsonData } from "./constants";

export const AccordionPageWrapper = () => {
  return (
    <div className="flex flex-col gap-12 mb-10 p-4 md:w-4/5 lg:w-full mx-auto">
      <div className="my-5">
        A menu composed of vertically stacked headers that reveal more details
        when triggered.
      </div>
      <div className="flex justify-end">
        <Link href={ACCORDION_COMPONENT_GITHUB_URL} target="_blank">
          <ButtonComponent
            theme={ButtonThemeVariantType.SECONDARY}
            size={ButtonSizeVariantType.SM}
          >
            <GitHubLogoIcon />
            <span>
              Code{" "}
              <span className="hidden md:inline-block">
                of the Accordion Component
              </span>
            </span>
            <ExternalLinkIcon />
          </ButtonComponent>
        </Link>
      </div>

      <Divider />

      <div className="flex flex-col gap-6">
        <div className="text-lg">Examples of Accordion variants</div>

        {/*  Single collapsible accordion */}
        <div className="text-base">Single Collapsible Accordion</div>
        <AccordionCard>
          <Accordion>
            {accordionJsonData.map((item) => (
              <AccordionItem value={item.triggerLabel} key={item.triggerLabel}>
                <AccordionTrigger>{item.triggerLabel}</AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AccordionCard>

        {/*  Multiple collapsible accordion */}
        <div className="text-base">Multiple Collapsible Accordion</div>
        <AccordionCard className="h-[450px]">
          <Accordion type={"multiple"}>
            {accordionJsonData.map((item) => (
              <AccordionItem value={item.triggerLabel} key={item.triggerLabel}>
                <AccordionTrigger>{item.triggerLabel}</AccordionTrigger>
                <AccordionContent>{item.description}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AccordionCard>
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
          href={ACCORDION_COMPONENT_GITHUB_URL}
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
