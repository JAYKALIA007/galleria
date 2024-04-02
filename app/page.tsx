import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div className="m-10 flex gap-20 justify-start w-fit p-4">
      <Head>
        <title>Next.js App</title>
        <meta name="description" content="Your description here" />
        <link rel="icon" href="app/favicon.ico" />
      </Head>
      <div className="italic flex flex-col gap-2">
        <Link href="/wordle" className="hover:underline">
          Wordle
        </Link>
        <Link href="/tic-tac-toe" className="hover:underline">
          Tic Tac Toe
        </Link>
        <Link href="/memory-game" className="hover:underline">
          Memory Game
        </Link>
        <Link href="/react-snippets" className="hover:underline">
          React Snippets
        </Link>
        <Link href="/design-system" className="hover:underline">
          Design System
        </Link>
      </div>
    </div>
  );
}
