"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TypewriterEffectSmoothDemo() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = [
    { text: "I'm", color: "text-black" },
    { text: "Vicky", color: "text-blue-500" },
    { text: "Kumar", color: "text-blue-500" }
  ];
  
  const typeSpeed = 100;
  const deleteSpeed = 50;
  const pauseDuration = 3000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = words.map(word => word.text).join(' ');
      
      if (!isDeleting) {
        // Typing
        if (displayedText.length < fullText.length) {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(fullText.slice(0, displayedText.length - 1));
        } else {
          // Finished deleting, start typing again
          setIsDeleting(false);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting]);

  const renderColoredText = () => {
    const fullText = words.map(word => word.text).join(' ');
    let charIndex = 0;
    
    return words.map((word, wordIndex) => {
      const wordStart = charIndex;
      const wordEnd = charIndex + word.text.length;
      const visiblePart = displayedText.slice(wordStart, wordEnd + 1); // +1 for space
      charIndex += word.text.length + 1; // +1 for space
      
      return (
        <span key={wordIndex} className={word.color}>
          {visiblePart}
        </span>
      );
    });
  };

  return (
    <div className="flex items-center justify-center mb-8">
      <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
        {renderColoredText()}
        <motion.span
          className="inline-block w-1 h-8 sm:h-12 md:h-16 lg:h-20 xl:h-24 bg-black ml-2"
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
