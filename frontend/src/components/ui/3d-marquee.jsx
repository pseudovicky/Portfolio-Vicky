"use client";

import { cn } from "../../lib/utils.js";
import { motion } from "framer-motion";

export const ThreeDMarquee = ({
  technologies,
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
            {technologies.map((technology, idx) => (
              <motion.div
                key={`${i}-${idx}`}
                className="relative cursor-pointer overflow-hidden rounded-xl border border-slate-200 px-6 py-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-slate-800"
                whileHover={{ 
                  scale: 1.05,
                  rotateX: 10,
                  rotateY: 10,
                  z: 50
                }}
                style={{
                  background: technology.gradient,
                }}
              >
                <div className="flex items-center space-x-3">
                  {technology.icon && (
                    <div className="text-2xl">
                      {technology.icon}
                    </div>
                  )}
                  <span className="text-white font-semibold text-lg">
                    {technology.name}
                  </span>
                </div>
                
                {/* 3D effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        ))}
    </div>
  );
};
