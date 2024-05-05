import { SlideInAnimationContainer } from "../components/SlideInAnimationContainer";
import { Experience } from "./Experience";

import { Socials } from "./Socials";

const About: React.FC = () => {
  return (
    <SlideInAnimationContainer>
      <div className="flex flex-col gap-8 text-xs md:text-sm">
        <div className="text-base md:text-lg font-semibold">
          Hey there, I&apos;m Jay.
        </div>
        <div className="leading-6">
          You can find me inspecting elements on random websites, crafting
          intuitive seamless interfaces, and preaching the good word of design
          systems. Oh, and you can also track me down on these socials...
        </div>
        <Socials />
        <Experience />
      </div>
    </SlideInAnimationContainer>
  );
};

export default About;
