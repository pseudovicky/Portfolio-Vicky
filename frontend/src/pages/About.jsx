import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container-max-width section-padding">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              About Me
            </h1>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Passionate full-stack developer with a love for creating innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="container-max-width section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-96 bg-secondary-200 rounded-lg"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-secondary-900">
                Hello! I'm Vicky Kumar
              </h2>
              <p className="text-lg text-secondary-600 leading-relaxed">
                I'm a passionate full-stack developer with over 3 years of experience in building web applications. 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                My journey started with curiosity about how websites work, and it has evolved into a career 
                where I get to create digital experiences that make people's lives easier and more enjoyable.
              </p>
              <p className="text-lg text-secondary-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or enjoying a good cup of coffee while reading about the latest trends in web development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-secondary-50">
        <div className="container-max-width section-padding">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Experience & Education
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="space-y-8">
              {[
                {
                  title: 'Senior Full-Stack Developer',
                  company: 'Tech Company',
                  period: '2022 - Present',
                  description: 'Leading development of web applications using React, Node.js, and MongoDB.',
                },
                {
                  title: 'Full-Stack Developer',
                  company: 'Startup Inc.',
                  period: '2020 - 2022',
                  description: 'Developed and maintained multiple client projects using modern web technologies.',
                },
                {
                  title: 'Bachelor of Computer Science',
                  company: 'University Name',
                  period: '2016 - 2020',
                  description: 'Graduated with honors, focused on software engineering and web development.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="card p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-secondary-900">{item.title}</h3>
                      <p className="text-primary-600 font-medium">{item.company}</p>
                    </div>
                    <span className="text-secondary-500 text-sm md:text-base">{item.period}</span>
                  </div>
                  <p className="text-secondary-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container-max-width section-padding">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              What I Believe In
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Clean Code',
                description: 'Writing maintainable, readable code that stands the test of time.',
              },
              {
                title: 'User Experience',
                description: 'Creating intuitive interfaces that users love to interact with.',
              },
              {
                title: 'Continuous Learning',
                description: 'Staying updated with the latest technologies and best practices.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">{value.title}</h3>
                <p className="text-secondary-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
