import { SlideInAnimationContainer } from "../components/SlideInAnimationContainer";
import { ABOUT_CONTENT } from "../constants";
import { Experience } from "./Experience";

import { Socials } from "./Socials";

const About: React.FC = () => {
  return (
    <div className="main-container">
      <SlideInAnimationContainer>
        <div className="flex flex-col gap-8 text-xs md:text-sm">
          <div className="text-base md:text-lg font-semibold">
            Hey there, I&apos;m Jay.
          </div>
          <div className="leading-6">
            {ABOUT_CONTENT}
            <br />
            Oh, and you can also track me down on these socials...
          </div>
          <Socials />
          <Experience />
        </div>
      </SlideInAnimationContainer>
    </div>
  );
};

export default About;
