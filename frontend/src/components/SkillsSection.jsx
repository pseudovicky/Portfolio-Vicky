import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, 
  SiPython, SiTailwindcss, SiPostgresql, SiDocker, SiGit,
  SiTypescript, SiRedux, SiNextdotjs, SiVercel, SiAmazon,
  SiFigma, SiGraphql, SiFirebase, SiTensorflow, SiPandas
} from 'react-icons/si'
import LogoMarquee from './LogoMarquee.jsx'

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0.1, 1])
  const color = useTransform(
    progress,
    range,
    ['rgba(209, 213, 219, 1)', 'rgba(0, 0, 0, 1)']
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

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-black group-hover:shadow-xl">
        {/* Icon Container */}
        <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gray-50 rounded-xl transition-all duration-300 group-hover:bg-black group-hover:scale-110">
          <skill.icon className="text-3xl text-gray-700 transition-colors duration-300 group-hover:text-white" />
        </div>
        
        {/* Skill Name */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-black">
          {skill.name}
        </h3>
        
        {/* Category */}
        <p className="text-sm text-gray-500 mb-3">
          {skill.category}
        </p>
        
        {/* Proficiency Bar */}
        <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-gray-900 to-black rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency}%` }}
            transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
        
        {/* Proficiency Percentage */}
        <motion.div 
          className="text-xs text-gray-400 mt-2 text-right font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.05 + 0.5 }}
          viewport={{ once: true }}
        >
          {skill.proficiency}%
        </motion.div>

        {/* Hover Border Glow Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-10"></div>
        </div>
      </div>
    </motion.div>
  )
}

const SkillsSection = () => {
  const headingRef = useRef(null)
  const descriptionRef = useRef(null)
  
  const { scrollYProgress: headingProgress } = useScroll({
    target: headingRef,
    offset: ['start 0.95', 'end 0.7']
  })

  const { scrollYProgress: descriptionProgress } = useScroll({
    target: descriptionRef,
    offset: ['start 0.95', 'end 0.7']
  })

  const headingText = "Skills & Technologies"
  const descriptionText = "I work with modern technologies to build scalable and efficient applications"
  
  const headingWords = headingText.split(' ')
  const descriptionWords = descriptionText.split(' ')

  const skills = [
    { name: 'React', icon: SiReact, category: 'Frontend', proficiency: 95 },
    { name: 'Node.js', icon: SiNodedotjs, category: 'Backend', proficiency: 90 },
    { name: 'TypeScript', icon: SiTypescript, category: 'Language', proficiency: 88 },
    { name: 'MongoDB', icon: SiMongodb, category: 'Database', proficiency: 85 },
    { name: 'Next.js', icon: SiNextdotjs, category: 'Framework', proficiency: 92 },
    { name: 'Express', icon: SiExpress, category: 'Backend', proficiency: 90 },
    { name: 'JavaScript', icon: SiJavascript, category: 'Language', proficiency: 95 },
    { name: 'Python', icon: SiPython, category: 'Language', proficiency: 87 },
    { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Styling', proficiency: 93 },
    { name: 'PostgreSQL', icon: SiPostgresql, category: 'Database', proficiency: 82 },
    { name: 'Docker', icon: SiDocker, category: 'DevOps', proficiency: 80 },
    { name: 'Git', icon: SiGit, category: 'Version Control', proficiency: 90 },
    { name: 'Redux', icon: SiRedux, category: 'State Management', proficiency: 88 },
    { name: 'GraphQL', icon: SiGraphql, category: 'API', proficiency: 83 },
    { name: 'Firebase', icon: SiFirebase, category: 'Backend', proficiency: 85 },
    { name: 'AWS', icon: SiAmazon, category: 'Cloud', proficiency: 78 },
    { name: 'TensorFlow', icon: SiTensorflow, category: 'ML/AI', proficiency: 75 },
    { name: 'Pandas', icon: SiPandas, category: 'Data Science', proficiency: 80 },
    { name: 'Figma', icon: SiFigma, category: 'Design', proficiency: 86 },
    { name: 'Vercel', icon: SiVercel, category: 'Deployment', proficiency: 90 }
  ]

  return (
    <section className="relative min-h-screen py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-gray-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-black rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading with Scroll Reveal */}
        <div className="mb-20 text-center">
          <h2 
            ref={headingRef}
            className="relative flex w-full flex-wrap justify-center leading-tight text-center mb-6"
            style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '600',
              lineHeight: '1.2'
            }}
          >
            {headingWords.map((word, index) => {
              const start = index / headingWords.length
              const end = start + 1 / headingWords.length
              
              return (
                <Word 
                  key={index} 
                  progress={headingProgress}
                  range={[start, end]}
                >
                  {word}
                </Word>
              )
            })}
          </h2>

          <p 
            ref={descriptionRef}
            className="relative flex w-full flex-wrap justify-center leading-relaxed text-center max-w-3xl mx-auto"
            style={{ 
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              lineHeight: '1.6'
            }}
          >
            {descriptionWords.map((word, index) => {
              const start = index / descriptionWords.length
              const end = start + 1 / descriptionWords.length
              
              return (
                <Word 
                  key={index} 
                  progress={descriptionProgress}
                  range={[start, end]}
                >
                  {word}
                </Word>
              )
            })}
          </p>
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        />

        {/* 3D Marquee Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <motion.h3 
              className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Technologies in Motion
            </motion.h3>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Interactive showcase of tools and frameworks I leverage
            </motion.p>
          </div>
          
          <LogoMarquee />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link to="/project">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-900 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
