import { FaEnvelope, FaPhone, FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image */}
        <motion.div 
          className="relative flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Decorative circles */}
          <motion.div 
            className="absolute top-10 left-10 w-32 h-32 border-2 border-primary/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute bottom-10 right-10 w-24 h-24 border-2 border-primary/30 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-1/2 left-0 w-3 h-3 bg-secondary rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Main Image Circle */}
          <motion.div 
            className="relative z-10"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="w-80 h-80 rounded-full border-8 border-primary overflow-hidden shadow-2xl"
              animate={{
                borderColor: ["#0D2426", "#AEFF72", "#0D2426"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img 
                src="https://i.postimg.cc/L4gsjZTL/photo.png" 
                alt="Shukur" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.span 
              className="w-2 h-2 bg-secondary rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">About Me</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Who is <span className="text-secondary">Shukur</span>?
          </motion.h2>

          <motion.p 
            className="text-xl font-semibold text-gray-800 dark:text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            "Helping businesses grow with creative web design and development solutions."
          </motion.p>

          <motion.p 
            className="text-gray-600 dark:text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Hi, I'm Shukur, a passionate Full-Stack Developer who thrives on turning ideas into visually stunning realities. With a love for creativity and a meticulous eye for detail.
          </motion.p>

          <motion.div 
            className="space-y-4 pt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.div 
              className="flex items-center gap-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaEnvelope className="text-secondary text-xl" />
              </motion.div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email Us At</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">anik955720@gmail.com</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-center gap-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <FaPhone className="text-secondary text-xl" />
              </motion.div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Phone Number</p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">+880 1799-649027</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex items-center gap-8 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <motion.p 
                className="text-5xl font-bold text-secondary"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
              >
                0+
              </motion.p>
              <p className="text-gray-600 dark:text-gray-400 font-medium mt-2">Years Experience</p>
            </motion.div>

            <motion.a 
              className="flex cursor-pointer items-center gap-2 bg-secondary text-primary font-semibold px-6 py-3 rounded-full shadow-lg" 
              href="https://drive.google.com/file/d/14caD1rlRM_QEF0NfG7xy_kat3-C9Eczm/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(174, 255, 114, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              My Resume
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
