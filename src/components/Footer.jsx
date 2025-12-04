import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from "react-icons/fa"

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="w-full bg-[#1f2937] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl text-primary font-bold">Shukur.</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Fresh graduate passionate about creating beautiful web experiences. Let's build something amazing together!
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/mahmud014" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <FaGithub className="text-xl" />
              </a>
              <a href="https://www.linkedin.com/in/shukurmahmud/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <FaLinkedin className="text-xl" />
              </a>
              <a href="https://x.com/MdShukurMahmud3" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <FaTwitter className="text-xl" />
              </a>
              <a href="mailto:anik955720@gmail.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition-all">
                <FaEnvelope className="text-xl" />
              </a>
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
            © 2024 Shukur. All rights reserved.
          </p>
          <p className="text-gray-300 text-sm flex items-center gap-2">
            Made with <FaHeart className="text-secondary" /> by Shukur
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
