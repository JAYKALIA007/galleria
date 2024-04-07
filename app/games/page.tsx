import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Galleria | Games",
  description:
    "A collection of games which built using react, next and typescript.",
  keywords: ["games", "wordle", "tic-tac-toe", "memory game"],
};

const Games: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/games/wordle" className="hover:underline">
        Wordle
      </Link>
      <Link href="/games/tic-tac-toe" className="hover:underline">
        Tic Tac Toe
      </Link>
      <Link href="/games/memory-game" className="hover:underline">
        Memory Game
      </Link>
    </div>
  );
};

export default Games;
