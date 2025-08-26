"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils.js";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 600,
  className
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const containerRef = useRef(null);
  
  const updateMousePosition = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener("mousemove", updateMousePosition);
      return () => {
        if (containerRef.current) {
          containerRef.current.removeEventListener("mousemove", updateMousePosition);
        }
      };
    }
  }, []);
  
  let maskSize = isHovered ? revealSize : size;

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative", className)}
      animate={{
        backgroundColor: isHovered ? "rgb(15 23 42)" : "transparent",
      }}
      transition={{
        backgroundColor: { duration: 0.3 },
      }}>
      <motion.div
        className="absolute flex h-full w-full items-center justify-center bg-white text-6xl"
        style={{
          maskImage: `radial-gradient(circle, black 40%, transparent 50%)`,
          maskRepeat: "no-repeat",
          WebkitMaskImage: `radial-gradient(circle, black 40%, transparent 50%)`,
          WebkitMaskRepeat: "no-repeat",
        }}
        animate={{
          maskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          maskSize: `${maskSize}px`,
          WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{
          maskSize: { duration: 0.3, ease: "easeInOut" },
          maskPosition: { duration: 0.15, ease: "linear" },
        }}>
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="relative z-20 mx-auto max-w-4xl text-center font-bold">
          {children}
        </div>
      </motion.div>
      <div className="flex h-full w-full items-center justify-center">
        {revealText}
      </div>
    </motion.div>
  );
};
