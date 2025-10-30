import React from 'react'
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript,
  SiTypescript, SiDocker, SiGit, SiTailwindcss, SiNextdotjs
} from 'react-icons/si'

const logos = [
  { id: 'react', icon: SiReact },
  { id: 'node', icon: SiNodedotjs },
  { id: 'mongo', icon: SiMongodb },
  { id: 'express', icon: SiExpress },
  { id: 'js', icon: SiJavascript },
  { id: 'ts', icon: SiTypescript },
  { id: 'docker', icon: SiDocker },
  { id: 'git', icon: SiGit },
  { id: 'tailwind', icon: SiTailwindcss },
  { id: 'next', icon: SiNextdotjs }
]

const LogoMarquee = () => {
  return (
    <section className="w-full">
      <div className="relative max-w-6xl mx-auto px-2 lg:px-4">
        <div className="overflow-hidden rounded-3xl" aria-hidden="false">
          <div className="py-6 px-2 rounded-2xl">
            {/* inject keyframes and pause-on-hover styles */}
            <style>{`
              .marquee-track { display: flex; gap: 0.75rem; align-items: center; }
              /* faster, smoother continuous scroll */
              .marquee { will-change: transform; animation: marquee-left 12s linear infinite; }
              .marquee:hover { animation-play-state: paused; }
              @keyframes marquee-left {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
              }
              @media (prefers-reduced-motion: reduce) {
                .marquee { animation: none; }
              }
            `}</style>

            <div className="relative">
              <div className="marquee marquee-track">
                {/* first set */}
                {logos.concat(logos).map((logo, i) => {
                  const Icon = logo.icon
                  return (
                    <div key={`logo-${i}`} className="flex-shrink-0">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-white rounded-lg flex items-center justify-center border border-gray-200 shadow-sm">
                        <Icon className="text-black" style={{ width: '56%', height: '56%' }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoMarquee
