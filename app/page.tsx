// TODO: a common link component
import Head from "next/head";
import Link from "next/link";
import { SlideInAnimationContainer } from "./components/SlideInAnimationContainer";
export default function Home() {
  return (
    <SlideInAnimationContainer>
      <Head>
        <title>Next.js App</title>
        <meta name="description" content="Your description here" />
        <link rel="icon" href="app/favicon.ico" />
      </Head>
      <div className="flex flex-col gap-2">
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
      </div>
    </SlideInAnimationContainer>
  );
}
