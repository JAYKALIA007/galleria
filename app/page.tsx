// TODO: a common link component
"use client";
import Head from "next/head";
import Link from "next/link";
import { SlideInAnimationContainer } from "./components/SlideInAnimationContainer";
import { ABOUT_CONTENT, GOOGLE_TRACKING_ID } from "./constants";
import ReactGA from "react-ga";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

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

        <div className="flex flex-col gap-2">
          <div className="text-base md:text-lg font-semibold">My work</div>
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
    </div>
  );
}
