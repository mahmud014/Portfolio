'use client'

import { useState, useEffect } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [activeSection, setActiveSection] = useState<string>('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
      setIsMobileMenuOpen(false) // Close mobile menu after clicking
    }
  }

  useEffect(() => {
    const handleScroll = (): void => {
      const sections: string[] = ['home', 'about', 'skills', 'projects', 'contact']
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

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="w-full max-w-7xl mx-auto px-4 py-6 sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">Shukur.</span>
        </div>
        <div className="hidden lg:flex items-center space-x-6 text-gray-600 dark:text-gray-300">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium px-4 py-2 rounded-full transition-all ${
                activeSection === item.id
                  ? 'bg-secondary text-primary'
                  : 'hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a href="/Shukur_Mahmud_CV.pdf" download 
          className="hidden md:block bg-secondary text-primary font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all" 
          rel="noopener noreferrer">
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
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * (index + 1) }}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-medium px-4 py-2 rounded-lg transition-all text-left ${
                    activeSection === item.id
                      ? 'bg-secondary text-primary'
                      : 'text-white hover:bg-secondary/20'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-2 border-t border-white/20"
              >
                <a
                  className="block text-center bg-secondary text-primary font-semibold px-4 py-2 rounded-lg"
                  href="/Shukur_Mahmud_CV.pdf" download
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