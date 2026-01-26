import Header from '../src/components/Header'
import Hero from '../src/components/Hero'
import SkillsMarquee from '../src/components/SkillsMarquee'
import Skills from '../src/components/Skills'
import About from '../src/components/About'
import Projects from '../src/components/Projects'
import Contact from '../src/components/Contact'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
      <div className="min-h-screen flex flex-col">
        <div className="px-4 sm:px-6 lg:px-8 sticky top-0 z-50">
          <Header />
        </div>
        <div id="home" className="px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>
        <SkillsMarquee />
        
        <div className="px-4 sm:px-6 lg:px-8">
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}