"use client";
import { ThreeDMarquee } from "./ui/3d-marquee.jsx";

export function ThreeDMarqueeDemo() {
  const technologies = [
    {
      name: "React",
      gradient: "linear-gradient(135deg, #61dafb, #21232a)",
      icon: "⚛️"
    },
    {
      name: "Node.js",
      gradient: "linear-gradient(135deg, #68a063, #3c873a)",
      icon: "🟢"
    },
    {
      name: "MongoDB",
      gradient: "linear-gradient(135deg, #4db33d, #3b7b3b)",
      icon: "🍃"
    },
    {
      name: "Express",
      gradient: "linear-gradient(135deg, #68a063, #000000)",
      icon: "🚀"
    },
    {
      name: "JavaScript",
      gradient: "linear-gradient(135deg, #f7df1e, #ffcc02)",
      icon: "🟨"
    },
    {
      name: "TypeScript",
      gradient: "linear-gradient(135deg, #007acc, #3178c6)",
      icon: "🔷"
    },
    {
      name: "Python",
      gradient: "linear-gradient(135deg, #306998, #ffd43b)",
      icon: "🐍"
    },
    {
      name: "PostgreSQL",
      gradient: "linear-gradient(135deg, #336791, #2d5aa0)",
      icon: "🐘"
    },
    {
      name: "Tailwind CSS",
      gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
      icon: "🎨"
    },
    {
      name: "Docker",
      gradient: "linear-gradient(135deg, #2496ed, #0db7ed)",
      icon: "🐳"
    },
    {
      name: "AWS",
      gradient: "linear-gradient(135deg, #ff9900, #232f3e)",
      icon: "☁️"
    },
    {
      name: "Git",
      gradient: "linear-gradient(135deg, #f05032, #de4c36)",
      icon: "📝"
    },
    {
      name: "Machine Learning",
      gradient: "linear-gradient(135deg, #ff6b6b, #4ecdc4)",
      icon: "🤖"
    },
    {
      name: "Data Science",
      gradient: "linear-gradient(135deg, #667eea, #764ba2)",
      icon: "📊"
    },
    {
      name: "REST APIs",
      gradient: "linear-gradient(135deg, #56ab2f, #a8e6cf)",
      icon: "🌐"
    },
    {
      name: "GraphQL",
      gradient: "linear-gradient(135deg, #e10098, #f700a8)",
      icon: "📡"
    },
    {
      name: "Redux",
      gradient: "linear-gradient(135deg, #764abc, #593d9c)",
      icon: "🔄"
    },
    {
      name: "Next.js",
      gradient: "linear-gradient(135deg, #000000, #333333)",
      icon: "▲"
    },
    {
      name: "Firebase",
      gradient: "linear-gradient(135deg, #ffca28, #ffa000)",
      icon: "🔥"
    },
    {
      name: "Kubernetes",
      gradient: "linear-gradient(135deg, #326ce5, #2142a3)",
      icon: "⚓"
    },
    {
      name: "CI/CD",
      gradient: "linear-gradient(135deg, #1976d2, #0d47a1)",
      icon: "🔧"
    },
    {
      name: "Microservices",
      gradient: "linear-gradient(135deg, #00acc1, #00838f)",
      icon: "🏗️"
    },
    {
      name: "Socket.io",
      gradient: "linear-gradient(135deg, #010101, #25c4a6)",
      icon: "⚡"
    },
    {
      name: "Redis",
      gradient: "linear-gradient(135deg, #d82c20, #a41e22)",
      icon: "💎"
    }
  ];

  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-6 ring-1 ring-neutral-700/10 dark:bg-neutral-800/50">
      <ThreeDMarquee 
        technologies={technologies}
        pauseOnHover={true}
        className="[--duration:60s]"
      />
    </div>
  );
}
