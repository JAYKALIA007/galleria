import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen m-10 flex gap-20 justify-center">
      <Head>
        <title>Next.js App</title>
        <meta name="description" content="Your description here" />
        <link rel="icon" href="app/favicon.ico" />
      </Head>
      <Link href="/wordle">
        <div className="h-60 w-60 border rounded-lg hover:cursor-pointer flex justify-center items-center transform transition-transform hover:scale-105">
          Wordle
        </div>
      </Link>
      <Link href="/tic-tac-toe">
        <div className="h-60 w-60 border rounded-lg hover:cursor-pointer flex justify-center items-center transform transition-transform hover:scale-105">
          Tic Tac Toe
        </div>
      </Link>
      <Link href="/memory-game">
        <div className="h-60 w-60 border rounded-lg hover:cursor-pointer flex justify-center items-center transform transition-transform hover:scale-105">
          Memory Game
        </div>
      </Link>
    </div>
  );
}
