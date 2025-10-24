import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { useRef } from 'react'

const Work = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const projects = [
    {
      id: 1,
      title: "E-commerce website",
      description: "An e-commerce platform with a responsive design and an optimized user journey.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1400&h=900&fit=crop",
      link: "#"
    },
    {
      id: 2,
      title: "Tender Website Platform",
      description: "A secure and transparent online platform for managing procurement tenders, featuring a responsive design for both buyers and suppliers.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1400&h=900&fit=crop",
      link: "#"
    },
    {
      id: 3,
      title: "Healthy Food, Happy You 🥗",
      description: "A food ordering website delivering a seamless culinary experience with a user-friendly interface and efficient delivery system.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1400&h=900&fit=crop",
      link: "#"
    },
    {
      id: 4,
      title: "Real Estate Portal",
      description: "A comprehensive property listing platform with advanced search filters and virtual property tours.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&h=900&fit=crop",
      link: "#"
    },
    {
      id: 5,
      title: "Healthcare Management System",
      description: "Digital solution for hospitals to manage appointments and patient records efficiently.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1400&h=900&fit=crop",
      link: "#"
    },
    {
      id: 6,
      title: "Educational Learning Platform",
      description: "Interactive e-learning platform with live classes and progress tracking features.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1400&h=900&fit=crop",
      link: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-white" ref={containerRef}>
      {/* Header Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Work Projects
          </motion.h1>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                {/* Image Section */}
                <motion.div
                  className="w-full lg:w-1/2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Black overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                  </div>
                </motion.div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {/* Latest Project Label */}
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                      Latest Project: {project.title}
                    </p>

                    {/* Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                      {project.title}
                    </h2>

                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* View Project Link */}
                    <motion.a
                      href={project.link}
                      className="inline-flex items-center gap-3 text-black font-semibold text-lg group/link"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="border-b-2 border-black pb-1">View Project</span>
                      <FiArrowRight className="w-6 h-6 transition-transform group-hover/link:translate-x-2" />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Bottom Spacing */}
      <div className="h-20" />
    </div>
  )
}

export default Work
