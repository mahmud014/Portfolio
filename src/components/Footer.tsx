'use client'

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa"
import { motion } from "framer-motion"
import { IconType } from "react-icons"

interface SocialLink {
  icon: IconType
  href: string
  label: string
}

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const socialLinks: SocialLink[] = [
    { icon: FaGithub, href: "https://github.com/mahmud014", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/shukurmahmud/", label: "LinkedIn" },
    { icon: FaTwitter, href: "https://x.com/MdShukurMahmud3", label: "Twitter" },
    { icon: FaEnvelope, href: "mailto:anik955720@gmail.com", label: "Email" }
  ]

  return (
    <footer className="w-full bg-[#1f2937] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl text-secondary font-bold">Shukur.</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Fresh graduate passionate about creating beautiful web experiences. Let&apos;s build something amazing together!
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all"
                  >
                    <social.icon className="text-xl" />
                  </a>
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-secondary text-primary px-3 py-1 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    {social.label}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary rotate-45"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-secondary transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-secondary transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-secondary transition-colors">
                  Skills
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-secondary transition-colors">
                  Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Tangail Sadar, Tangail</li>
              <li>anik955720@gmail.com</li>
              <li>+880 1799-649027</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            Copyright © {new Date().getFullYear()} Shukur. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm flex items-center gap-2">
            Made with <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaHeart className="text-secondary" />
            </motion.span> by Shukur
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer