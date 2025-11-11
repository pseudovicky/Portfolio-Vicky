import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedPhilosophyText = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Text content with emphasis markers
  const text = "On the way of learning, I connect the dots — discovering hidden threads between ideas that seem worlds apart. Every connection unfolds a new perspective, every detail reveals another path. In exploring how things intertwine, learning becomes not just knowledge, but a journey of wonder — where curiosity turns ordinary moments into discoveries.";
  
  const words = text.split(' ');

  // Define which words should be emphasized (larger)
  const emphasizedWords = ['connect', 'dots', 'discovering', 'hidden', 'connection', 'perspective', 'intertwine', 'journey', 'wonder', 'curiosity', 'discoveries'];

  const isEmphasized = (word) => {
    const cleanWord = word.toLowerCase().replace(/[.,—]/g, '');
    return emphasizedWords.includes(cleanWord);
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)',
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 leading-relaxed">
          {words.map((word, index) => {
            const progress = index / words.length;
            const wordProgress = useTransform(
              scrollYProgress,
              [progress - 0.1, progress, progress + 0.1],
              [0, 1, 1]
            );

            return (
              <Word
                key={index}
                word={word}
                progress={wordProgress}
                index={index}
                isEmphasized={isEmphasized(word)}
              />
            );
          })}
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

const Word = ({ word, progress, index, isEmphasized }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    const unsubscribe = progress.on('change', (latest) => {
      if (latest > 0.5 && !hasAnimated) {
        setHasAnimated(true);
      }
    });
    return () => unsubscribe();
  }, [progress, hasAnimated]);

  const cleanWord = word.replace(/[.,—]/g, '');
  const punctuation = word.match(/[.,—]/g)?.[0] || '';

  // Dynamic font sizes based on emphasis
  const baseSizeClass = isEmphasized 
    ? 'text-4xl md:text-5xl lg:text-6xl font-bold' 
    : 'text-2xl md:text-3xl lg:text-4xl font-normal';

  return (
    <motion.div
      className="inline-block relative"
      initial={{ opacity: 0, x: -50, rotateX: 90 }}
      animate={hasAnimated ? {
        opacity: 1,
        x: 0,
        rotateX: 0,
      } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.05,
        ease: [0.215, 0.610, 0.355, 1.000],
      }}
    >
      <motion.span
        className={`${baseSizeClass} inline-block transition-all duration-300`}
        style={{
          color: isEmphasized ? '#000' : '#333',
          textShadow: isEmphasized ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        }}
        whileHover={{
          scale: isEmphasized ? 1.15 : 1.05,
          color: isEmphasized ? '#4285F4' : '#666',
          transition: { duration: 0.2 }
        }}
      >
        {cleanWord.split('').map((char, charIndex) => (
          <motion.span
            key={charIndex}
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? {
              opacity: 1,
              y: 0,
            } : {}}
            transition={{
              duration: 0.3,
              delay: (index * 0.05) + (charIndex * 0.02),
            }}
            whileHover={{
              y: -5,
              transition: { duration: 0.1 }
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.span>
      {punctuation && (
        <motion.span
          className={`${baseSizeClass} inline-block ml-0.5`}
          initial={{ opacity: 0, scale: 0 }}
          animate={hasAnimated ? {
            opacity: 1,
            scale: 1,
          } : {}}
          transition={{
            duration: 0.3,
            delay: (index * 0.05) + 0.2,
          }}
        >
          {punctuation}
        </motion.span>
      )}
    </motion.div>
  );
};

export default AnimatedPhilosophyText;
