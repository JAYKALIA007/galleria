import { SLIDESHOW_GITHUB_URL } from "./constants";
import { Button } from "@/components/ui/button";
import { SlideshowCards } from "./SlideshowCards";

export const metadata = {
  title: "Galleria | Snippets | Slideshow",
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
    <div className="flex flex-col justify-center items-center gap-10 h-full p-4">
      <div className="text-left">
        A minimal react component which makes use of{" "}
        <span className="font-medium italic">setInterval()</span> and{" "}
        <span className="font-medium italic">mouse-events</span> to create a
        slideshow when you hover over the individual cards.
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        {Array(4)
          .fill("")
          .map((_, index) => (
            <SlideshowCards key={index} />
          ))}
      </div>
      <Button variant="outline">
        <a href={SLIDESHOW_GITHUB_URL} target="_blank">
          CODE
        </a>
      </Button>
    </div>
  );
};

export default Slideshow;
