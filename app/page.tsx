// TODO: a common link component
"use client";
import Head from "next/head";
import Link from "next/link";
import { SlideInAnimationContainer } from "./components/SlideInAnimationContainer";
import { ABOUT_CONTENT, ABOUT_PAGE, GOOGLE_TRACKING_ID } from "./constants";
import ReactGA from "react-ga";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

export default function Home() {
  const pathname = usePathname();
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && GOOGLE_TRACKING_ID) {
      ReactGA.initialize(GOOGLE_TRACKING_ID);
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  useEffect(() => {
    if (pathname) {
      ReactGA.pageview(pathname);
    }
  }, [pathname]);

  return (
    <div className="main-container">
      <SlideInAnimationContainer>
        <Head>
          <title>Next.js App</title>
          <meta name="description" content="Your description here" />
          <link rel="icon" href="app/favicon.ico" />
        </Head>
        <div className="flex flex-col gap-8 text-xs md:text-sm">
          <div className="text-base md:text-lg font-semibold">
            Hey there, I&apos;m Jay.
          </div>
          <div className="leading-6">{ABOUT_CONTENT}</div>
          <Link
            href={ABOUT_PAGE}
            className="hover:underline decoration-blue-700 dark:decoration-blue-500 underline-offset-4 flex gap-1 items-center hover:text-inherit"
          >
            <motion.div
              transition={{
                delay: 2.5,
                duration: 2,
              }}
              className="flex gap-1 items-center font-semibold"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
            >
              About page
              <motion.button
                animate={isHover ? { y: -3, x: 3 } : { y: 0, x: 0 }}
              >
                <ExternalLinkIcon height={"16px"} width={"16px"} />
              </motion.button>
            </motion.div>
          </Link>

          <div className="flex flex-col gap-2">
            <div className="text-base md:text-lg font-semibold">My work</div>
            <Link href="/blogs" className="hover:underline underline-offset-4">
              Blogs
            </Link>
            <Link
              href="/design-system"
              className="hover:underline underline-offset-4"
            >
              Design System
            </Link>
            <Link href="/games" className="hover:underline underline-offset-4">
              Games
            </Link>
            <Link
              href="/react-snippets"
              className="hover:underline underline-offset-4"
            >
              React Snippets
            </Link>
            <Link
              href="/npm-packages"
              className="hover:underline underline-offset-4"
            >
              Npm Packages{" "}
              <span className="font-thin">(Open-sourced projects)</span>
            </Link>
            <Link
              href="/reading-list"
              className="hover:underline underline-offset-4"
            >
              Reading List
            </Link>
          </div>
        </div>
      </SlideInAnimationContainer>
    </div>
  );
}
