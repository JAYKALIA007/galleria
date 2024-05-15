"use client";
import React from "react";
import {
  DropdownSubGroupTrigger,
  Dropdown,
  DropdownContent,
  DropdownHeader,
  DropdownItem,
  DropdownSubGroup,
  DropdownSubGroupContent,
  DropdownTrigger,
} from "./Dropdown";
import Link from "next/link";
import { ButtonComponent } from "../button/ButtonComponent";
import { ButtonSizeVariantType, ButtonThemeVariantType } from "../button/types";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Divider } from "@/app/components/Divider";
import {
  DEFAULT_DROPDOWN_CODE_LINES,
  DISABLED_ITEM_DROPDOWN_CODE_LINES,
  DROPDOWN_COMPONENT_GITHUB_URL,
  DROPDOWN_WITH_HEADER_CODE_LINES,
  NESTED_DROPDOWN_CODE_LINES,
  RIGHT_SIDED_DROPDOWN_CODE_LINES,
} from "./constants";
import { DesignSystemWrapperPageFooter } from "@/app/components/DesignSystemWrapperPageFooter";
import { Card } from "@/app/components/Card";

export const DropdownPageWrapper = () => {
  return (
    <div className="flex flex-col gap-12 mb-10 p-4 md:w-4/5 lg:w-full mx-auto">
      <div className="my-2 md:leading-6">
        Display a menu which allows the user to select from a set of
        actions/functions that get triggered by a button.
      </div>
      <div className="flex justify-between items-center">
        <Dropdown>
          <DropdownTrigger>Open</DropdownTrigger>
          <DropdownContent side="right">
            <DropdownHeader>Jane Doe</DropdownHeader>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Dashboard</DropdownItem>
            <DropdownSubGroup>
              <DropdownSubGroupTrigger>Subscriptions</DropdownSubGroupTrigger>
              <DropdownSubGroupContent>
                <DropdownItem>Active</DropdownItem>
                <DropdownItem>Expired</DropdownItem>
              </DropdownSubGroupContent>
            </DropdownSubGroup>
            <DropdownItem disabled>Activate</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownContent>
        </Dropdown>
        <Link href={DROPDOWN_COMPONENT_GITHUB_URL} target="_blank">
          <ButtonComponent
            theme={ButtonThemeVariantType.SECONDARY}
            size={ButtonSizeVariantType.SM}
          >
            <GitHubLogoIcon />
            <span>
              Code
              <span className="hidden md:inline-block">
                of the Dropdown Component
              </span>
            </span>
            <ExternalLinkIcon />
          </ButtonComponent>
        </Link>
      </div>

      <Divider />
      <div className="flex flex-col gap-6">
        <div className="text-lg">Examples of Dropdowns</div>

        <div className="text-base">Default dropdown</div>
        <Card size="large" codeLines={DEFAULT_DROPDOWN_CODE_LINES}>
          <Dropdown>
            <DropdownTrigger>Open</DropdownTrigger>
            <DropdownContent>
              <DropdownItem>Profile</DropdownItem>
              <DropdownItem>Dashboard</DropdownItem>
              <DropdownItem>Logout</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </Card>

        <div className="text-base">Dropdown with Header</div>
        <Card size="large" codeLines={DROPDOWN_WITH_HEADER_CODE_LINES}>
          <Dropdown>
            <DropdownTrigger>Open</DropdownTrigger>
            <DropdownContent>
              <DropdownHeader>Jane Doe</DropdownHeader>
              <DropdownItem>Profile</DropdownItem>
              <DropdownItem>Dashboard</DropdownItem>
              <DropdownItem>Logout</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </Card>

        <div className="text-base">Nested dropdown</div>
        <Card size="large" codeLines={NESTED_DROPDOWN_CODE_LINES}>
          <Dropdown>
            <DropdownTrigger>Open</DropdownTrigger>
            <DropdownContent>
              <DropdownHeader>Jane Doe</DropdownHeader>
              <DropdownItem>Profile</DropdownItem>
              <DropdownItem>Dashboard</DropdownItem>
              <DropdownSubGroup>
                <DropdownSubGroupTrigger>Subscriptions</DropdownSubGroupTrigger>
                <DropdownSubGroupContent>
                  <DropdownItem>Active</DropdownItem>
                  <DropdownItem>Expired</DropdownItem>
                </DropdownSubGroupContent>
              </DropdownSubGroup>
              <DropdownItem>Logout</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </Card>

        <div className="text-base">Dropdown with a disabled option</div>
        <Card size="large" codeLines={DISABLED_ITEM_DROPDOWN_CODE_LINES}>
          <Dropdown>
            <DropdownTrigger>Open</DropdownTrigger>
            <DropdownContent>
              <DropdownItem>Profile</DropdownItem>
              <DropdownItem>Dashboard</DropdownItem>
              <DropdownItem disabled>Logout</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </Card>

        <div className="text-base">Right sided dropdown</div>
        <Card size="large" codeLines={RIGHT_SIDED_DROPDOWN_CODE_LINES}>
          <Dropdown>
            <DropdownTrigger>Open</DropdownTrigger>
            <DropdownContent side="right">
              <DropdownItem>Profile</DropdownItem>
              <DropdownItem>Dashboard</DropdownItem>
              <DropdownItem>Logout</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </Card>
      </div>

      <Divider />
      <DesignSystemWrapperPageFooter url={DROPDOWN_COMPONENT_GITHUB_URL} />
      <Divider />
    </div>
  );
};
