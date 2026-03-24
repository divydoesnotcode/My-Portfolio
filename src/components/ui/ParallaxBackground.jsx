import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "../../lib/utils";

export function ParallaxBackground({ className }) {
  const containerRef = useRef(null);

  // Track scroll position of the window
  const { scrollY } = useScroll();

  // Define different translation speeds for various elements to create depth
  const y1 = useTransform(scrollY, [0, 2000], [0, -300]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -500]);
  const opacityFade = useTransform(scrollY, [0, 500, 1500], [0.8, 0.4, 0]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 z-[-10] w-full h-full overflow-hidden pointer-events-none",
        className
      )}
    >
      {/* Deepest Layer - Moves Slowest */}
      <motion.div
        style={{ y: y2, background: "rgba(180,83,9,0.06)" }}
        className="absolute top-[20%] left-[10%] w-96 h-96 rounded-full blur-[100px]"
      />
      <motion.div
        style={{ y: y2, background: "rgba(67,90,72,0.04)" }}
        className="absolute bottom-[10%] right-[20%] w-[30rem] h-[30rem] rounded-full blur-[120px]"
      />

      {/* Mid Layer - Large Graphic Elements */}
      <motion.div
        style={{ y: y1, opacity: opacityFade }}
        className="absolute top-[40%] left-[-10%] flex items-center justify-center -rotate-12"
      >
        <div className="text-[20rem] font-bold leading-none whitespace-nowrap select-none" style={{ color: "rgba(26,22,16,0.025)" }}>
          Divy
        </div>
      </motion.div>

      <motion.div
        style={{ y: y1 }}
        className="absolute top-[70%] right-[-5%] flex items-center justify-center rotate-6"
      >
        <div className="text-[15rem] font-bold leading-none whitespace-nowrap select-none" style={{ color: "rgba(26,22,16,0.02)" }}>
          Divy
        </div>
      </motion.div>

      {/* Foreground Parallax Layer - Moves Fastest */}
      <motion.div
        style={{ y: y3, borderColor: "rgba(110,87,115,0.12)" }}
        className="absolute top-[120%] left-[60%] w-32 h-32 border rounded-full"
      />
      <motion.div
        style={{ y: y3, borderColor: "rgba(180,83,9,0.12)" }}
        className="absolute top-[180%] left-[15%] w-24 h-24 border rounded-lg rotate-45"
      />
    </div>
  );
}
