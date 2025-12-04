import { motion } from 'framer-motion'

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <main className="w-full max-w-7xl mx-auto md:h-[600px] flex items-center pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Side - Text Content */}
        <motion.div
          className="text-center lg:text-left space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
        >
          {/* Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
            }}
            className="inline-flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-primary/20 px-4 py-2 rounded-full"
          >
            <motion.span
              className="w-2 h-2 bg-primary rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <span>Available for opportunities</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            Hi, I'm <span className="text-gradient">Shukur</span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">Aspiring Full-Stack Developer</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0"
          >
            Fresh graduate passionate about creating beautiful web experiences. Skilled in React, Node.js, and modern web technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4"
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-[#0d2426] font-semibold px-8 py-3 rounded-full shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(174, 255, 114, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Get In Touch
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="bg-transparent text-secondary font-semibold px-8 py-3 rounded-full shadow-lg border-2 border-secondary"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: 'rgba(174, 255, 114, 0.1)',
                boxShadow: '0 10px 30px rgba(174, 255, 114, 0.2)' 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              View Work
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div 
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-accent/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="relative">
            <motion.div
              className="w-80 h-80 rounded-full shadow-2xl border-8 border-white dark:border-gray-800 overflow-hidden"
              initial={{ scale: 0, rotate: -180, y: 0 }}
              animate={{ 
                scale: 1, 
                rotate: 0,
                y: [-10, 10, -10],
              }}
              transition={{ 
                scale: { duration: 1.2, delay: 0.5, type: "spring", stiffness: 100 },
                rotate: { duration: 1.2, delay: 0.5 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.7
                }
              }}
              whileHover={{
                scale: 1.05,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 },
              }}
            >
              <img
                alt="Shukur - Aspiring Full-Stack Developer"
                className="w-full h-full object-cover"
                src="https://i.postimg.cc/L4gsjZTL/photo.png"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4 cursor-pointer"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Status</p>
                  <motion.p
                    className="text-sm font-bold text-gray-900 dark:text-white"
                    animate={{ opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Ready to Work
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default Hero
