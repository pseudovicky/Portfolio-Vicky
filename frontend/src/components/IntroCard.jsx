import { motion } from 'framer-motion'

const IntroCard = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Take a closer look.
          </h2>
        </motion.div>

        {/* Card Container */}
        <motion.div
          className="relative rounded-[40px] overflow-hidden shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, #e5e7eb 0%, #f3e6d8 50%, #f4a261 100%)',
            minHeight: '500px'
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
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                A Journey Through
                <br />
                Innovation, Code,
                <br />
                and Creativity
              </h3>
              
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Exploring the intersection of technology and design, building solutions that make a difference.
              </p>

              <motion.button
                className="mt-6 px-8 py-4 bg-gray-900 text-white rounded-full text-base md:text-lg font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.button>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative w-full max-w-md">
                {/* Main Image */}
                <motion.img
                  src="/IMG-20250405-WA0026.jpg"
                  alt="Vicky Kumar"
                  className="w-full h-auto rounded-3xl shadow-2xl object-cover"
                  style={{ aspectRatio: '3/4' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
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
