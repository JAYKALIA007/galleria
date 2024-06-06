import { SLIDESHOW_GITHUB_URL } from "./constants";
import { Button } from "@/components/ui/button";
import { SlideshowCards } from "./SlideshowCards";
import Link from "next/link";
import { ButtonComponent } from "@/app/design-system/button/ButtonComponent";
import {
  ButtonSizeVariantType,
  ButtonThemeVariantType,
} from "@/app/design-system/button/types";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const metadata = {
  title: "Slideshow | React Snippets",
  description:
    "An implementation of a card which creates a slideshow when you hover on the card.",
  keywords: [
    "slidehow",
    "hover",
    "media-card",
    "react-snippets",
    "web development",
    "frontend",
    "snippets",
    "react.js",
  ],
};

const Slideshow = () => {
  return (
    <div className="flex flex-col gap-8 h-full p-4 text-xs md:text-sm ">
      <div className="my-2 leading-6">
        A minimal react component which makes use of{" "}
        <span className="font-medium italic">setInterval()</span> and{" "}
        <span className="font-medium italic">mouse-events</span> to create a
        slideshow when you hover over the individual cards.
      </div>
      <div className="flex justify-end">
        <Link href={SLIDESHOW_GITHUB_URL} target="_blank">
          <ButtonComponent
            theme={ButtonThemeVariantType.SECONDARY}
            size={ButtonSizeVariantType.SM}
          >
            <GitHubLogoIcon />
            <span>Code</span>
          </ButtonComponent>
        </Link>
      </div>

      <div className="flex flex-wrap gap-10 justify-center">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <SlideshowCards key={index} />
          ))}
      </div>
    </div>
  );
};

export default Slideshow;
