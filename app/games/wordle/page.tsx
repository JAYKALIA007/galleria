import Wordle from "./Wordle";

export const metadata = {
  title: "Wordle | Games",
  description:
    "Wordle is a web-based word game where players have six attempts to guess a five-letter word, with feedback given for each guess in the form of colored tiles indicating when letters match or occupy the correct position.",
  keywords: ["wordle", "games"],
};

const WordlePage = () => {
  return <Wordle />;
};

export default WordlePage;
