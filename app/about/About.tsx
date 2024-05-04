import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Mail, FileText } from "lucide-react";
import { SlideInAnimationContainer } from "../components/SlideInAnimationContainer";
import {
  DRIVE_RESUME_LINK,
  GITHUB_PROFILE_URL,
  GMAIL_ID_URL,
  LINKED_IN_PROFILE_URL,
  TWITTER_PROFILE_URL,
} from "./contants";
import { AnimatedIconLink } from "../components/AnimatedIconLink";

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
        <div className="flex w-full justify-end gap-4 items-center m">
          <AnimatedIconLink
            url={GITHUB_PROFILE_URL}
            icon={<GitHubLogoIcon height={"20px"} width={"20px"} />}
            label="GitHub Profile"
          />
          <AnimatedIconLink
            url={LINKED_IN_PROFILE_URL}
            icon={<LinkedInLogoIcon height={"20px"} width={"20px"} />}
            label="LinkedIn Profile"
          />
          <AnimatedIconLink
            url={TWITTER_PROFILE_URL}
            icon={<TwitterLogoIcon height={"20px"} width={"20px"} />}
            label="Twitter Profile"
          />
          <AnimatedIconLink
            url={`mailto:${GMAIL_ID_URL}`}
            icon={<Mail height={"20px"} width={"20px"} />}
            label="Send Email"
          />
          <AnimatedIconLink
            url={DRIVE_RESUME_LINK}
            icon={<FileText height={"20px"} width={"20px"} />}
            label="See Resume"
          />
        </div>
      </div>
    </SlideInAnimationContainer>
  );
};

export default About;
