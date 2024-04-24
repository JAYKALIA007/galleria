import { MemoryGame } from "./MemoryGame";

export const metadata = {
  title: "Memory Game | Games",
  description:
    "Level up your memory for free with this online memory card game. Flip the cards and match the tiles together in pairs.",
  keywords: ["memory-game", "games"],
};

const MemoryGamePage = () => {
  return <MemoryGame />;
};

export default MemoryGamePage;
