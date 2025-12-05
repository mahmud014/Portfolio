import { useState, useEffect } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'

function Header() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
      setIsMobileMenuOpen(false) // Close mobile menu after clicking
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="w-full max-w-7xl mx-auto px-4 py-6 sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">Shukur.</span>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-gray-600 dark:text-gray-300">
          <button 
            onClick={() => scrollToSection('home')} 
            className={`font-medium px-4 py-2 rounded-full transition-all ${
              activeSection === 'home' 
                ? 'bg-secondary text-primary' 
                : 'hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className={`font-medium px-4 py-2 rounded-full transition-all ${
              activeSection === 'about' 
                ? 'bg-secondary text-primary' 
                : 'hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className={`font-medium px-4 py-2 rounded-full transition-all ${
              activeSection === 'skills' 
                ? 'bg-secondary text-primary' 
                : 'hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className={`font-medium px-4 py-2 rounded-full transition-all ${
              activeSection === 'projects' 
                ? 'bg-secondary text-primary' 
                : 'hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className={`font-medium px-4 py-2 rounded-full transition-all ${
              activeSection === 'contact' 
                ? 'bg-secondary text-primary' 
                : 'hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Contact
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <a className="hidden md:block bg-secondary text-primary font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all" href="https://drive.google.com/file/d/14caD1rlRM_QEF0NfG7xy_kat3-C9Eczm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
          <button 
            className="lg:hidden p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <MdClose className="text-3xl text-gray-900 dark:text-white" />
            ) : (
              <MdMenu className="text-3xl text-gray-900 dark:text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Compact Version */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 bg-primary/95 backdrop-blur-lg rounded-2xl shadow-2xl z-40 lg:hidden p-4"
          >
            <div className="flex flex-col space-y-2">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
                onClick={() => scrollToSection('home')}
                className={`text-base font-medium px-4 py-2 rounded-lg transition-all text-left ${
                  activeSection === 'home'
                    ? 'bg-secondary text-primary'
                    : 'text-white hover:bg-secondary/20'
                }`}
              >
                Home
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => scrollToSection('about')}
                className={`text-base font-medium px-4 py-2 rounded-lg transition-all text-left ${
                  activeSection === 'about'
                    ? 'bg-secondary text-primary'
                    : 'text-white hover:bg-secondary/20'
                }`}
              >
                About
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                onClick={() => scrollToSection('skills')}
                className={`text-base font-medium px-4 py-2 rounded-lg transition-all text-left ${
                  activeSection === 'skills'
                    ? 'bg-secondary text-primary'
                    : 'text-white hover:bg-secondary/20'
                }`}
              >
                Skills
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => scrollToSection('projects')}
                className={`text-base font-medium px-4 py-2 rounded-lg transition-all text-left ${
                  activeSection === 'projects'
                    ? 'bg-secondary text-primary'
                    : 'text-white hover:bg-secondary/20'
                }`}
              >
                Projects
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                onClick={() => scrollToSection('contact')}
                className={`text-base font-medium px-4 py-2 rounded-lg transition-all text-left ${
                  activeSection === 'contact'
                    ? 'bg-secondary text-primary'
                    : 'text-white hover:bg-secondary/20'
                }`}
              >
                Contact
              </motion.button>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-2 border-t border-white/20"
              >
                <a
                  className="block text-center bg-secondary text-primary font-semibold px-4 py-2 rounded-lg"
                  href="https://drive.google.com/file/d/14caD1rlRM_QEF0NfG7xy_kat3-C9Eczm/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Download CV
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
