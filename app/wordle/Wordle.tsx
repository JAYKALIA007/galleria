"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ERROR_MESSAGE,
  NO_OF_COLS,
  NO_OF_ROWS,
  WINNING_MESSAGE,
  WORD_LENGTH,
  findMatchingIndicesAndUpdateMap,
  getBgColorClassName,
  getWordOfTheDay,
  initializeMap,
} from "./helper";
import { easeOut, motion } from "framer-motion";
import { Input } from "../components/Input";
import { ConfettiAnimation } from "../components/Confetti";
import { Button } from "@/components/ui/button";

const WORD_OF_THE_DAY = getWordOfTheDay();

const Wordle: React.FC = () => {
  const [guessedWords, setGuessedWords] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>("");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [isCorrectGuess, setIsCorrectGuess] = useState<boolean>(false);

  const initialMapValue = initializeMap(WORD_OF_THE_DAY);
  let myMap = new Map(initialMapValue);

  const inputRef = useRef<HTMLInputElement>(null);

  const isWinningGuess = useMemo(
    () => guessedWords.includes(WORD_OF_THE_DAY),
    [guessedWords]
  );

  useEffect(() => {
    if (guessedWords.includes(WORD_OF_THE_DAY)) {
      setFeedbackMessage(WINNING_MESSAGE);
      setIsCorrectGuess(true);
    } else if (currentGuess === "") {
      setFeedbackMessage("");
    }
  }, [currentGuess, guessedWords]);

  const handleGuessSubmit = () => {
    if (currentGuess.length !== 5 || guessedWords.includes(currentGuess)) {
      setFeedbackMessage(ERROR_MESSAGE);
      inputRef.current?.focus();
      return;
    }

    const updatedGuessedWords = [...guessedWords, currentGuess];
    setGuessedWords(updatedGuessedWords);
    if (updatedGuessedWords.length === 6 && currentGuess !== WORD_OF_THE_DAY) {
      setFeedbackMessage(
        `Sorry, you've run out of attempts. The correct word was ${WORD_OF_THE_DAY}.`
      );
      return;
    }

    setCurrentGuess("");
    setFeedbackMessage("");
    inputRef.current?.focus();
  };

  const rowsArray = Array(NO_OF_ROWS).fill("");
  const colsArray = Array(NO_OF_COLS).fill("");

  return (
    <div className="min-h-screen overflow-scroll flex flex-col gap-10 justify-center items-center">
      <div>
        {rowsArray.map((_, index1) => {
          const word = guessedWords.length > index1 ? guessedWords[index1] : "";

          myMap = new Map(initialMapValue);

          const matchingIndices =
            word.length > 0
              ? findMatchingIndicesAndUpdateMap(word, myMap, WORD_OF_THE_DAY)
              : [];

          return (
            <motion.div
              variants={{
                start: { transition: { staggerChildren: 0.1 } },
                end: { transition: { staggerChildren: 0.1 } },
              }}
              transition={{
                duration: 0.2,
                yoyo: Infinity,
                ease: easeOut,
              }}
              initial="start"
              animate={
                isWinningGuess && index1 === guessedWords.length - 1
                  ? "end"
                  : {}
              }
              key={index1}
              className="flex"
            >
              {colsArray.map((_, index2) => {
                const character = word.length > 0 ? word.charAt(index2) : "";

                const bgColor = getBgColorClassName(
                  index2,
                  matchingIndices,
                  myMap,
                  character
                );

                return (
                  <motion.div
                    variants={{
                      end: {
                        opacity: 1,
                        y: [0, -50, 0],
                      },
                    }}
                    key={index2}
                    className={`border w-10 h-10 md:w-20 md:h-20 flex justify-center items-center m-2 text-white text-xl font-semibold ${
                      character ? bgColor : ""
                    }`}
                  >
                    {character}
                  </motion.div>
                );
              })}
            </motion.div>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 mx-2 text-sm items-center">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            inputRef={inputRef}
            guess={currentGuess}
            onChange={(e: { target: { value: string } }) =>
              setCurrentGuess(e.target.value.toLocaleUpperCase())
            }
            disabled={isWinningGuess || guessedWords.length === 6}
          />
          <Button
            variant="outline"
            size="xs"
            disabled={
              currentGuess.length !== WORD_LENGTH || Boolean(feedbackMessage)
            }
            onClick={handleGuessSubmit}
            aria-disabled={true}
          >
            Submit
          </Button>
        </div>

        {feedbackMessage && (
          <div
            className={`m-2 text-lg md:text-xl ${
              !isWinningGuess ? "text-red-800" : "text-white"
            }`}
          >
            {feedbackMessage}
          </div>
        )}
      </div>
      {isCorrectGuess && <ConfettiAnimation />}
    </div>
  );
};

export default Wordle;
