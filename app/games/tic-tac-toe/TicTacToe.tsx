"use client";
import React, { useMemo, useState } from "react";
import { DEFAULT_BOARD, WINNING_COMBINATIONS } from "./helper";
import { ConfettiAnimation } from "../../components/Confetti";

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Array<string | null>>(DEFAULT_BOARD);
  const [isPlayerOneTurn, setIsPlayerOneTurn] = useState<boolean>(true);

  const isWinningCombination: boolean = useMemo(() => {
    for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
      const [a, b, c] = WINNING_COMBINATIONS[i];
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return true;
      }
    }
    return false;
  }, [board]);

  const showMessage = (): string => {
    let message;
    if (isWinningCombination) {
      message = `${isPlayerOneTurn ? "Player 2" : "Player 1"} wins`;
    } else if (!board.includes(null)) {
      message = `It's a draw. Reset to play again.`;
    } else if (isPlayerOneTurn) {
      message = "Player 1's turn";
    } else {
      message = "Player 2's turn";
    }
    return message;
  };

  const handleReset = () => {
    setBoard(DEFAULT_BOARD);
    setIsPlayerOneTurn(true);
  };

  const message = showMessage();
  const isGameDraw = Boolean(!board.includes(null));

  return (
    <div className="flex flex-col gap-10 mt-32 lg:mt-40 items-center">
      <div className="grid grid-cols-3">
        {board.map((cell, index) => (
          <button
            key={index}
            className="h-20 w-20 border disabled:cursor-not-allowed text-2xl"
            onClick={() => {
              const updatedBoard = [...board];
              updatedBoard[index] = isPlayerOneTurn ? "X" : "O";
              setBoard(updatedBoard);
              setIsPlayerOneTurn((prev) => !prev);
            }}
            disabled={Boolean(cell) || isWinningCombination || isGameDraw}
          >
            {cell}
          </button>
        ))}
      </div>
      <div className="text-xl font-semibold">{message}</div>
      {isGameDraw && (
        <button
          className="text-white border border-gray-300 px-2 py-0.5 rounded cursor-pointer text-sm"
          onClick={handleReset}
        >
          Reset board
        </button>
      )}
      {isWinningCombination && <ConfettiAnimation />}
    </div>
  );
};

export default TicTacToe;
