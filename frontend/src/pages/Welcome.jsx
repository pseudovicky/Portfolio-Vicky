import React from "react";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-100">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-5xl md:text-6xl font-extrabold text-blue-700 mb-6 drop-shadow-lg"
      >
        Welcome!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
        className="text-xl md:text-2xl text-gray-700 text-center max-w-xl mb-8"
      >
        You are most welcome on my portfolio website.
      </motion.p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="rounded-full bg-blue-200 shadow-lg px-8 py-4 text-2xl font-semibold text-blue-800 border-2 border-blue-400"
      >
        🎉 Welcome Animation 🎉
      </motion.div>
    </div>
  );
}
