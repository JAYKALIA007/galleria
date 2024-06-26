import { SlideInAnimationContainer } from "@/app/components/SlideInAnimationContainer";
import { ButtonComponent } from "@/app/design-system/button/ButtonComponent";
import { Divider } from "@/app/components/Divider";
import {
  ButtonThemeVariantType,
  ButtonSizeVariantType,
} from "@/app/design-system/button/types";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { AddTags } from "./AddTags";
import Link from "next/link";
import { ADD_TAGS_GITHUB_URL } from "./constants";

export const AddTagsContainer = () => {
  return (
    <SlideInAnimationContainer>
      <div className="text-xs md:text-sm flex flex-col gap-8">
        <div className="my-2 leading-6">
          A chip component which shows suggestions as you type and where you can
          add & remove tags. Also supports backspace keydown event to remove a
          tag from the selected tags.
        </div>

        <div className="flex justify-end">
          <Link href={ADD_TAGS_GITHUB_URL} target="_blank">
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

        <div className="flex flex-col gap-6">
          <AddTags />
        </div>
      </div>
    </SlideInAnimationContainer>
  );
};
