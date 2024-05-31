import { useEffect, useState } from "react";

export const useIsBottomOfPage = () => {
  const [isBottomOfPage, setIsBottomOfPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsBottomOfPage(
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      );
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isBottomOfPage;
};
