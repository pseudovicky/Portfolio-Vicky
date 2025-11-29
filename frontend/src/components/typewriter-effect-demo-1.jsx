"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TypewriterEffectSmoothDemo() {
  const [displayedRole, setDisplayedRole] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showPrefix, setShowPrefix] = useState(false);
  
  // The prefix stays constant after first typing
  const prefix = "I'm ";
  
  // Only the changing part of each phrase
  const roles = [
    "Vicky Kumar",
    "a Python Developer",
    "a Full Stack Developer",
    "a Data Engineer",
    "a Data Analyst",
    "a MERN Stack Developer",
    "a Data Science Enthusiast",
    "a Machine Learning Engineer"
  ];
  
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseDuration = 2000;

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedRole.length < currentRole.length) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length + 1));
          // Show prefix after first character is typed
          if (!showPrefix) setShowPrefix(true);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting - only delete the role, keep the prefix
        if (displayedRole.length > 0) {
          setDisplayedRole(currentRole.slice(0, displayedRole.length - 1));
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, currentRoleIndex, showPrefix]);

  return (
    <div className="flex items-center justify-center">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center">
        {showPrefix && <span className="text-black">{prefix}</span>}
        <span className="text-blue-500">{displayedRole}</span>
        <motion.span
          className="inline-block w-1 h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 bg-blue-500 ml-2"
          animate={{ opacity: [0, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </div>
  );
}
