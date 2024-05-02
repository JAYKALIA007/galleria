"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const WhyDesignSystem: React.FC = () => {
  const [showSeeMore, setShowSeeMore] = useState(true);

  return (
    <div className="flex flex-col gap-4 box-border text-xs md:text-sm">
      <header className="text-base md:text-lg font-semibold">
        The motivation.
      </header>
      <main className="flex flex-col gap-5 border-l border-gray-300 dark:border-gray-700 px-4 leading-6">
        <section>
          Building frontend today seems to be very easy on the surface by using
          modern-day libraries and frameworks, but many aspects such as
          accessibility, WAI-ARIA principles, keyboard navigation, etc., are
          overlooked on a day-to-day basis.
        </section>
        <AnimatePresence>
          {showSeeMore ? (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="cursor-pointer hover:underline decoration-blue-500 underline-offset-4 flex justify-start"
              onClick={() => setShowSeeMore(false)}
            >
              See more...
            </motion.button>
          ) : (
            <>
              <motion.section
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                Even though these factors are essential, they are often
                overlooked and considered as overkill due to the fact that they
                slow down the speed of development.
              </motion.section>
              <motion.section
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                To overcome this, one can build a set of default-styled based
                components with all the aspects such as accessibility, keyboard
                shortcuts, WAI-ARIA principles, etc., and then expose them so
                that one can build on top of them. This pattern of building
                unstyled base components and encapsulating their behavior is
                called{" "}
                <span className="italic underline">
                  HEADLESS UI components.
                </span>
              </motion.section>
              <motion.section
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                Talking about styling, one can build multiple theme and size
                variants of each of these components similar to how the design
                teams build multiple prototypes of a component to show different
                states of them. Another benefit of building a design system for
                components is that any change made in the future by the design
                teams can be efficiently implemented in the code.
              </motion.section>
              <motion.button
                className="cursor-pointer hover:underline decoration-blue-500 underline-offset-4 flex justify-start"
                onClick={() => setShowSeeMore(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                See less...
              </motion.button>
            </>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};
