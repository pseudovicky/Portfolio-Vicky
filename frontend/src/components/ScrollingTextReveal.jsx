import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.1, 1])
  const color = useTransform(
    progress,
    range,
    ['rgba(209, 213, 219, 1)', 'rgba(0, 0, 0, 1)'] // light gray to pure black
  )
  
  return (
    <motion.span 
      style={{ opacity, color }} 
      className="relative inline-block mr-1.5 mt-2"
    >
      {children}
    </motion.span>
  )
}

const ScrollingTextReveal = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.95', 'end 0.7']
  })

  const text = "On the way of learning, I connect the dots — discovering hidden threads between ideas that seem worlds apart. Every connection unfolds a new perspective, every detail reveals another path. In exploring how things intertwine, learning becomes not just knowledge, but a journey of wonder — where curiosity turns ordinary moments into discoveries."
  
  const words = text.split(' ')

  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <p 
          ref={targetRef}
          className="relative flex w-full flex-wrap justify-center leading-snug text-center text-gray-300"
          style={{ 
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            lineHeight: '1.6'
          }}
        >
          {words.map((word, index) => {
            const start = index / words.length
            const end = start + 1 / words.length
            
            return (
              <Word 
                key={index} 
                progress={scrollYProgress}
                range={[start, end]}
              >
                {word}
              </Word>
            )
          })}
        </p>
      </div>
    </section>
  )
}

export default ScrollingTextReveal
