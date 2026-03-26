import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, useAudio } from "./terminal";

export function Preloader({ isLoading, onComplete }) {
  const [hasLaunched, setHasLaunched] = useState(false);
  
  // Eagerly preload audio context and buffer globally on page load
  useAudio(true);

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
          className="fixed inset-0 z-[100] bg-[var(--bg)] flex flex-col items-center justify-center p-4 md:p-8"
        >
          <AnimatePresence mode="wait">
            {!hasLaunched ? (
              <motion.button
                key="launch-button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={() => setHasLaunched(true)}
                className="group flex items-center gap-3 px-8 py-4 bg-[var(--fg)] text-[var(--bg)] rounded-full font-mono text-xs md:text-sm tracking-widest uppercase hover:bg-[var(--accent)] hover:text-white transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                <span>Launch</span>
                <svg className="w-4 h-4 fill-current group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.button>
            ) : (
              <motion.div 
                key="terminal-container"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-3xl"
              >
                <Terminal 
                  autoStart={true}
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
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
