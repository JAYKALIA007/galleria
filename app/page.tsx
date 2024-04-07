import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js App</title>
        <meta name="description" content="Your description here" />
        <link rel="icon" href="app/favicon.ico" />
      </Head>
      <div className="flex flex-col gap-2">
        <Link href="/games" className="hover:underline">
          Games
        </Link>
        <Link href="/react-snippets" className="hover:underline">
          React Snippets
        </Link>
        <Link href="/design-system" className="hover:underline">
          Design System
        </Link>
      </div>
    </>
  );
}
