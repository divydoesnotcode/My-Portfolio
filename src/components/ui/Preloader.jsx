import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal } from "./terminal";

export function Preloader({ isLoading, onComplete }) {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#F5F0E8] flex flex-col items-center justify-center p-4 md:p-8"
        >
          {/* Terminal Component */}
          <div className="w-full max-w-3xl">
            <Terminal 
              commands={[
                "sys init portfolio --user=divydoesnotcode",
                "npm run dev"
              ]}
              outputs={{
                0: ["→ Initializing system environment...", "→ Verifying assets...", "✓ Integrity check passed."],
                1: ["Welcome to the portfolio of Divy Barot.", "System ready. Launching sequence initiated..."]
              }}
              username="divydoesnotcode"
              typingSpeed={20}
              delayBetweenCommands={250}
              onComplete={() => setTimeout(onComplete, 100)}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
