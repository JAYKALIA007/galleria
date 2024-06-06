import Link from "next/link";
import React from "react";
import { SlideInAnimationContainer } from "../components/SlideInAnimationContainer";

export const metadata = {
  title: "Games | Galleria",
  description:
    "A collection of games which built using react, next and typescript.",
  keywords: ["games", "wordle", "tic-tac-toe", "memory game"],
};

const Games: React.FC = () => {
  return (
    <SlideInAnimationContainer>
      <div className="flex flex-col gap-2 text-xs md:text-sm">
        <Link
          href="/games/rock-paper-scissors"
          className="hover:underline underline-offset-4"
        >
          Rock Paper Scissors
        </Link>
        <Link
          href="/games/wordle"
          className="hover:underline underline-offset-4"
        >
          Wordle
        </Link>
        <Link
          href="/games/tic-tac-toe"
          className="hover:underline underline-offset-4"
        >
          Tic Tac Toe
        </Link>
        <Link
          href="/games/memory-game"
          className="hover:underline underline-offset-4"
        >
          Memory Game
        </Link>
      </div>
    </SlideInAnimationContainer>
  );
};

export default Games;
