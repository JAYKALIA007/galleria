import { Switch } from "./Switch";
import { Divider } from "@/app/components/Divider";
import { ButtonComponent } from "../button/ButtonComponent";
import { ButtonSizeVariantType, ButtonThemeVariantType } from "../button/types";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { SwitchCard } from "@/app/components/SwitchCard";
import {
  DEFAULT_SWITCH_CODE_LINES,
  DISABLED_SWITCH_CODE_LINES,
  SWITCH_BOTTOM_LABEL_POSITION_CODE_LINES,
  SWITCH_COMPONENT_GITHUB_URL,
  SWITCH_DEFAULT_LABEL_POSITION_CODE_LINES,
  SWITCH_RIGHT_LABEL_POSITION_CODE_LINES,
  SWITCH_TOP_LABEL_POSITION_CODE_LINES,
  SWITCH_WITH_FILL_CODE_LINES,
} from "./constants";
import { DesignSystemWrapperPageFooter } from "@/app/components/DesignSystemWrapperPageFooter";

export const SwitchPageWrapper = () => {
  return (
    <div className="flex flex-col gap-12 mb-10 p-4 md:w-4/5 lg:w-full mx-auto">
      <div className="my-2 md:leading-6">
        Display a control which allows the user to toggle between checked and
        unchecked states and opltionally show a label associated with it.
      </div>

      <div className="flex justify-between items-center">
        <Switch />
        <Link href={SWITCH_COMPONENT_GITHUB_URL} target="_blank">
          <ButtonComponent
            theme={ButtonThemeVariantType.SECONDARY}
            size={ButtonSizeVariantType.SM}
          >
            <GitHubLogoIcon />
            <span>
              Code{" "}
              <span className="hidden md:inline-block">
                of the Switch Component
              </span>
            </span>
            <ExternalLinkIcon />
          </ButtonComponent>
        </Link>
      </div>

      <Divider />

      <div className="flex flex-col gap-6">
        <div className="text-lg">Examples of Switch variants</div>

        <div className="text-base">Default switch</div>
        <SwitchCard codeLines={DEFAULT_SWITCH_CODE_LINES}>
          <Switch />
        </SwitchCard>

        <div className="text-base">Disabled switch</div>
        <SwitchCard codeLines={DISABLED_SWITCH_CODE_LINES}>
          <Switch disabled isChecked />
        </SwitchCard>

        <div className="text-base">Switch with a different fill color</div>
        <SwitchCard codeLines={SWITCH_WITH_FILL_CODE_LINES}>
          <Switch fillColor="bg-green-600" isChecked />
        </SwitchCard>

        <div className="text-base">Switch with label, default position</div>
        <SwitchCard codeLines={SWITCH_DEFAULT_LABEL_POSITION_CODE_LINES}>
          <Switch label="Airplane mode" />
        </SwitchCard>

        <div className="text-base">Switch with label, positioned right</div>
        <SwitchCard codeLines={SWITCH_RIGHT_LABEL_POSITION_CODE_LINES}>
          <Switch label="Airplane mode" labelPosition="right" />
        </SwitchCard>

        <div className="text-base">Switch with label, positioned top</div>
        <SwitchCard codeLines={SWITCH_TOP_LABEL_POSITION_CODE_LINES}>
          <Switch label="Airplane mode" labelPosition="top" />
        </SwitchCard>

        <div className="text-base">Switch with label, positioned bottom</div>
        <SwitchCard codeLines={SWITCH_BOTTOM_LABEL_POSITION_CODE_LINES}>
          <Switch label="Airplane mode" labelPosition="bottom" />
        </SwitchCard>
      </div>

      <Divider />
      <DesignSystemWrapperPageFooter url={SWITCH_COMPONENT_GITHUB_URL} />
      <Divider />
    </div>
  );
};
