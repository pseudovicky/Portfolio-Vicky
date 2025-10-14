"use client";

import { cn } from "../../lib/utils.js";
import { motion } from "framer-motion";

export const ThreeDMarquee = ({
  images,
  className,
  innerClassName,
  pauseOnHover = true,
  vertical = false,
  repeat = 4,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
              },
              innerClassName,
            )}
          >
            {images.map((imageUrl, idx) => (
              <motion.div
                key={`${i}-${idx}`}
                className="relative cursor-pointer overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-neutral-900 border border-slate-200 dark:border-slate-800"
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 5,
                  z: 50
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <div className="flex items-center justify-center h-20 w-20">
                  <img
                    src={imageUrl}
                    alt={`Technology ${idx}`}
                    className="h-full w-full object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
                
                {/* 3D effect overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-2xl" />
                
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </motion.div>
            ))}
          </div>
        ))}
    </div>
  );
};
