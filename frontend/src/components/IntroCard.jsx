import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const IntroCard = () => {
  return (
    <section className="flex items-center pb-12 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 xl:px-20 w-full">
        {/* Card Container */}
        <motion.div
          className="relative rounded-b-[40px] overflow-hidden shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #93c5fd 0%, #bfdbfe 25%, #fef3c7 50%, #fdba74 75%, #fb923c 100%)',
            minHeight: '400px'
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16">
            {/* Left Content */}
            <motion.div
              className="text-left space-y-6 lg:pr-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Vicky is a <span className="font-bold text-gray-900">Computer Science Master's student</span> at 
                <span className="font-bold text-gray-900"> Lovely Professional University</span>, specializing in 
                <span className="font-bold text-gray-900"> Artificial Intelligence and Machine Learning</span>. 
                With a passion for transforming data into actionable insights, he bridges the gap between 
                cutting-edge technology and real-world solutions.
              </p>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                From building scalable web applications to developing intelligent ML models, 
                every project is a step towards innovation and excellence.
              </p>

              <Link to="/project">
                <motion.button
                  className="mt-6 px-8 py-4 bg-gray-900 text-white rounded-full text-base md:text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore My Work
                </motion.button>
              </Link>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative w-full max-w-xs">
                {/* Main Image */}
                <motion.img
                  src="/IMG-20250405-WA0026.jpg"
                  alt="Vicky Kumar"
                  className="w-full h-auto rounded-2xl shadow-xl object-cover"
                  style={{ aspectRatio: '3/4' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-orange-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </motion.div>
          </div>

          {/* Gradient Overlay for depth */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/5 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IntroCard
